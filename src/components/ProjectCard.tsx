import React, { useState } from 'react';
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Maximize2,
  Code2,
  Image as ImageIcon
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectCardProps {
  project: ProjectItem;
  isDark: boolean;
  customScreenshots?: Record<string, string>;
  onSelect: (project: ProjectItem) => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isDark,
  customScreenshots = {},
  onSelect,
  onOpenLightbox
}) => {
  const [slideIdx, setSlideIdx] = useState(0);
  const [previewMode, setPreviewMode] = useState<'visual' | 'code'>('visual');

  const slides = customScreenshots[project.id]
    ? [
        {
          src: customScreenshots[project.id],
          caption: 'Custom Uploaded Project Screenshot'
        },
        ...project.gallery
      ]
    : project.gallery;

  const currentSlide = slides[slideIdx % slides.length] || {
    src: project.thumbnail,
    caption: project.imageCaption
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIdx((prev) => (prev + 1) % slides.length);
  };

  const hasCodeSnippet = project.codeSnippets.length > 0;
  const primaryArtifact = project.rawFileUrls[0];

  return (
    <article
      className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-colors ${
        isDark
          ? 'bg-[#111826] border-slate-800 hover:border-slate-700'
          : 'bg-white border-slate-200 hover:border-slate-300'
      }`}
    >
      <div>
        {/* Top Bar: Technology Label & Preview Mode Switcher */}
        <div
          className={`px-5 py-3 border-b flex flex-wrap items-center justify-between gap-2 ${
            isDark ? 'border-slate-800 bg-[#0B0F17]' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span
              className={`font-semibold ${
                isDark ? 'text-emerald-400' : 'text-teal-700'
              }`}
            >
              {project.technologyLabel}
            </span>
            <span aria-hidden="true" className={isDark ? 'text-slate-600' : 'text-slate-400'}>
              ·
            </span>
            <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
              {project.projectTypeBadge}
            </span>
          </div>

          {hasCodeSnippet && (
            <div
              className={`inline-flex items-center gap-1 p-0.5 rounded-lg border ${
                isDark ? 'bg-[#111826] border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <button
                type="button"
                onClick={() => setPreviewMode('visual')}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  previewMode === 'visual'
                    ? isDark
                      ? 'bg-emerald-500 text-slate-950 font-semibold'
                      : 'bg-slate-900 text-white font-semibold'
                    : isDark
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ImageIcon className="w-3 h-3" />
                <span>Preview</span>
              </button>
              <button
                type="button"
                onClick={() => setPreviewMode('code')}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  previewMode === 'code'
                    ? isDark
                      ? 'bg-emerald-500 text-slate-950 font-semibold'
                      : 'bg-slate-900 text-white font-semibold'
                    : isDark
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code2 className="w-3 h-3" />
                <span>Code</span>
              </button>
            </div>
          )}
        </div>

        {/* 6. Relevant Project Preview, Dashboard Screenshot, or Code Preview */}
        <div
          className={`border-b ${
            isDark ? 'border-slate-800 bg-[#0B0F17]' : 'border-slate-200 bg-slate-50'
          }`}
        >
          {previewMode === 'visual' ? (
            <>
              <div className="relative aspect-video overflow-hidden">
                <ResilientImage
                  src={currentSlide.src}
                  alt={currentSlide.caption}
                  fallbackTitle={project.title}
                  fallbackSubtitle={project.technologyLabel}
                  className="w-full h-full object-cover"
                />

                {/* Top Enlarge Button */}
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox(
                      currentSlide.src,
                      project.title,
                      `${currentSlide.caption} (${(slideIdx % slides.length) + 1}/${slides.length})`
                    )
                  }
                  aria-label={`Enlarge ${project.title} preview`}
                  className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950/85 hover:bg-slate-900 text-slate-100 border border-slate-700 text-xs font-medium transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3 text-emerald-400" />
                  <span>Enlarge</span>
                </button>

                {/* Prev / Next Controls if Multiple Slides */}
                {slides.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous slide"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-slate-950/85 hover:bg-slate-900 text-slate-100 border border-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next slide"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-slate-950/85 hover:bg-slate-900 text-slate-100 border border-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Slide Caption & Thumbnail Selector Bar */}
              <div className="px-4 py-2 flex items-center justify-between gap-3">
                <p
                  className={`text-xs font-mono truncate ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {currentSlide.caption}
                </p>

                {slides.length > 1 && (
                  <div className="flex items-center gap-1.5 shrink-0">
                    {slides.map((_, i) => {
                      const isActive = i === slideIdx % slides.length;
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSlideIdx(i)}
                          aria-label={`View slide ${i + 1}`}
                          className={`px-2 py-0.5 rounded text-[11px] font-mono tabular-nums border transition-colors cursor-pointer ${
                            isActive
                              ? isDark
                                ? 'bg-emerald-500 text-slate-950 border-emerald-500 font-semibold'
                                : 'bg-slate-900 text-white border-slate-900 font-semibold'
                              : isDark
                                ? 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                                : 'bg-white text-slate-600 border-slate-300 hover:text-slate-900'
                          }`}
                        >
                          0{i + 1}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="p-4 bg-slate-950 text-slate-200">
              <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono text-emerald-400">
                <span className="truncate">{project.codeSnippets[0]?.title}</span>
                <span className="uppercase text-[11px] text-slate-400 shrink-0">
                  {project.codeSnippets[0]?.language}
                </span>
              </div>
              <pre className="text-xs font-mono leading-relaxed overflow-x-auto max-h-48 p-3 rounded-lg bg-[#0B0F17] border border-slate-800 text-slate-200">
                <code>{project.codeSnippets[0]?.code}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Card Body: 1. Title & Tags, 2. Summary, 3. Objective, 4. Approach, 5. Key Learning/Findings */}
        <div className="p-6 space-y-4">
          {/* 1. Project Title & Subtitle */}
          <div>
            <h3
              className={`text-xl font-display font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              <button
                type="button"
                onClick={() => onSelect(project)}
                className="text-left hover:underline cursor-pointer"
              >
                {project.title}
              </button>
            </h3>
            <p
              className={`text-xs font-medium mt-0.5 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {project.subtitle}
            </p>
          </div>

          {/* 2. Short, Specific Project Summary */}
          <p
            className={`text-sm leading-relaxed ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}
          >
            {project.shortDescription}
          </p>

          {/* Structured 3-Part Breakdown: Objective, Approach, Key Learning / Findings */}
          <div
            className={`rounded-xl border divide-y text-xs leading-relaxed ${
              isDark
                ? 'bg-[#0B0F17]/70 border-slate-800 divide-slate-800/80'
                : 'bg-slate-50/80 border-slate-200 divide-slate-200'
            }`}
          >
            {/* 3. Objective */}
            <div className="p-3.5">
              <span
                className={`font-mono font-semibold uppercase tracking-wider block mb-1 ${
                  isDark ? 'text-emerald-400' : 'text-teal-700'
                }`}
              >
                Objective &amp; Problem Addressed
              </span>
              <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                {project.objective} {project.problemAddressed}
              </p>
            </div>

            {/* 4. Approach / Implementation */}
            <div className="p-3.5">
              <span
                className={`font-mono font-semibold uppercase tracking-wider block mb-1 ${
                  isDark ? 'text-emerald-400' : 'text-teal-700'
                }`}
              >
                Approach &amp; Implementation
              </span>
              <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                {project.approachSummary}
              </p>
            </div>

            {/* 5. Key Learning or Findings */}
            <div className="p-3.5">
              <span
                className={`font-mono font-semibold uppercase tracking-wider block mb-1 ${
                  isDark ? 'text-emerald-400' : 'text-teal-700'
                }`}
              >
                Key Findings &amp; Learning
              </span>
              <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                {project.keyLearningsSummary}
              </p>
            </div>
          </div>

          {/* Skills Demonstrated */}
          <div
            className={`text-xs leading-relaxed pt-1 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              Skills Demonstrated:{' '}
            </span>
            {project.skillsDemonstrated.join(' · ')}
          </div>
        </div>
      </div>

      {/* 7. Functional Links Footer (Only renders valid links; never fake links) */}
      <div
        className={`px-6 py-3.5 border-t flex flex-wrap items-center justify-between gap-3 ${
          isDark
            ? 'bg-[#0B0F17]/60 border-slate-800'
            : 'bg-slate-50 border-slate-200'
        }`}
      >
        <button
          type="button"
          onClick={() => onSelect(project)}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors cursor-pointer ${
            isDark
              ? 'text-emerald-400 hover:text-emerald-300'
              : 'text-teal-700 hover:text-teal-800'
          }`}
        >
          <span>Explore Full Project Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex flex-wrap items-center gap-4">
          {primaryArtifact && primaryArtifact.url !== project.liveDemoUrl && (
            <a
              href={primaryArtifact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs font-mono font-medium transition-colors ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <span>{primaryArtifact.label}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors ${
                isDark ? 'text-slate-200 hover:text-emerald-400' : 'text-slate-800 hover:text-teal-700'
              }`}
            >
              <span>View Project on Overleaf</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors ${
                isDark ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-teal-700'
              }`}
            >
              <span>View Project on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
