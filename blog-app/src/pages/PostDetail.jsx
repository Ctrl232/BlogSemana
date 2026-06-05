import { useParams, Link, useNavigate } from 'react-router-dom'
import { usePostDetail } from '../hooks/usePosts'
import { useUserById } from '../hooks/useUsers'
import PostComments from '../components/posts/PostComments'

export default function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: post, isLoading } = usePostDetail(id)
  const { data: author } = useUserById(post?.userId)

  if (isLoading) return (
    <div style={{ maxWidth: '860px', margin: '40px auto', padding: '0 20px', fontFamily: 'var(--fuente-ui)', color: 'var(--gris-medio)' }}>
      Cargando artículo...
    </div>
  )

  if (!post) return null

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Volver */}
      <button
        onClick={() => navigate(-1)}
        style={{ background: 'none', border: 'none', color: 'var(--rojo)', fontFamily: 'var(--fuente-ui)', fontWeight: '700', cursor: 'pointer', marginBottom: '24px', fontSize: '14px' }}
      >
        ← Volver
      </button>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {post.tags?.map(tag => (
          <Link
            key={tag}
            to={`/?tag=${tag}`}
            style={{
              background: 'var(--rojo)',
              color: '#fff',
              padding: '4px 12px',
              fontSize: '11px',
              fontWeight: '700',
              fontFamily: 'var(--fuente-ui)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textDecoration: 'none',
              borderRadius: '2px',
            }}
          >
            {tag}
          </Link>
        ))}
      </div>

      {/* Título */}
      <h1 style={{
        fontFamily: 'var(--fuente-titulo)',
        fontSize: '46px',
        letterSpacing: '2px',
        lineHeight: 1.1,
        color: 'var(--negro)',
        marginBottom: '24px',
      }}>
        {post.title.toUpperCase()}
      </h1>

      {/* Autor */}
      {author && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '2px solid #f0f0f0' }}>
          <img src={author.image} alt={author.firstName} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
          <div>
            <p style={{ fontFamily: 'var(--fuente-ui)', fontWeight: '700', fontSize: '15px', color: 'var(--negro)' }}>
              {author.firstName} {author.lastName}
            </p>
            <p style={{ fontFamily: 'var(--fuente-ui)', fontSize: '12px', color: 'var(--gris-medio)' }}>
              @{author.username}
            </p>
          </div>
        </div>
      )}

      {/* Cuerpo */}
      <p style={{
        fontFamily: 'var(--fuente-body)',
        fontSize: '17px',
        lineHeight: 1.9,
        color: 'var(--gris-oscuro)',
        marginBottom: '36px',
      }}>
        {post.body}
      </p>

      {/* Stats */}
      <div style={{
        display: 'flex',
        gap: '24px',
        padding: '20px 24px',
        background: '#fff',
        border: '1px solid #eee',
        borderLeft: '4px solid var(--rojo)',
        borderRadius: '2px',
        marginBottom: '40px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontFamily: 'var(--fuente-titulo)', letterSpacing: '2px', color: 'var(--negro)' }}>
            {post.reactions?.likes ?? 0}
          </div>
          <div style={{ fontSize: '12px', fontFamily: 'var(--fuente-ui)', color: 'var(--gris-medio)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            👍 Me gusta
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontFamily: 'var(--fuente-titulo)', letterSpacing: '2px', color: 'var(--negro)' }}>
            {post.reactions?.dislikes ?? 0}
          </div>
          <div style={{ fontSize: '12px', fontFamily: 'var(--fuente-ui)', color: 'var(--gris-medio)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            👎 No me gusta
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontFamily: 'var(--fuente-titulo)', letterSpacing: '2px', color: 'var(--negro)' }}>
            {post.views ?? 0}
          </div>
          <div style={{ fontSize: '12px', fontFamily: 'var(--fuente-ui)', color: 'var(--gris-medio)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            👁 Vistas
          </div>
        </div>
      </div>

      {/* Comentarios */}
      <PostComments postId={post.id} />
    </div>
  )
}