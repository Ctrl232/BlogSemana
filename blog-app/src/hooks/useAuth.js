import { useEffect } from 'react'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, googleProvider } from '../lib/firebase'
import { useAuthStore } from '../store/authStore'

export function useAuth() {
  const { user, setUser, logout } = useAuthStore()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          name: firebaseUser.displayName,
          email: firebaseUser.email,
          photo: firebaseUser.photoURL,
        })
      } else {
        logout()
      }
    })
    return () => unsub()
  }, [])

  const signIn = () => signInWithPopup(auth, googleProvider)

  const signOutUser = async () => {
    await signOut(auth)
    logout()
  }

  return { user, signIn, signOut: signOutUser }
}