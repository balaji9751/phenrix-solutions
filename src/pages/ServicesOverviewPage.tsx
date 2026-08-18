import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  FileSpreadsheet, 
  ShieldCheck, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  HelpCircle,
  Calendar
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';

interface ServicesOverviewPageProps {
  onOpenConsultation: () => void;
}

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({ onOpenConsultation }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'it' | 'tally' | 'gst' | 'creative'>('all');

  const filteredCategories = selectedFilter === 'all' 
    ? SERVICE_CATEGORIES 
    : SERVICE_CATEGORIES.filter(c => c.key === selectedFilter);

  return (
    <div id="services-overview-page" className="w-full">
      {/* Page Header */}
      <PageHeader
        title="Our Professional Services"
        subtitle="Everything your business needs to operate, grow and build a stronger digital presence."
        badge="Complete Solutions Catalog"
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Services Grid Section */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                selectedFilter === 'all'
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'bg-[#f9fafb] text-[#1f2937] border border-slate-200 hover:bg-slate-100'
              }`}
            >
              All Categories (4)
            </button>
            <button
              onClick={() => setSelectedFilter('it')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                selectedFilter === 'it'
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'bg-[#f9fafb] text-[#1f2937] border border-slate-200 hover:bg-slate-100'
              }`}
            >
              IT Product Services
            </button>
            <button
              onClick={() => setSelectedFilter('tally')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                selectedFilter === 'tally'
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'bg-[#f9fafb] text-[#1f2937] border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Tally Solutions
            </button>
            <button
              onClick={() => setSelectedFilter('gst')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                selectedFilter === 'gst'
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'bg-[#f9fafb] text-[#1f2937] border border-slate-200 hover:bg-slate-100'
              }`}
            >
              GST & Business Services
            </button>
            <button
              onClick={() => setSelectedFilter('creative')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                selectedFilter === 'creative'
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'bg-[#f9fafb] text-[#1f2937] border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Creative & Editing
            </button>
          </div>

          {/* Categories Detailed Cards */}
          <div className="space-y-12">
            {filteredCategories.map((category) => {
              const icons = {
                it: Code2,
                tally: FileSpreadsheet,
                gst: ShieldCheck,
                creative: Palette
              };
              const CategoryIcon = icons[category.key] || Layers;

              return (
                <div 
                  key={category.key}
                  id={`category-${category.key}`}
                  className="bg-[#f9fafb] rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 pb-6 border-b border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <CategoryIcon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#2563eb]/10 text-[#2563eb] border border-[#2563eb]/20">
                            {category.badge}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
                          {category.title}
                        </h2>
                        <p className="text-sm font-medium text-[#2563eb] mt-1">
                          {category.tagline}
                        </p>
                        <p className="text-sm text-[#4b5563] mt-2 max-w-2xl">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <Link
                        to={category.route}
                        className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Subservices Grid */}
                  <div>
                    <h3 className="text-xs font-bold text-[#4b5563] uppercase tracking-wider mb-4">
                      Included Specialized Offerings
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.services.map((sub) => (
                        <div 
                          key={sub.id}
                          className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-[#60a5fa] transition-colors"
                        >
                          <div>
                            <h4 className="font-bold text-[#111827] text-base mb-2">
                              {sub.title}
                            </h4>
                            <p className="text-xs text-[#4b5563] mb-4 leading-relaxed">
                              {sub.shortDescription}
                            </p>
                            <ul className="space-y-1.5 mb-4">
                              {sub.features.slice(0, 3).map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-2 text-xs text-[#1f2937]">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <Link
                              to={category.route}
                              className="text-xs font-bold text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1"
                            >
                              <span>View Details</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                            <button
                              onClick={onOpenConsultation}
                              className="text-xs font-semibold text-[#4b5563] hover:text-[#2563eb]"
                            >
                              Inquire
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Selection Guide Card */}
          <div className="mt-16 bg-[#f9fafb] rounded-2xl border border-slate-200 p-8 text-center max-w-3xl mx-auto">
            <HelpCircle className="w-8 h-8 text-[#2563eb] mx-auto mb-3" />
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              Unsure Which Solution Fits Your Current Business Scale?
            </h3>
            <p className="text-sm text-[#4b5563] mb-6">
              Our specialists will evaluate your requirements and suggest an optimal package combining software, TDL, tax filing, and creative design.
            </p>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-xs transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Free Requirement Assessment</span>
            </button>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

