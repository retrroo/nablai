import React from 'react'

const BUILD_CYCLE = [
  {
    step: '01',
    phase: 'UTILITY FIRST',
    title: 'Solving Real Friction',
    description:
      'We identify concrete problems in our daily workflows: airlines concealing delay root-causes, bloated context windows in LLMs, or low-signal AI hype. If we do not use it ourselves, we do not build it.',
  },
  {
    step: '02',
    phase: 'AI ACCELERATION',
    title: 'Agentic Orchestration',
    description:
      'We reject development purism and harness AI to the fullest. We orchestrate frontier reasoning models and autonomous agent swarms to design domain models, generate schemas, and draft core logic at 10x velocity.',
  },
  {
    step: '03',
    phase: 'ASSERTION GATES',
    title: 'Deterministic Rigor',
    description:
      'AI drives our build speed, while deterministic compilers, strict TypeScript, pure finite state machines, and local unit test assertions guarantee 100% runtime safety and zero halluncinations.',
  },
  {
    step: '04',
    phase: 'OPEN STUDIOS',
    title: 'Radical Transparency',
    description:
      'We dogfood immediately in real conditions and deploy straight to Cloudflare edge nodes. We maintain open GitHub repositories and transparently disclose every tool, model, and system in our stack.',
  },
]

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 relative bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              05 // How We Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950 font-sans">
              From Personal Need <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">to working applications.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-sm leading-relaxed font-sans">
            As AI architects and accelerationist builders, our cycle is transparent, disciplined, and code-first. We turn our own ideas into live software with zero shame about our AI tooling.
          </p>
        </div>

        {/* Process Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-200">
          {BUILD_CYCLE.map((phase) => (
            <div
              key={phase.step}
              className="p-8 sm:p-10 border-r border-b border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-8">
                  <span className="text-2xl font-sans text-zinc-950 font-light">{phase.step}</span>
                  <span className="px-2 py-0.5 rounded bg-white text-zinc-700 border border-zinc-200 text-[10px]">
                    {phase.phase}
                  </span>
                </div>

                <h3 className="text-lg font-normal text-zinc-950 mb-3 font-sans tracking-tight">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                  {phase.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-200/60 text-[10px] font-mono text-zinc-500">
                STEP_{phase.step} // BUILD_CYCLE
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ProcessSection
