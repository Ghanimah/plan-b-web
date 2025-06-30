// src/components/HomeHives.tsx
import React, { useState } from 'react'
import { User, Building2, ChevronRight } from 'lucide-react'
import JoinHive from './JoinHive'
import BuildHive from './BuildHive'

const HomeHives: React.FC = () => {
  const [mode, setMode] = useState<'none' | 'build' | 'join'>('none')

  // show both teasers
  if (mode === 'none') {
    return (
      <section className="py-20 bg-[url('/assets/background3.png')] bg-cover bg-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-center gap-12">
          {/* Build teaser */}
          <div className="flex-1 bg-white/90 p-8 rounded-lg shadow-lg text-center">
            <div
              className="w-16 h-16 bg-honey rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{
                clipPath:
                  'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
              }}
            >
              <Building2 className="w-8 h-8 text-bee-black" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Build Your Hive</h3>
            <p className="text-gray-600 mb-6">
              Tell us about your event and staffing needs
            </p>
            <button
              onClick={() => setMode('build')}
              className="inline-flex items-center px-6 py-3 bg-bee-red text-offwhite font-semibold rounded-full hover:bg-honey transition-transform hover:scale-105"
            >
              Build Your Hive
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Join teaser */}
          <div className="flex-1 bg-white/90 p-8 rounded-lg shadow-lg text-center">
            <div
              className="w-16 h-16 bg-honey rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{
                clipPath:
                  'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
              }}
            >
              <User className="w-8 h-8 text-bee-black" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Join Your Hive</h3>
            <p className="text-gray-600 mb-6">
              Start your journey with Jordan’s leading recruitment platform
            </p>
            <button
              onClick={() => setMode('join')}
              className="inline-flex items-center px-6 py-3 bg-bee-red text-offwhite font-semibold rounded-full hover:bg-honey transition-transform hover:scale-105"
            >
              Join Your Hive
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    )
  }

  // if a card was clicked, show that form
  return mode === 'build'
    ? <BuildHive onBack={() => setMode('none')} />
    : <JoinHive  onBack={() => setMode('none')} />
}

export default HomeHives
