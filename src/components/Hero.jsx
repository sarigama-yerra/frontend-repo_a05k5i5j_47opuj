import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NeuralSpline from './NeuralSpline'
import GradientMesh from './GradientMesh'

const lines = [
  'We Engineer',
  'Attention,',
  'Emotion,',
  'Action.'
]

const tickerItemsBase = [
  'Currently accepting 3 clients this quarter',
  '127% average conversion lift',
  '50+ brands transformed',
]

function Hero() {
  const containerRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [tickerIndex, setTickerIndex] = useState(0)

  // Scroll effects (0-100vh)
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Data ticker rotation
  useEffect(() => {
    const id = setInterval(() => {
      setTickerIndex((i) => (i + 1) % tickerItemsBase.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const progress = Math.min(scrollY / window.innerHeight, 1)

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#1A1A1A] text-[#FAFAFA] overflow-hidden">
      {/* Right side 3D cover (60% width on large screens) */}
      <div className="absolute right-0 top-0 h-screen w-full md:w-[60%] will-change-transform">
        <motion.div
          className="absolute inset-0"
          style={{ transformOrigin: '50% 0%' }}
          animate={{}}
          initial={false}
          transition={{ type: 'tween', ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              y: -150 * progress,
              scale: 1 - 0.3 * progress,
            }}
          >
            <NeuralSpline />
          </motion.div>
        </motion.div>
      </div>

      {/* Fluid background behind Spline */}
      <div className="absolute inset-0 -z-0">
        <motion.div
          className="absolute inset-0"
          style={{ opacity: 1 - progress * 0.3 }}
          animate={{}}
          transition={{ duration: 0.6 }}
        >
          <GradientMesh />
        </motion.div>
      </div>

      {/* Content left aligned (45% of viewport) */}
      <div className="relative z-10 h-screen flex items-center">
        <div className="pl-8 sm:pl-12 md:pl-[6vw] max-w-xl w-[85vw] md:w-[45vw]">
          <div className="mb-6">
            {lines.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ delay: i * 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="leading-[1.1] tracking-[-0.02em] text-[42px] sm:text-[56px] md:text-[64px] font-serif"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: lines.length * 0.8 + 1.2, duration: 0.8 }}
            className="text-[#999999] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6] max-w-[60ch]"
            style={{ maxWidth: '60%' }}
          >
            Psychology-driven design for brands that demand measurable results.
          </motion.p>

          {/* Data ticker */}
          <div className="mt-10">
            <div className="h-6 relative overflow-hidden" style={{ fontFamily: 'Space Mono, monospace' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={tickerIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="text-[14px] text-[#2C5F4D]"
                >
                  {tickerItemsBase[tickerIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: lines.length * 0.8 + 1.2 + 0.8, duration: 0.6 }}
            className="mt-14"
          >
            <a
              href="#framework"
              className="inline-flex items-center gap-2 bg-[#2C5F4D] text-white text-[16px] font-medium px-9 py-[18px] rounded-[4px] shadow-[0_8px_24px_rgba(44,95,77,0.3)] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(44,95,77,0.35)]"
            >
              Explore The Framework →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-px h-14 bg-[#2C5F4D]" />
        <div className="mt-2 text-xs text-[#2C5F4D]">Scroll to see psychology in action</div>
        <div className="mt-2 w-2 h-2 rounded-full bg-[#2C5F4D] animate-pulse" />
      </motion.div>
    </section>
  )
}

export default Hero
