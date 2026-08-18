import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  breadcrumbs = []
}) => {
  return (
    <div className="bg-[#f9fafb] border-b border-slate-200/80 pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-[#4b5563] mb-6 overflow-x-auto py-1">
          <Link to="/" className="hover:text-[#2563eb] flex items-center gap-1 shrink-0 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-[#2563eb] shrink-0 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#111827] font-semibold shrink-0" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-4 border border-[#2563eb]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
              {badge}
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

