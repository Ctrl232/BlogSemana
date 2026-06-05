import { usePostComments } from '../../hooks/usePosts'

export default function PostComments({ postId }) {
  const { data, isLoading } = usePostComments(postId)

  if (isLoading) return <p style={{ fontFamily: 'var(--fuente-ui)', color: 'var(--gris-medio)', padding: '20px 0' }}>Cargando comentarios...</p>

  return (
    <section style={{ marginTop: '40px' }}>
      <h3 style={{
        fontFamily: 'var(--fuente-titulo)',
        fontSize: '26px',
        letterSpacing: '2px',
        color: 'var(--negro)',
        borderBottom: '3px solid var(--rojo)',
        paddingBottom: '8px',
        marginBottom: '24px',
      }}>
        COMENTARIOS ({data?.total ?? 0})
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {data?.comments?.map(comment => (
          <div key={comment.id} style={{
            background: '#fff',
            border: '1px solid #eee',
            borderLeft: '4px solid var(--rojo)',
            padding: '16px 20px',
            borderRadius: '2px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <strong style={{ fontFamily: 'var(--fuente-ui)', fontSize: '14px', color: 'var(--negro)' }}>
                {comment.user.fullName}
              </strong>
              <span style={{ fontSize: '12px', color: 'var(--gris-medio)', fontFamily: 'var(--fuente-ui)' }}>
                👍 {comment.likes}
              </span>
            </div>
            <p style={{ fontFamily: 'var(--fuente-body)', fontSize: '14px', color: 'var(--gris-oscuro)', lineHeight: 1.6 }}>
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}