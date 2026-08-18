import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  HeartHandshake, 
  CheckCircle2, 
  Boxes
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';
import { PhenrixEmblem } from '../components/common/Logo';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div id="about-page" className="w-full">
      {/* Page Header */}
      <PageHeader
        title="About Phenrix Solutions"
        subtitle="Simplifying technology, accounting software, compliance requirements, and digital branding for modern enterprises."
        badge="Company Overview"
        breadcrumbs={[{ label: 'About Phenrix Solutions' }]}
      />

      {/* Main Profile Story Section */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-xs font-bold uppercase tracking-wider border border-[#2563eb]/20">
                <Boxes className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>Single-Window Advantage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Built to Solve Real Business Operational Challenges
              </h2>

              <p className="text-base sm:text-lg text-[#1f2937] leading-relaxed">
                Phenrix Solutions is a dedicated professional services firm focused on helping businesses manage technology, business accounting software, compliance requirements, and digital branding.
              </p>

              <p className="text-base text-[#4b5563] leading-relaxed">
                We understand that growing businesses frequently face coordination challenges when dealing with separate vendors for web development, Tally customization, GST return filing, and graphic design. Phenrix Solutions brings these essential business capabilities together under one cohesive, accountable partner.
              </p>

              <p className="text-base text-[#4b5563] leading-relaxed">
                Our team provides practical, reliable, and customized services built specifically around client needs, ensuring dependable delivery and straightforward communication.
              </p>

              {/* Core 3 Pillars of Operation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#f9fafb] border border-slate-200">
                  <h4 className="font-bold text-[#111827] text-sm mb-1">Tailored Engineering</h4>
                  <p className="text-xs text-[#4b5563]">Bespoke software and TDL solutions engineered to fit your specific operational structure.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#f9fafb] border border-slate-200">
                  <h4 className="font-bold text-[#111827] text-sm mb-1">Statutory Accuracy</h4>
                  <p className="text-xs text-[#4b5563]">Zero-error GST, MSME, and direct tax return filings backed by verified compliance checks.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#f9fafb] border border-slate-200">
                  <h4 className="font-bold text-[#111827] text-sm mb-1">Brand Distinction</h4>
                  <p className="text-xs text-[#4b5563]">Professional vector branding and video editing that elevate your corporate presence.</p>
                </div>
              </div>
            </div>

            {/* Right Card Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-[#111827] text-white rounded-2xl p-8 shadow-xl relative overflow-hidden border border-slate-800">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <PhenrixEmblem size={36} className="w-9 h-9" />
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">Phenrix Capabilities</h3>
                    <span className="text-[11px] text-[#60a5fa] font-medium">Enterprise Integrated Matrix</span>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3 pb-3 border-b border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-[#60a5fa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">IT Product Solutions</strong>
                      <span className="text-xs text-slate-400">Enterprise web applications, database architectures, and digital systems.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 pb-3 border-b border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-[#60a5fa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">Tally ERP Customization</strong>
                      <span className="text-xs text-slate-400">TDL programming, voucher approval locks, barcode printing & Cloud Tally.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 pb-3 border-b border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-[#60a5fa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">GST & Business Filings</strong>
                      <span className="text-xs text-slate-400">GSTIN registrations, MSME certificates, GSTR-1, 3B, and Income Tax returns.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#60a5fa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">Creative & Video Production</strong>
                      <span className="text-xs text-slate-400">Vector logos, corporate marketing videos, posters, and brand assets.</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Ready to discuss your needs?</span>
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-bold text-white bg-[#2563eb] hover:bg-[#1d4ed8] px-3.5 py-2 rounded-lg transition-colors"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-[#f9fafb] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-2 block">
                Purpose & Commitment
              </span>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">
                Our Mission
              </h3>
              <p className="text-lg font-medium text-[#1f2937] leading-relaxed border-l-4 border-[#2563eb] pl-4 bg-[#f9fafb] py-3 rounded-r-lg">
                “{COMPANY_INFO.mission}”
              </p>
              <p className="text-sm text-[#4b5563] mt-4 leading-relaxed">
                We empower businesses by handling software operations, streamlining statutory compliance, and crafting high-impact digital assets so founders can focus on growing their core enterprise.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-2 block">
                Long-Term Outlook
              </span>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">
                Our Vision
              </h3>
              <p className="text-lg font-medium text-[#1f2937] leading-relaxed border-l-4 border-[#60a5fa] pl-4 bg-[#f9fafb] py-3 rounded-r-lg">
                “{COMPANY_INFO.vision}”
              </p>
              <p className="text-sm text-[#4b5563] mt-4 leading-relaxed">
                To set a high standard for integrated business services, where quality engineering, clear communication, and prompt client support are guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-2 block">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
              Our Core Values
            </h2>
            <p className="text-base text-[#4b5563]">
              The fundamental principles that guide every client interaction, TDL code deployment, tax filing, and creative project at Phenrix Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.values.map((val) => (
              <div
                key={val.title}
                className="bg-[#f9fafb] hover:bg-white border border-slate-200 hover:border-[#60a5fa] rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

