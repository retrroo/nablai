import React from 'react'
import { Bot, Database, Cpu, Layout, Activity, Eye, ArrowUpRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Bot,
    title: 'Autonomous AI Agents & Swarms',
    description:
      'Self-directed multi-agent architectures that decompose complex objectives, execute deterministic API tool calls, verify each other’s work, and run 24/7 workflows without human bottlenecks.',
    tags: ['Multi-Agent', 'Tool Calling', 'Self-Healing', 'LangGraph'],
    gradient: 'from-purple-500/20 to-indigo-500/20',
    border: 'hover:border-purple-500/50',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Database,
    title: 'Private Enterprise Hybrid RAG',
    description:
      'Transform thousands of internal documents, databases, and operational logs into a hallucination-free semantic knowledge engine with dense + sparse BM25 retrieval and cross-encoder reranking.',
    tags: ['Hybrid Search', 'Qdrant / Milvus', 'Zero-Data Leak', 'Rerankers'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    border: 'hover:border-cyan-500/50',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: Cpu,
    title: 'Model Fine-Tuning & Quantization',
    description:
      'Domain-adapted open-weights models (Llama 3, Mistral, DeepSeek) trained on proprietary data via LoRA, QLoRA, and AWQ compression for 10x lower inference cost and private hosting.',
    tags: ['LoRA / QLoRA', 'Domain Adapt', 'vLLM', '4-Bit Quant'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    border: 'hover:border-emerald-500/50',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Layout,
    title: 'Full-Stack AI Web Apps & Gen-UI',
    description:
      'Production-ready web and mobile applications with real-time SSE token streaming, generative UI components, interactive canvases, and intuitive consumer-grade interfaces.',
    tags: ['Next.js / React', 'Realtime SSE', 'Interactive Canvas', 'TypeScript'],
    gradient: 'from-amber-500/20 to-orange-500/20',
    border: 'hover:border-amber-500/50',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: Activity,
    title: 'MLOps & GPU Inference Optimization',
    description:
      'High-throughput inference clusters built with vLLM and TensorRT-LLM. We slash token latency from 400ms down to sub-50ms and secure all communications end-to-end.',
    tags: ['TensorRT', 'Kubernetes', 'Latency Tuning', 'Metrics & Evals'],
    gradient: 'from-rose-500/20 to-pink-500/20',
    border: 'hover:border-rose-500/50',
    badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  },
  {
    icon: Eye,
    title: 'Multimodal & Computer Vision Systems',
    description:
      'Advanced vision systems that interpret and structure complex documents, PDFs, blueprints, barcodes, and live video streams in real-time with zero human latency.',
    tags: ['Document AI', 'Visual Reasoning', 'OCR Evolution', 'Edge Inference'],
    gradient: 'from-indigo-500/20 to-purple-500/20',
    border: 'hover:border-indigo-500/50',
    badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
]

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-[#05060b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              Capabilities &amp; Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              AI Apps &amp; Solutions Engineered for Impact
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              No superficial wrappers around third-party APIs. We engineer full-stack AI applications, autonomous agents, and robust machine learning pipelines with verifiable ROI.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span>Discuss your use case</span>
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
