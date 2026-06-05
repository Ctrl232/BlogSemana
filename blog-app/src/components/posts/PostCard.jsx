import { Link } from 'react-router-dom'

export default function PostCard({ post, user }) {
  return (
    <article style={{
      background: '#fff',
      borderRadius: '2px',
      overflow: 'hidden',
      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
    }}
      onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)' }}
      onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)' }}
    >
      {/* Tag rojo */}
      {post.tags?.[0] && (
        <div style={{ background: 'var(--rojo)', padding: '5px 12px' }}>
          <span style={{ color: '#fff', fontSize: '11px', fontWeight: '700', fontFamily: 'var(--fuente-ui)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {post.tags[0]}
          </span>
        </div>
      )}

      <div style={{ padding: '16px' }}>
        {/* Título */}
        <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none' }}>
          <h2 style={{
            fontFamily: 'var(--fuente-titulo)',
            fontSize: '22px',
            letterSpacing: '1px',
            color: 'var(--negro)',
            lineHeight: 1.2,
            marginBottom: '10px',
          }}>
            {post.title.toUpperCase()}
          </h2>
        </Link>

        {/* Body truncado */}
        <p style={{
          fontFamily: 'var(--fuente-body)',
          fontSize: '13px',
          color: 'var(--gris-medio)',
          lineHeight: 1.6,
          marginBottom: '14px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {post.body}
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--gris-medio)', fontFamily: 'var(--fuente-ui)', marginBottom: '12px' }}>
          <span>👍 {post.reactions?.likes ?? 0}</span>
          <span>👎 {post.reactions?.dislikes ?? 0}</span>
          <span>👁 {post.views ?? 0}</span>
        </div>

        {/* Autor */}
        {user && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid #f0f0f0', paddingTop: '12px' }}>
            <img
              src={user.image}
              alt={user.firstName}
              style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <span style={{ fontSize: '12px', fontFamily: 'var(--fuente-ui)', color: 'var(--gris-oscuro)', fontWeight: '600' }}>
              {user.firstName} {user.lastName}
            </span>
          </div>
        )}
      </div>
    </article>
  )
}