import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/companyData';
import { SERVICE_DROPDOWN_OPTIONS } from '../data/servicesData';
import { PageHeader } from '../components/common/PageHeader';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: 'IT Product Services',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // silent
      }
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceRequired: 'IT Product Services',
      message: ''
    });
  };

  return (
    <div id="contact-page" className="w-full">
      {/* Page Header */}
      <PageHeader
        title="Let’s Work Together"
        subtitle="Connect with our specialists for IT solutions, Tally customization, GST compliance, or creative design."
        badge="Inquiry & Support"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      {/* Main Contact Section */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-[#f9fafb] border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-[#2563eb]/10 text-[#2563eb] rounded-full flex items-center justify-center mx-auto border border-[#2563eb]/20">
                    <CheckCircle2 className="w-9 h-9 text-[#10b981]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827]">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-sm text-[#4b5563] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#111827]">{formData.fullName}</span>. Your enquiry for <span className="font-semibold text-[#2563eb]">{formData.serviceRequired}</span> has been logged with Phenrix Solutions.
                  </p>
                  
                  <div className="bg-white border border-slate-200 rounded-xl p-5 text-left text-xs text-[#4b5563] space-y-2 max-w-md mx-auto">
                    <p><span className="font-semibold text-[#111827]">Assigned Specialist:</span> Domain Consultant</p>
                    <p><span className="font-semibold text-[#111827]">Direct Contact:</span> {formData.phone || formData.email}</p>
                    <p><span className="font-semibold text-[#111827]">Expected Response:</span> Within 2–4 business hours</p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="mt-4 inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 text-[#2563eb] font-semibold text-xs uppercase tracking-wider mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Official Requirement Form</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-2">
                    Send Us an Enquiry
                  </h2>
                  <p className="text-sm text-[#4b5563] mb-8">
                    Fill out the details below and our team will get back to you with a structured proposal.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label 
                        htmlFor="contact-fullName"
                        className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Chandra"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all shadow-2xs"
                      />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label 
                          htmlFor="contact-email"
                          className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="name@business.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all shadow-2xs"
                        />
                      </div>

                      <div>
                        <label 
                          htmlFor="contact-phone"
                          className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Service Required Dropdown */}
                    <div>
                      <label 
                        htmlFor="contact-service"
                        className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5"
                      >
                        Service Required *
                      </label>
                      <select
                        id="contact-service"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all shadow-2xs"
                      >
                        {SERVICE_DROPDOWN_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label 
                        htmlFor="contact-message"
                        className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5"
                      >
                        Message / Project Scope *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="Please describe your requirements, current challenges, timeline, or specific questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all resize-none shadow-2xs"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        id="contact-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md shadow-[#2563eb]/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 disabled:opacity-70 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2"
                      >
                        {isSubmitting ? (
                          <span>Processing Enquiry...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[#4b5563] text-xs text-center pt-2">
                      <ShieldCheck className="w-4 h-4 text-[#2563eb] shrink-0" />
                      <span>Confidentiality assured. We never share your contact information.</span>
                    </div>
                  </form>
                </div>
              )}

            </div>

            {/* Right: Contact Information Cards (Placeholders) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
                <h3 className="text-lg font-bold text-[#111827] mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#2563eb]" />
                  Corporate Details
                </h3>

                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4b5563] uppercase tracking-wider">Phone Number</p>
                      <p className="text-sm font-semibold text-[#111827] mt-0.5">
                        {COMPANY_INFO.contact.phonePlaceholder}
                      </p>
                      <p className="text-[11px] text-[#4b5563]">Available during standard business hours</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4b5563] uppercase tracking-wider">Official Email</p>
                      <p className="text-sm font-semibold text-[#111827] mt-0.5">
                        {COMPANY_INFO.contact.emailPlaceholder}
                      </p>
                      <p className="text-[11px] text-[#4b5563]">For quotations and enterprise inquiries</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4b5563] uppercase tracking-wider">Operations Hub</p>
                      <p className="text-sm font-semibold text-[#111827] mt-0.5">
                        {COMPANY_INFO.contact.locationPlaceholder}
                      </p>
                      <p className="text-[11px] text-[#4b5563]">Serving clients nationwide with remote & on-site support</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4b5563] uppercase tracking-wider">Business Hours</p>
                      <p className="text-sm font-semibold text-[#111827] mt-0.5">
                        {COMPANY_INFO.contact.hoursPlaceholder}
                      </p>
                      <p className="text-[11px] text-[#4b5563]">{COMPANY_INFO.contact.responseTime}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQs Card */}
              <div className="bg-[#f9fafb] rounded-2xl border border-slate-200 p-6">
                <h4 className="text-sm font-bold text-[#111827] mb-3 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#2563eb]" />
                  Quick Inquiry Guidelines
                </h4>
                <ul className="space-y-2 text-xs text-[#4b5563]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mt-1.5 shrink-0" />
                    <span>For <strong>Tally Support & TDL</strong>, please specify your current Tally version (e.g. TallyPrime).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mt-1.5 shrink-0" />
                    <span>For <strong>GST / Income Tax</strong>, let us know if this is a fresh registration or ongoing return filing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mt-1.5 shrink-0" />
                    <span>For <strong>Creative / IT</strong>, attach any existing reference requirements in your notes.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

