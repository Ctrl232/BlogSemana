import { useSearchParams, Link } from 'react-router-dom'
import { useTags, usePosts } from '../hooks/usePosts'
import PostCard from '../components/posts/PostCard'
import { useUserById } from '../hooks/useUsers'

function PostWithUser({ post }) {
  const { data: user } = useUserById(post.userId)
  return <PostCard post={post} user={user} />
}

export default function Tags() {
  const [params, setParams] = useSearchParams()
  const activeTag = params.get('tag')
  const { data: tags, isLoading: loadingTags } = useTags()
  const { data: postsData, isLoading: loadingPosts } = usePosts({ tag: activeTag })

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontFamily: 'var(--fuente-titulo)', fontSize: '42px', letterSpacing: '3px', color: 'var(--negro)', marginBottom: '30px', borderBottom: '3px solid var(--rojo)', paddingBottom: '10px' }}>
        TAGS
      </h1>

      {/* Nube de tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
        {loadingTags && <p style={{ fontFamily: 'var(--fuente-ui)', color: 'var(--gris-medio)' }}>Cargando...</p>}
        {tags?.map(tag => (
          <button
            key={tag}
            onClick={() => setParams(activeTag === tag ? {} : { tag })}
            style={{
              padding: '8px 18px',
              background: activeTag === tag ? 'var(--rojo)' : '#fff',
              color: activeTag === tag ? '#fff' : 'var(--negro)',
              border: '1px solid',
              borderColor: activeTag === tag ? 'var(--rojo)' : '#ddd',
              borderRadius: '2px',
              cursor: 'pointer',
              fontFamily: 'var(--fuente-ui)',
              fontWeight: '600',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              transition: 'all 0.15s',
            }}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Posts filtrados por tag */}
      {activeTag && (
        <>
          <h2 style={{ fontFamily: 'var(--fuente-titulo)', fontSize: '28px', letterSpacing: '2px', color: 'var(--negro)', marginBottom: '20px' }}>
            #{activeTag.toUpperCase()}
          </h2>
          {loadingPosts ? (
            <p style={{ fontFamily: 'var(--fuente-ui)', color: 'var(--gris-medio)' }}>Cargando posts...</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {postsData?.posts?.map(post => (
                <PostWithUser key={post.id} post={post} />
              ))}
            </div>
          )}
        </>
      )}

      {!activeTag && (
        <p style={{ fontFamily: 'var(--fuente-ui)', color: 'var(--gris-medio)', textAlign: 'center', padding: '40px 0' }}>
          Selecciona un tag para ver los posts
        </p>
      )}
    </div>
  )
}