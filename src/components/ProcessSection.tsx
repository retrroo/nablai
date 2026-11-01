import React from 'react'

const BUILD_CYCLE = [
  {
    step: '01',
    phase: 'UTILITY FIRST',
    title: 'Solving Our Own Problems',
    description:
      'We identify real friction in our daily workflows: airlines hiding inbound delay reasons until the last minute, or sifting through hundreds of low-signal AI press releases.',
  },
  {
    step: '02',
    phase: 'CLEAN ARCHITECTURE',
    title: 'Picking The Right Stack',
    description:
      'We choose tools based on performance and longevity: strict TypeScript, React Native Skia for 60fps GPU mobile rendering, and Hexagonal DDD architecture in Next.js to isolate domain rules.',
  },
  {
    step: '03',
    phase: 'DOGFOODING',
    title: 'Daily Personal Use',
    description:
      'We test our builds immediately in real conditions: scanning actual boarding passes at airport gates or running automated Gemini summaries over daily technical publications.',
  },
  {
    step: '04',
    phase: 'ITERATION',
    title: 'Refining & Shipping',
    description:
      'We profile real-world latency, eliminate redundant API calls via BullMQ and Redis single-flight locks, and maintain our codebases cleanly on GitHub.',
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
            As independent software builders, our cycle is simple, disciplined, and code-first. We turn our own ideas into live software without fluff.
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
