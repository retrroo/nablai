import React from 'react'
import { Search, Code, CheckSquare, Rocket } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Data Feasibility',
    duration: 'Week 1',
    description:
      'We duiken in je huidige workflows, data bronnen en API interfaces. We bepalen direct of een agent, RAG of fine-tuned model de hoogste ROI oplevert.',
  },
  {
    number: '02',
    icon: Code,
    title: 'Architectuur & 14-Dagen MVP',
    duration: 'Week 2 - 3',
    description:
      'Binnen 14 dagen presenteren we een functionele, werkende versie in een beveiligde sandbox. Je test de AI direct op echte praktijkvoorbeelden.',
  },
  {
    number: '03',
    icon: CheckSquare,
    title: 'Evals, Guardrails & Benchmark',
    duration: 'Week 4',
    description:
      'We testen het systeem met 1000+ edge-case scenario’s. Hallucinaties worden geëlimineerd met strikte contextfilters en deterministische validatoren.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Productie & 24/7 Monitoring',
    duration: 'Continu',
    description:
      'Deployment naar jouw cloud (AWS, Azure, GCP of On-Prem). Live tracking van latency, kosten per query en model drifting.',
  },
]

export const ProcessSection: React.FC = () => {
  return (
    <section id="werkwijze" className="py-24 relative bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Onze Werkwijze
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
            Van Hypothese naar Productie in Weken
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Geen maandenlange consultancy rapporten. Nablai hanteert een wendbare, code-first methodiek met gegarandeerde deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-black text-slate-600 group-hover:text-purple-400 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-purple-300 border border-purple-500/20">
                      {step.duration}
                    </span>
                  </div>

                  <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-400 mb-4 border border-purple-500/20">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-medium text-purple-400">
                  <span>Stap {step.number} Gereed voor schaal</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default ProcessSection
