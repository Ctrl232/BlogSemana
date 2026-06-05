import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import GoogleButton from '../components/auth/GoogleButton'

export default function Login() {
  const user = useAuthStore(s => s.user)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    if (user) navigate(from, { replace: true })
  }, [user])

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--gris-claro)',
    }}>
      <div style={{
        background: '#fff',
        padding: '60px 50px',
        borderRadius: '2px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
        borderTop: '4px solid var(--rojo)',
      }}>
        <h1 style={{
          fontFamily: 'var(--fuente-titulo)',
          fontSize: '48px',
          letterSpacing: '6px',
          color: 'var(--rojo)',
          marginBottom: '8px',
        }}>
          SEMANA
        </h1>
        <p style={{ fontFamily: 'var(--fuente-ui)', fontSize: '14px', color: 'var(--gris-medio)', marginBottom: '36px' }}>
          Inicia sesión para acceder a todas las secciones
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <GoogleButton />
        </div>
      </div>
    </div>
  )
}