import React from 'react';
import { 
  Compass, 
  FileText, 
  Cpu, 
  CheckSquare, 
  Send, 
  HeartHandshake 
} from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../../data/companyData';

export const ProcessTimeline: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'FileText': return FileText;
      case 'Cpu': return Cpu;
      case 'CheckSquare': return CheckSquare;
      case 'Send': return Send;
      case 'HeartHandshake': return HeartHandshake;
      default: return Compass;
    }
  };

  return (
    <div className="w-full">
      {/* Desktop Horizontal Process Timeline (lg+) */}
      <div className="hidden lg:block relative pt-4 pb-8">
        {/* Subtle connecting line */}
        <div className="absolute top-14 left-8 right-8 h-0.5 bg-[#93c5fd] -z-0" />

        <div className="grid grid-cols-6 gap-4 relative z-10">
          {WORK_PROCESS_STEPS.map((step) => {
            const Icon = getIcon(step.iconName);
            return (
              <div 
                key={step.number}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle with Icon and Number badge */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#2563eb] shadow-md group-hover:shadow-lg group-hover:border-[#1d4ed8] flex items-center justify-center text-[#2563eb] transition-all duration-200 group-hover:scale-105">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#2563eb] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                    {step.number}
                  </span>
                </div>

                {/* Step Title & Summary */}
                <h4 className="text-base font-bold text-[#111827] group-hover:text-[#2563eb] transition-colors">
                  {step.title}
                </h4>
                <span className="text-xs font-semibold text-[#2563eb] mb-2">
                  {step.summary}
                </span>

                {/* Step Description */}
                <p className="text-xs text-[#4b5563] leading-relaxed px-1">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tablet & Mobile Vertical Timeline (under lg) */}
      <div className="lg:hidden relative pl-6 border-l-2 border-[#60a5fa] space-y-8 my-4 ml-3">
        {WORK_PROCESS_STEPS.map((step) => {
          const Icon = getIcon(step.iconName);
          return (
            <div key={step.number} className="relative group">
              {/* Timeline Pin Node */}
              <div className="absolute -left-[37px] top-0 w-8 h-8 rounded-xl bg-[#2563eb] text-white text-xs font-bold flex items-center justify-center shadow-sm">
                {step.number}
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-[#2563eb]/10 text-[#2563eb]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#111827]">
                    {step.title} — <span className="text-sm font-semibold text-[#2563eb]">{step.summary}</span>
                  </h4>
                </div>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

