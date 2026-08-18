import React from 'react';
import { 
  Award, 
  Sliders, 
  LifeBuoy, 
  CheckCircle2, 
  Eye, 
  Boxes, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import { WHY_US_ITEMS } from '../data/companyData';
import { PageHeader } from '../components/common/PageHeader';
import { ProcessTimeline } from '../components/common/ProcessTimeline';
import { CTASection } from '../components/common/CTASection';

interface WhyUsPageProps {
  onOpenConsultation: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return Award;
      case 'Sliders': return Sliders;
      case 'LifeBuoy': return LifeBuoy;
      case 'CheckCircle2': return CheckCircle2;
      case 'Eye': return Eye;
      case 'Boxes': return Boxes;
      default: return Award;
    }
  };

  return (
    <div id="why-us-page" className="w-full">
      {/* Page Header */}
      <PageHeader
        title="Why Choose Phenrix Solutions?"
        subtitle="Discover our core differentiators, quality commitments, and structured execution process."
        badge="The Phenrix Advantage"
        breadcrumbs={[{ label: 'Why Choose Us' }]}
      />

      {/* 6 Value Cards Section */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-2 block">
              Built on Reliability & Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
              Six Pillars of Our Client Commitment
            </h2>
            <p className="text-base text-[#4b5563] leading-relaxed">
              We eliminate vendor fragmentation by pairing enterprise-grade technology engineering with dedicated compliance management and high-caliber creative design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US_ITEMS.map((item, idx) => {
              const Icon = getIcon(item.iconName);
              return (
                <div
                  key={item.title}
                  className="bg-[#f9fafb] hover:bg-white border border-slate-200 hover:border-[#60a5fa] rounded-2xl p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-[#2563eb] border border-slate-200">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#111827] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#4b5563] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center text-xs font-semibold text-[#2563eb]">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#10b981]" />
                    <span>Guaranteed Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Structured Work Process Section */}
      <section className="py-16 lg:py-20 bg-[#f9fafb] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-2 block">
              Execution Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
              How We Work
            </h2>
            <p className="text-base text-[#4b5563] leading-relaxed">
              Every engagement follows our systematic 6-step workflow, ensuring complete clarity, milestone-driven development, and post-delivery peace of mind.
            </p>
          </div>

          <ProcessTimeline />

          {/* SLA Reassurance Card */}
          <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-8 max-w-4xl mx-auto shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="md:pr-4">
                <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider block mb-1">
                  Clarity & Scope
                </span>
                <h4 className="font-bold text-[#111827] text-sm mb-1">Transparent Milestones</h4>
                <p className="text-xs text-[#4b5563]">Detailed deliverables defined before project kickoff with no hidden fees.</p>
              </div>

              <div className="pt-4 md:pt-0 md:px-4">
                <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider block mb-1">
                  Quality Assurance
                </span>
                <h4 className="font-bold text-[#111827] text-sm mb-1">Strict Review Protocols</h4>
                <p className="text-xs text-[#4b5563]">Multi-point testing, code validation, and tax reconciliation before delivery.</p>
              </div>

              <div className="pt-4 md:pt-0 md:pl-4">
                <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider block mb-1">
                  Service Continuity
                </span>
                <h4 className="font-bold text-[#111827] text-sm mb-1">Direct Accountability</h4>
                <p className="text-xs text-[#4b5563]">Ongoing operational support, TDL maintenance, and timely compliance filings.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

