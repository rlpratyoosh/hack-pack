"use server";
import { signIn } from "@/auth";
import bcrypt from "bcrypt";
import { AuthError } from "next-auth";
import { db } from "./prisma-db";
import { createUserSchema, signInSchema } from "./zod";
import crypto from "crypto";
import { sendEmail } from "./email";

export async function signInUser(data: { email: string; password: string }) {
    const validation = signInSchema.safeParse(data);
    if (!validation.success) {
        return {
            error: validation.error.issues[0]?.message || "Invalid input",
        };
    }

    try {
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        return { success: true };
    } catch (error) {
        if (error instanceof AuthError) {
            return { error: error.cause?.err?.message || "Invalid Credentials" };
        }

        if (error instanceof Error) {
            return { error: error.message };
        }

        return { error: "Something went wrong" };
    }
}

export async function signUp(data: { userName: string; email: string; password: string }) {
    const validation = createUserSchema.safeParse(data);
    if (!validation.success) {
        throw new Error("Invalid user data");
    }

    const { userName, email, password } = validation.data;

    const existingUsername = await db.user.findUnique({ userName });
    if (existingUsername) {
        throw new Error("Username already exists");
    }

    const existingUser = await db.user.findUnique({ email });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
        userName,
        email,
        password: hashedPassword,
    });

    const token = crypto.randomBytes(32).toString("hex");

    await db.verificationToken.create({
        token,
        expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
        userId: user.id,
    });

    await sendEmail(
        user.email,
        "Verify your email",
        `<p>Hi ${user.userName},</p>
        <p>Thanks for signing up! Please verify your email by clicking the link below:</p>
        <p><a href="${process.env.NEXTAUTH_URL}/verify?token=${token}">Verify Email</a></p>`
    );
}

export async function verifyEmail(token: string) {
    const tokenRecord = await db.verificationToken.findUnique({ token });
    if (!tokenRecord) throw new Error("Invalid Token");

    try {
        await db.user.update(
            {
                id: tokenRecord.userId,
            },
            {
                isVerified: true,
            }
        );
    } catch (error) {
        if(error instanceof Error) {
            throw new Error("Email not found");
        }
    } finally {
        await db.verificationToken.delete({ id: tokenRecord.id });
    }
}
