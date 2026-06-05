import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAgOwmAWHySUWQ44Oqhlvy_WdMTxUfsCj4",
  authDomain: "blogsemana.firebaseapp.com",
  projectId: "blogsemana",
  storageBucket: "blogsemana.firebasestorage.app",
  messagingSenderId: "606928321759",
  appId: "1:606928321759:web:fd59ae46154b4349283d6a",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()