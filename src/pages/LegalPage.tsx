import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { ShieldCheck, FileText } from 'lucide-react';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  return (
    <div id="legal-page" className="w-full">
      <PageHeader
        title={activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
        subtitle="Review our commitment to data protection, client confidentiality, and professional service terms."
        badge="Legal & Compliance"
        breadcrumbs={[
          { label: activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions' }
        ]}
      />

      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Switcher */}
          <div className="flex border-b border-slate-200 mb-8">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`pb-4 px-6 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'privacy'
                  ? 'border-[#2563eb] text-[#2563eb]'
                  : 'border-transparent text-[#4b5563] hover:text-[#111827]'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setActiveTab('terms')}
              className={`pb-4 px-6 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'terms'
                  ? 'border-[#2563eb] text-[#2563eb]'
                  : 'border-transparent text-[#4b5563] hover:text-[#111827]'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Terms & Conditions</span>
            </button>
          </div>

          {/* Content Area */}
          <div className="prose prose-slate max-w-none text-[#4b5563] text-sm leading-relaxed space-y-6">
            {activeTab === 'privacy' ? (
              <>
                <div className="bg-[#f9fafb] p-4 rounded-xl border border-slate-200 mb-6">
                  <p className="text-xs text-[#2563eb] font-semibold">
                    Last Updated: 2026 • Phenrix Solutions Data Protection Protocols
                  </p>
                </div>

                <h3 className="text-lg font-bold text-[#111827]">1. Information We Collect</h3>
                <p>
                  Phenrix Solutions collects client-provided information exclusively to deliver IT, Tally, GST compliance, and creative design services. This includes contact details, business entity identifiers, GST numbers, and software configuration specifications submitted during consultations.
                </p>

                <h3 className="text-lg font-bold text-[#111827]">2. Confidentiality of Financial & Tax Data</h3>
                <p>
                  All accounting ledgers, Tally data files, GSTIN records, and tax returns entrusted to Phenrix Solutions are treated with strict confidentiality. Data is processed exclusively by authorized technical and statutory compliance personnel under formal Non-Disclosure Agreements (NDAs).
                </p>

                <h3 className="text-lg font-bold text-[#111827]">3. Non-Disclosure & Security</h3>
                <p>
                  We do not sell, lease, or distribute client data to third-party marketing brokers. Data transfers occur only with official government portals (such as the GST Portal, Income Tax e-Filing, and Udyam Portal) as legally mandated to fulfill requested filing services.
                </p>
              </>
            ) : (
              <>
                <div className="bg-[#f9fafb] p-4 rounded-xl border border-slate-200 mb-6">
                  <p className="text-xs text-[#2563eb] font-semibold">
                    Last Updated: 2026 • Phenrix Solutions Professional Service Terms
                  </p>
                </div>

                <h3 className="text-lg font-bold text-[#111827]">1. Service Scope & Agreements</h3>
                <p>
                  Phenrix Solutions provides software development, TDL customization, statutory filing, and creative design based on agreed project specifications. Each engagement is governed by transparent milestone deliverables.
                </p>

                <h3 className="text-lg font-bold text-[#111827]">2. Tally TDL & Software Deliverables</h3>
                <p>
                  Custom TDL files, web application source files, and database connectors are verified in the client's test environment prior to final sign-off. Post-delivery maintenance is supported under standard warranty or Annual Maintenance Contracts (AMC).
                </p>

                <h3 className="text-lg font-bold text-[#111827]">3. Creative Copyright & Transfer</h3>
                <p>
                  Upon full settlement of invoices, complete commercial ownership and intellectual property rights for custom logo vectors, finalized video master files, and promotional poster designs transfer unconditionally to the client.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

