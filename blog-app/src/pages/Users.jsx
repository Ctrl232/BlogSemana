import { useUsers } from '../hooks/useUsers'
import UserCard from '../components/users/UserCard'

export default function Users() {
  const { data, isLoading } = useUsers({ limit: 30 })

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{
        fontFamily: 'var(--fuente-titulo)',
        fontSize: '42px',
        letterSpacing: '3px',
        color: 'var(--negro)',
        marginBottom: '8px',
        borderBottom: '3px solid var(--rojo)',
        paddingBottom: '10px',
      }}>
        USUARIOS
      </h1>
      <p style={{ fontFamily: 'var(--fuente-ui)', fontSize: '13px', color: 'var(--gris-medio)', marginBottom: '32px' }}>
        🔒 Sección exclusiva para usuarios autenticados
      </p>

      {isLoading ? (
        <p style={{ fontFamily: 'var(--fuente-ui)', color: 'var(--gris-medio)' }}>Cargando usuarios...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {data?.users?.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  )
}