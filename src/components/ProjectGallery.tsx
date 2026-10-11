import React, { useState, useMemo } from 'react';
import { Search, RotateCcw } from 'lucide-react';
import { PROJECTS_DATA, ProjectCategory, ProjectItem } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface ProjectGalleryProps {
  isDark: boolean;
  customScreenshots?: Record<string, string>;
  onSelectProject: (project: ProjectItem) => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

type GalleryFilter = 'Core Projects (4)' | ProjectCategory;

const FILTER_OPTIONS: GalleryFilter[] = [
  'Core Projects (4)',
  'All Projects',
  'Power BI',
  'SQL',
  'Excel',
  'LaTeX & Math',
  'Python'
];

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  isDark,
  customScreenshots = {},
  onSelectProject,
  onOpenLightbox
}) => {
  const [selectedFilter, setSelectedFilter] = useState<GalleryFilter>('Core Projects (4)');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesFilter =
        selectedFilter === 'All Projects'
          ? true
          : selectedFilter === 'Core Projects (4)'
            ? project.featured
            : project.category === selectedFilter;

      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesFilter;

      return (
        matchesFilter &&
        (project.title.toLowerCase().includes(q) ||
          project.shortDescription.toLowerCase().includes(q) ||
          project.objective.toLowerCase().includes(q) ||
          project.approachSummary.toLowerCase().includes(q) ||
          project.skillsDemonstrated.some((s) => s.toLowerCase().includes(q)) ||
          project.tools.some((t) => t.toLowerCase().includes(q)) ||
          project.technologyLabel.toLowerCase().includes(q))
      );
    });
  }, [selectedFilter, searchQuery]);

  return (
    <section
      id="projects"
      className={`py-20 md:py-24 border-b ${
        isDark ? 'border-slate-800/80' : 'border-slate-200'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p
              className={`text-xs font-mono font-semibold tracking-wider mb-2 ${
                isDark ? 'text-emerald-400' : 'text-teal-700'
              }`}
            >
              03. PROJECTS &amp; CASE STUDIES
            </p>
            <h2
              className={`text-2xl md:text-3xl font-display font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Data Analytics, SQL, Power BI, Excel &amp; Statistics Projects
            </h2>
          </div>

          <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Detailed breakdown of my core projects — including Objective, Approach, Key Findings, and verified links to{' '}
            <a
              href="https://github.com/SowmigaK/Sowmiga"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-mono underline ${
                isDark ? 'text-emerald-400 hover:text-emerald-300' : 'text-teal-700'
              }`}
            >
              github.com/SowmigaK/Sowmiga
            </a>
            .
          </p>
        </div>

        {/* Category Filter Tabs + Search Input */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
          <div
            className={`flex flex-wrap items-center gap-1 p-1.5 rounded-xl border ${
              isDark ? 'bg-[#111826] border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}
            role="group"
            aria-label="Filter projects by category"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = selectedFilter === option;
              const count =
                option === 'All Projects'
                  ? PROJECTS_DATA.length
                  : option === 'Core Projects (4)'
                    ? PROJECTS_DATA.filter((p) => p.featured).length
                    : PROJECTS_DATA.filter((p) => p.category === option).length;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedFilter(option)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-white text-slate-900 shadow-xs'
                      : isDark
                        ? 'text-slate-400 hover:text-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{option === 'Core Projects (4)' ? 'Core Projects' : option}</span>
                  <span className="ml-1.5 font-mono tabular-nums opacity-75">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <Search
              className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${
                isDark ? 'text-slate-500' : 'text-slate-400'
              }`}
            />
            <input
              id="project-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Power BI, SQL, Excel, LaTeX..."
              className={`w-full pl-9 pr-4 py-2 text-xs rounded-xl border transition-colors focus:outline-none ${
                isDark
                  ? 'bg-[#111826] border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-emerald-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-600'
              }`}
            />
          </div>
        </div>

        {/* 2-Column Structured Project Grid */}
        {filteredProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isDark={isDark}
                  customScreenshots={customScreenshots}
                  onSelect={onSelectProject}
                  onOpenLightbox={onOpenLightbox}
                />
              ))}
            </div>

            {selectedFilter === 'Core Projects (4)' && !searchQuery && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setSelectedFilter('All Projects')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                    isDark
                      ? 'bg-[#111826] border-slate-800 text-slate-200 hover:border-emerald-500/60'
                      : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  Show All 8 Projects (Including Python Workspace &amp; Additional Datasets) →
                </button>
              </div>
            )}
          </>
        ) : (
          <div
            className={`p-12 rounded-2xl border text-center max-w-lg mx-auto my-6 ${
              isDark ? 'bg-[#111826] border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <p
              className={`text-base font-display font-semibold mb-1 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              No matching projects found
            </p>
            <p className={`text-xs mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              No projects matched &ldquo;{searchQuery}&rdquo; in {selectedFilter}.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedFilter('Core Projects (4)');
                setSearchQuery('');
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                isDark
                  ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
