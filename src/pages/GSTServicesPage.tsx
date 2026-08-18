import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  BadgeCheck, 
  Building2, 
  Receipt, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  CalendarCheck,
  Calendar
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';

interface GSTServicesPageProps {
  onOpenConsultation: () => void;
}

export const GSTServicesPage: React.FC<GSTServicesPageProps> = ({ onOpenConsultation }) => {
  const gstCategory = SERVICE_CATEGORIES.find(c => c.key === 'gst')!;

  const subServiceIcons: Record<string, any> = {
    'gst-registration': BadgeCheck,
    'msme-registration': Building2,
    'gst-filing': Receipt,
    'it-filing': Calculator
  };

  return (
    <div id="gst-services-page" className="w-full">
      {/* Page Header */}
      <PageHeader
        title="GST & Business Services"
        subtitle="Simplifying registrations, filings and essential business compliance."
        badge="Statutory Compliance & Taxation"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'GST & Business Services' }
        ]}
      />

      {/* Overview Banner */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f9fafb] rounded-2xl p-8 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#2563eb] border border-slate-200 uppercase tracking-wider">
                100% Timely Statutory Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
                Reliable Tax Filings & Corporate Registrations
              </h2>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Stay penalty-free and audit-ready. We handle your business registrations, monthly and quarterly GST returns, Input Tax Credit (ITC) reconciliations, and direct Income Tax filings with precision.
              </p>
            </div>
            
            <div className="shrink-0">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Get Business Compliance Support</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Premium Service Cards */}
      <section className="py-16 bg-[#f9fafb] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-2">
              Our Core Compliance Offerings
            </h3>
            <p className="text-sm text-[#4b5563]">
              Explore our four specialized business compliance and taxation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gstCategory.services.map((service, idx) => {
              const Icon = subServiceIcons[service.id] || ShieldCheck;

              return (
                <div 
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-md hover:border-[#60a5fa] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#4b5563] uppercase tracking-widest">
                        Service 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold text-[#111827] mb-2">
                      {service.title}
                    </h4>

                    <p className="text-sm text-[#4b5563] mb-6 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-bold text-[#4b5563] uppercase tracking-wider">
                        Included Scope:
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

      {/* Compliance Reassurance & Benefits */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-2 block">
              Why Businesses Rely on Us
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-3">
              Timely Tracking & Verified Reconciliations
            </h3>
            <p className="text-sm text-[#4b5563]">
              Tax deadlines and compliance requirements need systematic tracking and verified data matching.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#f9fafb] border border-slate-200 text-center">
              <CalendarCheck className="w-8 h-8 text-[#2563eb] mx-auto mb-3" />
              <h4 className="font-bold text-[#111827] text-base mb-1">Calendar Monitoring</h4>
              <p className="text-xs text-[#4b5563]">Proactive advance reminders before monthly GSTR-1, 3B, and annual filing deadlines.</p>
            </div>

            <div className="p-6 rounded-xl bg-[#f9fafb] border border-slate-200 text-center">
              <Receipt className="w-8 h-8 text-[#2563eb] mx-auto mb-3" />
              <h4 className="font-bold text-[#111827] text-base mb-1">GSTR-2B ITC Matching</h4>
              <p className="text-xs text-[#4b5563]">Comprehensive Input Tax Credit reconciliation to ensure you never miss legitimate tax credits.</p>
            </div>

            <div className="p-6 rounded-xl bg-[#f9fafb] border border-slate-200 text-center">
              <FileText className="w-8 h-8 text-[#2563eb] mx-auto mb-3" />
              <h4 className="font-bold text-[#111827] text-base mb-1">Audit-Ready Documentation</h4>
              <p className="text-xs text-[#4b5563]">Clean archived computation sheets and official ARN receipts delivered after every filing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Direct CTA */}
      <section className="py-14 bg-[#2563eb] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Simplify Your Business Compliance Today
          </h2>
          <p className="text-blue-100 text-base mb-6 max-w-xl mx-auto">
            Get prompt assistance with new GST/MSME registrations or streamline your regular monthly tax filings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#2563eb] hover:bg-[#f9fafb] font-bold px-7 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#2563eb]" />
              <span>Get Business Compliance Support</span>
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white border border-[#60a5fa] font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              <span>Contact Compliance Team</span>
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

