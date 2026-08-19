import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSpreadsheet, 
  FileCode2, 
  Headphones, 
  Settings2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Server,
  Cloud,
  FileCheck,
  Lock,
  QrCode,
  Calendar
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';

interface TallyServicesPageProps {
  onOpenConsultation: () => void;
}

export const TallyServicesPage: React.FC<TallyServicesPageProps> = ({ onOpenConsultation }) => {
  const tallyCategory = SERVICE_CATEGORIES.find(c => c.key === 'tally')!;

  const subServiceIcons: Record<string, any> = {
    'tdl-customisation': FileCode2,
    'tally-support': Headphones,
    'tally-services': Settings2
  };

  return (
    <div id="tally-services-page" className="w-full">
      {/* Page Header */}
      <PageHeader
        title="Tally Solutions"
        subtitle="Professional Tally solutions including customization, support and services to improve your accounting workflow."
        badge="Accounting & ERP Engineering"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Tally Solutions' }
        ]}
      />

      {/* Main Feature Highlight */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f9fafb] rounded-2xl p-8 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#2563eb] border border-slate-200 uppercase tracking-wider">
                Tally Definition Language (TDL) & Support
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
                Enhance Tally’s Capabilities with Custom TDL
              </h2>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Standard Tally is versatile, but tailored TDL customization adapts it directly to your business workflow. Eliminate duplicate manual entries, enforce voucher approvals, auto-print dynamic QR/barcodes, and sync branch data securely.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-xs transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Need Tally Assistance? Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Tally Service Cards */}
      <section className="py-16 bg-[#f9fafb] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold text-[#111827] mb-2">
              Our Core Tally Services
            </h3>
            <p className="text-sm text-[#4b5563]">
              Select the specific Tally module or support plan tailored to your organization's accounting structure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tallyCategory.services.map((service, idx) => {
              const Icon = subServiceIcons[service.id] || FileSpreadsheet;

              return (
                <div 
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-md hover:border-[#60a5fa] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider block mb-1">
                      Module 0{idx + 1}
                    </span>

                    <h3 className="text-xl font-bold text-[#111827] mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#4b5563] mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-bold text-[#4b5563] uppercase tracking-wider">
                        Key Capabilities:
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

      {/* TDL Capabilities Breakdown Showcase */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-2 block">
              Specialized Engineering Scope
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-3">
              What We Can Build in Your Tally
            </h3>
            <p className="text-sm sm:text-base text-[#4b5563]">
              Explore common customizations implemented across manufacturing, retail, trading, and logistics sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[#f9fafb] border border-slate-200">
              <FileCheck className="w-6 h-6 text-[#2563eb] mb-3" />
              <h4 className="font-bold text-[#111827] text-sm mb-1.5">Custom Invoices & POs</h4>
              <p className="text-xs text-[#4b5563]">Customized layout designs, company watermark, bank details, multi-currency terms, and legal declarations.</p>
            </div>

            <div className="p-5 rounded-xl bg-[#f9fafb] border border-slate-200">
              <Lock className="w-6 h-6 text-[#2563eb] mb-3" />
              <h4 className="font-bold text-[#111827] text-sm mb-1.5">Voucher Approval Matrix</h4>
              <p className="text-xs text-[#4b5563]">Multi-level authorization locks on Purchase, Sales & Payment vouchers before final ledger posting.</p>
            </div>

            <div className="p-5 rounded-xl bg-[#f9fafb] border border-slate-200">
              <QrCode className="w-6 h-6 text-[#2563eb] mb-3" />
              <h4 className="font-bold text-[#111827] text-sm mb-1.5">Dynamic QR & Barcode</h4>
              <p className="text-xs text-[#4b5563]">Instant UPI payment QR codes on bills and automatic barcode label printing directly from stock items.</p>
            </div>


          </div>
        </div>
      </section>

      {/* Prominent Direct CTA */}
      <section className="py-14 bg-[#2563eb] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Need Immediate Tally Support or Custom TDL?
          </h2>
          <p className="text-blue-100 text-base mb-6 max-w-xl mx-auto">
            Contact our Tally specialists today to troubleshoot errors, configure cloud access, or request a customized format quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#2563eb] hover:bg-[#f9fafb] font-bold px-7 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#2563eb]" />
              <span>Need Tally Assistance? Contact Us</span>
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white border border-[#60a5fa] font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              <span>Submit Detailed Inquiry</span>
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

