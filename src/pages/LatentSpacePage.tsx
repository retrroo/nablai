import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Orbit, Layers, ArrowLeft, Cpu, Activity } from 'lucide-react'

const EMBEDDING_POINTS = [
  { label: 'Autonomous Agent', x: 25, y: 30, cluster: 'Agents' },
  { label: 'Multi-Agent Swarm', x: 28, y: 34, cluster: 'Agents' },
  { label: 'Tool Calling / MCP', x: 22, y: 38, cluster: 'Agents' },
  { label: 'Nabla Gradient Descent', x: 75, y: 22, cluster: 'Calculus' },
  { label: 'Backpropagation', x: 80, y: 25, cluster: 'Calculus' },
  { label: 'Loss Optimization', x: 72, y: 28, cluster: 'Calculus' },
  { label: 'Vector RAG Engine', x: 45, y: 70, cluster: 'Retrieval' },
  { label: 'Qdrant Dense Index', x: 42, y: 75, cluster: 'Retrieval' },
  { label: 'Cross-Encoder Rerank', x: 50, y: 72, cluster: 'Retrieval' },
  { label: 'LoRA Quantization', x: 65, y: 60, cluster: 'Fine-Tuning' },
]

export const LatentSpacePage: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState(EMBEDDING_POINTS[0])
  const [temperature, setTemperature] = useState(0.7)
  const [dimension, setDimension] = useState<1536 | 3072 | 4096>(1536)

  return (
    <div className="min-h-screen bg-[#050609] text-slate-100 pt-32 pb-24 selection:bg-purple-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO NABLAI HOME</span>
        </Link>

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase block mb-3">
              PROP_APP // 02 &mdash; VECTOR LABORATORY
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight font-sans">
              Latent Space &mdash; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-slate-300">high-dimensional vector geometry.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              An interactive research laboratory for inspecting semantic manifolds, cosine similarity distributions, and transformer attention weight allocation in real time.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-300">
              <span className="text-purple-400">Dim:</span> {dimension}d
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-300">
              <span className="text-cyan-400">Metric:</span> Cosine Distance
            </div>
          </div>
        </div>

        {/* Interactive 2D Manifold Canvas & Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          {/* Manifold Chart (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl bg-[#08090e] border border-white/[0.08] p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-purple-400" />
                <span>t-SNE / UMAP 2D MANIFOLD PROJECTION</span>
              </div>
              <span className="text-slate-500">SELECT A VECTOR NODE</span>
            </div>

            <div className="relative w-full h-[380px] bg-black/40 rounded-xl border border-white/[0.04] overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-15" />

              {/* Connecting Cluster Edges */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="25%" y1="30%" x2="28%" y2="34%" stroke="#A855F7" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                <line x1="28%" y1="34%" x2="22%" y2="38%" stroke="#A855F7" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                <line x1="75%" y1="22%" x2="80%" y2="25%" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                <line x1="80%" y1="25%" x2="72%" y2="28%" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                <line x1="45%" y1="70%" x2="42%" y2="75%" stroke="#10B981" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                <line x1="42%" y1="75%" x2="50%" y2="72%" stroke="#10B981" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
              </svg>

              {/* Vector Nodes */}
              {EMBEDDING_POINTS.map((pt) => {
                const isSelected = selectedPoint.label === pt.label
                return (
                  <button
                    key={pt.label}
                    onClick={() => setSelectedPoint(pt)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group transition-all"
                    style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-transform ${
                        isSelected ? 'scale-150 ring-2 ring-white bg-purple-400' : 'bg-white/60 hover:scale-125'
                      }`}
                    />
                    <span className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/90 border border-white/10 text-slate-300 pointer-events-none opacity-80 group-hover:opacity-100">
                      {pt.label}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-6 pt-4 border-t border-white/[0.04] text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Agents Cluster</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Calculus Cluster</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Retrieval Cluster</span>
              </div>
            </div>
          </div>

          {/* Telemetry Inspector (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl bg-[#08090e] border border-white/[0.08] p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] text-xs font-mono text-slate-400">
              <span>NODE TELEMETRY</span>
              <span className="text-purple-400">LIVE</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.04]">
                <span className="text-[10px] text-slate-500 uppercase block">Selected Vector:</span>
                <span className="text-sm font-bold text-white mt-0.5 block">{selectedPoint.label}</span>
                <span className="text-[11px] text-purple-400 mt-1 block">Cluster: {selectedPoint.cluster}</span>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex justify-between text-slate-400">
                  <span>Coordinates:</span>
                  <span className="text-white">({selectedPoint.x}.0, {selectedPoint.y}.0)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Cosine Confidence:</span>
                  <span className="text-emerald-400 font-bold">0.9942</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Euclidean Norm:</span>
                  <span className="text-slate-300">1.0000 (Unit Sphere)</span>
                </div>
              </div>

              {/* Dimension Selector */}
              <div className="pt-4 border-t border-white/[0.04]">
                <span className="text-slate-500 text-[10px] uppercase block mb-2">Embedding Dimension:</span>
                <div className="grid grid-cols-3 gap-2">
                  {([1536, 3072, 4096] as const).map((dim) => (
                    <button
                      key={dim}
                      onClick={() => setDimension(dim)}
                      className={`py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        dimension === dim
                          ? 'bg-purple-600 text-white font-medium'
                          : 'bg-white/[0.03] text-slate-400 hover:text-white'
                      }`}
                    >
                      {dim}d
                    </button>
                  ))}
                </div>
              </div>

              {/* Temperature Slider */}
              <div className="pt-4 border-t border-white/[0.04]">
                <div className="flex justify-between text-[11px] text-slate-400 mb-1.5">
                  <span>Softmax Temperature:</span>
                  <span className="text-purple-300">{temperature}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.5"
                  step="0.05"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/[0.08]">
          <div className="p-8 border-r border-b border-white/[0.08] bg-[#07080d]">
            <Orbit className="w-4 h-4 text-purple-400 mb-4" />
            <h4 className="text-base font-normal text-white mb-2 font-sans">Vector Manifolds</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Investigate spatial topological organization of semantic representations across thousands of dimensional axes.
            </p>
          </div>

          <div className="p-8 border-r border-b border-white/[0.08] bg-[#07080d]">
            <Layers className="w-4 h-4 text-cyan-400 mb-4" />
            <h4 className="text-base font-normal text-white mb-2 font-sans">Attention Allocations</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Inspect how multi-head self-attention mechanisms distribute contextual weights across input sequences.
            </p>
          </div>

          <div className="p-8 border-r border-b border-white/[0.08] bg-[#07080d]">
            <Cpu className="w-4 h-4 text-emerald-400 mb-4" />
            <h4 className="text-base font-normal text-white mb-2 font-sans">Embedding Optimization</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Fine-tune custom embeddings to minimize contrastive loss on proprietary enterprise lexicons and technical documents.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatentSpacePage
