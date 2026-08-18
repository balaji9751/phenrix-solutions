import React, { useState } from 'react';
import { 
  FolderGit2, 
  Tag, 
  CheckCircle2, 
  X, 
  ArrowRight,
  Code2,
  FileSpreadsheet,
  Palette,
  Video,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';

interface PortfolioPageProps {
  onOpenConsultation: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'it' | 'tally' | 'creative' | 'video'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(p => p.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'it': return Code2;
      case 'tally': return FileSpreadsheet;
      case 'creative': return Palette;
      case 'video': return Video;
      default: return Code2;
    }
  };

  return (
    <div id="portfolio-page" className="w-full">
      {/* Page Header */}
      <PageHeader
        title="Our Portfolio & Projects"
        subtitle="Explore representative case studies, TDL customizations, corporate web platforms, and creative design works."
        badge="Demonstration Case Studies"
        breadcrumbs={[{ label: 'Portfolio' }]}
      />

      {/* Main Portfolio Showcase */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'bg-[#f9fafb] text-[#1f2937] border border-slate-200 hover:bg-slate-100'
              }`}
            >
              All Projects ({PORTFOLIO_ITEMS.length})
            </button>
            <button
              onClick={() => setActiveFilter('it')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeFilter === 'it'
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'bg-[#f9fafb] text-[#1f2937] border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Websites & IT
            </button>
            <button
              onClick={() => setActiveFilter('tally')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeFilter === 'tally'
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'bg-[#f9fafb] text-[#1f2937] border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Tally Solutions
            </button>
            <button
              onClick={() => setActiveFilter('creative')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeFilter === 'creative'
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'bg-[#f9fafb] text-[#1f2937] border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Creative & Design
            </button>
            <button
              onClick={() => setActiveFilter('video')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeFilter === 'video'
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'bg-[#f9fafb] text-[#1f2937] border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Video Editing
            </button>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);

              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className="bg-[#f9fafb] hover:bg-white rounded-2xl border border-slate-200 hover:border-[#60a5fa] p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Card Header */}
                    <div className="h-36 rounded-xl bg-gradient-to-br from-[#111827] to-[#1f2937] p-5 flex flex-col justify-between text-white relative overflow-hidden mb-5">
                      <div className="flex items-center justify-between z-10">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-white border border-white/20">
                          {project.categoryLabel}
                        </span>
                        <div className="p-1.5 rounded-lg bg-white/10 text-white">
                          <CategoryIcon className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="z-10">
                        <p className="text-[11px] text-[#93c5fd] font-medium tracking-wide">
                          {project.clientIndustry}
                        </p>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#2563eb] transition-colors mb-2 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#4b5563] leading-relaxed mb-4 line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-medium px-2 py-0.5 bg-white border border-slate-200 rounded text-[#4b5563]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[10px] font-semibold text-[#4b5563]">Case Study</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Demonstration Notice */}
          <div className="mt-12 text-center text-xs text-[#4b5563] bg-[#f9fafb] border border-slate-200 rounded-xl p-4 max-w-2xl mx-auto">
            <span className="font-semibold text-[#111827]">Notice: </span>
            The case studies above are curated representative demonstrations illustrating Phenrix Solutions' engineering and design capabilities. Client proprietary data is safeguarded under strict NDAs.
          </div>

        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#2563eb]/10 text-[#2563eb] border border-[#2563eb]/20 uppercase tracking-wider">
                {selectedProject.categoryLabel}
              </span>
              <span className="text-xs text-[#4b5563] ml-2">
                {selectedProject.clientIndustry}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#111827] mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-[#1f2937] leading-relaxed mb-6">
              {selectedProject.fullDescription}
            </p>

            {/* Metrics highlight */}
            {selectedProject.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[#f9fafb] border border-slate-200 text-center">
                {selectedProject.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-2 sm:p-0">
                    <p className="text-lg sm:text-base font-extrabold text-[#2563eb]">{m.value}</p>
                    <p className="text-xs sm:text-[11px] font-semibold text-[#4b5563]">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#f9fafb] p-4 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
                  The Challenge
                </h4>
                <p className="text-xs text-[#4b5563] leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              <div className="bg-[#f9fafb] p-4 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
                  Our Engineered Solution
                </h4>
                <p className="text-xs text-[#4b5563] leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-3">
                Key Project Deliverables
              </h4>
              <ul className="space-y-2">
                {selectedProject.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs text-[#1f2937]">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-[#1f2937] text-xs font-semibold hover:bg-slate-50"
              >
                Close Case Study
              </button>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss a Similar Project</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <CTASection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

