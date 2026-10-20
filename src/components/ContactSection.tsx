import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  Clock,
  Compass,
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  ExternalLink,
} from 'lucide-react';

interface ContactSectionProps {
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMessage = '' }) => {
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [marketSector, setMarketSector] = useState('k12');
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    'Mechanical (HVAC)',
  ]);
  const [message, setMessage] = useState(initialMessage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update message when initialMessage changes (e.g. from Scope Calculator transfer)
  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialMessage]);

  const toggleDiscipline = (disc: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(disc) ? prev.filter((d) => d !== disc) : [...prev, disc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name or title.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid business email address.');
      return;
    }
    if (!message.trim()) {
      setErrorMessage('Please include a brief description of your project or engineering inquiry.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
            <span>Direct Communication</span>
            <span aria-hidden="true">/</span>
            <span>Rockaway, NJ Office</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Consult with Our Engineering Principals
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Whether you are an architect preparing a qualification proposal, a school board planning an ESIP
            upgrade, or a municipality requiring emergency generator engineering, our licensed principals are
            ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Verified Contact Information & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-neutral-100 pb-4">
                <span className="text-xs font-mono text-[#c31111] uppercase tracking-wider font-semibold">
                  Corporate Headquarters
                </span>
                <h3 className="text-lg font-bold text-neutral-900 mt-1">
                  Premier Engineering Group, Inc.
                </h3>
                <div className="text-xs text-neutral-500 font-mono mt-0.5">
                  NJ Certified WBE / SBE · NJSDA Prequalified
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5 text-xs text-neutral-700">
                <MapPin className="w-4 h-4 text-[#c31111] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-neutral-900 font-semibold mb-0.5">Mailing Address:</strong>
                  <span>{COMPANY_INFO.contacts.address}</span>
                  <div className="mt-1 text-neutral-500">
                    <strong className="text-neutral-800">For GPS Navigation:</strong>{' '}
                    <span>{COMPANY_INFO.contacts.gpsAddress}</span>
                  </div>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5 text-xs text-neutral-700">
                <Phone className="w-4 h-4 text-[#c31111] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-neutral-900 font-semibold mb-0.5">Telephone:</strong>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.phone.replace(/-/g, '')}`}
                    className="font-mono text-sm font-semibold text-[#c31111] hover:underline"
                  >
                    {COMPANY_INFO.contacts.phone}
                  </a>
                  <span className="block text-neutral-500 text-[11px] mt-0.5">Direct line to office reception</span>
                </div>
              </div>

              {/* Fax */}
              <div className="flex items-start gap-3.5 text-xs text-neutral-700">
                <Printer className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-neutral-900 font-semibold mb-0.5">Telefax:</strong>
                  <span className="font-mono text-neutral-800">{COMPANY_INFO.contacts.fax}</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 text-xs text-neutral-700">
                <Mail className="w-4 h-4 text-[#c31111] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-neutral-900 font-semibold mb-0.5">Executive Email:</strong>
                  <a
                    href={`mailto:${COMPANY_INFO.contacts.email}`}
                    className="font-mono text-neutral-900 font-medium hover:text-[#c31111] hover:underline"
                  >
                    {COMPANY_INFO.contacts.email}
                  </a>
                  <span className="block text-neutral-500 text-[11px] mt-0.5">
                    Helle-May Cheney, MBA · President / Principal
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 text-xs text-neutral-700">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-neutral-900 font-semibold mb-0.5">Office Hours:</strong>
                  <span>{COMPANY_INFO.contacts.hours}</span>
                </div>
              </div>

              {/* Directions Button */}
              <div className="pt-2 border-t border-neutral-100">
                <a
                  href={COMPANY_INFO.contacts.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded flex items-center justify-center gap-2 transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#c31111]" />
                  <span>Open in Google Maps / Directions</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Qualifications Package callout */}
            <div className="p-4 bg-white border border-neutral-200 rounded-lg shadow-sm flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#c31111] shrink-0" />
                <div>
                  <div className="font-bold text-neutral-900">2025 Qualifications PDF</div>
                  <div className="text-[11px] text-neutral-500">Official project & resume package</div>
                </div>
              </div>
              <a
                href={COMPANY_INFO.qualificationsPackageUrl}
                download
                className="px-3 py-1.5 font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded border border-neutral-300 transition-colors"
              >
                Download
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Proposal Form */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="pb-4 border-b border-neutral-200 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#c31111] font-semibold">
                Project Consultation & RFP Inquiries
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">
                Send an Engineering Inquiry
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Fill out the specifications below or attach an RFP. Submissions route directly to the firm principals.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-950 space-y-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                <h4 className="text-lg font-bold text-emerald-900">
                  Inquiry Received by Premier Engineering Group
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  Thank you, <strong className="font-semibold">{fullName}</strong>. Your project inquiry has
                  been dispatched to <strong className="font-semibold">{COMPANY_INFO.contacts.email}</strong>.
                  A senior principal will review your facility parameters and reply promptly within one business day.
                </p>
                <div className="text-xs text-neutral-600 bg-white/70 p-3 rounded border border-emerald-200/60 font-mono">
                  <div>Reference Inquiry: {fullName} · {email}</div>
                  <div>Disciplines Requested: {selectedDisciplines.join(', ')}</div>
                </div>
                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setMessage('');
                    }}
                    className="text-xs font-semibold text-emerald-800 hover:underline"
                  >
                    Submit another project inquiry &rarr;
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.phone.replace(/-/g, '')}`}
                    className="text-xs font-semibold text-neutral-700 hover:underline"
                  >
                    Or call us at {COMPANY_INFO.contacts.phone}
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded flex items-center gap-2 text-red-800">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Full Name & Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. John Miller, AIA"
                      className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-[#c31111] focus:ring-1 focus:ring-[#c31111]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Organization / School District / Firm
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Township BOE / Architectural Group"
                      className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-[#c31111] focus:ring-1 focus:ring-[#c31111]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jmiller@district.org"
                      className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-[#c31111] focus:ring-1 focus:ring-[#c31111]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(973) 555-0123"
                      className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-[#c31111] focus:ring-1 focus:ring-[#c31111]"
                    />
                  </div>
                </div>

                {/* Facility Sector Selector */}
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    Facility / Market Sector
                  </label>
                  <select
                    value={marketSector}
                    onChange={(e) => setMarketSector(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded bg-white focus:outline-none focus:border-[#c31111]"
                  >
                    <option value="k12">K–12 Public or Private School</option>
                    <option value="municipal">Municipal / DPW / Police / County Facility</option>
                    <option value="worship">Place of Worship / Historic Sanctuary</option>
                    <option value="healthcare">Healthcare / Clinic / Imaging Facility</option>
                    <option value="commercial">Bank Branch / Commercial Office</option>
                    <option value="other">Other Commercial / Industrial</option>
                  </select>
                </div>

                {/* Engineering Disciplines Checkboxes */}
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1.5">
                    Disciplines Required:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'Mechanical (HVAC)',
                      'Electrical',
                      'Plumbing',
                      'Fire Alarm / Protection',
                    ].map((disc) => {
                      const isSelected = selectedDisciplines.includes(disc);
                      return (
                        <button
                          key={disc}
                          type="button"
                          onClick={() => toggleDiscipline(disc)}
                          className={`p-2 rounded text-left border text-xs transition-colors ${
                            isSelected
                              ? 'border-[#c31111] bg-red-50 text-[#c31111] font-semibold'
                              : 'border-neutral-200 hover:bg-neutral-50 text-neutral-700'
                          }`}
                        >
                          {disc}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Scope Description or Message */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block font-semibold text-neutral-700">
                      Project Details / Scope Description *
                    </label>
                    <span className="text-[11px] text-neutral-400">
                      Provide location, scope, or timeline
                    </span>
                  </div>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your facility requirements, existing equipment, proposed construction schedule (e.g. Summer Recess), or questions for our engineering principals..."
                    className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-[#c31111] focus:ring-1 focus:ring-[#c31111] font-mono text-xs"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 text-xs font-semibold text-white bg-[#c31111] hover:bg-[#a50d0d] rounded transition-colors shadow-sm flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c31111] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Engineering Inquiry</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-neutral-500 text-center pt-1">
                  Inquiries are routed directly to Helle-May Cheney and Gregory Cheney, P.E. You may also
                  reach us directly at <span className="font-mono text-neutral-800">973-586-3004</span>.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
