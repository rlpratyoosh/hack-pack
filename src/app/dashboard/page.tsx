'use client';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
    const supabase = createClientComponentClient();
    const {user, loading, signOut} = useAuth();

    if(user) {
        return (
            <div>
                <h1>Welcome to your Dashboard, {user.email}</h1>
                <button onClick={signOut}>Sign Out</button>
            </div>
        );
    }
    if(loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Unauthorized</h1>
        </div>
    );
}