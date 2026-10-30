import React from 'react'
import { Search, Code, CheckSquare, Rocket } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Data Feasibility',
    duration: 'Week 1',
    description:
      'We audit your existing workflows, data stores, and API endpoints. We determine whether an autonomous agent, private RAG, or fine-tuned model delivers the highest operational ROI.',
  },
  {
    number: '02',
    icon: Code,
    title: 'Architecture & 14-Day MVP',
    duration: 'Weeks 2 - 3',
    description:
      'Within 14 days, we deliver a fully functional, live prototype in an isolated sandbox. Your team validates real-world performance against production scenarios.',
  },
  {
    number: '03',
    icon: CheckSquare,
    title: 'Evals, Guardrails & Benchmarks',
    duration: 'Week 4',
    description:
      'We stress-test the system across 1,000+ adversarial and edge-case inputs. Hallucinations are eliminated through deterministic validators and contextual guardrails.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Production Deploy & Observability',
    duration: 'Continuous',
    description:
      'Zero-downtime deployment to your infrastructure (AWS, Azure, GCP, or On-Prem). Live tracking of token latency, cost per inference, and model drift.',
  },
]

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 relative bg-[#05060b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
            From Concept to Production in Weeks
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            No endless PowerPoint decks. Nablai applies an agile, code-first engineering methodology with measurable deliverables at every milestone.
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
                  <span>Step {step.number} &middot; Ready to scale</span>
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
