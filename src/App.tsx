// src/App.tsx
import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhoWeServe from './components/WhoWeServe'
import { WhatWeOffer } from './components/WhatWeOffer'
import { WhyTheBee } from './components/WhyTheBee'
import { WhyChoosePlanB } from './components/WhyChoosePlanB'
import HomeHives from './components/HomeHives'
import StickySupport from './components/StickySupport'
import ContactUsIntro from './components/ContactUsIntro'
import BuildHive from './components/BuildHive'
import JoinHive from './components/JoinHive'
import Footer from './components/Footer'

// Wrapper to inject onBack via useNavigate
const RoutedBuildHive: React.FC = () => {
  const navigate = useNavigate()
  return <BuildHive onBack={() => navigate(-1)} />
}

const RoutedJoinHive: React.FC = () => {
  const navigate = useNavigate()
  return <JoinHive onBack={() => navigate(-1)} />
}

const App: React.FC = () => (
  <BrowserRouter>
    <Navbar />

    <div className="min-h-screen">
      <Routes>
        {/* HOME: Hero → Build/Join Teasers → About Us → Support */}
        <Route
          path="/"
          element={
            <>
              {/* background wrapper for Hero, HomeHives, WhyChoosePlanB */}
              <div
                className="
                  bg-[url('/assets/background3.png')]
                  bg-cover bg-center bg-fixed
                "
              >
                <Hero />
                <HomeHives />

                {/* About Us */}
                <section id="about-us">
                  <WhyChoosePlanB />
                </section>
              </div>

              {/* Sticky Support */}
              <StickySupport />
            </>
          }
        />

        {/* Build & Join as standalone pages */}
        <Route path="/build-hive" element={<RoutedBuildHive />} />
        <Route path="/join-hive" element={<RoutedJoinHive />} />

        {/* STANDALONE PAGES */}
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/who-we-serve" element={<WhoWeServe />} />
        <Route
          path="/about-us"
          element={
            <>
              <WhatWeOffer />
              <WhyTheBee />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ContactUsIntro />
              <StickySupport />
            </>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Hero />} />
      </Routes>
    </div>

    <Footer />
  </BrowserRouter>
)

export default App
