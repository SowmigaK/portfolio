import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  ExternalLink,
  Sun,
  Moon,
  Database,
  BarChart3,
  FileSpreadsheet,
  Code2,
  Upload
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroProps {
  isDark: boolean;
  portraitSrc: string;
  onUploadPortrait: (dataUrl: string) => void;
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
  onSelectProjectById: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  isDark,
  portraitSrc,
  onUploadPortrait,
  onToggleTheme,
  onOpenResumeModal,
  onSelectProjectById
}) => {
  const [activeTab, setActiveTab] = useState<'domains' | 'sql' | 'python'>('domains');
  const [imageLoadFailed, setImageLoadFailed] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Read exact original file bytes without any canvas modification, resizing, or filtering
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageLoadFailed(false);
        onUploadPortrait(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const hasValidPhoto = Boolean(portraitSrc) && !imageLoadFailed;

  return (
    <section
      id="home"
      className={`relative analytics-grid-bg pt-8 pb-16 md:pt-12 md:pb-24 border-b ${
        isDark ? 'border-slate-800/80' : 'border-slate-200'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top Utility Strip (Location, Core Stack & Theme Switcher) */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b text-xs ${
            isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-600'
          }`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`font-mono font-semibold tracking-wider ${
                isDark ? 'text-emerald-400' : 'text-teal-700'
              }`}
            >
              DATA ANALYTICS &amp; BI PORTFOLIO
            </span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE_DATA.location}</span>
            <span aria-hidden="true">·</span>
            <span>SQL · Power BI · Excel · Python</span>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isDark
                ? 'border-slate-800 bg-[#111826] text-slate-200 hover:border-slate-700'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-slate-700" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left 7 Columns: Compact Unmodified Portrait + Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Compact Profile Identity Row (Photo Displayed Exclusively Once Here, Unmodified) */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                <div className="w-28 sm:w-32 shrink-0">
                  <div
                    className={`rounded-xl overflow-hidden border ${
                      isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
                    }`}
                  >
                    {hasValidPhoto ? (
                      <img
                        src={portraitSrc}
                        alt={PROFILE_DATA.name}
                        onError={() => setImageLoadFailed(true)}
                        className="w-full h-auto block"
                      />
                    ) : (
                      <div className="p-4 text-center space-y-1.5 bg-slate-950 text-slate-200">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto font-display font-bold text-sm text-emerald-400">
                          {PROFILE_DATA.monogram}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight">
                          Original Photo
                        </p>
                      </div>
                    )}
                  </div>
                  <label
                    className={`mt-2 w-full inline-flex items-center justify-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium border cursor-pointer transition-colors ${
                      isDark
                        ? 'border-slate-800 bg-[#111826] text-slate-300 hover:border-slate-700'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                    title="Select your original photo file (displayed as-is without any editing or effects)"
                  >
                    <Upload className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>{hasValidPhoto ? 'Update Photo' : 'Select Photo'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                </div>

                <div>
                  <p
                    className={`text-sm font-medium mb-2 ${
                      isDark ? 'text-emerald-400' : 'text-teal-700'
                    }`}
                  >
                    {PROFILE_DATA.professionalTitle}
                  </p>

                  <h1
                    className={`font-display font-bold tracking-tight text-balance leading-[1.14] ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                    style={{ fontSize: 'clamp(2rem, 3.6vw, 3.1rem)' }}
                  >
                    Hi, I&apos;m {PROFILE_DATA.name}.{' '}
                    <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                      Turning raw data into structured insights.
                    </span>
                  </h1>
                </div>
              </div>

              <p
                className={`text-base leading-relaxed max-w-[64ch] mb-3.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {PROFILE_DATA.heroLead1}
              </p>

              <p
                className={`text-sm leading-relaxed max-w-[64ch] mb-8 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {PROFILE_DATA.heroLead2}
              </p>
            </div>

            <div>
              {/* Primary & Secondary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-7">
                <a
                  href="#projects"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    isDark
                      ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <span>Explore My Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isDark
                      ? 'border-slate-700 bg-[#111826] text-slate-100 hover:bg-slate-800'
                      : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>View &amp; Download Resume</span>
                </button>
              </div>

              {/* Direct External Links */}
              <div
                className={`flex flex-wrap items-center gap-y-2 gap-x-4 pt-5 border-t text-xs font-medium ${
                  isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-600'
                }`}
              >
                <a
                  href={PROFILE_DATA.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
                    isDark ? 'text-slate-200 hover:text-emerald-400' : 'text-slate-800 hover:text-teal-700'
                  }`}
                >
                  <span>GitHub (SowmigaK/Sowmiga)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
                    isDark ? 'hover:text-emerald-400' : 'hover:text-teal-700'
                  }`}
                >
                  <span>LinkedIn (sowmiga-k)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className={`font-mono transition-colors whitespace-nowrap shrink-0 ${
                    isDark ? 'hover:text-emerald-400' : 'hover:text-teal-700'
                  }`}
                >
                  {PROFILE_DATA.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Data-Inspired Interactive Analytical Workbench */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              className={`h-full rounded-2xl border overflow-hidden flex flex-col justify-between ${
                isDark
                  ? 'bg-[#111826] border-slate-800'
                  : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              {/* Workbench Top Header */}
              <div
                className={`flex items-center justify-between gap-2 px-4 py-3 border-b ${
                  isDark ? 'border-slate-800 bg-[#0B0F17]' : 'border-slate-200 bg-slate-50'
                }`}
              >
                <span
                  className={`text-xs font-mono font-semibold truncate ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Core Projects Index
                </span>

                <div
                  className={`flex items-center gap-1 p-0.5 rounded-lg border ${
                    isDark ? 'bg-[#111826] border-slate-800' : 'bg-slate-200/70 border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab('domains')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activeTab === 'domains'
                        ? isDark
                          ? 'bg-emerald-500 text-slate-950 font-semibold'
                          : 'bg-white text-slate-900 shadow-xs font-semibold'
                        : isDark
                          ? 'text-slate-400 hover:text-slate-200'
                          : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Projects
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('sql')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activeTab === 'sql'
                        ? isDark
                          ? 'bg-emerald-500 text-slate-950 font-semibold'
                          : 'bg-white text-slate-900 shadow-xs font-semibold'
                        : isDark
                          ? 'text-slate-400 hover:text-slate-200'
                          : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    SQL Sample
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('python')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activeTab === 'python'
                        ? isDark
                          ? 'bg-emerald-500 text-slate-950 font-semibold'
                          : 'bg-white text-slate-900 shadow-xs font-semibold'
                        : isDark
                          ? 'text-slate-400 hover:text-slate-200'
                          : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Python Sample
                  </button>
                </div>
              </div>

              {/* Workbench Interactive Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                {activeTab === 'domains' && (
                  <div className="space-y-3">
                    <p
                      className={`text-xs leading-relaxed ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      Featured projects from my resume and{' '}
                      <span className="font-mono">github.com/SowmigaK/Sowmiga</span>:
                    </p>

                    <div
                      className={`rounded-xl border divide-y text-xs ${
                        isDark
                          ? 'bg-[#0B0F17] border-slate-800 divide-slate-800/80'
                          : 'bg-slate-50 border-slate-200 divide-slate-200'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => onSelectProjectById('novitech-powerbi')}
                        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-emerald-500/5 transition-colors cursor-pointer"
                      >
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                            1. NoviTech Manufacturing Dashboard
                          </p>
                          <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                            Power BI · Executive KPIs · 8-Table Schema
                          </p>
                        </div>
                        <span className="font-mono tabular-nums text-emerald-500 font-semibold shrink-0">
                          Power BI →
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectProjectById('healthplus-sql')}
                        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-emerald-500/5 transition-colors cursor-pointer"
                      >
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                            2. HealthPlus Healthcare Data Analysis
                          </p>
                          <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                            SQL · 38 Queries · JOINs, CTEs &amp; Window Functions
                          </p>
                        </div>
                        <span className="font-mono tabular-nums text-emerald-500 font-semibold shrink-0">
                          SQL →
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectProjectById('freshmart-excel')}
                        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-emerald-500/5 transition-colors cursor-pointer"
                      >
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                            3. FreshMart Sales Dashboard
                          </p>
                          <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                            Microsoft Excel · PivotTables · 6 Workbooks
                          </p>
                        </div>
                        <span className="font-mono tabular-nums text-emerald-500 font-semibold shrink-0">
                          Excel →
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectProjectById('statistics-latex')}
                        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-emerald-500/5 transition-colors cursor-pointer"
                      >
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                            4. Statistics Content Development
                          </p>
                          <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                            LaTeX &amp; Overleaf · Educational Team Project
                          </p>
                        </div>
                        <span className="font-mono tabular-nums text-emerald-500 font-semibold shrink-0">
                          LaTeX →
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'sql' && (
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <pre
                      className={`p-3.5 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border ${
                        isDark
                          ? 'bg-[#0B0F17] border-slate-800 text-slate-200'
                          : 'bg-slate-900 border-slate-800 text-slate-100'
                      }`}
                    >
                      <code>{`-- Healthplus.sql: Specialist Workload Ranking
SELECT 
  s.specialist_id,
  CONCAT(s.first_name, ' ', s.last_name) AS name,
  s.specialization,
  COUNT(c.consultation_id) AS consultations,
  RANK() OVER (
    ORDER BY COUNT(c.consultation_id) DESC
  ) AS workload_rank
FROM Consultation c
JOIN Specialists s
  ON c.specialist_id = s.specialist_id
GROUP BY s.specialist_id, name, s.specialization;`}</code>
                    </pre>
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        From Sowmiga/SQL/healthplus/Healthplus.sql
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectProjectById('healthplus-sql')}
                        className="text-xs font-semibold text-emerald-500 hover:underline cursor-pointer"
                      >
                        Inspect All 38 Queries →
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'python' && (
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <pre
                      className={`p-3.5 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border ${
                        isDark
                          ? 'bg-[#0B0F17] border-slate-800 text-slate-200'
                          : 'bg-slate-900 border-slate-800 text-slate-100'
                      }`}
                    >
                      <code>{`# linearprac.ipynb: Linear Regression & Correlation
import numpy as np
from sklearn.linear_model import LinearRegression

X = np.array([[12], [5], [15], [4]])
y = np.array([78, 45, 88, 39])

model = LinearRegression().fit(X, y)
pred = model.predict([[8]])  # [58.]
corr = np.corrcoef(X.ravel(), y) # r = 0.9978`}</code>
                    </pre>
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        From Sowmiga/Python Workspace/ML/
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectProjectById('python-ml-workspace')}
                        className="text-xs font-semibold text-emerald-500 hover:underline cursor-pointer"
                      >
                        Inspect Python Code →
                      </button>
                    </div>
                  </div>
                )}

                <div
                  className={`mt-4 pt-3 border-t flex items-center justify-between text-xs ${
                    isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
                  }`}
                >
                  <span>Click any project to inspect full details</span>
                  <a
                    href="#projects"
                    className={`font-semibold ${
                      isDark ? 'text-emerald-400 hover:underline' : 'text-teal-700 hover:underline'
                    }`}
                  >
                    Projects Section ↓
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Analytical Pillar Strip Below Hero */}
        <div
          className={`mt-12 pt-8 border-t grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ${
            isDark ? 'border-slate-800/80' : 'border-slate-200'
          }`}
        >
          <div
            className={`p-4 rounded-xl border ${
              isDark ? 'bg-[#111826]/70 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono font-semibold text-emerald-500">
                SQL &amp; RELATIONAL DB
              </span>
              <Database className="w-4 h-4 text-slate-400" />
            </div>
            <p className={`text-sm font-display font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Data Cleaning &amp; Querying
            </p>
            <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              JOINs, GROUP BY, CTEs, subqueries, and window functions
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border ${
              isDark ? 'bg-[#111826]/70 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono font-semibold text-emerald-500">
                POWER BI &amp; DAX
              </span>
              <BarChart3 className="w-4 h-4 text-slate-400" />
            </div>
            <p className={`text-sm font-display font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Executive BI Dashboards
            </p>
            <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Power Query ETL, Star Schema modeling, and operational KPIs
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border ${
              isDark ? 'bg-[#111826]/70 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono font-semibold text-emerald-500">
                MICROSOFT EXCEL
              </span>
              <FileSpreadsheet className="w-4 h-4 text-slate-400" />
            </div>
            <p className={`text-sm font-display font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Spreadsheet Analytics
            </p>
            <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Multi-workbook cleaning, PivotTables, formulas, and charts
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border ${
              isDark ? 'bg-[#111826]/70 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono font-semibold text-emerald-500">
                PYTHON &amp; ANALYTICS
              </span>
              <Code2 className="w-4 h-4 text-slate-400" />
            </div>
            <p className={`text-sm font-display font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Data Analysis &amp; Modeling
            </p>
            <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Python, NumPy, Linear Regression, Correlation &amp; Statistics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
