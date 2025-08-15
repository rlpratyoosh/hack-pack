import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "./lib/prisma-db";
import bcrypt from "bcrypt";
import { signInSchema } from "./lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "you@example.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "••••••••",
                },
            },
            authorize: async credentials => {
                const { email, password } = await signInSchema.parseAsync(credentials);

                const user = await db.user.findUnique( {email} );

                if (!user) {
                    throw new Error("User not found");
                }

                const isValid = await bcrypt.compare(password, user.password);

                if (!isValid) {
                    return Promise.reject(new Error("Email not verified"));
                }

                if (!user.isVerified) {
                    throw new Error("Please verify your email");
                }

                return { id: user.id, email: user.email, name: user.userName };
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token?.id) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
});
