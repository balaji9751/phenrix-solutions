import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Layers, 
  Server, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Terminal,
  Database,
  Cloud,
  Calendar
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';

interface ITServicesPageProps {
  onOpenConsultation: () => void;
}

export const ITServicesPage: React.FC<ITServicesPageProps> = ({ onOpenConsultation }) => {
  const itCategory = SERVICE_CATEGORIES.find(c => c.key === 'it')!;

  const subServiceIcons: Record<string, any> = {
    'it-products': Layers,
    'business-tech': Server,
    'digital-solutions': Globe,
    'custom-tech': Cpu
  };

  return (
    <div id="it-services-page" className="w-full">
      {/* Page Header */}
      <PageHeader
        title="IT Product Services"
        subtitle="Professional technology solutions designed to support your business operations and digital growth."
        badge="Technology & Cloud Engineering"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'IT Product Services' }
        ]}
      />

      {/* Overview Banner */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f9fafb] rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                Reliable Software Architecture for Growing Enterprises
              </h2>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                From internal operations software and administrative consoles to customer-facing web platforms, we engineer reliable digital systems built with modern web standards and security best practices.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-xs transition-colors shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Discuss IT Requirements</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 Dedicated IT Services */}
      <section className="py-16 bg-[#f9fafb] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {itCategory.services.map((service, index) => {
            const Icon = subServiceIcons[service.id] || Code2;

            return (
              <div 
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs hover:shadow-md transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider">Service 0{index + 1}</span>
                        <h3 className="text-2xl font-bold text-[#111827]">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-[#1f2937] leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Features list */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-[#4b5563] uppercase tracking-wider mb-3">
                        Key Capabilities & Engineering Scope:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-[#1f2937]">
                            <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Deliverables Box */}
                  <div className="lg:col-span-5 bg-[#f9fafb] rounded-xl p-6 border border-slate-200">
                    <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#2563eb]" />
                      Standard Deliverables
                    </h4>
                    
                    <ul className="space-y-2.5 mb-6">
                      {service.deliverables?.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-[#4b5563]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mt-1.5 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-xs font-medium text-[#4b5563]">Need this service?</span>
                      <button
                        onClick={onOpenConsultation}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#2563eb] hover:bg-[#1d4ed8] px-3.5 py-2 rounded-lg transition-colors"
                      >
                        <span>Inquire Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Tech Stack & Standards */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="text-2xl font-bold text-[#111827] mb-2">
              Modern Technology Standards
            </h3>
            <p className="text-sm text-[#4b5563]">
              We leverage reliable modern frameworks and secure database paradigms to guarantee responsiveness, uptime, and maintainability.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-[#f9fafb] border border-slate-200 text-center">
              <Terminal className="w-6 h-6 text-[#2563eb] mx-auto mb-2" />
              <h4 className="font-bold text-[#111827] text-sm">Modern Web</h4>
              <p className="text-[11px] text-[#4b5563] mt-1">React, Node, TypeScript</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f9fafb] border border-slate-200 text-center">
              <Database className="w-6 h-6 text-[#2563eb] mx-auto mb-2" />
              <h4 className="font-bold text-[#111827] text-sm">Robust Data</h4>
              <p className="text-[11px] text-[#4b5563] mt-1">PostgreSQL, Cloud SQL, REST</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f9fafb] border border-slate-200 text-center">
              <Cloud className="w-6 h-6 text-[#2563eb] mx-auto mb-2" />
              <h4 className="font-bold text-[#111827] text-sm">Cloud Scale</h4>
              <p className="text-[11px] text-[#4b5563] mt-1">GCP, Cloud Run, CDN</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f9fafb] border border-slate-200 text-center">
              <ShieldCheck className="w-6 h-6 text-[#2563eb] mx-auto mb-2" />
              <h4 className="font-bold text-[#111827] text-sm">Security First</h4>
              <p className="text-[11px] text-[#4b5563] mt-1">SSL, Role Auth, Audit Logs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

