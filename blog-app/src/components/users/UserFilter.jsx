export default function UserFilter({ users, activeId, onSelect }) {
  return (
    <aside style={{
      background: '#fff',
      border: '1px solid #e8e8e8',
      borderRadius: '2px',
      overflow: 'hidden',
      alignSelf: 'start',
      position: 'sticky',
      top: '20px',
    }}>
      <div style={{ background: 'var(--rojo)', padding: '12px 16px' }}>
        <h3 style={{ fontFamily: 'var(--fuente-titulo)', fontSize: '18px', letterSpacing: '2px', color: '#fff' }}>
          AUTORES
        </h3>
      </div>

      <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <button
          onClick={() => onSelect(null)}
          style={{
            width: '100%',
            padding: '10px 16px',
            textAlign: 'left',
            background: !activeId ? 'var(--rojo)' : 'transparent',
            color: !activeId ? '#fff' : 'var(--negro)',
            border: 'none',
            borderBottom: '1px solid #f0f0f0',
            cursor: 'pointer',
            fontFamily: 'var(--fuente-ui)',
            fontWeight: '600',
            fontSize: '13px',
          }}
        >
          Todos los autores
        </button>

        {users?.map(user => (
          <button
            key={user.id}
            onClick={() => onSelect(String(user.id))}
            style={{
              width: '100%',
              padding: '10px 16px',
              textAlign: 'left',
              background: activeId === String(user.id) ? '#fff5f5' : 'transparent',
              border: 'none',
              borderBottom: '1px solid #f5f5f5',
              borderLeft: activeId === String(user.id) ? '3px solid var(--rojo)' : '3px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.15s',
            }}
          >
            <img
              src={user.image}
              alt={user.firstName}
              style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', fontFamily: 'var(--fuente-ui)', color: 'var(--negro)' }}>
                {user.firstName} {user.lastName}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--gris-medio)', fontFamily: 'var(--fuente-ui)' }}>
                @{user.username}
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  )
}