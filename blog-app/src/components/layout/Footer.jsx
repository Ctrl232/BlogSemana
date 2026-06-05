export default function Footer() {
  return (
    <footer style={{ background: 'var(--rojo)', color: '#fff', marginTop: '60px', padding: '32px 20px', textAlign: 'center', fontFamily: 'var(--fuente-ui)' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '12px', fontSize: '22px' }}>
        <a href="#" style={{ color: '#fff' }}>📷</a>
        <a href="#" style={{ color: '#fff' }}>🎵</a>
        <a href="#" style={{ color: '#fff' }}>💬</a>
      </div>
      <p style={{ fontSize: '13px', opacity: 0.8 }}>© 2026 - Todos los derechos reservados</p>
    </footer>
  )
}