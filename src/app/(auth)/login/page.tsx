"use client";
import { signInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signInUser } from "@/lib/action";

type FormData = z.infer<typeof signInSchema>;

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(signInSchema),
    });

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        setError(null);

        const result = await signInUser(data);

        if (result?.error) {
            setError(result.error);
            setLoading(false);
        } else {
            setLoggedIn(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-md">
                {!loggedIn ? (<>
                    <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded bg-gray-700 focus:outline-none"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded bg-gray-700 focus:outline-none"
                        {...register("password")}
                    />
                    {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Don&apos;t have an account?
                    <a href="/signup" className="text-blue-400 hover:underline">
                        Sign up
                    </a>
                </p>
                </>) : (<p className="text-center">Logged in, <a href="/dashboard" className="text-blue-400 hover:underline">go to dashboard</a></p>)}
            </div>
        </div>
    );
}
