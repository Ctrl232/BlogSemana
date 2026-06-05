import { useAuth } from '../../hooks/useAuth'

export default function GoogleButton() {
  const { signIn } = useAuth()

  return (
    <button
      onClick={signIn}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 28px',
        background: '#fff',
        border: '2px solid #CC0000',
        borderRadius: '4px',
        fontFamily: 'var(--fuente-ui)',
        fontWeight: '600',
        fontSize: '15px',
        color: '#111',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
      onMouseOver={e => e.currentTarget.style.background = '#CC0000' || (e.currentTarget.style.color = '#fff')}
      onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#111' }}
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google"
        width="20"
        height="20"
      />
      Continuar con Google
    </button>
  )
}