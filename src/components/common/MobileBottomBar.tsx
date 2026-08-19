import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Layers, 
  Briefcase, 
  Calendar, 
  PhoneCall, 
  Mail 
} from 'lucide-react';

interface MobileBottomBarProps {
  onOpenConsultation: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenConsultation }) => {
  const location = useLocation();

  const isCurrent = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div 
      id="mobile-bottom-navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] px-2 py-1.5 pb-safe"
      aria-label="Mobile Navigation Bar"
    >
      <div className="grid grid-cols-5 items-center justify-around text-center max-w-md mx-auto">
        {/* 1. Home */}
        <Link
          to="/"
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors ${
            isCurrent('/') ? 'text-[#2563eb]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold leading-tight">Home</span>
        </Link>

        {/* 2. Services */}
        <Link
          to="/services"
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors ${
            isCurrent('/services') ? 'text-[#2563eb]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Layers className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold leading-tight">Services</span>
        </Link>

        {/* 3. Center Call-to-Action: Consultation */}
        <div className="flex flex-col items-center justify-center -mt-4">
          <button
            onClick={onOpenConsultation}
            className="w-12 h-12 rounded-full bg-linear-to-tr from-[#2563eb] to-[#00C5E5] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 active:scale-95 transition-transform border-2 border-white"
            aria-label="Request Free Consultation"
          >
            <Calendar className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-bold text-[#2563eb] mt-0.5 leading-tight">Consult</span>
        </div>

        {/* 4. Portfolio */}
        <Link
          to="/portfolio"
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors ${
            isCurrent('/portfolio') ? 'text-[#2563eb]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Briefcase className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold leading-tight">Portfolio</span>
        </Link>

        {/* 5. Contact */}
        <Link
          to="/contact"
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors ${
            isCurrent('/contact') ? 'text-[#2563eb]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <PhoneCall className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold leading-tight">Contact</span>
        </Link>
      </div>
    </div>
  );
};
