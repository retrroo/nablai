import React from 'react'

const PHASES = [
  {
    step: '01',
    timeframe: 'DAYS 1–3',
    title: 'Audit & Feasibility',
    description:
      'We review your data schemas, current operational bottlenecks, and existing APIs. We determine whether an autonomous agent, private RAG, or fine-tuned model delivers the highest operational ROI.',
  },
  {
    step: '02',
    timeframe: 'WEEKS 1–2',
    title: '14-Day Production MVP',
    description:
      'We ship a fully functional, live model or agent in an isolated staging sandbox. Your team stress-tests real production scenarios rather than reviewing slide decks.',
  },
  {
    step: '03',
    timeframe: 'WEEK 3',
    title: 'Adversarial Evals & Guardrails',
    description:
      'We stress-test the pipeline across 1,000+ synthetic edge-case and adversarial inputs. Hallucinations are filtered out using deterministic validators and citation gates.',
  },
  {
    step: '04',
    timeframe: 'WEEK 4 & ONGOING',
    title: 'Zero-Downtime Deployment',
    description:
      'Containerized deployment into your private cloud (AWS, Azure, GCP, or On-Prem). Live tracking of token latency, cost per inference, and automated regression tests.',
  },
]

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-28 relative bg-[#050609] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase block mb-3">
              05 &mdash; Delivery Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-sans">
              From Mathematical Concept <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-slate-300">to production in weeks.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            No endless slide decks. Nablai works code-first with transparent milestones and working software delivered in two-week cycles.
          </p>
        </div>

        {/* Process Ledger (Clean horizontal rule layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/[0.08]">
          {PHASES.map((phase) => (
            <div
              key={phase.step}
              className="p-8 sm:p-10 border-r border-b border-white/[0.08] bg-[#07080d] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-8">
                  <span className="text-2xl font-sans text-white font-light">{phase.step}</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] text-purple-300 border border-white/[0.06] text-[10px]">
                    {phase.timeframe}
                  </span>
                </div>

                <h3 className="text-lg font-normal text-white mb-3 font-sans tracking-tight">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.04] text-[10px] font-mono text-slate-500">
                PHASE_{phase.step} // VERIFIED
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ProcessSection
