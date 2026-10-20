import React, { useState } from 'react';
import { PROJECTS, ProjectItem, COMPANY_INFO } from '../data/companyData';
import { MapPin, Building, Wrench, X, CheckCircle, Download, ArrowRight } from 'lucide-react';

interface ProjectsGalleryProps {
  onNavigate: (tabId: string) => void;
  onOpenScopeBuilder: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  onNavigate,
  onOpenScopeBuilder,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'k12', label: 'K–12 Education' },
    { id: 'municipal', label: 'Municipal & County' },
    { id: 'worship', label: 'Places of Worship' },
    { id: 'healthcare', label: 'Healthcare' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.sector === activeFilter);

  return (
    <section id="projects" className="py-20 bg-neutral-100/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
              <span>Representative Experience</span>
              <span aria-hidden="true">/</span>
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
              Selected Projects & Case Studies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600">
              A curated selection of engineering commissions designed and administered by Premier Engineering
              Group. For a comprehensive catalog covering thousands of projects over 70 years, download our
              official qualifications package.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={COMPANY_INFO.qualificationsPackageUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-50 border border-neutral-300 rounded shadow-sm transition-colors"
            >
              <Download className="w-4 h-4 text-[#c31111]" />
              <span>Full Qualifications PDF (2025)</span>
            </a>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors ${
                activeFilter === f.id
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Sector & Location Kicker */}
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                  <span className="font-mono text-[#c31111] font-semibold uppercase tracking-wider">
                    {project.sectorLabel}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span>{project.location}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#c31111] transition-colors leading-snug mb-2">
                  {project.title}
                </h3>

                <div className="text-xs font-medium text-neutral-600 mb-3 pb-3 border-b border-neutral-100">
                  <span className="text-neutral-400">Client: </span>
                  {project.client}
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3 mb-4">
                  {project.scopeSummary}
                </p>

                {/* Disciplines Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.disciplines.map((disc, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded border border-neutral-200"
                    >
                      {disc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-[#c31111] hover:underline flex items-center gap-1"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span className="text-[11px] font-mono text-neutral-400">{project.yearOrEra}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 p-6 sm:p-8">
              <div className="flex items-start justify-between pb-4 border-b border-neutral-200">
                <div>
                  <div className="text-xs font-mono text-[#c31111] uppercase tracking-wider font-semibold mb-1">
                    {selectedProject.sectorLabel} · {selectedProject.location}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">{selectedProject.title}</h3>
                  <div className="text-xs text-neutral-500 mt-1">Client: {selectedProject.client}</div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-full hover:bg-neutral-100 text-neutral-500 transition-colors"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                    Project Overview & Engineering Scope
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {selectedProject.scopeSummary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                    Engineered Systems & Key Deliverables
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-neutral-50 p-2.5 rounded border border-neutral-200/80">
                        <CheckCircle className="w-4 h-4 text-[#c31111] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                    Applicable Disciplines
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {selectedProject.disciplines.map((d, i) => (
                      <span key={i} className="bg-white px-2.5 py-1 rounded border border-neutral-200 font-medium text-neutral-800">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-100 rounded"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onNavigate('contact');
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#c31111] hover:bg-[#a50d0d] rounded transition-colors"
                >
                  Inquire About Similar Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
