import React, { useState } from 'react';
import { MARKETS, MarketSector } from '../data/companyData';
import {
  GraduationCap,
  Building2,
  HeartPulse,
  Church,
  Landmark,
  ArrowRight,
  CheckCircle,
  MapPin,
  Building,
} from 'lucide-react';

interface MarketsSectionProps {
  onNavigate: (tabId: string) => void;
  onOpenScopeBuilder: () => void;
}

export const MarketsSection: React.FC<MarketsSectionProps> = ({
  onNavigate,
  onOpenScopeBuilder,
}) => {
  const [activeMarketId, setActiveMarketId] = useState<string>('k12-schools');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#c31111]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#c31111]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#c31111]" />;
      case 'Church':
        return <Church className="w-5 h-5 text-[#c31111]" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#c31111]" />;
      default:
        return <Building className="w-5 h-5 text-[#c31111]" />;
    }
  };

  const activeMarket = MARKETS.find((m) => m.id === activeMarketId) || MARKETS[0];

  return (
    <section id="markets" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
            <span>Specialized Markets</span>
            <span aria-hidden="true">/</span>
            <span>70-Year Facility Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Engineered for High-Occupancy & Critical Public Facilities
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Every building category presents distinct acoustic, thermal, hygienic, and regulatory demands.
            From 400+ public school modernization projects to emergency dispatch operations, Premier delivers
            custom engineering solutions.
          </p>
        </div>

        {/* Market Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {MARKETS.map((market) => {
            const isSelected = activeMarketId === market.id;
            return (
              <button
                key={market.id}
                onClick={() => setActiveMarketId(market.id)}
                className={`p-4 rounded-lg text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-md ring-1 ring-neutral-900'
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-neutral-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2 rounded ${
                      isSelected ? 'bg-neutral-800' : 'bg-white border border-neutral-200'
                    }`}
                  >
                    {getIcon(market.iconName)}
                  </div>
                </div>
                <div>
                  <div
                    className={`text-xs font-bold leading-snug ${
                      isSelected ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {market.title}
                  </div>
                  <div
                    className={`text-[11px] mt-1 line-clamp-1 ${
                      isSelected ? 'text-neutral-300' : 'text-neutral-500'
                    }`}
                  >
                    {market.experienceStats.split('·')[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Market View */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c31111] font-bold uppercase tracking-wider">
                <span>{activeMarket.experienceStats}</span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 leading-tight">
                {activeMarket.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {activeMarket.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                  Technical Considerations & Sector Capabilities:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-700">
                  {activeMarket.specificExpertise.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded border border-neutral-200">
                      <CheckCircle className="w-4 h-4 text-[#c31111] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#c31111] hover:bg-[#a50d0d] rounded transition-colors"
                >
                  Consult on a {activeMarket.title} Project
                </button>
                <button
                  onClick={onOpenScopeBuilder}
                  className="px-4 py-2.5 text-xs font-medium text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-300 rounded hover:bg-neutral-50 transition-colors"
                >
                  Build Scope for this Facility
                </button>
              </div>
            </div>

            {/* Right Project Highlights Column */}
            <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-lg p-6 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                  Select Completed Projects
                </span>
                <span className="text-xs font-mono text-neutral-500">Verified PEG Scope</span>
              </div>

              <div className="space-y-4">
                {activeMarket.selectProjects.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3.5 rounded-md bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="text-xs font-bold text-neutral-900">{proj.name}</h5>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-500 shrink-0">
                        <MapPin className="w-3 h-3 text-[#c31111]" />
                        <span>{proj.location}</span>
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                      {proj.scope}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span>Want more case studies?</span>
                <button
                  onClick={() => onNavigate('projects')}
                  className="font-semibold text-[#c31111] hover:underline flex items-center gap-1"
                >
                  <span>Explore Project Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
