export default function PostSkeleton() {
  const shimmer = {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    borderRadius: '4px',
  }

  return (
    <>
      <style>{`@keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }`}</style>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} style={{ background: '#fff', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <div style={{ ...shimmer, height: '28px' }} />
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ ...shimmer, height: '24px', width: '80%' }} />
            <div style={{ ...shimmer, height: '14px' }} />
            <div style={{ ...shimmer, height: '14px', width: '70%' }} />
            <div style={{ ...shimmer, height: '14px', width: '50%' }} />
          </div>
        </div>
      ))}
    </>
  )
}