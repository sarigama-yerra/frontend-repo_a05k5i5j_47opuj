import React, { useEffect } from 'react'

function GlobalStyles() {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes gradientMorph {
        0% { transform: scale(1) translate3d(0,0,0); filter: hue-rotate(0deg); }
        50% { transform: scale(1.05) translate3d(0,-1%,0); }
        100% { transform: scale(1) translate3d(0,0,0); filter: hue-rotate(0deg); }
      }
      .animate-gradient-morph { animation: gradientMorph 45s ease-in-out infinite; }

      /* Noise texture */
      .bg-noise {
        background-image: url('data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(#n)\" opacity=\"0.9\"/></svg>`)}');
        background-size: cover;
      }
    `
    document.head.appendChild(style)
    return () => { document.head.removeChild(style) }
  }, [])
  return null
}

export default GlobalStyles
