import React from 'react'
import { ShieldAlert, Headphones, FileText, TrendingUp, ArrowRight } from 'lucide-react'

const SOLUTIONS = [
  {
    icon: FileText,
    badge: 'Legal & Compliance',
    title: 'Autonome Contract & Due Diligence Agent',
    metrics: '85% Tijdsbesparing',
    description:
      'Scant en vergelijkt duizenden pagina’s aan juridische contracten, markeert afwijkingen van standaardbepalingen en genereert direct audit-klare risicorapporten.',
    tags: ['PDF OCR', 'Dense RAG', 'Citation Guarantee'],
  },
  {
    icon: Headphones,
    badge: 'Klantenservice & Sales',
    title: 'Real-Time Voice & Multichannel Support Swarm',
    metrics: '<600ms Voice Latency',
    description:
      'Handelt 82% van alle inkomende tickets en telefoongesprekken zelfstandig af, voert acties uit in CRM/ERP en escaleert feilloos bij emotionele of complexe situaties.',
    tags: ['WebRTC Voice', 'CRM Sync', 'Sentiment Analysis'],
  },
  {
    icon: TrendingUp,
    badge: 'E-commerce & Supply Chain',
    title: 'Dynamische Predictive Demand & Pricing AI',
    metrics: '+24% Marge Optimalisatie',
    description:
      'Combineert historische verkoopdata, weersvoorspellingen en marktprijzen in een fine-tuned gradient boosting + transformer model voor continue prijs- en voorraadsturing.',
    tags: ['Time-Series', 'Fine-Tuned LLM', 'Automated Ordering'],
  },
  {
    icon: ShieldAlert,
    badge: 'Finance & Risk',
    title: 'Real-Time Fraude & Transactie Screening',
    metrics: '99.94% Precisie',
    description:
      'Onderschept verdachte patronen in milliseconden met graph neural networks en LLM-based uitleg voor compliance toezichthouders.',
    tags: ['Graph AI', 'Zero Hallucination', 'MiCA / AVG Compliant'],
  },
]

export const SolutionsSection: React.FC = () => {
  return (
    <section id="oplossingen" className="py-24 relative bg-[#090a10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Bewezen Oplossingen
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
            AI Oplossingen met Directe Impact
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Ontdek hoe onze maatwerk architecturen complexe industriële uitdagingen omzetten in concurrentievoordeel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTIONS.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {item.metrics}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-white/5 text-purple-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-purple-400 transition-colors"
                  >
                    <span>Use case aanvragen</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default SolutionsSection
