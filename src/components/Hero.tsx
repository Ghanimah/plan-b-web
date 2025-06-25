// src/components/Hero.tsx

import React from 'react'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundColor: '#F3BF18',                        // fallback brand honey
        backgroundImage: "url('/assets/honeycomb-pattern.png')", // your hive pattern
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-offwhite mb-6">
          We Build Hives.<br />We Gain Trust.
        </h1>
        <div className="flex flex-col items-center">
          <button
            onClick={() => scrollToSection('build-hive')}
            className="px-8 py-3 bg-bee-black text-offwhite rounded-full hover:scale-105 transition"
          >
            Build Your Hive
          </button>
          <button
            onClick={() => scrollToSection('join-hive')}
            className="mt-4 px-8 py-3 bg-bee-black text-offwhite rounded-full hover:scale-105 transition"
          >
            Join Your Hive
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-offwhite" />
      </div>
    </section>
  )
}

export default Hero
