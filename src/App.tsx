import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhoWeServe from './components/WhoWeServe';
import { WhatWeOffer } from './components/WhatWeOffer';
import { WhyTheBee } from './components/WhyTheBee';
import { WhyChoosePlanB } from './components/WhyChoosePlanB';
import BuildHive from './components/BuildHive';
import JoinHive from './components/JoinHive';
import StickySupport from './components/StickySupport';
import ContactUsIntro from './components/ContactUsIntro';
import Footer from './components/Footer';

const App: React.FC = () => (
  <BrowserRouter>
    <Navbar />

    <div className="min-h-screen">
      <Routes>
        {/* HOME: Hero → Build + Join → About Us → Support */}
        <Route
          path="/"
          element={
            <>
              <Hero />

              {/* Right after Hero */}
              <BuildHive />
              <JoinHive />

              {/* About Us */}
              <section id="about-us">
                <WhyTheBee />
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
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              {/* Contact Us Intro */}
              <ContactUsIntro />

              {/* Existing contact sections */}
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
);

export default App;
