import { useSearchParams } from 'react-router-dom'
import { usePosts } from '../hooks/usePosts'
import { useUsers } from '../hooks/useUsers'
import { useUserById } from '../hooks/useUsers'
import PostCard from '../components/posts/PostCard'
import PostSkeleton from '../components/posts/PostSkeleton'
import UserFilter from '../components/users/UserFilter'

function PostWithUser({ post }) {
  const { data: user } = useUserById(post.userId)
  return <PostCard post={post} user={user} />
}

export default function Home() {
  const [params, setParams] = useSearchParams()
  const userId = params.get('userId')
  const tag = params.get('tag')
  const page = Number(params.get('page') || 1)

  const { data: postsData, isLoading } = usePosts({ userId, tag, page })
  const { data: usersData } = useUsers({ limit: 20 })

  const handleUserSelect = (id) => {
    setParams(id ? { userId: id } : {})
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
      {/* Breadcrumb de filtro activo */}
      {(userId || tag) && (
        <div style={{
          background: '#fff5f5',
          border: '1px solid #ffd0d0',
          borderLeft: '4px solid var(--rojo)',
          padding: '10px 16px',
          marginBottom: '24px',
          borderRadius: '2px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--fuente-ui)',
          fontSize: '13px',
        }}>
          <span>
            {userId && `Filtrando por autor`}
            {tag && `Filtrando por tag: #${tag}`}
          </span>
          <button
            onClick={() => setParams({})}
            style={{ background: 'var(--rojo)', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: '2px', cursor: 'pointer', fontSize: '12px', fontFamily: 'var(--fuente-ui)' }}
          >
            Limpiar filtro ✕
          </button>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '28px', alignItems: 'start' }}>
        {/* Sidebar */}
        <UserFilter
          users={usersData?.users}
          activeId={userId}
          onSelect={handleUserSelect}
        />

        {/* Grid de posts */}
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {isLoading
              ? <PostSkeleton />
              : postsData?.posts?.map(post => (
                  <PostWithUser key={post.id} post={post} />
                ))
            }
          </div>

          {/* Paginación */}
          {!userId && !tag && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
              <button
                disabled={page <= 1}
                onClick={() => setParams({ page: String(page - 1) })}
                style={{
                  padding: '8px 20px',
                  background: page <= 1 ? '#ccc' : 'var(--rojo)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: page <= 1 ? 'not-allowed' : 'pointer',
                  fontFamily: 'var(--fuente-ui)',
                  fontWeight: '600',
                }}
              >
                ← Anterior
              </button>
              <span style={{ padding: '8px 16px', fontFamily: 'var(--fuente-ui)', fontWeight: '600', color: 'var(--negro)' }}>
                Página {page}
              </span>
              <button
                onClick={() => setParams({ page: String(page + 1) })}
                style={{
                  padding: '8px 20px',
                  background: 'var(--rojo)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  fontFamily: 'var(--fuente-ui)',
                  fontWeight: '600',
                }}
              >
                Siguiente →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}