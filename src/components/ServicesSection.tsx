import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/companyData';
import { ArrowRight, Check, X, Sliders, ShieldCheck, FileCheck, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (tabId: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.discipline === activeCategory);

  return (
    <section id="services" className="py-20 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
            <span>Core Disciplines</span>
            <span aria-hidden="true">/</span>
            <span>Comprehensive MEP/FP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Comprehensive Mechanical, Electrical, Plumbing & Fire Protection
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Premier Engineering Group delivers fully coordinated engineering documents designed for physical
            and technical longevity. We evaluate life-cycle cost, energy conservation, constructability, and
            facility maintenance needs on every commission.
          </p>

          {/* Interactive filter tabs (Buttons allowed for functional filter controls per guidelines) */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors ${
                activeCategory === 'all'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-300'
              }`}
            >
              All Disciplines (4)
            </button>
            <button
              onClick={() => setActiveCategory('mechanical')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors ${
                activeCategory === 'mechanical'
                  ? 'bg-[#c31111] text-white shadow-sm'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-300'
              }`}
            >
              Mechanical (HVAC)
            </button>
            <button
              onClick={() => setActiveCategory('electrical')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors ${
                activeCategory === 'electrical'
                  ? 'bg-[#c31111] text-white shadow-sm'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-300'
              }`}
            >
              Electrical
            </button>
            <button
              onClick={() => setActiveCategory('plumbing')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors ${
                activeCategory === 'plumbing'
                  ? 'bg-[#c31111] text-white shadow-sm'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-300'
              }`}
            >
              Plumbing
            </button>
            <button
              onClick={() => setActiveCategory('fire_protection')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors ${
                activeCategory === 'fire_protection'
                  ? 'bg-[#c31111] text-white shadow-sm'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-300'
              }`}
            >
              Fire Alarm / Protection
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => {
            const editorialIndex = `0${index + 1}.`;
            return (
              <div
                key={service.id}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                {/* Image slot with styled fallback container */}
                <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1">
                      {editorialIndex} Discipline Overview
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white">{service.title}</h3>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="border-t border-neutral-100 pt-4 mb-4">
                      <div className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2.5">
                        Core Engineering Scope:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-600">
                        {service.coreCapabilities.slice(0, 6).map((cap, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c31111] shrink-0 mt-1.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-neutral-50 rounded p-3 text-xs text-neutral-600 border border-neutral-200">
                      <span className="font-semibold text-neutral-800">Codes & Standards: </span>
                      {service.codesAndStandards.join(' · ')}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-[#c31111] hover:text-[#a50d0d] flex items-center gap-1.5 transition-colors focus:outline-none"
                    >
                      <span>View Detailed Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-3 py-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded transition-colors"
                    >
                      Inquire for Project
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Phase-Level Engineering Approach Strip */}
        <div className="mt-16 bg-white border border-neutral-200 rounded-lg p-8 shadow-sm">
          <div className="max-w-2xl mb-6">
            <h3 className="text-lg font-bold text-neutral-900">
              Our Project Execution & Verification Lifecycle
            </h3>
            <p className="mt-1 text-sm text-neutral-600">
              Unlike firms that hand off design intent to contractors, Premier maintains active field presence
              through construction completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            <div className="pt-4 md:pt-0 md:pr-4 first:pl-0">
              <div className="text-xs font-mono font-bold text-[#c31111] uppercase tracking-wider mb-1">
                Phase 01
              </div>
              <h4 className="text-sm font-bold text-neutral-900">Site Survey & Load Profiling</h4>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                Physical field verification of existing conditions, spatial utility limitations, and hourly
                building load simulations.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <div className="text-xs font-mono font-bold text-[#c31111] uppercase tracking-wider mb-1">
                Phase 02
              </div>
              <h4 className="text-sm font-bold text-neutral-900">Coordinated Construction Documents</h4>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                Clash-free plans, electrical panel schedules, plumbing risers, and tight specifications
                protecting the owner from costly change orders.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <div className="text-xs font-mono font-bold text-[#c31111] uppercase tracking-wider mb-1">
                Phase 03
              </div>
              <h4 className="text-sm font-bold text-neutral-900">Public Bidding & AHJ Permitting</h4>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                Responding to contractor RFIs, preparing bid addenda, and expediting municipal code review
                approvals with DCA and local subcode officials.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pl-4">
              <div className="text-xs font-mono font-bold text-[#c31111] uppercase tracking-wider mb-1">
                Phase 04
              </div>
              <h4 className="text-sm font-bold text-neutral-900">Construction Field Administration</h4>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                Submittal reviews, field observation visits, punch lists, and witnessing commissioning to ensure
                operating systems perform as designed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200">
            <div className="relative h-44 bg-neutral-900 overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover object-center opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors"
                aria-label="Close technical details"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-mono text-[#c31111] uppercase tracking-wider font-semibold">
                  Engineering Specification
                </span>
                <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  Engineering Scope & System Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                  {selectedService.coreCapabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 bg-neutral-50 p-2 rounded border border-neutral-100">
                      <Check className="w-3.5 h-3.5 text-[#c31111] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  Governing Codes & Industry Compliance
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.codesAndStandards.map((code, i) => (
                    <span
                      key={i}
                      className="text-xs bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded border border-neutral-200 font-mono"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1.5">
                  PEG Engineering Intent
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-100 rounded"
                >
                  Close Specification
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onNavigate('contact');
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#c31111] hover:bg-[#a50d0d] rounded transition-colors"
                >
                  Request Proposal for this Discipline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
