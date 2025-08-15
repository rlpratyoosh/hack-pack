'use client';
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
    // const {user, loading, signOut} = useAuth();

    const user = {id: "23",  email: "test@gmail.com"}
    const loading = false;

    if(user) {
        return (
            <div>
                <h1>Welcome to your Dashboard, {user.email}</h1>
                <button>Sign Out</button>
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