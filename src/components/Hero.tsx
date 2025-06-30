// src/components/Hero.tsx
import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  // fade‐and‐scale in on mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="hero"
      className="
        relative flex items-start justify-center
        h-screen bg-black overflow-hidden
        bg-[url('/assets/honeycomb-pattern.png')]
        bg-cover bg-center
      "
    >
      {/* Headline moved further down */}
      <div
        className={`
          relative z-10 pt-32
          transform transition-all duration-700
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
        `}
      >
        <h1 className="whitespace-nowrap text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white text-center">
          We Build Hives. We Gain Trust.
        </h1>
      </div>

      {/* Buttons positioned under the background logo */}
      <div
        className={`
          absolute z-10 left-1/2 top-[60%]
          transform -translate-x-1/2
          transition-opacity duration-700
          ${mounted ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div className="flex space-x-6">
          <button
            onClick={() => scrollToSection('build-hive')}
            className="
              px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full
              transform transition duration-500 ease-out
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            Build Your Hive
          </button>
          <button
            onClick={() => scrollToSection('join-hive')}
            className="
              px-8 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full
              transform transition duration-500 ease-out
              hover:bg-yellow-400 hover:text-black hover:shadow-lg
            "
          >
            Join Your Hive
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  )
}

export default Hero
