import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: () => void;
  title?: string;
  description?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenConsultation,
  title = "Have a Project in Mind?",
  description = "Let’s discuss your requirements and find the right solution for your business."
}) => {
  return (
    <section aria-labelledby="cta-heading" className="py-16 bg-[#f9fafb] border-y border-slate-200/90 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-5 shadow-xs border border-[#93c5fd]/50">
          <Calendar className="w-3.5 h-3.5 text-[#2563eb]" />
          <span>Tailored Business Solutions</span>
        </div>

        <h2 id="cta-heading" className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-[#4b5563] max-w-2xl mx-auto mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Get a Free Consultation</span>
          </button>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f9fafb] text-[#1f2937] hover:text-[#2563eb] font-semibold text-base px-7 py-3.5 rounded-xl border border-slate-300 shadow-xs hover:border-[#60a5fa] transition-all duration-200"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Reassurance points */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-medium text-[#4b5563]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
            Zero Consultation Fees
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
            Prompt Requirement Review
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
            Confidential Business Discussion
          </span>
        </div>
      </div>
    </section>
  );
};

