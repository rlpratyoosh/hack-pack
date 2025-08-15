'use client';
import { useSession, signOut } from 'next-auth/react';

export function useAuth() {
  const { data: session, status } = useSession();

  const loading = status === 'loading';
  const user = session?.user || null;

  const signUserOut = () => signOut({ callbackUrl: '/login' });

  return { user, loading, signUserOut };
}
