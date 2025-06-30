// src/components/Hero.tsx
import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="hero"
      className="
        relative h-screen overflow-hidden bg-black
        bg-[url('/assets/honeycomb-pattern.png')] bg-cover bg-center
      "
    >
      {/* Headline with indent on second line */}
      <div
        className={`
          absolute left-12 top-32
          transform transition-all duration-700
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}
        `}
      >
        <h1 className="text-5xl sm:text-5xl lg:text-5xl font-extrabold text-white leading-snug">
          We Build Hives.
          <br />
          <span className="inline-block ml-8">
            We Gain Trust.
          </span>
        </h1>
      </div>

      {/* Buttons under the logo */}
      <div
        className={`
          absolute left-1/2 top-[60%] -translate-x-1/2
          flex space-x-6 z-10
          transform transition-opacity duration-700
          ${mounted ? 'opacity-100' : 'opacity-0'}
        `}
      >
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

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  )
}

export default Hero
