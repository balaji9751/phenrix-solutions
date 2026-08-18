import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ConsultationModal } from './components/common/ConsultationModal';
import { MobileBottomBar } from './components/common/MobileBottomBar';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ITServicesPage } from './pages/ITServicesPage';
import { TallyServicesPage } from './pages/TallyServicesPage';
import { GSTServicesPage } from './pages/GSTServicesPage';
import { CreativeServicesPage } from './pages/CreativeServicesPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { LogoShowcasePage } from './pages/LogoShowcasePage';
import { AlertCircle, ArrowLeft } from 'lucide-react';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

// Animated Page Wrapper with subtle, professional transitions (250ms)
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="w-full flex-grow"
    >
      {children}
    </motion.div>
  );
};

// 404 Not Found Screen
const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 bg-white">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-200">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Page Not Found</h1>
        <p className="text-sm text-slate-600 mb-6">
          The requested page could not be located. Please check the URL or return to our homepage.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#1f2937] font-sans antialiased">
        {/* Sticky Top Navbar */}
        <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Main Content Area */}
        <main className="flex-grow flex flex-col w-full">
          <Routes>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage onOpenConsultation={() => setIsConsultationOpen(true)} />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutPage onOpenConsultation={() => setIsConsultationOpen(true)} />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <ServicesOverviewPage onOpenConsultation={() => setIsConsultationOpen(true)} />
                </PageTransition>
              }
            />
            <Route
              path="/services/it"
              element={
                <PageTransition>
                  <ITServicesPage onOpenConsultation={() => setIsConsultationOpen(true)} />
                </PageTransition>
              }
            />
            <Route
              path="/services/tally"
              element={
                <PageTransition>
                  <TallyServicesPage onOpenConsultation={() => setIsConsultationOpen(true)} />
                </PageTransition>
              }
            />
            <Route
              path="/services/gst"
              element={
                <PageTransition>
                  <GSTServicesPage onOpenConsultation={() => setIsConsultationOpen(true)} />
                </PageTransition>
              }
            />
            <Route
              path="/services/creative"
              element={
                <PageTransition>
                  <CreativeServicesPage onOpenConsultation={() => setIsConsultationOpen(true)} />
                </PageTransition>
              }
            />
            <Route
              path="/why-us"
              element={
                <PageTransition>
                  <WhyUsPage onOpenConsultation={() => setIsConsultationOpen(true)} />
                </PageTransition>
              }
            />
            <Route
              path="/portfolio"
              element={
                <PageTransition>
                  <PortfolioPage onOpenConsultation={() => setIsConsultationOpen(true)} />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              }
            />
            <Route
              path="/privacy"
              element={
                <PageTransition>
                  <LegalPage initialTab="privacy" />
                </PageTransition>
              }
            />
            <Route
              path="/terms"
              element={
                <PageTransition>
                  <LegalPage initialTab="terms" />
                </PageTransition>
              }
            />
            <Route
              path="/logo-showcase"
              element={
                <PageTransition>
                  <LogoShowcasePage />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFoundPage />
                </PageTransition>
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <div className="pb-16 md:pb-0">
          <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
        </div>

        {/* Mobile Sticky Quick Navigation Bar */}
        <MobileBottomBar onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Interactive Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
