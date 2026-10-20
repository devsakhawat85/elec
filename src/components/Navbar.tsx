import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, Menu, X, FileText, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tabId: string) => void;
  onOpenScopeBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenScopeBuilder,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'markets', label: 'Markets' },
    { id: 'projects', label: 'Projects' },
    { id: 'clients', label: 'Clients' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Quiet top utility banner for direct contractor & client access */}
      <div className="bg-[#181d22] text-neutral-300 text-xs border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-normal">
            <span className="text-neutral-400 hidden sm:inline">
              NJ Certified Women-Owned & Small Business Enterprise (WBE / SBE)
            </span>
            <span className="text-neutral-500 hidden md:inline" aria-hidden="true">·</span>
            <span className="text-neutral-400 hidden md:inline">
              NJSDA Prequalified Engineering Consultant
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs ml-auto">
            <a
              href={`tel:${COMPANY_INFO.contacts.phone.replace(/-/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c31111]" />
              <span className="font-mono tabular-nums font-medium">{COMPANY_INFO.contacts.phone}</span>
            </a>
            <span className="text-neutral-700" aria-hidden="true">|</span>
            <a
              href={`mailto:${COMPANY_INFO.contacts.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#c31111]" />
              <span className="font-mono">{COMPANY_INFO.contacts.email}</span>
            </a>
            <span className="text-neutral-700 hidden sm:inline" aria-hidden="true">|</span>
            <a
              href={COMPANY_INFO.qualificationsPackageUrl}
              download
              className="hidden sm:inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors"
              title="Download 2025 Qualifications Package PDF"
            >
              <FileText className="w-3.5 h-3.5 text-[#c31111]" />
              <span>2025 Qualifications PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Navigation Header adhering to the strict Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200'
            : 'bg-white border-b border-neutral-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Authentic Official PEG Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 shrink-0 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c31111] rounded"
              aria-label="Premier Engineering Group Home"
            >
              <img
                src={COMPANY_INFO.officialLogoUrl}
                alt="Premier Engineering Group"
                referrerPolicy="no-referrer"
                className="h-11 sm:h-12 w-auto max-w-[240px] sm:max-w-[270px] object-contain transition-transform group-hover:scale-[1.01]"
                onError={(e) => {
                  // Fallback to square logo emblem if rectangular JPG fails
                  const target = e.currentTarget;
                  if (!target.src.includes('peg-logo.png')) {
                    target.src = COMPANY_INFO.officialLogoEmblem;
                  }
                }}
              />
            </button>

            {/* Zone 2: Navigation Links (Clean single-line text with active/hover underline) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`whitespace-nowrap shrink-0 py-1 transition-colors relative focus:outline-none focus-visible:text-[#c31111] ${
                      isActive
                        ? 'text-[#c31111] font-semibold'
                        : 'text-neutral-700 hover:text-neutral-900'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-2.5 left-0 right-0 h-0.5 bg-[#c31111]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenScopeBuilder}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded transition-colors whitespace-nowrap shrink-0"
              >
                <span>Scope Estimator</span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#c31111] hover:bg-[#a50d0d] rounded transition-colors whitespace-nowrap shrink-0 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c31111]"
              >
                Request Consultation
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-700 hover:text-neutral-950 focus:outline-none rounded hover:bg-neutral-100"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 text-sm rounded transition-colors flex items-center justify-between ${
                    activeTab === item.id
                      ? 'bg-neutral-100 text-[#c31111] font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenScopeBuilder();
                }}
                className="w-full text-center px-4 py-2.5 text-xs font-medium text-neutral-800 bg-neutral-100 rounded border border-neutral-300"
              >
                Interactive Scope & RFP Estimator
              </button>
              <a
                href={COMPANY_INFO.qualificationsPackageUrl}
                download
                className="w-full text-center px-4 py-2.5 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded flex items-center justify-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-[#c31111]" />
                <span>Download 2025 Qualifications PDF</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
