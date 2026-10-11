import React from 'react';
import { ArrowUp, Download, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDark, onOpenResumeModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 transition-colors ${
        isDark ? 'bg-[#080B11] text-slate-400' : 'bg-slate-100 text-slate-600'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              className={`text-base font-display font-bold ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {PROFILE_DATA.name}
            </p>
            <p className="text-xs mt-0.5">
              Aspiring Data Analyst · {PROFILE_DATA.location}
            </p>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium"
          >
            <a href="#home" className={isDark ? 'hover:text-white' : 'hover:text-slate-900'}>
              Home
            </a>
            <a href="#about" className={isDark ? 'hover:text-white' : 'hover:text-slate-900'}>
              About
            </a>
            <a href="#skills" className={isDark ? 'hover:text-white' : 'hover:text-slate-900'}>
              Skills
            </a>
            <a href="#projects" className={isDark ? 'hover:text-white' : 'hover:text-slate-900'}>
              Projects
            </a>
            <a href="#education" className={isDark ? 'hover:text-white' : 'hover:text-slate-900'}>
              Education
            </a>
            <a
              href="#certifications"
              className={isDark ? 'hover:text-white' : 'hover:text-slate-900'}
            >
              Certifications
            </a>
            <a href="#contact" className={isDark ? 'hover:text-white' : 'hover:text-slate-900'}>
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenResumeModal}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap cursor-pointer ${
                isDark
                  ? 'border-slate-800 bg-[#111826] text-slate-200 hover:border-emerald-500/50'
                  : 'border-slate-300 bg-white text-slate-800 hover:border-teal-600/50'
              }`}
            >
              <Download className="w-3.5 h-3.5 text-emerald-500" />
              <span>Resume PDF</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-colors cursor-pointer ${
                isDark
                  ? 'border-slate-800 bg-[#111826] text-slate-300 hover:bg-slate-800'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          className={`pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs ${
            isDark ? 'border-slate-800/80' : 'border-slate-200'
          }`}
        >
          <p className="tabular-nums">
            © {currentYear} {PROFILE_DATA.name}. Built with curiosity and a passion for data.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PROFILE_DATA.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 ${
                isDark ? 'hover:text-emerald-400' : 'hover:text-teal-700'
              }`}
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 ${
                isDark ? 'hover:text-emerald-400' : 'hover:text-teal-700'
              }`}
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className={isDark ? 'hover:text-emerald-400' : 'hover:text-teal-700'}
            >
              {PROFILE_DATA.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
