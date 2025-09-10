// src/App.tsx
import React from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhoWeServe from './components/WhoWeServe';
import { WhatWeOffer } from './components/WhatWeOffer';
import { WhyTheBee } from './components/WhyTheBee';
import { WhyChoosePlanB } from './components/WhyChoosePlanB';
import HomeHives from './components/HomeHives';
import StickySupport from './components/StickySupport';
import ContactUsIntro from './components/ContactUsIntro';
import BuildHive from './components/BuildHive';
import JoinHive from './components/JoinHive';
import JoinRoyalSwarm from './components/JoinRoyalSwarm';
import Footer from './components/Footer';
import SubmissionGallery from './components/SubmissionGallery';

// ✅ admin imports
import { AdminProvider } from './contexts/AdminAuthContext';
import AdminSignIn from './pages/admin/AdminSignIn';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

// Wrappers for back navigation
const RoutedBuildHive: React.FC = () => {
  const navigate = useNavigate();
  return <BuildHive onBack={() => navigate(-1)} />;
};
const RoutedJoinHive: React.FC = () => {
  const navigate = useNavigate();
  return <JoinHive onBack={() => navigate(-1)} />;
};
const RoutedJoinRoyalSwarm: React.FC = () => {
  const navigate = useNavigate();
  return <JoinRoyalSwarm onBack={() => navigate(-1)} />;
};

const App: React.FC = () => (
  <HashRouter>
    <AdminProvider>
      <ScrollToTop />
      <Navbar />

      <div className="min-h-screen">
        <Routes>
          {/* Public site */}
          <Route
            path="/"
            element={
              <>
                <div className="bg-[url('/assets/background3.png')] bg-cover bg-center bg-fixed">
                  <Hero />
                  <HomeHives />
                  <section id="about-us">
                    <WhyChoosePlanB />
                  </section>
                </div>
                <StickySupport />
              </>
            }
          />
          <Route path="/build-hive" element={<RoutedBuildHive />} />
          <Route path="/join-hive" element={<RoutedJoinHive />} />
          <Route path="/join-royal-swarm" element={<RoutedJoinRoyalSwarm />} />
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

          {/* Admin portal */}
          <Route path="/admin/login" element={<AdminSignIn />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/submissions" element={<SubmissionGallery />} />

          {/* fallback */}
          <Route path="*" element={<Hero />} />
        </Routes>
      </div>

      <Footer />
    </AdminProvider>
  </HashRouter>
);

export default App;