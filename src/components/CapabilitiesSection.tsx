import React from 'react'
import { Cpu, Network, Bot, Layout, Activity, Eye } from 'lucide-react'

const CORE_SYSTEMS = [
  {
    num: '01',
    icon: Bot,
    title: 'Cyclical Agent State Graphs',
    description:
      'Deterministic multi-agent graphs that decompose complex goals into discrete tool calls, self-verify outputs with evaluation loops, and handle long-running executions without human bottlenecks.',
    tags: ['LangGraph', 'Deterministic Tools', 'State Checkpointing', 'Self-Healing Loops'],
  },
  {
    num: '02',
    icon: Network,
    title: 'Hybrid Dense + Sparse Retrieval',
    description:
      'High-dimensional vector embeddings paired with BM25 sparse keyword indices and cross-encoder reranking. Powers grounded document reasoning with zero hallucinations and verified citations.',
    tags: ['Qdrant Dense Index', 'BM25 Lexical', 'Cross-Encoder Rerank', 'Exact Citations'],
  },
  {
    num: '03',
    icon: Cpu,
    title: 'Open-Weights LoRA & Quantization',
    description:
      'Parameter-efficient fine-tuning on targeted domain corpora. Models are quantized down to 4-bit AWQ and served via vLLM for high throughput and sub-40ms token generation.',
    tags: ['Unsloth / PyTorch', 'LoRA / QLoRA', '4-Bit AWQ', 'vLLM Serving'],
  },
  {
    num: '04',
    icon: Layout,
    title: 'Real-Time Gen-UI Interfaces',
    description:
      'Modern web interfaces built with React 19 and TypeScript. Real-time Server-Sent Events (SSE) streaming, interactive canvas manifolds, and responsive editorial typography.',
    tags: ['React 19 / Vite', 'SSE Token Streaming', 'Canvas 2D / WebGL', 'TypeScript'],
  },
  {
    num: '05',
    icon: Eye,
    title: 'Computer Vision & Barcode Telemetry',
    description:
      'Edge and server-side visual models for parsing unstructured media: from high-precision IATA BCBP 2D boarding pass decoding to real-time trajectory reconstruction.',
    tags: ['IATA BCBP 2D OCR', 'Vision Models', 'Trajectory Tracking', 'Edge Inference'],
  },
  {
    num: '06',
    icon: Activity,
    title: 'Low-Latency GPU Inference Infrastructure',
    description:
      'Dedicated inference pipelines optimized for deterministic throughput. Continuous adversarial regression evals, low memory footprint, and zero third-party vendor lock-in.',
    tags: ['Self-Hosted vLLM', 'CUDA Acceleration', 'Continuous Evals', 'Zero Vendor Lock-In'],
  },
]

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="stack" className="py-28 relative bg-[#050609] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase block mb-3">
              03 &mdash; Studio Engineering Stack
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-sans">
              How We Build Our Apps &mdash; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-slate-300">from mathematical core to UI.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            We avoid superficial API wrappers. Every app in the Nablai portfolio is built from scratch on deterministic state machines, sovereign models, and custom interfaces.
          </p>
        </div>

        {/* Clean Architectural Grid (Hairline borders, no rainbow slop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.08]">
          {CORE_SYSTEMS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.num}
                className="group p-8 sm:p-10 border-r border-b border-white/[0.08] bg-[#07080d] hover:bg-[#0c0d15] transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 text-xs font-mono text-slate-500">
                    <span className="text-purple-400 font-semibold">{item.num}</span>
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-purple-300 transition-colors" />
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

        {/* Studio Foundation Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-r border-b border-white/[0.08] bg-[#08090e]">
          <div className="p-6 sm:p-8 border-r border-white/[0.08] last:border-r-0">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-white tracking-tight">&lt;40ms</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Local vLLM Latency</div>
          </div>
          <div className="p-6 sm:p-8 border-r border-white/[0.08] last:border-r-0">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-white tracking-tight">100%</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Sovereign Code &amp; Weights</div>
          </div>
          <div className="p-6 sm:p-8 border-r border-white/[0.08] last:border-r-0">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-purple-400 tracking-tight">2 Apps</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Live Studio Portfolio</div>
          </div>
          <div className="p-6 sm:p-8">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-white tracking-tight">0 Sales</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Built For Ourselves</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CapabilitiesSection