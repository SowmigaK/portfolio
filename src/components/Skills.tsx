import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SKILL_CATEGORIES, PROJECTS_DATA, SkillItem } from '../data/portfolioData';

interface SkillsProps {
  isDark: boolean;
  onSelectProjectById: (id: string) => void;
}

export const Skills: React.FC<SkillsProps> = ({ isDark, onSelectProjectById }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(
    SKILL_CATEGORIES[0].skills[0]
  );

  return (
    <section
      id="skills"
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
              02. TECHNICAL SKILLS &amp; TOOLS
            </p>
            <h2
              className={`text-2xl md:text-3xl font-display font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Analytical Stack &amp; Technical Capabilities
            </h2>
          </div>

          <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Select any skill below to see how I apply it across SQL database analysis, Power BI modeling, Excel dashboards, and Python scripts.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className={`p-5 rounded-2xl border flex flex-col justify-between ${
                isDark ? 'bg-[#111826] border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div>
                <h3
                  className={`text-sm font-display font-bold mb-1 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {category.title}
                </h3>
                <p
                  className={`text-xs mb-4 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {category.subtitle}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isSelected = selectedSkill.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => setSelectedSkill(skill)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                          isSelected
                            ? isDark
                              ? 'bg-emerald-500 text-slate-950 border-emerald-500 font-semibold'
                              : 'bg-slate-900 text-white border-slate-900 font-semibold'
                            : isDark
                              ? 'bg-[#0B0F17] border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}

          {/* Selected Skill Detail Panel */}
          <div
            className={`p-5 rounded-2xl border flex flex-col justify-between ${
              isDark
                ? 'bg-[#0B0F17] border-emerald-500/40'
                : 'bg-teal-50/40 border-teal-600/30'
            }`}
          >
            <div>
              <p
                className={`text-xs font-mono font-semibold uppercase tracking-wider mb-1 ${
                  isDark ? 'text-emerald-400' : 'text-teal-700'
                }`}
              >
                Selected Capability Details
              </p>
              <h3
                className={`text-base font-display font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {selectedSkill.name}
              </h3>
              <p
                className={`text-xs leading-relaxed mb-3 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {selectedSkill.summary}
              </p>
              <p
                className={`text-xs leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                <strong className={isDark ? 'text-slate-200' : 'text-slate-700'}>
                  Applied in:
                </strong>{' '}
                {selectedSkill.appliedIn}
              </p>
            </div>

            {selectedSkill.relatedProjectIds.length > 0 && (
              <div
                className={`mt-4 pt-3 border-t ${
                  isDark ? 'border-slate-800' : 'border-slate-200'
                }`}
              >
                <p
                  className={`text-xs font-mono mb-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  Matching Projects:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.relatedProjectIds.map((pid) => {
                    const proj = PROJECTS_DATA.find((p) => p.id === pid);
                    if (!proj) return null;
                    return (
                      <button
                        key={pid}
                        type="button"
                        onClick={() => onSelectProjectById(pid)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                          isDark
                            ? 'bg-[#111826] border-slate-700 text-emerald-400 hover:border-emerald-500'
                            : 'bg-white border-slate-300 text-teal-800 hover:border-teal-600'
                        }`}
                      >
                        <span>{proj.title}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
