import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData';

interface WorkflowTimelineProps {
  isDark: boolean;
}

export const WorkflowTimeline: React.FC<WorkflowTimelineProps> = ({ isDark }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = WORKFLOW_STEPS[activeStepIndex];

  return (
    <section
      id="workflow"
      className={`py-20 md:py-24 border-b ${
        isDark ? 'border-slate-800/80' : 'border-slate-200'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p
              className={`text-xs font-mono font-semibold tracking-wider mb-2 ${
                isDark ? 'text-teal-400' : 'text-teal-700'
              }`}
            >
              05. METHODOLOGY
            </p>
            <h2
              className={`text-2xl md:text-3xl font-display font-bold tracking-tight text-balance ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              My Analytical Workflow
            </h2>
          </div>
          <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A structured 6-stage lifecycle from business requirement definition to validated SQL, Power BI, and Excel insights.
          </p>
        </div>

        {/* Horizontal Timeline on Desktop / Vertical Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3.5 mb-8">
          {WORKFLOW_STEPS.map((step, index) => {
            const isSelected = index === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStepIndex(index)}
                className={`text-left p-4 rounded-xl border transition-colors flex flex-col justify-between ${
                  isSelected
                    ? isDark
                      ? 'bg-slate-900 border-teal-500/70'
                      : 'bg-teal-50/60 border-teal-600'
                    : isDark
                      ? 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-xs font-mono font-bold tabular-nums ${
                        isSelected
                          ? isDark
                            ? 'text-teal-400'
                            : 'text-teal-700'
                          : isDark
                            ? 'text-slate-500'
                            : 'text-slate-400'
                      }`}
                    >
                      STEP {step.stepNumber}
                    </span>
                    <span
                      className={`text-xs font-mono ${
                        isDark ? 'text-slate-600' : 'text-slate-300'
                      }`}
                      aria-hidden="true"
                    >
                      {index < WORKFLOW_STEPS.length - 1 ? '→' : '✓'}
                    </span>
                  </div>
                  <h3
                    className={`text-sm font-display font-semibold leading-snug mb-1 ${
                      isSelected
                        ? isDark
                          ? 'text-white'
                          : 'text-slate-900'
                        : isDark
                          ? 'text-slate-200'
                          : 'text-slate-800'
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

        {/* Active Step Detail Panel */}
        <div
          className={`p-6 md:p-8 rounded-2xl border grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-teal-500">
              <span>STAGE {activeStep.stepNumber} OF 06</span>
              <span aria-hidden="true">·</span>
              <span>{activeStep.subtitle}</span>
            </div>
            <h3
              className={`text-xl font-display font-bold ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {activeStep.title}
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {activeStep.description}
            </p>
          </div>

          <div
            className={`lg:col-span-5 p-4 rounded-xl border space-y-3 text-xs ${
              isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div>
              <span className={`font-semibold block mb-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                Key Deliverables:
              </span>
              <p className={`font-mono ${isDark ? 'text-teal-400' : 'text-teal-700'}`}>
                {activeStep.deliverables.join(' · ')}
              </p>
            </div>
            <div
              className={`pt-2.5 border-t ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <span className={`font-semibold block mb-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                Primary Methods &amp; Tools:
              </span>
              <p className={`font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {activeStep.toolsUsed.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
