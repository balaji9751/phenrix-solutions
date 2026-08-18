import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowUpRight,
  Calendar
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { Logo } from './Logo';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer id="site-footer" className="bg-[#111827] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group focus:outline-none focus:ring-2 focus:ring-[#2563eb] rounded-lg">
              <Logo size="md" variant="light" />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Delivering reliable IT software development, Tally TDL customization and support, GST & business compliance services, and creative design under one trusted firm.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-slate-800 hover:bg-[#2563eb] px-3.5 py-2 rounded-lg border border-slate-700 transition-colors duration-200"
              >
                <Calendar className="w-3.5 h-3.5 text-[#60a5fa]" />
                <span>Request Free Consultation</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                  <span>About Phenrix Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                  <span>All Services</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Portfolio & Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Why Choose Us & Process</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Contact & Inquiry</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/it" className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>IT Product Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#60a5fa]" />
                </Link>
              </li>
              <li>
                <Link to="/services/tally" className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Tally Solutions & TDL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#60a5fa]" />
                </Link>
              </li>
              <li>
                <Link to="/services/gst" className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>GST & Business Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#60a5fa]" />
                </Link>
              </li>
              <li>
                <Link to="/services/creative" className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Creative & Editing Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#60a5fa]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
              Contact & Hours
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Official Inquiries</p>
                  <p className="text-slate-300">{COMPANY_INFO.contact.emailPlaceholder}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Direct Line</p>
                  <p className="text-slate-300">{COMPANY_INFO.contact.phonePlaceholder}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Office Location</p>
                  <p className="text-slate-300">{COMPANY_INFO.contact.locationPlaceholder}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Business Schedule</p>
                  <p className="text-slate-300">{COMPANY_INFO.contact.hoursPlaceholder}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Phenrix Solutions. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

