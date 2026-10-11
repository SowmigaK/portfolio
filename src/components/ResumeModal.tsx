import React, { useState, useEffect } from 'react';
import { X, Printer, Download, Upload, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  isDark: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  isDark,
  onClose
}) => {
  const [customPdfUrl, setCustomPdfUrl] = useState<string | null>(null);
  const [customPdfName, setCustomPdfName] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrintResume = () => {
    window.print();
  };

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setCustomPdfUrl(url);
    setCustomPdfName(file.name);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border shadow-2xl ${
          isDark
            ? 'bg-[#0F172A] border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Top Action Bar */}
        <div
          className={`sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b backdrop-blur-md ${
            isDark ? 'bg-[#0F172A]/95 border-slate-800' : 'bg-white/95 border-slate-200'
          }`}
        >
          <div>
            <h2 id="resume-modal-title" className="text-base font-display font-bold">
              {PROFILE_DATA.name} — Verified Curriculum Vitae
            </h2>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Print/Save directly as a 1-page PDF or attach your local PDF file
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {customPdfUrl ? (
              <a
                href={customPdfUrl}
                download={customPdfName || 'Sowmiga_K_Resume.pdf'}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-teal-500 text-slate-950 hover:bg-teal-400 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Attached PDF</span>
              </a>
            ) : null}

            <label
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border cursor-pointer transition-colors ${
                isDark
                  ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              title="Attach your original PDF file to enable direct binary PDF download"
            >
              <Upload className="w-3.5 h-3.5 text-teal-400" />
              <span>{customPdfUrl ? 'Change PDF' : 'Attach Original PDF'}</span>
              <input
                type="file"
                accept="application/pdf"
                onChange={handlePdfUpload}
                className="sr-only"
              />
            </label>

            <button
              type="button"
              onClick={handlePrintResume}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                isDark
                  ? 'bg-teal-500 text-slate-950 hover:bg-teal-400'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Save / Print as PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume viewer"
              className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-colors ${
                isDark
                  ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {customPdfUrl && (
          <div
            className={`mx-6 mt-4 p-3 rounded-xl border flex items-center justify-between text-xs ${
              isDark
                ? 'bg-teal-950/30 border-teal-500/30 text-teal-300'
                : 'bg-teal-50 border-teal-200 text-teal-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>
                Attached PDF ready: <strong className="font-mono">{customPdfName}</strong>
              </span>
            </div>
            <span>You can also place /public/Sowmiga_K_Resume.pdf in the project root for static hosting.</span>
          </div>
        )}

        {/* Verbatim Printable 1-Page Resume Replica */}
        <div className="p-6 sm:p-8">
          <div
            id="printable-resume"
            className={`p-8 sm:p-10 rounded-xl border max-w-3xl mx-auto space-y-5 ${
              isDark
                ? 'bg-slate-950 border-slate-800 text-slate-100'
                : 'bg-white border-slate-300 text-slate-900'
            }`}
          >
            {/* Resume Header */}
            <div className="text-center border-b pb-4 border-current/15">
              <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-wide uppercase">
                SOWMIGA K
              </h1>
              <p className="text-sm mt-1 opacity-85">Coimbatore, Tamil Nadu</p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs mt-2 font-mono">
                <span>+91 96884 40339</span>
                <span>·</span>
                <a href={`mailto:${PROFILE_DATA.email}`} className="underline">
                  {PROFILE_DATA.email}
                </a>
                <span>·</span>
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  linkedin.com/in/sowmiga-k/
                </a>
                <span>·</span>
                <a
                  href={PROFILE_DATA.githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  github.com/SowmigaK
                </a>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h2 className="text-sm font-display font-bold uppercase tracking-wider border-b pb-1 mb-2 border-current/20">
                Executive Summary
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                Analytical and detail-oriented professional with a strong interest in Python programming and Data Analytics, skilled in problem solving, data interpretation, and analytical thinking. Eager to apply these skills to derive insights from data and contribute to data-driven decision-making.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-display font-bold uppercase tracking-wider border-b pb-1 mb-2 border-current/20">
                Education
              </h2>
              <div className="flex items-baseline justify-between text-xs sm:text-sm font-semibold">
                <span>Bachelor of Science in Mathematics</span>
                <span className="font-mono text-xs">June 2023 – May 2026</span>
              </div>
              <div className="flex items-baseline justify-between text-xs sm:text-sm opacity-85 mt-0.5">
                <span className="italic">Vellalar College for Women</span>
                <span className="font-mono text-xs">Percentage: 72%</span>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-sm font-display font-bold uppercase tracking-wider border-b pb-1 mb-2 border-current/20">
                Technical Skills
              </h2>
              <div className="space-y-1 text-xs sm:text-sm leading-relaxed">
                <p>
                  <strong>Data Analytics:</strong> Data Cleaning, Exploratory Data Analysis (EDA), Data Visualization, Descriptive Statistics
                </p>
                <p>
                  <strong>Excel:</strong> Pivot Tables, Advanced Formulas, Charts, Dashboard Development
                </p>
                <p>
                  <strong>SQL:</strong> Data Filtering, Aggregation, GROUP BY, JOINs, Subqueries, Data Analysis
                </p>
                <p>
                  <strong>Power BI:</strong> Power Query, DAX, Data Modeling, Relationships, KPI Development, Interactive Dashboards
                </p>
                <p>
                  <strong>Programming:</strong> Python, MATLAB
                </p>
                <p>
                  <strong>Tools:</strong> SageMath, LaTeX, Overleaf
                </p>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-sm font-display font-bold uppercase tracking-wider border-b pb-1 mb-2 border-current/20">
                Projects
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <div className="flex items-baseline justify-between font-semibold">
                    <span>NoviTech Manufacturing Dashboard</span>
                    <span className="italic font-normal text-xs">Power BI</span>
                  </div>
                  <ul className="list-disc list-inside opacity-90 space-y-0.5 mt-0.5">
                    <li>
                      Analyzed manufacturing data to track production, quality, procurement, cost, and operational KPIs.
                    </li>
                    <li>
                      Used Power Query, DAX, data modeling, and interactive visualizations to develop an executive dashboard.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-baseline justify-between font-semibold">
                    <span>HealthPlus Healthcare Data Analysis</span>
                    <span className="italic font-normal text-xs">SQL</span>
                  </div>
                  <ul className="list-disc list-inside opacity-90 space-y-0.5 mt-0.5">
                    <li>
                      Analyzed healthcare data using SQL to extract meaningful insights from relational datasets.
                    </li>
                    <li>
                      Used JOINs, filtering, aggregation, GROUP BY, and subqueries for data analysis and reporting.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-baseline justify-between font-semibold">
                    <span>FreshMart Sales Dashboard</span>
                    <span className="italic font-normal text-xs">Microsoft Excel</span>
                  </div>
                  <ul className="list-disc list-inside opacity-90 space-y-0.5 mt-0.5">
                    <li>
                      Analyzed sales, profit, orders, and category performance using Excel.
                    </li>
                    <li>
                      Built an interactive dashboard using formulas, Pivot Tables, and charts to identify business trends.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-baseline justify-between font-semibold">
                    <span>Statistics Content Development</span>
                    <span className="italic font-normal text-xs">LaTeX — Team Project</span>
                  </div>
                  <ul className="list-disc list-inside opacity-90 space-y-0.5 mt-0.5">
                    <li>
                      Developed and formatted statistical problems and solutions covering mean, variance, and probability.
                    </li>
                    <li>
                      Collaborated through Overleaf to maintain accurate equations and consistent document formatting.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Academic Achievements */}
            <div>
              <h2 className="text-sm font-display font-bold uppercase tracking-wider border-b pb-1 mb-2 border-current/20">
                Academic Achievements
              </h2>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div>
                  <div className="flex items-baseline justify-between font-semibold">
                    <span>Initiation Into Mathematics (INITMATH 2025)</span>
                    <span className="font-mono text-xs font-normal">Jan 2025</span>
                  </div>
                  <p className="opacity-90 mt-0.5">
                    • Selected for a 6-day regional training programme under the MTTS Trust, focusing on linear algebra, real analysis, and problem-solving through advanced mathematical lectures and guided exploration.
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline justify-between font-semibold">
                    <span>ISRO–IIRS Online Course</span>
                    <span className="font-mono text-xs font-normal">Sep–Oct 2024</span>
                  </div>
                  <p className="opacity-90 mt-0.5">
                    • Completed the online course &ldquo;Overview of Global Navigation Satellite System (GNSS)&rdquo; organized by ISRO–IIRS, Dehradun, covering the fundamentals and applications of satellite-based navigation systems.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Quiz Competitions</p>
                  <p className="opacity-90 mt-0.5">
                    • Participated in multiple online quiz competitions across diverse topics, consistently achieving strong results.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications and Workshops */}
            <div>
              <h2 className="text-sm font-display font-bold uppercase tracking-wider border-b pb-1 mb-2 border-current/20">
                Certifications and Workshops
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div>
                  <div className="flex items-baseline justify-between font-semibold">
                    <span>Python Full Stack Development – NK TECH</span>
                    <span className="font-mono text-xs font-normal">May 2025</span>
                  </div>
                  <p className="opacity-90">
                    • Successfully completed a Python Full Stack Development certification course.
                  </p>
                </div>
                <div className="flex items-baseline justify-between">
                  <span>Generative AI Learnathon – GUVI SAWIT.AI</span>
                  <span className="font-mono text-xs">Sep 2024</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span>Business Analytics Webinar – GUVI &amp; HCL</span>
                  <span className="font-mono text-xs">Jun 2025</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span>Presented paper at Regional Youth Astronomy &amp; Space Science Congress (YASSC)</span>
                  <span className="font-mono text-xs">Jul 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
