export default function UserCard({ user }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '2px',
      overflow: 'hidden',
      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      textAlign: 'center',
      transition: 'transform 0.2s',
    }}
      onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
      onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ background: 'var(--rojo)', height: '50px' }} />
      <div style={{ padding: '0 20px 20px', marginTop: '-28px' }}>
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            border: '3px solid #fff',
            objectFit: 'cover',
            display: 'block',
            margin: '0 auto 10px',
          }}
        />
        <h3 style={{ fontFamily: 'var(--fuente-titulo)', fontSize: '18px', letterSpacing: '1px', color: 'var(--negro)', marginBottom: '2px' }}>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h3>
        <p style={{ fontSize: '12px', color: 'var(--rojo)', fontFamily: 'var(--fuente-ui)', fontWeight: '600', marginBottom: '8px' }}>
          @{user.username}
        </p>
        <p style={{ fontSize: '12px', color: 'var(--gris-medio)', fontFamily: 'var(--fuente-ui)' }}>
          {user.email}
        </p>
      </div>
    </div>
  )
}