import React from 'react';
import { COMPANY_INFO, LEADERSHIP, COMPANY_TIMELINE } from '../data/companyData';
import { Award, Shield, FileCheck, CheckCircle2, ArrowRight, Download, Users } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (tabId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
            <span>About Premier Engineering Group</span>
            <span aria-hidden="true">/</span>
            <span>Est. 1955</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Over 70 Years of Engineering Integrity & Principals-Led Design
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Premier Engineering Group, Inc. (&ldquo;PEG&rdquo;) is a full-service mechanical, electrical,
            plumbing, and fire protection engineering design consulting firm headquartered in Rockaway, New
            Jersey. As a certified Women-Owned and Small Business Enterprise (WBE / SBE), we blend the agility
            and personal accountability of a boutique family firm with the technical rigor of a 70-year
            institution.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
            <h3 className="text-xl font-bold text-neutral-900">
              Our Core Philosophy: We Design, Not the Contractor
            </h3>
            <p>
              In an era where many consultants produce loose performance specifications that leave critical
              coordination to field trades, Premier operates on an unwavering principle:{' '}
              <strong className="text-neutral-950 font-semibold">
                we design the system, not the contractor.
              </strong>{' '}
              By thoroughly researching existing field conditions and preparing complete, fully coordinated
              bidding drawings, we minimize contractor guesswork, protect owners from change orders, and ensure
              physical and technical longevity.
            </p>
            <p>
              Throughout our succession of ownership, our engineers have developed designs for nearly every
              conceivable type of public building and facility—from educational campuses and civic halls to
              hospitals, worship sanctuaries, and financial institutions.
            </p>

            <div className="pt-4 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm mb-1">
                  <Shield className="w-4 h-4 text-[#c31111]" />
                  <span>Licensed P.E. Oversight</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Every drawing and calculation undergoes rigorous peer review by senior licensed principals
                  before submission.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm mb-1">
                  <FileCheck className="w-4 h-4 text-[#c31111]" />
                  <span>WBE & SBE Certified</span>
                </div>
                <p className="text-xs text-neutral-600">
                  State of New Jersey certified Women-Owned and Small Business Enterprise satisfying public
                  inclusion goals.
                </p>
              </div>
            </div>
          </div>

          {/* Right Highlights Card with Authentic Building Slide */}
          <div className="lg:col-span-5 bg-neutral-900 text-white rounded-xl overflow-hidden shadow-lg border border-neutral-800">
            <div className="relative h-48 bg-neutral-950">
              <img
                src="/assets/slides/slide_144449.jpg"
                alt="Premier Engineering Group Historic Foundation"
                className="w-full h-full object-cover object-center brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[11px] font-mono text-[#c31111] uppercase tracking-wider font-semibold">
                  Continuity of Practice
                </span>
                <div className="text-sm font-bold text-white">Serving the AEC Community Since 1955</div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="text-xs text-neutral-300 leading-relaxed">
                Premier maintains long-term master service relationships with leading school boards, municipal
                governments, and architectural firms across New Jersey and the tri-state area.
              </div>

              <div className="space-y-2 text-xs border-t border-neutral-800 pt-3">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">Headquarters:</span>
                  <span className="font-medium text-white">Rockaway, New Jersey</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">State Prequalification:</span>
                  <span className="font-medium text-white">NJSDA Consultant</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">Firm Ownership:</span>
                  <span className="font-medium text-white">Family-Owned & Operated</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-400">Direct Contact:</span>
                  <a
                    href="mailto:hmcheney@pegmep.com"
                    className="font-medium text-[#c31111] hover:underline"
                  >
                    hmcheney@pegmep.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.qualificationsPackageUrl}
                  download
                  className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-xs font-semibold text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-[#c31111]" />
                  <span>Download 2025 Qualifications PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 70-Year Editorial Timeline */}
        <div className="mb-24 pt-12 border-t border-neutral-200">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Heritage & Succession
            </span>
            <h3 className="text-2xl font-bold text-neutral-900 mt-1">
              A 70-Year Timeline of Engineering Service
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              The continuous lineage of Premier Engineering Group—from post-war New Jersey engineering to
              modern decarbonization and ESIP initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_TIMELINE.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-neutral-50 border border-neutral-200/90 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold font-mono text-[#c31111]">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">Chapter 0{index + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Personnel & Leadership */}
        <div id="leadership" className="pt-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">
              <Users className="w-4 h-4 text-[#c31111]" />
              <span>Firm Principals & Senior Leadership</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Key Engineering Personnel
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Our principals lead from the front, remaining actively engaged on site visits, drawing reviews,
              and client consultations throughout each engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP.map((leader, lIdx) => (
              <div
                key={lIdx}
                className="bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="border-b border-neutral-100 pb-4">
                    <div className="text-xs font-mono font-semibold text-[#c31111] uppercase tracking-wider">
                      {leader.role}
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 mt-0.5">{leader.name}</h4>
                    <div className="text-xs text-neutral-500 mt-1">{leader.title}</div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">{leader.bio}</p>

                  <div className="space-y-2 pt-2 text-xs text-neutral-600">
                    <div>
                      <strong className="text-neutral-900">Education: </strong>
                      <span>{leader.education}</span>
                    </div>
                    <div>
                      <strong className="text-neutral-900">Experience & Credentials: </strong>
                      <span>{leader.experience} · {leader.credentials.join(' · ')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-mono">Premier Engineering Group</span>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="font-semibold text-[#c31111] hover:underline"
                  >
                    Direct Consultation &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
