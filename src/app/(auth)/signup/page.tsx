"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // const supabase = createClientComponentClient();

  // const onSubmit = async (data: FormData) => {
  //   setLoading(true);
  //   setError(null);

  //   const { error } = await supabase.auth.signUp({
  //     email: data.email,
  //     password: data.password,
  //     options: {
  //       data: {full_name: data.fullName}
  //     }
  //   });

  //   if (error) {
  //     setError(error.message);
  //     setLoading(false);
  //     return;
  //   } else {
  //     setLoading(false);
  //     router.push("/login");
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded bg-gray-700 focus:outline-none"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-red-400 text-sm">{errors.fullName.message}</p>
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-700 focus:outline-none"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email.message}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-700 focus:outline-none"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-400 text-sm">{errors.password.message}</p>
          )}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded bg-gray-700 focus:outline-none"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm">{errors.confirmPassword.message}</p>
          )}
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 p-3 rounded font-semibold"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
