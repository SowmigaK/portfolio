import React from 'react';
import {
  FileText,
  ExternalLink,
  GraduationCap,
  Code2,
  Compass,
  Target,
  MapPin,
  Mail
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface AboutProps {
  isDark: boolean;
  onOpenResumeModal: () => void;
}

export const About: React.FC<AboutProps> = ({ isDark, onOpenResumeModal }) => {
  return (
    <section
      id="about"
      className={`py-20 md:py-24 border-b ${
        isDark ? 'border-slate-800/80' : 'border-slate-200'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p
              className={`text-xs font-mono font-semibold tracking-wider mb-2 ${
                isDark ? 'text-emerald-400' : 'text-teal-700'
              }`}
            >
              01. ABOUT ME
            </p>
            <h2
              className={`text-2xl md:text-3xl font-display font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Personal Profile, Learning Journey &amp; Career Goals
            </h2>
          </div>

          <div
            className={`flex flex-wrap items-center gap-3 text-xs ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>{PROFILE_DATA.location}</span>
            </span>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="inline-flex items-center gap-1.5 font-mono hover:underline"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span>{PROFILE_DATA.email}</span>
            </a>
          </div>
        </div>

        {/* Unique Editorial 12-Column Layout (No Photograph Repeated Here) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Columns: Readable Introduction, Learning Journey & Professional Goal */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            {/* Introduction Block */}
            <div
              className={`p-6 md:p-7 rounded-2xl border ${
                isDark ? 'bg-[#111826] border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <p
                className={`text-xs font-mono font-semibold uppercase tracking-wider mb-2.5 ${
                  isDark ? 'text-emerald-400' : 'text-teal-700'
                }`}
              >
                Introduction
              </p>
              <p
                className={`text-base leading-relaxed mb-4 ${
                  isDark ? 'text-slate-100' : 'text-slate-800'
                }`}
              >
                {PROFILE_DATA.aboutIntroduction}
              </p>
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                My academic background in mathematics gives me a structured approach to working with numbers, while my project work focuses on practical tools used in day-to-day analytics — cleaning messy tables, writing SQL queries, summarizing spreadsheets, and designing clear visual reports.
              </p>
            </div>

            {/* Learning Journey & Professional Goal (2 Structured Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Learning Journey */}
              <div
                className={`p-6 rounded-2xl border flex flex-col justify-between ${
                  isDark ? 'bg-[#111826]/80 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Compass className="w-4 h-4 text-emerald-500 shrink-0" />
                    <h3
                      className={`text-sm font-display font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Learning Journey
                    </h3>
                  </div>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {PROFILE_DATA.aboutLearningJourney}
                  </p>
                </div>
              </div>

              {/* Professional Goal */}
              <div
                className={`p-6 rounded-2xl border flex flex-col justify-between ${
                  isDark ? 'bg-[#111826]/80 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Target className="w-4 h-4 text-emerald-500 shrink-0" />
                    <h3
                      className={`text-sm font-display font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Professional Goal
                    </h3>
                  </div>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {PROFILE_DATA.aboutProfessionalGoal}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Education, Technical Interests & Verification Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            {/* Education Card */}
            <div
              className={`p-6 rounded-2xl border ${
                isDark ? 'bg-[#111826] border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span
                  className={`inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider ${
                    isDark ? 'text-emerald-400' : 'text-teal-700'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </span>
                <span
                  className={`text-xs font-mono tabular-nums ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {PROFILE_DATA.aboutEducation.period}
                </span>
              </div>

              <h3
                className={`text-base font-display font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {PROFILE_DATA.aboutEducation.degree}
              </h3>
              <p
                className={`text-xs sm:text-sm font-medium mt-0.5 mb-2.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {PROFILE_DATA.aboutEducation.institution}, Erode
              </p>
              <p
                className={`text-xs leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {PROFILE_DATA.aboutEducation.detail}
              </p>
            </div>

            {/* Technical Interests Card */}
            <div
              className={`p-6 rounded-2xl border ${
                isDark ? 'bg-[#111826] border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <h3
                  className={`text-sm font-display font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Technical Interests
                </h3>
              </div>

              <p
                className={`text-xs leading-relaxed mb-3.5 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Core areas and tools I actively study and apply across my projects:
              </p>

              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.aboutTechnicalInterests.map((interest) => (
                  <span
                    key={interest}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                      isDark
                        ? 'bg-[#0B0F17] border-slate-800 text-slate-200'
                        : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Action & Verification Bar */}
            <div
              className={`p-5 rounded-2xl border flex flex-wrap items-center justify-between gap-3 ${
                isDark ? 'bg-[#0B0F17] border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="text-xs">
                <p className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  Explore My Credentials
                </p>
                <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                  Resume &amp; public project repository
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    isDark
                      ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Resume</span>
                </button>

                <a
                  href={PROFILE_DATA.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                    isDark
                      ? 'border-slate-700 bg-[#111826] text-slate-200 hover:bg-slate-800'
                      : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
