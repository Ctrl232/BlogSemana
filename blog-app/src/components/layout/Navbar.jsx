import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function Navbar() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <header style={{ background: 'var(--rojo)', color: '#fff', fontFamily: 'var(--fuente-ui)' }}>
      {/* Top bar */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        padding: '6px 0',
        fontSize: '12px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
          <Link to="/tags" style={{ color: '#fff', textDecoration: 'none', opacity: 0.85 }}>Tags</Link>
          {user ? (
            <>
              <Link to="/users" style={{ color: '#fff', textDecoration: 'none', opacity: 0.85 }}>Usuarios</Link>
              <span style={{ opacity: 0.85 }}>{user.name?.split(' ')[0]}</span>
              <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', opacity: 0.85, fontSize: '12px' }}>
                Salir
              </button>
            </>
          ) : (
            <Link to="/login" style={{ color: '#fff', textDecoration: 'none', opacity: 0.85 }}>Iniciar sesión</Link>
          )}
        </div>
      </div>

      {/* Logo */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 style={{
              fontFamily: 'var(--fuente-titulo)',
              fontSize: '52px',
              letterSpacing: '6px',
              color: '#fff',
              lineHeight: 1,
            }}>
              SEMANA
            </h1>
          </Link>
          <nav style={{ display: 'flex', gap: '28px' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>Inicio</Link>
            <Link to="/tags" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>Tags</Link>
            {user && <Link to="/users" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>Usuarios</Link>}
          </nav>
        </div>
      </div>
    </header>
  )
}