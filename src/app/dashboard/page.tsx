'use client';
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
    const {user, loading, signUserOut} = useAuth();


    if(user) {
        return (
            <div>
                <h1>Welcome to your Dashboard, {user.name}</h1>
                <p>Email: {user.email}</p>
                <button onClick={signUserOut} className="px-1 py-2 border-2 rounded-xl bg-card">Sign Out</button>
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