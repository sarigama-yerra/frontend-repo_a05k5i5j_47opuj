import React from 'react'

function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Organic radial gradient mesh */}
      <div
        className="absolute -inset-20 rounded-[4rem] opacity-[0.85]"
        style={{
          background:
            'radial-gradient(60% 60% at 65% 45%, rgba(44,95,77,0.35) 0%, rgba(44,95,77,0.15) 35%, rgba(26,26,26,0.6) 55%, rgba(26,26,26,1) 100%)',
          filter: 'blur(20px)'
        }}
      />

      {/* Slow morph layer */}
      <div className="absolute inset-0 animate-gradient-morph opacity-70" />

      {/* Subtle grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light bg-noise" />
    </div>
  )
}

export default GradientMesh
