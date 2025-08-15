'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export function useAuth(redirectTo?: string) {
  const router = useRouter()
  // const [user, setUser] = useState<any>(null)
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   supabase.auth.getUser().then(({ data }) => {
  //     setUser(data.user)
  //     setLoading(false)
  //     if (!data.user && redirectTo) router.push(redirectTo)
  //   })

  //   const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setUser(session?.user ?? null)
  //     if (!session?.user && redirectTo) router.push(redirectTo)
  //   })

  //   return () => subscription.subscription.unsubscribe()
  // }, [redirectTo, router])

  // const signOut = async () => {
  //   await supabase.auth.signOut()
  //   setUser(null)
  //   router.push('/login')
  // }

  const user = {id: "23",  email: "test@gmail.com"}
  const loading = false;
  const signOut = () => {}

  return { user, loading, signOut }
}
