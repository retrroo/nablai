import React from 'react'
import { Bot, Database, Cpu, Layout, Activity, Eye, ArrowUpRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Bot,
    title: 'Autonome AI Agents & Swarms',
    description:
      'Zelfstandige agents die complexe taken ontleden, externe APIs aanroepen, elkaars werk verifiëren en 24/7 bedrijfsprocessen uitvoeren zonder menselijke bottlenecks.',
    tags: ['Multi-Agent', 'Tool Calling', 'Self-Healing', 'LangGraph'],
    gradient: 'from-purple-500/20 to-indigo-500/20',
    border: 'hover:border-purple-500/50',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Database,
    title: 'Private Enterprise RAG Architectuur',
    description:
      'Verander duizenden interne documenten, databases en handleidingen in een hallucinatie-vrije semantische kennisbank met hybride vector search en reranking.',
    tags: ['Hybrid Search', 'Qdrant / Milvus', 'Zero-Data Leak', 'Rerankers'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    border: 'hover:border-cyan-500/50',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: Cpu,
    title: 'Model Fine-Tuning & Quantization',
    description:
      'Geoptimaliseerde open-weights modellen (Llama 3, Mistral, DeepSeek) gefinetuned op jouw bedrijfstaal en data via LoRA, QLoRA en AWQ compressie voor 10x lagere hostingkosten.',
    tags: ['LoRA / QLoRA', 'Domain Adapt', 'vLLM', '4-Bit Quant'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    border: 'hover:border-emerald-500/50',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Layout,
    title: 'Full-Stack AI Web Apps & Gen-UI',
    description:
      'Productieklare webapplicaties met realtime token streaming, interactieve generatieve componenten en intuïtieve interfaces die gebruikers direct omarmen.',
    tags: ['Next.js / React', 'Realtime SSE', 'Interactive Canvas', 'TypeScript'],
    gradient: 'from-amber-500/20 to-orange-500/20',
    border: 'hover:border-amber-500/50',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: Activity,
    title: 'MLOps & GPU Inference Optimalisatie',
    description:
      'Schaalbare inference clusters gebouwd met vLLM en TensorRT-LLM. Wij reduceren latency van 400ms naar onder de 50ms per token en beveiligen al het verkeer end-to-end.',
    tags: ['TensorRT', 'Kubernetes', 'Latency Tuning', 'Metrics & Evals'],
    gradient: 'from-rose-500/20 to-pink-500/20',
    border: 'hover:border-rose-500/50',
    badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  },
  {
    icon: Eye,
    title: 'Multimodal & Computer Vision',
    description:
      'Geavanceerde multimodale systemen die documenten, facturen, blauwdrukken, camerabeelden en video-stromen in real-time interpreteren en structureren.',
    tags: ['Document AI', 'Visual Reasoning', 'OCR Evolution', 'Edge Inference'],
    gradient: 'from-indigo-500/20 to-purple-500/20',
    border: 'hover:border-indigo-500/50',
    badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
]

export const ServicesSection: React.FC = () => {
  return (
    <section id="diensten" className="py-24 relative bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              Expertise & Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Wat Wij Bouwen voor Ambitieuze Teams
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Geen oppervlakkige wrappers rond een OpenAI API, maar diepgaande machine learning engineering met meetbare ROI en enterprise beveiliging.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span>Bespreek jouw use case</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 ${service.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-br ${service.gradient} border border-white/10 text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default ServicesSection
