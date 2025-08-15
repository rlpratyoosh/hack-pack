"use client";
import { verifyEmail } from "@/lib/action";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function VerifyContent() {
    const params = useSearchParams();
    const token = params.get("token");
    const [status, setStatus] = useState("Verifying...");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (token) {
            try {
                verifyEmail(token);
                setStatus("Process complete");
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            }
        }
    }, [token]);

    return (
        <div>
            {status} <br /> {error && <div>{error}</div>}
        </div>
    );
}

export default function VerifyPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VerifyContent />
        </Suspense>
    );
}
