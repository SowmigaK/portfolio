import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  Database,
  FileCode2,
  Upload
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectDetailsModalProps {
  project: ProjectItem | null;
  isDark: boolean;
  customScreenshots: Record<string, string>;
  onUploadCustomScreenshot: (projectId: string, dataUrl: string) => void;
  onClose: () => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  isDark,
  customScreenshots,
  onUploadCustomScreenshot,
  onClose,
  onOpenLightbox
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeSnippetIdx, setActiveSnippetIdx] = useState(0);

  useEffect(() => {
    setActiveSnippetIdx(0);
    setCopiedIndex(null);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const displayImage = customScreenshots[project.id] || project.thumbnail;
  const isCustomUploaded = Boolean(customScreenshots[project.id]);

  const handleCopyCode = async (code: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback copy
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onUploadCustomScreenshot(project.id, reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl ${
          isDark
            ? 'bg-[#0F172A] border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Sticky Modal Header */}
        <div
          className={`sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 border-b backdrop-blur-md ${
            isDark
              ? 'bg-[#0F172A]/95 border-slate-800'
              : 'bg-white/95 border-slate-200'
          }`}
        >
          <div className="min-w-0">
            <div
              className={`flex flex-wrap items-center gap-2 text-xs font-mono ${
                isDark ? 'text-teal-400' : 'text-teal-700'
              }`}
            >
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                {project.resumeVerified && project.repoVerified
                  ? 'Verified in Resume & GitHub Repository'
                  : project.repoVerified
                    ? 'Verified in GitHub Repository'
                    : 'Verified in Uploaded Resume'}
              </span>
            </div>
            <h2
              id="modal-project-title"
              className="text-lg sm:text-xl font-display font-bold truncate mt-0.5"
            >
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study modal"
            className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-colors shrink-0 ${
              isDark
                ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                : 'border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-8">
          {/* Visual Preview + Lightbox & Custom Screenshot Replacement */}
          <div className="space-y-2.5">
            <div className="relative rounded-xl overflow-hidden border border-slate-800/60 aspect-video group">
              <ResilientImage
                src={displayImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-4">
                <p className="text-xs text-slate-200 max-w-xl">
                  {isCustomUploaded
                    ? 'Custom uploaded project screenshot preview'
                    : project.imageCaption}
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <label
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 text-xs font-medium cursor-pointer transition-colors whitespace-nowrap"
                    title="Replace preview with your own exported screenshot"
                  >
                    <Upload className="w-3.5 h-3.5 text-teal-400" />
                    <span>Replace Screenshot</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox(displayImage, project.title, project.imageCaption)
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-semibold transition-colors whitespace-nowrap"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Enlarge</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Repository File Links (Only shown when valid file URLs exist) */}
          {project.rawFileUrls.length > 0 && (
            <div
              className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-4 ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="text-xs">
                <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  Verified Repository Artifacts:{' '}
                </span>
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  Inspect the actual project files hosted on GitHub
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.rawFileUrls.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                      isDark
                        ? 'bg-slate-950 border-slate-700 text-teal-300 hover:border-teal-500'
                        : 'bg-white border-slate-300 text-teal-800 hover:border-teal-600'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 1. Overview & 2. Business Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`p-5 rounded-xl border ${
                isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/60 border-slate-200'
              }`}
            >
              <h3
                className={`text-sm font-display font-bold mb-2 ${
                  isDark ? 'text-teal-400' : 'text-teal-700'
                }`}
              >
                01. Project Overview
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {project.overview}
              </p>
            </div>

            <div
              className={`p-5 rounded-xl border ${
                isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/60 border-slate-200'
              }`}
            >
              <h3
                className={`text-sm font-display font-bold mb-2 ${
                  isDark ? 'text-teal-400' : 'text-teal-700'
                }`}
              >
                02. Business Problem &amp; Objective
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {project.businessProblem}
              </p>
            </div>
          </div>

          {/* 3. Dataset & Schema Architecture */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Database className={`w-4 h-4 ${isDark ? 'text-teal-400' : 'text-teal-700'}`} />
              <h3
                className={`text-base font-display font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                03. Dataset &amp; Relational Schema Structure
              </h3>
            </div>
            <p className={`text-xs mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {project.datasetSummary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {project.datasetTables.map((tbl) => (
                <div
                  key={tbl.tableName}
                  className={`p-4 rounded-xl border ${
                    isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold text-teal-500">
                      {tbl.tableName}
                    </span>
                    <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {tbl.fileName}
                    </span>
                  </div>
                  <p className={`text-xs mb-2.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {tbl.description}
                  </p>
                  <p className={`text-xs font-mono leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Columns: {tbl.columns.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Data Cleaning & 5. Analytical Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3
                className={`text-base font-display font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                04. Data Cleaning &amp; Preparation
              </h3>
              <ul className="space-y-2.5 text-sm">
                {project.dataCleaningSteps.map((step, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2.5 leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    <span className="font-mono text-xs text-teal-500 mt-1 shrink-0">
                      0{i + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className={`text-base font-display font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                05. Analytical Approach
              </h3>
              <ul className="space-y-2.5 text-sm">
                {project.analyticalApproach.map((step, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2.5 leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    <span className="font-mono text-xs text-teal-500 mt-1 shrink-0">
                      0{i + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6. Real SQL Queries / Python Code / DAX Snippets (If present) */}
          {project.codeSnippets.length > 0 && (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <FileCode2 className={`w-4 h-4 ${isDark ? 'text-teal-400' : 'text-teal-700'}`} />
                  <h3
                    className={`text-base font-display font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    06. Verified Code &amp; Queries
                  </h3>
                </div>

                {project.codeSnippets.length > 1 && (
                  <div
                    className={`flex flex-wrap items-center gap-1 p-1 rounded-lg border ${
                      isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
                    }`}
                  >
                    {project.codeSnippets.map((snip, idx) => (
                      <button
                        key={snip.title}
                        type="button"
                        onClick={() => setActiveSnippetIdx(idx)}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                          activeSnippetIdx === idx
                            ? isDark
                              ? 'bg-teal-500 text-slate-950 font-semibold'
                              : 'bg-white text-slate-900 shadow-xs font-semibold'
                            : isDark
                              ? 'text-slate-400 hover:text-slate-200'
                              : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Snippet {idx + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {project.codeSnippets[activeSnippetIdx] && (
                <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden">
                  <div className="flex items-center justify-between gap-4 px-4 py-2.5 border-b border-slate-800 bg-slate-900/90">
                    <div className="min-w-0">
                      <p className="text-xs font-mono font-semibold text-slate-200 truncate">
                        {project.codeSnippets[activeSnippetIdx].title}
                      </p>
                      <p className="text-xs text-slate-400 truncate">
                        {project.codeSnippets[activeSnippetIdx].description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {project.codeSnippets[activeSnippetIdx].sourceFileUrl && (
                        <a
                          href={project.codeSnippets[activeSnippetIdx].sourceFileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors whitespace-nowrap"
                        >
                          <span>Raw File</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyCode(
                            project.codeSnippets[activeSnippetIdx].code,
                            activeSnippetIdx
                          )
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium bg-teal-500/20 text-teal-300 border border-teal-500/40 hover:bg-teal-500/30 transition-colors whitespace-nowrap"
                      >
                        {copiedIndex === activeSnippetIdx ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-80">
                    <code>{project.codeSnippets[activeSnippetIdx].code}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* 7. Key Findings & Business Insights */}
          <div
            className={`p-5 rounded-xl border ${
              isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-teal-50/40 border-teal-200/70'
            }`}
          >
            <h3
              className={`text-base font-display font-bold mb-3 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Key Analytical Findings &amp; Business Insights
            </h3>
            <ul className="space-y-2 text-sm">
              {project.keyFindings.map((finding, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2.5 leading-relaxed ${
                    isDark ? 'text-slate-200' : 'text-slate-700'
                  }`}
                >
                  <span className="font-mono text-xs text-teal-500 mt-1 shrink-0">→</span>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal Footer Actions */}
          <div
            className={`pt-4 border-t flex flex-wrap items-center justify-between gap-4 ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}
          >
            <div className="text-xs font-mono text-slate-400">
              Tools: {project.tools.join(' · ')}
            </div>

            <div className="flex items-center gap-3">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                    isDark
                      ? 'bg-teal-500 text-slate-950 hover:bg-teal-400'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <span>Open Project on Overleaf</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                    isDark
                      ? 'bg-teal-500 text-slate-950 hover:bg-teal-400'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <span>Open Repository on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                  isDark
                    ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
