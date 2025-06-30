// src/App.tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import Footer from './components/Footer'

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
              <Hero />
              <HomeHives />

              {/* About Us */}
              <section id="about-us">
                <WhyChoosePlanB />
              </section>

              {/* Sticky Support */}
              <StickySupport />
            </>
          }
        />

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
