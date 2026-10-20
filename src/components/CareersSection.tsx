import React, { useState } from 'react';
import { CAREER_OPPORTUNITIES, COMPANY_INFO } from '../data/companyData';
import { Briefcase, CheckCircle, Mail, Send, Award, Heart, Shield, Clock } from 'lucide-react';

interface CareersSectionProps {
  onNavigate: (tabId: string) => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onNavigate }) => {
  const [selectedJob, setSelectedJob] = useState<string>(CAREER_OPPORTUNITIES[0].title);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [applicantName, setApplicantName] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');
  const [applicantPhone, setApplicantPhone] = useState<string>('');
  const [applicantNote, setApplicantNote] = useState<string>('');

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;
    setFormSubmitted(true);
  };

  return (
    <section id="careers" className="py-20 bg-neutral-100/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
            <span>Career Opportunities</span>
            <span aria-hidden="true">/</span>
            <span>Join Our Engineering Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Build Your Engineering Career at Premier
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Our door is always open to speak with candidates with varying levels of mechanical, electrical,
            and plumbing engineering design and CAD experience. We offer a collaborative, supportive family-firm
            culture with direct access to senior licensed principals.
          </p>
        </div>

        {/* Benefits Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-sm flex items-start gap-3">
            <Heart className="w-5 h-5 text-[#c31111] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-neutral-900">Comprehensive Health</div>
              <p className="text-[11px] text-neutral-500 mt-0.5">Medical, dental & vision plan coverage.</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-sm flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#c31111] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-neutral-900">401(k) Retirement</div>
              <p className="text-[11px] text-neutral-500 mt-0.5">Firm retirement plan contribution.</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-sm flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#c31111] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-neutral-900">Generous PTO</div>
              <p className="text-[11px] text-neutral-500 mt-0.5">Paid vacation, holidays & personal time.</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-sm flex items-start gap-3">
            <Award className="w-5 h-5 text-[#c31111] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-neutral-900">P.E. & LEED Support</div>
              <p className="text-[11px] text-neutral-500 mt-0.5">Mentorship towards professional licensure.</p>
            </div>
          </div>
        </div>

        {/* Positions & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Job Cards */}
          <div className="lg:col-span-7 space-y-6">
            {CAREER_OPPORTUNITIES.map((job, idx) => {
              const isSelected = selectedJob === job.title;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-lg border p-6 transition-all ${
                    isSelected
                      ? 'border-[#c31111] ring-1 ring-[#c31111] shadow-md'
                      : 'border-neutral-200 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-neutral-100">
                    <div>
                      <h3 className="text-base font-bold text-neutral-900">{job.title}</h3>
                      <div className="text-xs text-neutral-500 font-mono mt-0.5">
                        {job.type} · {job.experience}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedJob(job.title);
                        setFormSubmitted(false);
                      }}
                      className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                        isSelected
                          ? 'bg-[#c31111] text-white'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
                      }`}
                    >
                      {isSelected ? 'Selected Role' : 'Apply for this Role'}
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div>
                    <div className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                      Key Qualifications:
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-600">
                      {job.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#c31111] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            <div className="text-xs text-neutral-500 italic">
              Premier Engineering Group is an Equal Opportunity Employer. Salary is commensurate with
              experience.
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="pb-4 border-b border-neutral-200 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#c31111] font-semibold">
                Direct Submission
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mt-1">Submit Your Application</h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Applying for: <strong className="text-neutral-800">{selectedJob}</strong>
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 space-y-3">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
                <h4 className="text-sm font-bold">Thank You for Your Interest</h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Your inquiry has been received by Helle-May Cheney, President. You can also send your complete
                  resume and portfolio directly to{' '}
                  <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="font-semibold underline">
                    {COMPANY_INFO.contacts.email}
                  </a>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-emerald-700 hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Jane Doe, EIT"
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-[#c31111] focus:ring-1 focus:ring-[#c31111]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-[#c31111] focus:ring-1 focus:ring-[#c31111]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="(973) 555-0199"
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-[#c31111] focus:ring-1 focus:ring-[#c31111]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Summary of Engineering / CAD Experience
                  </label>
                  <textarea
                    rows={4}
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    placeholder="Briefly describe your degree, years of experience in HVAC/MEP, AutoCAD or Revit background..."
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-[#c31111] focus:ring-1 focus:ring-[#c31111]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#c31111] hover:bg-[#a50d0d] rounded transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Application</span>
                  </button>
                </div>

                <div className="text-[11px] text-neutral-400 text-center pt-2">
                  Or mail your CV to: <span className="font-mono text-neutral-600">{COMPANY_INFO.contacts.email}</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
