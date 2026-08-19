import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar,
  CheckCircle2,
  PhoneCall,
  Code2,
  FileSpreadsheet,
  ShieldCheck,
  Palette
} from 'lucide-react';
import { TRUST_PILLARS } from '../data/companyData';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { ProcessTimeline } from '../components/common/ProcessTimeline';
import { CTASection } from '../components/common/CTASection';
import { PhenrixEmblem } from '../components/common/Logo';

interface HomePageProps {
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  return (
    <div id="home-page" className="w-full">
      {/* 1. HERO SECTION */}
      <section 
        aria-label="Hero Section"
        className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-[#f9fafb] border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-[#2563eb] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                <span>Integrated Business Solutions</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.15]">
                Smart Solutions. <br />
                <span className="text-[#2563eb]">
                  Powerful Results.
                </span>
              </h1>

              {/* Supporting Headline */}
              <p className="text-lg sm:text-xl font-semibold text-[#1f2937]">
                Technology, Business & Creative Solutions — All Under One Roof.
              </p>

              {/* Description */}
              <p className="text-base text-[#4b5563] leading-relaxed max-w-2xl">
                Phenrix Solutions delivers dependable IT software services, Tally TDL customization and support, GST & MSME business compliance, and creative digital designs tailored to help your business operate smoothly.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  id="hero-primary-cta"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Get a Free Consultation</span>
                </button>

                <Link
                  to="/services"
                  id="hero-secondary-cta"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f9fafb] text-[#1f2937] hover:text-[#2563eb] font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-300 shadow-xs hover:border-[#60a5fa] transition-all duration-200"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Badge Indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#10b981]" />
                  <span className="text-sm font-semibold text-[#374151]">SLA-Backed Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#10b981]" />
                  <span className="text-sm font-semibold text-[#374151]">Certified Tally Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#10b981]" />
                  <span className="text-sm font-semibold text-[#374151]">Dedicated SME Advisors</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Architectural Overview Box */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Card Container */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-7 relative z-10">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                    <div className="flex items-center gap-2.5">
                      <PhenrixEmblem size={24} className="w-6 h-6" />
                      <span className="text-xs font-extrabold text-[#0F172A] tracking-tight">
                        Phenrix Architecture
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#2563EB] px-2 py-0.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 uppercase tracking-wider">
                      Live Stack
                    </span>
                  </div>

                  {/* 4 Clean Modular Layers */}
                  <div className="space-y-3">
                    
                    {/* Module 1: IT & Cloud */}
                    <div className="p-3.5 rounded-xl bg-[#f9fafb] border border-slate-200 flex items-center justify-between hover:border-[#60a5fa] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xs shrink-0 text-white">
                          <Code2 className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#111827]">IT & Web Applications</p>
                          <p className="text-[11px] text-[#4b5563]">Custom portals, business websites & software</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white text-[#2563eb] border border-slate-200">
                        Active
                      </span>
                    </div>

                    {/* Module 2: Tally & ERP */}
                    <div className="p-3.5 rounded-xl bg-[#f9fafb] border border-slate-200 flex items-center justify-between hover:border-[#60a5fa] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-xs shrink-0 text-white">
                          <FileSpreadsheet className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#111827]">Tally Solutions & TDL</p>
                          <p className="text-[11px] text-[#4b5563]">Custom invoice layouts, reports & support</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white text-[#2563eb] border border-slate-200">
                        Certified
                      </span>
                    </div>

                    {/* Module 3: GST & Tax Compliance */}
                    <div className="p-3.5 rounded-xl bg-[#f9fafb] border border-slate-200 flex items-center justify-between hover:border-[#60a5fa] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-xs shrink-0 text-white">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#111827]">GST & Business Services</p>
                          <p className="text-[11px] text-[#4b5563]">Registrations, return filings & IT returns</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white text-[#10b981] border border-slate-200">
                        Compliant
                      </span>
                    </div>

                    {/* Module 4: Creative & Brand */}
                    <div className="p-3.5 rounded-xl bg-[#f9fafb] border border-slate-200 flex items-center justify-between hover:border-[#60a5fa] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-xs shrink-0 text-white">
                          <Palette className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#111827]">Creative & Editing Services</p>
                          <p className="text-[11px] text-[#4b5563]">Logos, promotional posters & video editing</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white text-[#2563eb] border border-slate-200">
                        Creative
                      </span>
                    </div>
                  </div>

                  {/* Status Footer */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#4b5563]">
                    <span className="flex items-center gap-1.5 font-medium text-[#111827]">
                      <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                      Single-Source Accountability
                    </span>
                    <span className="font-semibold text-[#2563eb]">Dedicated Team</span>
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl bg-slate-200/70 -z-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST / QUICK INTRO SECTION */}
      <section 
        aria-labelledby="trust-section-title"
        className="py-16 bg-white border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="trust-section-title" className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-3">
              Your Complete Business Solutions Partner
            </h2>
            <p className="text-base text-[#4b5563] leading-relaxed">
              Phenrix Solutions combines software engineering, business accounting systems, statutory compliance filing, and brand design into one reliable engagement.
            </p>
          </div>

          {/* 4 Professional Service Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar, idx) => {
              const icons = [Code2, FileSpreadsheet, ShieldCheck, Palette];
              const IconComponent = icons[idx] || Code2;
              return (
                <Link
                  key={pillar.title}
                  to={pillar.link}
                  className="group bg-[#f9fafb] hover:bg-white border border-slate-200 hover:border-[#60a5fa] rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center mb-4 group-hover:bg-[#2563eb] group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#2563eb] transition-colors mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#2563eb] mb-2">
                      {pillar.subtitle}
                    </p>
                    <p className="text-xs text-[#4b5563] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#2563eb] group-hover:text-[#1d4ed8]">
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE SERVICE CATEGORIES PREVIEW */}
      <section 
        aria-labelledby="categories-section-title"
        className="py-16 lg:py-20 bg-[#f9fafb] border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-2 block">
                Full-Spectrum Services
              </span>
              <h2 id="categories-section-title" className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
                Designed to Simplify, Empower & Scale
              </h2>
              <p className="text-base text-[#4b5563] mt-2">
                Discover our specialized divisions engineered to handle your technology, tax compliance, and visual branding.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563eb] hover:text-[#1d4ed8] hover:underline shrink-0"
            >
              <span>View All Services Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Deep Service Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICE_CATEGORIES.map((category) => {
              return (
                <div 
                  key={category.key}
                  className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#2563eb]/10 text-[#2563eb] border border-[#2563eb]/20">
                        {category.badge}
                      </span>
                      <Link 
                        to={category.route}
                        className="text-xs font-semibold text-[#4b5563] hover:text-[#2563eb] flex items-center gap-1"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <h3 className="text-2xl font-bold text-[#111827] mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-[#4b5563] mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Sub-services breakdown list */}
                    <div className="space-y-2.5 mb-6">
                      {category.services.map((subService) => (
                        <div key={subService.id} className="flex items-start gap-2.5 text-xs text-[#1f2937]">
                          <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-[#111827]">{subService.title}: </span>
                            <span className="text-[#4b5563]">{subService.shortDescription}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={category.route}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#2563eb] hover:text-[#1d4ed8] group"
                    >
                      <span>Explore {category.title}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button
                      onClick={onOpenConsultation}
                      className="text-xs font-semibold text-[#4b5563] hover:text-[#2563eb] py-1.5 px-3 rounded-lg hover:bg-[#f9fafb] transition-colors"
                    >
                      Quick Quote
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WORK PROCESS PREVIEW */}
      <section 
        aria-labelledby="process-section-title"
        className="py-16 lg:py-20 bg-white border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-2 block">
              Methodology & Execution
            </span>
            <h2 id="process-section-title" className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
              How We Work
            </h2>
            <p className="text-base text-[#4b5563]">
              A structured 6-stage delivery process ensuring transparent communication, verified quality, and lasting support.
            </p>
          </div>

          <ProcessTimeline />

          <div className="text-center mt-10">
            <Link
              to="/why-us"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2563eb] hover:text-[#1d4ed8] hover:underline"
            >
              <span>Learn more about our standards and why businesses choose us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CLIENT CTA BANNER */}
      <CTASection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

