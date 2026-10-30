import React from 'react'
import { Cpu, Network, Bot, Layout, Activity, Eye } from 'lucide-react'

const CAPABILITIES = [
  {
    num: '01',
    icon: Bot,
    title: 'Autonomous Multi-Agent Swarms',
    description:
      'Cyclical agent state graphs that decompose high-level business goals into discrete tool calls, self-verify outputs, and run complex workflows without human bottlenecks.',
    tags: ['LangGraph', 'Deterministic Tool Calling', 'Self-Healing Loops', 'Human-in-the-Loop'],
  },
  {
    num: '02',
    icon: Network,
    title: 'Enterprise Hybrid RAG Engines',
    description:
      'High-dimensional vector search combined with BM25 sparse lexical indexing and cross-encoder rerankers. Delivers 100% cited answers with zero hallucinations.',
    tags: ['Dense + Sparse Fusion', 'Qdrant / Milvus', 'Strict RBAC', 'Source Verifiability'],
  },
  {
    num: '03',
    icon: Cpu,
    title: 'Custom LLM Fine-Tuning & Quantization',
    description:
      'Domain-adapted open-weights models trained on proprietary data via LoRA and QLoRA. Optimized via 4-bit AWQ compression for 10x lower hosting costs.',
    tags: ['Unsloth / PyTorch', 'Domain Adaptation', 'AWQ 4-Bit', 'vLLM Serving'],
  },
  {
    num: '04',
    icon: Layout,
    title: 'Full-Stack Gen-UI Applications',
    description:
      'Bespoke web and mobile applications with real-time SSE token streaming, interactive canvas components, and polished modern user experiences.',
    tags: ['Next.js / React 19', 'Server-Sent Events', 'Dynamic Canvas', 'TypeScript'],
  },
  {
    num: '05',
    icon: Activity,
    title: 'MLOps & Low-Latency GPU Clusters',
    description:
      'High-throughput inference infrastructure tuned with vLLM and TensorRT-LLM. Sub-50ms token latency, continuous evaluation, and automated scaling.',
    tags: ['TensorRT-LLM', 'Kubernetes Clusters', 'Continuous Evals', 'Zero-Downtime'],
  },
  {
    num: '06',
    icon: Eye,
    title: 'Computer Vision & Multimodal Systems',
    description:
      'Production systems that ingest, parse, and structure complex multi-page PDFs, technical blueprints, IATA barcodes, and live camera streams.',
    tags: ['Document AI', 'Real-Time OCR', 'Visual Reasoning', 'Edge Deployment'],
  },
]

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-28 relative bg-[#050609] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase block mb-3">
              03 &mdash; Engineering Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-sans">
              Autonomous Systems &amp; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-slate-300">production-grade solutions.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            We avoid fragile API wrappers. We architect production-grade machine learning pipelines, verified against real enterprise constraints.
          </p>
        </div>

        {/* Clean Architectural Grid (Hairline borders, no rainbow slop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.08]">
          {CAPABILITIES.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.num}
                className="group p-8 sm:p-10 border-r border-b border-white/[0.08] bg-[#07080d] hover:bg-[#0c0d15] transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 text-xs font-mono text-slate-500">
                    <span className="text-purple-400 font-semibold">{item.num}</span>
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-normal text-white mb-3 tracking-tight font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Impact Metric Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-r border-b border-white/[0.08] bg-[#08090e]">
          <div className="p-6 sm:p-8 border-r border-white/[0.08] last:border-r-0">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-white tracking-tight">&lt;50ms</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Inference Latency</div>
          </div>
          <div className="p-6 sm:p-8 border-r border-white/[0.08] last:border-r-0">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-white tracking-tight">99.8%</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Evaluation Accuracy</div>
          </div>
          <div className="p-6 sm:p-8 border-r border-white/[0.08] last:border-r-0">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-white tracking-tight">100%</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Private VPC Sovereignty</div>
          </div>
          <div className="p-6 sm:p-8">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-white tracking-tight">14 Days</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">From Audit to MVP</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CapabilitiesSection
