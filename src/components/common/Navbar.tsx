import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Code2, 
  FileSpreadsheet, 
  ShieldCheck, 
  Palette, 
  ArrowRight,
  PhoneCall,
  Calendar
} from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const isExactActive = (path: string) => location.pathname === path;

  const serviceLinks = [
    {
      title: 'IT Product Services',
      description: 'Web development, enterprise tools & custom tech',
      path: '/services/it',
      icon: Code2,
      color: 'text-[#2563eb] bg-[#2563eb]/10'
    },
    {
      title: 'Tally Solutions',
      description: 'TDL customization, support & cloud services',
      path: '/services/tally',
      icon: FileSpreadsheet,
      color: 'text-[#2563eb] bg-[#2563eb]/10'
    },
    {
      title: 'GST & Business Services',
      description: 'GST/MSME registration, GST & IT return filings',
      path: '/services/gst',
      icon: ShieldCheck,
      color: 'text-[#2563eb] bg-[#2563eb]/10'
    },
    {
      title: 'Creative & Editing Services',
      description: 'Logo design, video editing & marketing posters',
      path: '/services/creative',
      icon: Palette,
      color: 'text-[#2563eb] bg-[#2563eb]/10'
    }
  ];

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link 
            to="/" 
            id="brand-logo-link"
            className="group focus:outline-none focus:ring-2 focus:ring-[#2563eb] rounded-lg p-0.5 sm:p-1 shrink-0"
          >
            <div className="block sm:hidden">
              <Logo size="sm" variant="dark" />
            </div>
            <div className="hidden sm:block">
              <Logo size="md" variant="dark" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            <Link
              to="/"
              id="nav-link-home"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors relative ${
                isExactActive('/')
                  ? 'text-[#2563eb] bg-[#2563eb]/10'
                  : 'text-[#1f2937] hover:text-[#2563eb] hover:bg-[#f9fafb]'
              }`}
            >
              Home
              {isExactActive('/') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2563eb] rounded-full" />
              )}
            </Link>

            <Link
              to="/about"
              id="nav-link-about"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors relative ${
                isExactActive('/about')
                  ? 'text-[#2563eb] bg-[#2563eb]/10'
                  : 'text-[#1f2937] hover:text-[#2563eb] hover:bg-[#f9fafb]'
              }`}
            >
              About
              {isExactActive('/about') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2563eb] rounded-full" />
              )}
            </Link>

            {/* Services Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  to="/services"
                  id="nav-link-services"
                  className={`px-3 py-2 text-sm font-semibold rounded-l-lg transition-colors flex items-center gap-1 ${
                    isActive('/services')
                      ? 'text-[#2563eb] bg-[#2563eb]/10'
                      : 'text-[#1f2937] hover:text-[#2563eb] hover:bg-[#f9fafb]'
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  aria-expanded={isServicesDropdownOpen}
                  aria-label="Toggle Services Menu"
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className={`p-2 text-sm font-semibold rounded-r-lg transition-colors ${
                    isActive('/services')
                      ? 'text-[#2563eb] bg-[#2563eb]/10'
                      : 'text-[#1f2937] hover:text-[#2563eb] hover:bg-[#f9fafb]'
                  }`}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180 text-[#2563eb]' : ''}`} />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div 
                  id="services-dropdown-panel"
                  className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-2.5 mt-1 transition-all animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                >
                  <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#4b5563] uppercase tracking-wider">All Services</span>
                    <Link 
                      to="/services" 
                      className="text-xs font-semibold text-[#2563eb] hover:underline flex items-center gap-1"
                    >
                      Overview <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="space-y-1">
                    {serviceLinks.map((item) => {
                      const Icon = item.icon;
                      const isSubActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-start gap-3 p-2.5 rounded-lg transition-colors group ${
                            isSubActive 
                              ? 'bg-[#2563eb]/10 text-[#2563eb]' 
                              : 'hover:bg-[#f9fafb] text-[#1f2937]'
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${item.color} mt-0.5 group-hover:scale-105 transition-transform`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-bold leading-tight group-hover:text-[#2563eb] transition-colors">
                              {item.title}
                            </p>
                            <p className="text-xs text-[#4b5563] mt-0.5 line-clamp-1">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              id="nav-link-portfolio"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors relative ${
                isExactActive('/portfolio')
                  ? 'text-[#2563eb] bg-[#2563eb]/10'
                  : 'text-[#1f2937] hover:text-[#2563eb] hover:bg-[#f9fafb]'
              }`}
            >
              Portfolio
              {isExactActive('/portfolio') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2563eb] rounded-full" />
              )}
            </Link>

            <Link
              to="/why-us"
              id="nav-link-why-us"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors relative ${
                isExactActive('/why-us')
                  ? 'text-[#2563eb] bg-[#2563eb]/10'
                  : 'text-[#1f2937] hover:text-[#2563eb] hover:bg-[#f9fafb]'
              }`}
            >
              Why Us
              {isExactActive('/why-us') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2563eb] rounded-full" />
              )}
            </Link>

            <Link
              to="/contact"
              id="nav-link-contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors relative ${
                isExactActive('/contact')
                  ? 'text-[#2563eb] bg-[#2563eb]/10'
                  : 'text-[#1f2937] hover:text-[#2563eb] hover:bg-[#f9fafb]'
              }`}
            >
              Contact
              {isExactActive('/contact') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2563eb] rounded-full" />
              )}
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Get a Free Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="p-2 rounded-lg bg-[#2563eb]/10 text-[#2563eb] hover:bg-[#2563eb]/20 text-xs font-semibold flex items-center gap-1"
              aria-label="Quick Consultation"
            >
              <PhoneCall className="w-4 h-4" />
              <span className="hidden sm:inline">Consult</span>
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#1f2937] hover:text-[#111827] hover:bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#111827]" />
              ) : (
                <Menu className="w-6 h-6 text-[#111827]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="grid grid-cols-1 gap-1">
            <Link
              to="/"
              className={`px-3.5 py-2.5 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                isExactActive('/') ? 'bg-[#2563eb]/10 text-[#2563eb]' : 'text-[#1f2937] hover:bg-[#f9fafb]'
              }`}
            >
              <span>Home</span>
              {isExactActive('/') && <span className="w-2 h-2 rounded-full bg-[#2563eb]" />}
            </Link>

            <Link
              to="/about"
              className={`px-3.5 py-2.5 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                isExactActive('/about') ? 'bg-[#2563eb]/10 text-[#2563eb]' : 'text-[#1f2937] hover:bg-[#f9fafb]'
              }`}
            >
              <span>About Phenrix Solutions</span>
              {isExactActive('/about') && <span className="w-2 h-2 rounded-full bg-[#2563eb]" />}
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border border-slate-200 rounded-xl p-2 bg-[#f9fafb] my-1">
              <Link
                to="/services"
                className="px-2 py-1.5 text-xs font-bold text-[#4b5563] uppercase tracking-wider flex items-center justify-between"
              >
                <span>Our Services</span>
                <span className="text-[#2563eb] text-xs font-semibold normal-case flex items-center gap-1">
                  View All <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
              <div className="mt-1 space-y-1">
                {serviceLinks.map((item) => {
                  const Icon = item.icon;
                  const isSubActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 p-2 rounded-lg text-sm font-medium ${
                        isSubActive ? 'bg-white text-[#2563eb] shadow-xs' : 'text-[#1f2937] hover:bg-white'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-[#2563eb] shrink-0" />
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              to="/portfolio"
              className={`px-3.5 py-2.5 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                isExactActive('/portfolio') ? 'bg-[#2563eb]/10 text-[#2563eb]' : 'text-[#1f2937] hover:bg-[#f9fafb]'
              }`}
            >
              <span>Portfolio</span>
              {isExactActive('/portfolio') && <span className="w-2 h-2 rounded-full bg-[#2563eb]" />}
            </Link>

            <Link
              to="/why-us"
              className={`px-3.5 py-2.5 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                isExactActive('/why-us') ? 'bg-[#2563eb]/10 text-[#2563eb]' : 'text-[#1f2937] hover:bg-[#f9fafb]'
              }`}
            >
              <span>Why Choose Us & Process</span>
              {isExactActive('/why-us') && <span className="w-2 h-2 rounded-full bg-[#2563eb]" />}
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-2.5 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                isExactActive('/contact') ? 'bg-[#2563eb]/10 text-[#2563eb]' : 'text-[#1f2937] hover:bg-[#f9fafb]'
              }`}
            >
              <span>Contact Us</span>
              {isExactActive('/contact') && <span className="w-2 h-2 rounded-full bg-[#2563eb]" />}
            </Link>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Get a Free Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

