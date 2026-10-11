import React from 'react';
import { Maximize2, ArrowUpRight, Upload, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface AnalyticsShowcaseProps {
  isDark: boolean;
  customScreenshots: Record<string, string>;
  onUploadCustomScreenshot: (projectId: string, dataUrl: string) => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const AnalyticsShowcase: React.FC<AnalyticsShowcaseProps> = ({
  isDark,
  customScreenshots,
  onUploadCustomScreenshot,
  onSelectProject,
  onOpenLightbox
}) => {
  const showcaseProjects = PROJECTS_DATA.filter((p) => p.featured);

  const handleFileUpload = (projectId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onUploadCustomScreenshot(projectId, reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section
      id="showcase"
      className={`py-20 md:py-24 border-b ${
        isDark ? 'border-slate-800/80' : 'border-slate-200'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p
              className={`text-xs font-mono font-semibold tracking-wider mb-2 ${
                isDark ? 'text-teal-400' : 'text-teal-700'
              }`}
            >
              04. DATA IN ACTION
            </p>
            <h2
              className={`text-2xl md:text-3xl font-display font-bold tracking-tight text-balance ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Analytics &amp; Dashboard Showcase
            </h2>
          </div>

          <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore visual previews of my Power BI, SQL, Excel, and Python analytical work. Click any card to enlarge in the lightbox or upload exported screenshots from the repository&apos;s{' '}
            <code className="font-mono text-xs">.pbix</code> and{' '}
            <code className="font-mono text-xs">.pptx</code> files.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcaseProjects.map((item) => {
            const imgSrc = customScreenshots[item.id] || item.thumbnail;
            const isCustom = Boolean(customScreenshots[item.id]);

            return (
              <div
                key={item.id}
                className={`rounded-2xl border overflow-hidden flex flex-col justify-between ${
                  isDark
                    ? 'bg-slate-900/50 border-slate-800/90'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div className="relative aspect-video overflow-hidden border-b border-slate-800/50 group">
                    <ResilientImage
                      src={imgSrc}
                      alt={`${item.title} dashboard preview`}
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-4">
                      <div className="text-xs font-mono text-slate-200">
                        <span>{item.category}</span>
                        <span aria-hidden="true" className="mx-1.5">
                          ·
                        </span>
                        <span className="text-slate-300">
                          {isCustom ? 'User Screenshot' : 'Replaceable Preview Slot'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <label
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium cursor-pointer transition-colors whitespace-nowrap"
                          title="Upload custom screenshot for this project"
                        >
                          <Upload className="w-3.5 h-3.5 text-teal-400" />
                          <span>Replace</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(item.id, e)}
                            className="sr-only"
                          />
                        </label>

                        <button
                          type="button"
                          onClick={() =>
                            onOpenLightbox(imgSrc, item.title, item.imageCaption)
                          }
                          aria-label={`Enlarge ${item.title} visual`}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-semibold transition-colors whitespace-nowrap"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Lightbox</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      className={`text-lg font-display font-bold mb-1.5 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed mb-4 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {item.shortDescription}
                    </p>

                    <div
                      className={`text-xs font-mono ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Artifact:{' '}
                      {item.rawFileUrls[0] ? (
                        <a
                          href={item.rawFileUrls[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1 underline ${
                            isDark ? 'text-teal-400 hover:text-teal-300' : 'text-teal-700'
                          }`}
                        >
                          <span>{item.rawFileUrls[0].label}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span>GitHub Repository</span>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={`px-6 py-3.5 border-t flex items-center justify-between ${
                    isDark
                      ? 'bg-slate-950/40 border-slate-800/80'
                      : 'bg-slate-50/70 border-slate-200/80'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onSelectProject(item)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                      isDark ? 'text-teal-400 hover:text-teal-300' : 'text-teal-700 hover:text-teal-800'
                    }`}
                  >
                    <span>Explore Full Project Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenLightbox(imgSrc, item.title, item.imageCaption)}
                    className={`text-xs font-medium transition-colors ${
                      isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Preview Image
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
