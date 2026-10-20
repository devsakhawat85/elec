import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ArrowRight, CheckCircle2, Shield, Award, Building, Download, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (tabId: string) => void;
  onOpenScopeBuilder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenScopeBuilder }) => {
  const authenticSlides = [
    {
      id: 'engineering-consulting',
      title: '70+ Years of Engineering Excellence',
      subtitle: 'Precision Mechanical, Electrical, Plumbing & Fire Protection Design',
      description:
        'Premier Engineering Group delivers comprehensive MEP/FP engineering consulting for public schools, municipal complexes, healthcare facilities, and commercial buildings. We see every project through to completion to validate our engineering intent.',
      image: '/assets/images/hero_engineering_consulting_1792506912642.jpg',
      badge: 'Engineering Quality',
    },
    {
      id: 'history',
      title: 'A Continuous Heritage Since 1955',
      subtitle: 'Founded by Ralph J. Visco · LJM Engineering · Premier Engineering Group',
      description:
        'For seven decades, our firm has served the New Jersey AEC community with family-owned dedication. Acquired by Greg and Helle-May Cheney in 2016, we pair senior technical oversight with modern energy-efficient innovation.',
      image: '/assets/slides/slide_144449.jpg',
      badge: 'Historic Proven Track Record',
    },
    {
      id: 'experience',
      title: 'Over 400 Educational & Civic Facilities',
      subtitle: '65+ School Districts · NJSDA Prequalified · Public Sector Authority',
      description:
        'From high-efficiency central chiller and boiler plants to advanced STEM laboratories and emergency municipal generator networks, we design systems tailored to longevity, budget discipline, and occupant comfort.',
      image: '/assets/slides/slide_108173.jpg',
      badge: '400+ Completed Projects',
    },
    {
      id: 'service',
      title: 'Direct Principal Involvement on Every Project',
      subtitle: 'Licensed Professional Engineers Reviewing Every Specification',
      description:
        'We design, not the contractor. Every mechanical load calculation, electrical riser, plumbing isometric, and fire suppression hydraulic calculation is reviewed directly by our executive principals.',
      image: '/assets/slides/slide_108172.jpg',
      badge: 'Licensed P.E. Review',
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % authenticSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [authenticSlides.length]);

  const activeSlide = authenticSlides[currentSlideIndex];

  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Background visual with measured contrast scrim ensuring WCAG AAA legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={activeSlide.image}
          alt={activeSlide.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-all duration-700 brightness-[0.45] scale-100"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('slide_108173')) {
              target.src = '/assets/slides/slide_108173.jpg';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/70 to-neutral-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Clean unboxed trust kicker */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-300">
              <span className="text-[#c31111] font-bold">Premier Engineering Group</span>
              <span aria-hidden="true">·</span>
              <span>Rockaway, NJ</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">Est. 1955</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance">
              {activeSlide.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-200 font-medium leading-relaxed max-w-2xl">
              {activeSlide.subtitle}
            </p>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
              {activeSlide.description}
            </p>

            {/* Disciplines check row */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c31111]" />
                <span>Mechanical (HVAC)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c31111]" />
                <span>Electrical Distribution</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c31111]" />
                <span>Plumbing & Gas</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c31111]" />
                <span>Fire Alarm & Protection</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#c31111] hover:bg-[#a50d0d] rounded shadow-md transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-5 py-3.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded transition-colors backdrop-blur-sm"
              >
                <span>Explore Disciplines</span>
              </button>

              <button
                onClick={onOpenScopeBuilder}
                className="px-4 py-3.5 text-sm font-medium text-neutral-300 hover:text-white transition-colors underline underline-offset-4"
              >
                Estimate Project Scope
              </button>
            </div>
          </div>

          {/* Slide Switcher & Authentic Snapshot Box */}
          <div className="lg:col-span-4">
            <div className="bg-neutral-900/85 backdrop-blur-md border border-neutral-700/80 rounded-lg p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-neutral-800">
                <span className="font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                  Firm Overview & Proof
                </span>
                <span className="font-mono tabular-nums">
                  0{currentSlideIndex + 1} / 0{authenticSlides.length}
                </span>
              </div>

              {/* Slide selector tabs */}
              <div className="space-y-2">
                {authenticSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`w-full text-left p-2.5 rounded text-xs transition-all flex items-start justify-between gap-2 ${
                      idx === currentSlideIndex
                        ? 'bg-neutral-800 border-l-2 border-[#c31111] text-white shadow-sm'
                        : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
                    }`}
                  >
                    <div>
                      <div className="font-semibold">{slide.title}</div>
                      <div className="text-[11px] text-neutral-400 line-clamp-1">
                        {slide.badge}
                      </div>
                    </div>
                    {idx === currentSlideIndex && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c31111] shrink-0 mt-1" />
                    )}
                  </button>
                ))}
              </div>

              {/* Slider arrow controls */}
              <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentSlideIndex(
                        (prev) => (prev - 1 + authenticSlides.length) % authenticSlides.length
                      )
                    }
                    className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlideIndex((prev) => (prev + 1) % authenticSlides.length)
                    }
                    className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <a
                  href={COMPANY_INFO.qualificationsPackageUrl}
                  download
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#c31111]" />
                  <span>2025 Qualifications PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strict 4-Item KPI / Proof Row below the hero split */}
      <div className="relative z-10 border-t border-neutral-800 bg-neutral-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            {/* KPI 1 */}
            <div className="pt-3 md:pt-0 md:px-4 first:pl-0">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white">
                  1955
                </span>
                <span className="text-xs text-neutral-400 uppercase font-mono">Founding</span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">
                70+ years continuous engineering practice for public and commercial buildings.
              </p>
            </div>

            {/* KPI 2 */}
            <div className="pt-3 md:pt-0 md:px-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#c31111]">
                  400+
                </span>
                <span className="text-xs text-neutral-400 uppercase font-mono">K-12 Projects</span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">
                Over 400 school facilities designed for 65+ New Jersey school districts.
              </p>
            </div>

            {/* KPI 3 */}
            <div className="pt-3 md:pt-0 md:px-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                  WBE / SBE
                </span>
                <span className="text-xs text-neutral-400 font-mono">Certified</span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">
                NJ Certified Women-Owned and Small Business Enterprise.
              </p>
            </div>

            {/* KPI 4 */}
            <div className="pt-3 md:pt-0 md:px-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                  NJSDA
                </span>
                <span className="text-xs text-neutral-400 font-mono">Prequalified</span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">
                Pre-approved for Electrical, HVAC, Plumbing, and Fire Protection consultant services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
