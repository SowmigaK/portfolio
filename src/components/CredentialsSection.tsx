import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Edit3, Check } from 'lucide-react';
import {
  EDUCATION_DATA,
  ACHIEVEMENTS_DATA,
  CERTIFICATIONS_DATA,
  WORKFLOW_STEPS
} from '../data/portfolioData';

interface CredentialsSectionProps {
  isDark: boolean;
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({ isDark }) => {
  const [customScore, setCustomScore] = useState(EDUCATION_DATA[0].scoreValue);
  const [isEditingScore, setIsEditingScore] = useState(false);
  const [activeWorkflowIdx, setActiveWorkflowIdx] = useState(0);

  const activeWorkflow = WORKFLOW_STEPS[activeWorkflowIdx];

  return (
    <>
      {/* 1. Analytical Workflow Section */}
      <section
        id="workflow"
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
                04. ANALYTICAL METHODOLOGY
              </p>
              <h2
                className={`text-2xl md:text-3xl font-display font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                My 6-Step Analytical Workflow
              </h2>
            </div>
            <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              How I structure problems from initial Business Requirements Documents (BRDs) to clean SQL queries and interactive dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 mb-6">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = idx === activeWorkflowIdx;
              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setActiveWorkflowIdx(idx)}
                  className={`text-left p-4 rounded-xl border transition-colors flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? isDark
                        ? 'bg-[#111826] border-emerald-500/70'
                        : 'bg-teal-50/60 border-teal-600'
                      : isDark
                        ? 'bg-[#111826]/50 border-slate-800 hover:border-slate-700'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <span
                      className={`text-xs font-mono font-bold tabular-nums block mb-1.5 ${
                        isSelected
                          ? isDark
                            ? 'text-emerald-400'
                            : 'text-teal-700'
                          : isDark
                            ? 'text-slate-500'
                            : 'text-slate-400'
                      }`}
                    >
                      STEP {step.stepNumber}
                    </span>
                    <h3
                      className={`text-sm font-display font-semibold leading-snug ${
                        isDark ? 'text-slate-100' : 'text-slate-900'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className={`text-xs mt-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {step.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          <div
            className={`p-6 rounded-2xl border grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
              isDark ? 'bg-[#111826] border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="lg:col-span-8 space-y-1.5">
              <p className="text-xs font-mono text-emerald-500">
                STAGE {activeWorkflow.stepNumber} · {activeWorkflow.subtitle}
              </p>
              <h3
                className={`text-lg font-display font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {activeWorkflow.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {activeWorkflow.description}
              </p>
            </div>
            <div
              className={`lg:col-span-4 p-4 rounded-xl border text-xs space-y-2 ${
                isDark ? 'bg-[#0B0F17] border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div>
                <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  Deliverables:{' '}
                </span>
                <span className="font-mono text-emerald-500">
                  {activeWorkflow.deliverables.join(' · ')}
                </span>
              </div>
              <div>
                <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  Tools:{' '}
                </span>
                <span className={`font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {activeWorkflow.toolsUsed.join(' · ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Education & Academic Achievements Section (#education) */}
      <section
        id="education"
        className={`py-20 md:py-24 border-b ${
          isDark ? 'border-slate-800/80' : 'border-slate-200'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 space-y-12">
          <div>
            <p
              className={`text-xs font-mono font-semibold tracking-wider mb-2 ${
                isDark ? 'text-emerald-400' : 'text-teal-700'
              }`}
            >
              05. EDUCATION &amp; ACADEMIC HONORS
            </p>
            <h2
              className={`text-2xl md:text-3xl font-display font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Education &amp; Academic Programmes
            </h2>
          </div>

          {/* Degree Card */}
          <div className="space-y-4">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.degree}
                className={`p-6 md:p-8 rounded-2xl border ${
                  isDark ? 'bg-[#111826] border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div
                      className={`flex flex-wrap items-center gap-2 text-xs font-mono mb-1.5 ${
                        isDark ? 'text-emerald-400' : 'text-teal-700'
                      }`}
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span className="tabular-nums">{edu.period}</span>
                      <span aria-hidden="true">·</span>
                      <span>{edu.location}</span>
                    </div>
                    <h3
                      className={`text-xl font-display font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className={`text-sm font-medium mt-0.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {edu.institution}
                    </p>
                  </div>

                  {/* Configurable Score Box */}
                  <div
                    className={`p-3.5 rounded-xl border flex flex-col items-start md:items-end shrink-0 ${
                      isDark ? 'bg-[#0B0F17] border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {edu.scoreLabel}:
                      </span>
                      {isEditingScore ? (
                        <div className="flex items-center gap-1.5">
                          <input
                            type="text"
                            value={customScore}
                            onChange={(e) => setCustomScore(e.target.value)}
                            aria-label="Edit academic score"
                            className={`w-20 px-2 py-0.5 text-xs font-mono rounded border ${
                              isDark
                                ? 'bg-slate-900 border-emerald-500 text-white'
                                : 'bg-white border-teal-600 text-slate-900'
                            }`}
                          />
                          <button
                            type="button"
                            onClick={() => setIsEditingScore(false)}
                            aria-label="Save academic score"
                            className="p-1 text-emerald-400 hover:text-emerald-300"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <span
                            className={`text-sm font-mono font-bold tabular-nums ${
                              isDark ? 'text-emerald-400' : 'text-teal-700'
                            }`}
                          >
                            {customScore}
                          </span>
                          <button
                            type="button"
                            onClick={() => setIsEditingScore(true)}
                            title="Update score value"
                            aria-label="Update score value"
                            className={`p-1 rounded transition-colors cursor-pointer ${
                              isDark
                                ? 'text-slate-500 hover:text-slate-300'
                                : 'text-slate-400 hover:text-slate-700'
                            }`}
                          >
                            <Edit3 className="w-3 h-3" />
                          </button>
                        </>
                      )}
                    </div>
                    <span className={`text-[11px] mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Verified from resume
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm pt-4 border-t border-slate-800/60">
                  {edu.highlights.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2.5 leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      <span className="font-mono text-xs text-emerald-500 mt-1 shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-4 pt-3 border-t text-xs font-mono ${
                    isDark ? 'border-slate-800/60 text-slate-400' : 'border-slate-100 text-slate-500'
                  }`}
                >
                  Coursework &amp; Tools: {edu.tags.join(' · ')}
                </div>
              </div>
            ))}
          </div>

          {/* Academic Achievements Grid */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-teal-700'}`} />
              <h3
                className={`text-base font-display font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Academic Achievements &amp; National Training Selections
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ACHIEVEMENTS_DATA.map((ach) => (
                <div
                  key={ach.title}
                  className={`p-5 rounded-2xl border ${
                    isDark ? 'bg-[#111826]/70 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div
                    className={`flex flex-wrap items-center gap-2 text-xs font-mono mb-2 ${
                      isDark ? 'text-emerald-400' : 'text-teal-700'
                    }`}
                  >
                    <span>{ach.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{ach.date}</span>
                  </div>

                  <h4
                    className={`text-base font-display font-bold mb-1 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {ach.title}
                  </h4>

                  <p
                    className={`text-xs font-semibold mb-2 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {ach.organization}
                  </p>

                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Certifications & Workshops Section (#certifications) */}
      <section
        id="certifications"
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
                06. CERTIFICATIONS &amp; WORKSHOPS
              </p>
              <h2
                className={`text-2xl md:text-3xl font-display font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Certifications, Courses &amp; Paper Presentations
              </h2>
            </div>
            <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Verified technical certifications, workshops, and conference presentations documented in my resume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.title}
                className={`p-6 rounded-2xl border flex flex-col justify-between ${
                  isDark ? 'bg-[#111826] border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div
                    className={`flex items-center justify-between gap-2 text-xs font-mono mb-2.5 ${
                      isDark ? 'text-emerald-400' : 'text-teal-700'
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>{cert.type}</span>
                    </span>
                    <span className="tabular-nums">{cert.date}</span>
                  </div>

                  <h3
                    className={`text-base font-display font-bold mb-1 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {cert.title}
                  </h3>

                  <p
                    className={`text-xs font-semibold mb-3 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {cert.issuer}
                  </p>

                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {cert.description}
                  </p>
                </div>

                <div
                  className={`mt-5 pt-3 border-t text-xs font-mono ${
                    isDark ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-400'
                  }`}
                >
                  Verified in Resume
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
