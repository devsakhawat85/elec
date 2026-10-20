import React from 'react';
import { COMPANY_INFO, SERVICES, MARKETS } from '../data/companyData';
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  FileText,
  ArrowUp,
  Compass,
  Award,
  Shield,
  Linkedin,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800 text-xs">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Verified Credentials (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="block focus:outline-none"
              aria-label="Premier Engineering Group"
            >
              <img
                src={COMPANY_INFO.officialLogoUrl}
                alt="Premier Engineering Group"
                referrerPolicy="no-referrer"
                className="h-11 w-auto max-w-[240px] object-contain brightness-90 hover:brightness-100 transition-all"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = COMPANY_INFO.officialLogoEmblem;
                }}
              />
            </button>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Premier Engineering Group, Inc. is a full-service mechanical, electrical, plumbing, and fire
              protection engineering design firm founded in 1955. Over 70 years of dedicated service to the
              AEC community.
            </p>

            <div className="space-y-1.5 pt-2 border-t border-neutral-800 text-neutral-400">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#c31111]" />
                <span>NJ Certified Women-Owned Business (WBE)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#c31111]" />
                <span>NJ Certified Small Business Enterprise (SBE)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#c31111]" />
                <span>NJSDA Prequalified Engineering Consultant</span>
              </div>
            </div>
          </div>

          {/* Column 2: Engineering Disciplines (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white">
              Disciplines
            </h4>
            <ul className="space-y-2 text-neutral-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    {s.shortTitle}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href={COMPANY_INFO.qualificationsPackageUrl}
                  download
                  className="flex items-center gap-1.5 text-[#c31111] hover:underline"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>2025 Qualifications</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Facility Markets (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white">
              Markets
            </h4>
            <ul className="space-y-2 text-neutral-400">
              {MARKETS.map((m) => (
                <li key={m.id}>
                  <button
                    onClick={() => {
                      onNavigate('markets');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    {m.title.split(' ')[0]} {m.title.split(' ')[1] || ''}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => {
                    onNavigate('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Selected Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact & Office (col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white">
              Headquarters & Contact
            </h4>
            <div className="space-y-2.5 text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c31111] shrink-0 mt-0.5" />
                <div>
                  <div className="text-neutral-200">{COMPANY_INFO.contacts.address}</div>
                  <div className="text-[11px] text-neutral-500">
                    GPS: {COMPANY_INFO.contacts.gpsAddress}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c31111] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contacts.phone.replace(/-/g, '')}`}
                  className="hover:text-white font-mono text-neutral-200"
                >
                  {COMPANY_INFO.contacts.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Printer className="w-4 h-4 text-neutral-600 shrink-0" />
                <span className="font-mono">{COMPANY_INFO.contacts.fax}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c31111] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contacts.email}`}
                  className="hover:text-white font-mono text-neutral-200"
                >
                  {COMPANY_INFO.contacts.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.contacts.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors text-[11px]"
                >
                  <Compass className="w-3.5 h-3.5 text-[#c31111]" />
                  <span>Get Driving Directions (Denville / Rockaway) &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Utility Bar */}
      <div className="border-t border-neutral-800/80 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            &copy; 1955 &ndash; 2026 Premier Engineering Group, Inc. (&ldquo;PEG&rdquo;). All rights reserved.
            Formerly LJM Engineering Group.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('careers')}
              className="hover:text-neutral-300 transition-colors"
            >
              Careers
            </button>
            <span aria-hidden="true">&middot;</span>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-neutral-300 transition-colors"
            >
              Contact Us
            </button>
            <span aria-hidden="true">&middot;</span>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span aria-hidden="true">&middot;</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#c31111]" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
