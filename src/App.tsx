import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { MarketsSection } from './components/MarketsSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ClientsSection } from './components/ClientsSection';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { ScopeCalculatorModal } from './components/ScopeCalculatorModal';
import { Footer } from './components/Footer';
import { COMPANY_INFO } from './data/companyData';
import { ArrowRight, CheckCircle2, Phone, Mail, FileText, Download } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isScopeModalOpen, setIsScopeModalOpen] = useState<boolean>(false);
  const [injectedScopeText, setInjectedScopeText] = useState<string>('');

  // Handle browser back/forward or hash changes if any
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'services', 'markets', 'projects', 'clients', 'careers', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (tabId: string) => {
    setActiveTab(tabId);
    window.location.hash = tabId === 'home' ? '' : tabId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScopeTransfer = (scopeText: string) => {
    setInjectedScopeText(scopeText);
    setActiveTab('contact');
    window.location.hash = 'contact';
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfcfd] text-neutral-900 font-sans selection:bg-[#c31111] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        onNavigate={navigateTo}
        onOpenScopeBuilder={() => setIsScopeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              onNavigate={navigateTo}
              onOpenScopeBuilder={() => setIsScopeModalOpen(true)}
            />

            {/* Core Disciplines Overview */}
            <ServicesSection onNavigate={navigateTo} />

            {/* Markets Overview */}
            <MarketsSection
              onNavigate={navigateTo}
              onOpenScopeBuilder={() => setIsScopeModalOpen(true)}
            />

            {/* Selected Projects Showcase */}
            <ProjectsGallery
              onNavigate={navigateTo}
              onOpenScopeBuilder={() => setIsScopeModalOpen(true)}
            />

            {/* Company History & Leadership Preview */}
            <AboutSection onNavigate={navigateTo} />

            {/* Verified Clients & Qualifications Package */}
            <ClientsSection onNavigate={navigateTo} />

            {/* Direct Contact & Consultation */}
            <ContactSection initialMessage={injectedScopeText} />
          </>
        )}

        {activeTab === 'about' && (
          <div className="pt-6">
            <div className="bg-neutral-900 text-white py-12 border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-xs font-mono uppercase text-[#c31111] tracking-wider mb-2">
                  Company History & Leadership
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">About Premier Engineering Group</h1>
                <p className="mt-2 text-sm text-neutral-300 max-w-2xl">
                  Serving the New Jersey AEC community with continuous engineering excellence since 1955.
                </p>
              </div>
            </div>
            <AboutSection onNavigate={navigateTo} />
            <ClientsSection onNavigate={navigateTo} />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="pt-6">
            <div className="bg-neutral-900 text-white py-12 border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-xs font-mono uppercase text-[#c31111] tracking-wider mb-2">
                  Engineering Capabilities
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">Our Engineering Disciplines</h1>
                <p className="mt-2 text-sm text-neutral-300 max-w-2xl">
                  Mechanical, Electrical, Plumbing, and Fire Protection engineering for educational, civic,
                  healthcare, and commercial facilities.
                </p>
              </div>
            </div>
            <ServicesSection onNavigate={navigateTo} />
            <ProjectsGallery
              onNavigate={navigateTo}
              onOpenScopeBuilder={() => setIsScopeModalOpen(true)}
            />
          </div>
        )}

        {activeTab === 'markets' && (
          <div className="pt-6">
            <div className="bg-neutral-900 text-white py-12 border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-xs font-mono uppercase text-[#c31111] tracking-wider mb-2">
                  Facility Experience
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">Markets & Specialized Facilities</h1>
                <p className="mt-2 text-sm text-neutral-300 max-w-2xl">
                  Over 400 school facilities, municipal headquarters, healthcare clinics, and commercial banks.
                </p>
              </div>
            </div>
            <MarketsSection
              onNavigate={navigateTo}
              onOpenScopeBuilder={() => setIsScopeModalOpen(true)}
            />
            <ProjectsGallery
              onNavigate={navigateTo}
              onOpenScopeBuilder={() => setIsScopeModalOpen(true)}
            />
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="pt-6">
            <div className="bg-neutral-900 text-white py-12 border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-xs font-mono uppercase text-[#c31111] tracking-wider mb-2">
                  Proven Track Record
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">Selected Projects & Case Studies</h1>
                <p className="mt-2 text-sm text-neutral-300 max-w-2xl">
                  Representative MEP/FP engineering commissions designed and supervised through completion.
                </p>
              </div>
            </div>
            <ProjectsGallery
              onNavigate={navigateTo}
              onOpenScopeBuilder={() => setIsScopeModalOpen(true)}
            />
            <ClientsSection onNavigate={navigateTo} />
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="pt-6">
            <div className="bg-neutral-900 text-white py-12 border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-xs font-mono uppercase text-[#c31111] tracking-wider mb-2">
                  Partnerships & References
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">Clients & Qualifications Package</h1>
                <p className="mt-2 text-sm text-neutral-300 max-w-2xl">
                  Collaborating with premier architects, public school boards, and municipal agencies.
                </p>
              </div>
            </div>
            <ClientsSection onNavigate={navigateTo} />
            <ProjectsGallery
              onNavigate={navigateTo}
              onOpenScopeBuilder={() => setIsScopeModalOpen(true)}
            />
          </div>
        )}

        {activeTab === 'careers' && (
          <div className="pt-6">
            <div className="bg-neutral-900 text-white py-12 border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-xs font-mono uppercase text-[#c31111] tracking-wider mb-2">
                  Join Our Team
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">Engineering Careers at Premier</h1>
                <p className="mt-2 text-sm text-neutral-300 max-w-2xl">
                  Explore opportunities in mechanical, electrical, and CAD/BIM engineering design in Rockaway, NJ.
                </p>
              </div>
            </div>
            <CareersSection onNavigate={navigateTo} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-6">
            <div className="bg-neutral-900 text-white py-12 border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-xs font-mono uppercase text-[#c31111] tracking-wider mb-2">
                  Headquarters & Consultation
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">Contact Premier Engineering Group</h1>
                <p className="mt-2 text-sm text-neutral-300 max-w-2xl">
                  Direct communication with licensed engineering principals for proposals, RFPs, and site evaluations.
                </p>
              </div>
            </div>
            <ContactSection initialMessage={injectedScopeText} />
          </div>
        )}
      </main>

      {/* Interactive Scope & RFP Builder Modal */}
      <ScopeCalculatorModal
        isOpen={isScopeModalOpen}
        onClose={() => setIsScopeModalOpen(false)}
        onSendToContact={handleScopeTransfer}
      />

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
