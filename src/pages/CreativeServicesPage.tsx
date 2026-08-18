import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Video, 
  Image as ImageIcon, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  Film,
  MonitorPlay,
  FileCheck,
  Zap,
  Calendar
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';

interface CreativeServicesPageProps {
  onOpenConsultation: () => void;
}

export const CreativeServicesPage: React.FC<CreativeServicesPageProps> = ({ onOpenConsultation }) => {
  const creativeCategory = SERVICE_CATEGORIES.find(c => c.key === 'creative')!;

  const subServiceIcons: Record<string, any> = {
    'logo-making': Palette,
    'video-editing': Video,
    'poster-making': ImageIcon
  };

  // Sample creative works for preview area
  const creativeSamples = PORTFOLIO_ITEMS.filter(
    item => item.category === 'creative' || item.category === 'video'
  );

  return (
    <div id="creative-services-page" className="w-full">
      {/* Page Header */}
      <PageHeader
        title="Creative & Editing Services"
        subtitle="Build a stronger visual identity with professional creative and digital content solutions."
        badge="Brand Identity & Digital Media"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Creative & Editing Services' }
        ]}
      />

      {/* Overview Banner */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f9fafb] rounded-2xl p-8 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#2563eb] border border-slate-200 uppercase tracking-wider">
                Compelling Visual Design
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
                Memorable Branding, High-Impact Posters & Engaging Videos
              </h2>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Elevate how your brand communicates. We craft vector logo marks, print-ready marketing posters, and dynamic video edits tailored for digital platforms and corporate marketing campaigns.
              </p>
            </div>
            
            <div className="shrink-0">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Start Your Creative Project</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Creative Services */}
      <section className="py-16 bg-[#f9fafb] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-2">
              Our Creative Capabilities
            </h3>
            <p className="text-sm text-[#4b5563]">
              Precision design and post-production services delivered on time with full commercial rights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {creativeCategory.services.map((service, idx) => {
              const Icon = subServiceIcons[service.id] || Palette;

              return (
                <div 
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-md hover:border-[#60a5fa] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider block mb-1">
                      Division 0{idx + 1}
                    </span>

                    <h4 className="text-xl font-bold text-[#111827] mb-3">
                      {service.title}
                    </h4>

                    <p className="text-sm text-[#4b5563] mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-bold text-[#4b5563] uppercase tracking-wider">
                        Included Features:
                      </p>
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#1f2937]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563eb] hover:text-[#1d4ed8]"
                    >
                      <span>Inquire for {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Creative Portfolio Preview Showcase */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-2 block">
                Portfolio Showcase Preview
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                Sample Creative Works & Case Studies
              </h3>
              <p className="text-sm text-[#4b5563] mt-1">
                Representative project demonstrations across branding, video post-production, and promotional posters.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563eb] hover:text-[#1d4ed8] hover:underline shrink-0"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creativeSamples.map((sample) => (
              <div 
                key={sample.id}
                className="bg-[#f9fafb] rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white text-[#2563eb] border border-slate-200">
                      {sample.categoryLabel}
                    </span>
                    <span className="text-[11px] text-[#4b5563] font-medium">Demonstration</span>
                  </div>

                  <h4 className="text-base font-bold text-[#111827] mb-2">
                    {sample.title}
                  </h4>

                  <p className="text-xs text-[#4b5563] mb-4 leading-relaxed line-clamp-3">
                    {sample.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {sample.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-semibold px-2 py-0.5 bg-white border border-slate-200 rounded-md text-[#4b5563]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    to="/portfolio"
                    className="text-xs font-bold text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="py-14 bg-[#2563eb] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to Elevate Your Brand's Visual Identity?
          </h2>
          <p className="text-blue-100 text-base mb-6 max-w-xl mx-auto">
            Let’s craft a distinctive logo, polish your corporate marketing videos, or design striking promotional posters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#2563eb] hover:bg-[#f9fafb] font-bold px-7 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#2563eb]" />
              <span>Start Your Creative Project</span>
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white border border-[#60a5fa] font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              <span>Contact Creative Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

