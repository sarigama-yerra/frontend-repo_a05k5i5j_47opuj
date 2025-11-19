import React, { Suspense, useMemo } from 'react'
import Spline from '@splinetool/react-spline'

function NeuralSpline() {
  const url = useMemo(() => 'https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode', [])
  return (
    <div className="relative h-full w-full">
      <Suspense fallback={<div className=\"absolute inset-0 bg-[#0f1312]\" />}> 
        <Spline scene={url} style={{ width: '100%', height: '100%' }} />
      </Suspense>
      {/* Soft gradient overlay to match palette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#1A1A1A] via-transparent to-transparent" />
    </div>
  )
}

export default NeuralSpline
