import React from 'react';
import { CLIENT_GROUPS, COMPANY_INFO } from '../data/companyData';
import { Download, FileText, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

interface ClientsSectionProps {
  onNavigate: (tabId: string) => void;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ onNavigate }) => {
  return (
    <section id="clients" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
            <span>Verified Client Relationships</span>
            <span aria-hidden="true">/</span>
            <span>Architectural & Public Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Trusted by Premier Architects, Municipalities & Institutions
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            The following represents a sampling of regional architects, public school boards, municipal
            governments, and private institutions for whom Premier Engineering Group has recently delivered
            engineering designs.
          </p>
        </div>

        {/* Client Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {CLIENT_GROUPS.map((group, gIdx) => (
            <div
              key={gIdx}
              className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#c31111]" />
                  <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-neutral-500 mb-4">{group.description}</p>

                <ul className="space-y-2 text-xs text-neutral-700">
                  {group.items.map((client, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2 bg-white p-2.5 rounded border border-neutral-200/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c31111] shrink-0 mt-0.5" />
                      <span className="font-medium text-neutral-800">{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Qualifications Package Download Banner */}
        <div className="bg-neutral-900 text-white rounded-xl p-8 sm:p-10 border border-neutral-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c31111] uppercase tracking-wider font-semibold">
                <FileText className="w-4 h-4" />
                <span>Official Engineering Qualifications Package (2025 Edition)</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Download the Complete 70-Year Project Catalog & Credentials
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                Access comprehensive project listings, engineering staff resumes, public sector prequalifications,
                certificate of insurance limits, and references across all 400+ completed commissions.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={COMPANY_INFO.qualificationsPackageUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-[#c31111] hover:bg-[#a50d0d] rounded transition-colors shadow-md text-center"
              >
                <Download className="w-4 h-4" />
                <span>Download Official PDF (634 KB)</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 text-xs font-medium text-neutral-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded transition-colors text-center"
              >
                Inquire on Upcoming RFP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
