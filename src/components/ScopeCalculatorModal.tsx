import React, { useState } from 'react';
import { X, Check, Calculator, Copy, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { MARKETS, SERVICES } from '../data/companyData';

interface ScopeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSendToContact: (scopeText: string) => void;
}

export const ScopeCalculatorModal: React.FC<ScopeCalculatorModalProps> = ({
  isOpen,
  onClose,
  onSendToContact,
}) => {
  const [facilityType, setFacilityType] = useState('k12');
  const [approxSqFt, setApproxSqFt] = useState('25000');
  const [projectType, setProjectType] = useState('renovation');
  const [timeline, setTimeline] = useState('summer');
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    'Mechanical (HVAC)',
    'Electrical',
    'Plumbing',
  ]);
  const [specialRequirements, setSpecialRequirements] = useState<string[]>([
    'Construction Field Administration',
  ]);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const toggleDiscipline = (disc: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(disc) ? prev.filter((d) => d !== disc) : [...prev, disc]
    );
  };

  const toggleSpecial = (req: string) => {
    setSpecialRequirements((prev) =>
      prev.includes(req) ? prev.filter((r) => r !== req) : [...prev, req]
    );
  };

  const generateScopeSummary = () => {
    const marketMap: Record<string, string> = {
      k12: 'K-12 Educational Facility',
      municipal: 'Municipal / Civic Complex',
      worship: 'Place of Worship / Historic Sanctuary',
      healthcare: 'Healthcare Suite / Clinical Lab',
      commercial: 'Commercial Banking / Office Facility',
    };

    return `PREMIER ENGINEERING GROUP — PROJECT SCOPE INQUIRY
Facility Classification: ${marketMap[facilityType] || facilityType}
Project Type: ${projectType === 'renovation' ? 'Modernization / Renovation' : 'New Greenfield Construction / Addition'}
Approximate Area: ${parseInt(approxSqFt || '0').toLocaleString()} sq. ft.
Target Execution Timeline: ${timeline === 'summer' ? 'Summer Recess Compressed Schedule' : timeline === 'fast_track' ? '6-Month Fast Track' : 'Phased Occupied Construction'}
Required MEP/FP Disciplines:
${selectedDisciplines.map((d) => `• ${d}`).join('\n')}
Special Engineering Provisions:
${specialRequirements.map((r) => `• ${r}`).join('\n')}
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateScopeSummary());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTransfer = () => {
    onSendToContact(generateScopeSummary());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-neutral-200">
        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-200 flex items-start justify-between bg-neutral-900 text-white rounded-t-xl">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c31111] uppercase tracking-wider font-semibold mb-1">
              <Calculator className="w-4 h-4" />
              <span>Interactive Engineering Tool</span>
            </div>
            <h3 className="text-xl font-bold text-white">Project Scope & RFP Estimator</h3>
            <p className="text-xs text-neutral-300 mt-1">
              Configure your facility criteria to generate a structured MEP/FP scope description.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close estimator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 text-xs sm:text-sm">
          {/* Step 1: Facility Type */}
          <div>
            <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
              1. Facility Classification
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'k12', label: 'K–12 School / District' },
                { id: 'municipal', label: 'Municipal / DPW / Police' },
                { id: 'worship', label: 'Place of Worship' },
                { id: 'healthcare', label: 'Healthcare / Imaging Clinic' },
                { id: 'commercial', label: 'Bank / Commercial Office' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFacilityType(item.id)}
                  className={`p-2.5 rounded text-left border transition-all text-xs ${
                    facilityType === item.id
                      ? 'border-[#c31111] bg-red-50/50 text-[#c31111] font-semibold ring-1 ring-[#c31111]'
                      : 'border-neutral-200 hover:bg-neutral-50 text-neutral-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Size & Project Scale */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1.5">
                2. Approximate Floor Area (Sq. Ft.)
              </label>
              <input
                type="number"
                value={approxSqFt}
                onChange={(e) => setApproxSqFt(e.target.value)}
                step="2500"
                min="1000"
                max="500000"
                className="w-full px-3 py-2 border border-neutral-300 rounded text-xs focus:outline-none focus:border-[#c31111] font-mono"
              />
              <span className="text-[11px] text-neutral-500 mt-1 block">
                Typical K-12 school: 45,000–120,000 sq.ft. / Branch bank: 4,000–12,000 sq.ft.
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1.5">
                3. Project Scope Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setProjectType('renovation')}
                  className={`p-2 rounded text-center border text-xs ${
                    projectType === 'renovation'
                      ? 'border-[#c31111] bg-red-50 text-[#c31111] font-semibold'
                      : 'border-neutral-200 text-neutral-700'
                  }`}
                >
                  Renovation / Retrofit
                </button>
                <button
                  type="button"
                  onClick={() => setProjectType('new')}
                  className={`p-2 rounded text-center border text-xs ${
                    projectType === 'new'
                      ? 'border-[#c31111] bg-red-50 text-[#c31111] font-semibold'
                      : 'border-neutral-200 text-neutral-700'
                  }`}
                >
                  New Addition / Build
                </button>
              </div>
            </div>
          </div>

          {/* Step 3: Required Disciplines */}
          <div>
            <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
              4. Engineering Disciplines Needed
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                { name: 'Mechanical (HVAC)', desc: 'Boilers, chillers, VRF, rooftop units, DOAS' },
                { name: 'Electrical', desc: 'Power distribution, lighting, emergency generators' },
                { name: 'Plumbing', desc: 'Domestic water, sanitary, gas lines, ADA restrooms' },
                { name: 'Fire Alarm & Protection', desc: 'Sprinkler risers, smoke control, NFPA 13/72' },
              ].map((disc) => {
                const isChecked = selectedDisciplines.includes(disc.name);
                return (
                  <button
                    key={disc.name}
                    type="button"
                    onClick={() => toggleDiscipline(disc.name)}
                    className={`p-3 rounded text-left border flex items-start gap-2.5 transition-all ${
                      isChecked
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#c31111] text-white' : 'border border-neutral-300 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div>
                      <div className="font-semibold text-xs">{disc.name}</div>
                      <div
                        className={`text-[11px] ${
                          isChecked ? 'text-neutral-300' : 'text-neutral-500'
                        }`}
                      >
                        {disc.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Special Requirements */}
          <div>
            <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
              5. Special Engineering Provisions
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                'Energy Savings Improvement Program (ESIP) Energy Audit',
                'Construction Field Administration & RFI Support',
                'Emergency Standby Generator & Automatic Transfer Switch',
                'STEM Lab, Maker Space or Fume Hood Ventilation',
                'NJSDA Public Bidding Specification Package',
                'Acoustic Attenuation / Ultra-Quiet Sanctuary Design',
              ].map((req) => {
                const isChecked = specialRequirements.includes(req);
                return (
                  <button
                    key={req}
                    type="button"
                    onClick={() => toggleSpecial(req)}
                    className={`p-2 rounded text-left border flex items-center gap-2 transition-colors ${
                      isChecked
                        ? 'border-[#c31111] bg-red-50 text-[#c31111] font-medium'
                        : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded shrink-0 flex items-center justify-center ${
                        isChecked ? 'bg-[#c31111] text-white' : 'border border-neutral-300'
                      }`}
                    >
                      {isChecked && <Check className="w-2.5 h-2.5" />}
                    </div>
                    <span className="text-xs">{req}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Generated Output Preview */}
          <div className="bg-neutral-900 text-white rounded-lg p-4 font-mono text-[11px] space-y-2 border border-neutral-800">
            <div className="flex items-center justify-between text-neutral-400 pb-2 border-b border-neutral-800">
              <span className="uppercase text-[#c31111] font-bold">Generated Scope Summary</span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 text-neutral-300 hover:text-white transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Scope'}</span>
              </button>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-neutral-200 leading-relaxed max-h-36 overflow-y-auto">
              {generateScopeSummary()}
            </pre>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex flex-wrap items-center justify-between gap-3 rounded-b-xl">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-700 hover:text-neutral-900"
          >
            Cancel
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="px-4 py-2 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 rounded hover:bg-neutral-100 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy Summary'}
            </button>
            <button
              type="button"
              onClick={handleTransfer}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#c31111] hover:bg-[#a50d0d] rounded transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Transfer to Contact Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
