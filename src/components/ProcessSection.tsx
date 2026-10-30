import React from 'react'

const BUILD_CYCLE = [
  {
    step: '01',
    phase: 'HYPOTHESIS & MATH',
    title: 'Mathematical Proof & Loss Dynamics',
    description:
      'We start from the vector calculus of the problem. We evaluate whether gradient descent with LoRA, a custom state graph, or hybrid dense-sparse vector indexing is the right technical solution.',
  },
  {
    step: '02',
    phase: 'PROTOTYPE SPRINT',
    title: '14-Day Working Dogfood MVP',
    description:
      'We ship a functional build directly into our personal daily workflows. We do not write pitch decks: we build working software and test it immediately on real flight passes or vector queries.',
  },
  {
    step: '03',
    phase: 'EVALS & BENCHMARKS',
    title: 'Adversarial Evals & Guardrails',
    description:
      'We stress-test our models and agents across thousands of synthetic edge cases. Hallucinations are filtered out using deterministic validation assertions and citation gates.',
  },
  {
    step: '04',
    phase: 'PRODUCTION RELEASE',
    title: 'Containerized Deployment & Evolution',
    description:
      'We deploy to sovereign GPU clusters and global edge networks. Continuous profiling of inference latency, token economics, and telemetry informs the next product iteration.',
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
              05 &mdash; Product Build Cycle
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-sans">
              From Mathematical Proof <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-slate-300">to production applications.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            As independent software builders, our cycle is fast, disciplined, and code-first. We turn our own ideas into live applications without corporate bureaucracy.
          </p>
        </div>

        {/* Process Ledger (Clean horizontal rule layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/[0.08]">
          {BUILD_CYCLE.map((phase) => (
            <div
              key={phase.step}
              className="p-8 sm:p-10 border-r border-b border-white/[0.08] bg-[#07080d] hover:bg-[#0b0c14] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-8">
                  <span className="text-2xl font-sans text-white font-light">{phase.step}</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] text-purple-300 border border-white/[0.06] text-[10px]">
                    {phase.phase}
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
                CYCLE_{phase.step} // STUDIO_VERIFIED
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ProcessSection