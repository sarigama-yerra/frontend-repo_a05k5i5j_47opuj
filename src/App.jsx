import React from 'react'
import Hero from './components/Hero'
import GlobalStyles from './components/GlobalStyles'

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <GlobalStyles />
      <Hero />
      {/* Placeholder below fold to enable scroll behavior preview */}
      <section id="framework" className="min-h-[120vh] bg-[#121212] text-[#FAFAFA] px-8 sm:px-12 md:px-[6vw] py-24">
        <div className="max-w-4xl">
          <h2 className="text-2xl tracking-tight text-[#FAFAFA]/80 mb-4">The Framework</h2>
          <p className="text-[#BDBDBD] leading-relaxed max-w-[65ch]">
            Below-the-fold content placeholder. This area will showcase the psychology-driven methodology with case snippets, experiments, and measurable lifts. Scroll effects from the hero ease into a focused, lab-like reading experience.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
