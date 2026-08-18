import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICE_DROPDOWN_OPTIONS } from '../../data/servicesData';
import { Logo, PhenrixEmblem } from './Logo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'IT Product Services'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: defaultService,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // silent fallback
      }
    }, 500);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceRequired: defaultService,
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 text-[#4b5563] hover:text-[#111827] rounded-lg hover:bg-[#f9fafb] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-[#2563eb]/10 text-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#2563eb]/20">
              <CheckCircle2 className="w-9 h-9 text-[#10b981]" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-2">
              Consultation Request Received
            </h3>
            <p className="text-sm text-[#4b5563] mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-[#111827]">{formData.fullName || 'Valued Client'}</span>. A specialist at <span className="font-semibold text-[#2563eb]">Phenrix Solutions</span> will review your requirements for <span className="font-semibold text-[#111827]">{formData.serviceRequired}</span> and contact you within 2–4 business hours.
            </p>
            <div className="bg-[#f9fafb] border border-slate-200 rounded-xl p-4 mb-6 text-left text-xs text-[#4b5563] space-y-1.5">
              <p><span className="font-semibold text-[#111827]">Service Requested:</span> {formData.serviceRequired}</p>
              <p><span className="font-semibold text-[#111827]">Contact Details:</span> {formData.phone || formData.email}</p>
              <p><span className="font-semibold text-[#111827]">Expected Follow-up:</span> 2–4 business hours</p>
            </div>
            <button
              onClick={handleResetAndClose}
              className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3 px-4 rounded-xl shadow-sm transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <Logo size="sm" variant="dark" />
              <span className="text-[10px] font-semibold text-[#475569] uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-full">
                Direct Consultation
              </span>
            </div>
            
            <h2 id="consultation-modal-title" className="text-xl font-bold text-[#111827] mb-1.5">
              Schedule a Free Consultation
            </h2>
            <p className="text-sm text-[#4b5563] mb-5">
              Discuss your IT software, Tally TDL, GST tax compliance, or creative design needs with our team.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1f2937] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#f9fafb] border border-slate-300 rounded-lg text-sm text-[#111827] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1f2937] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#f9fafb] border border-slate-300 rounded-lg text-sm text-[#111827] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1f2937] uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#f9fafb] border border-slate-300 rounded-lg text-sm text-[#111827] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1f2937] uppercase tracking-wider mb-1.5">
                  Primary Service Required *
                </label>
                <select
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#f9fafb] border border-slate-300 rounded-lg text-sm text-[#111827] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                >
                  {SERVICE_DROPDOWN_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1f2937] uppercase tracking-wider mb-1.5">
                  Brief Requirement Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us a little about your project or current operational challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#f9fafb] border border-slate-300 rounded-lg text-sm text-[#111827] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3 px-4 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[#4b5563] text-xs text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Your information is strictly protected under our client confidentiality policy.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

