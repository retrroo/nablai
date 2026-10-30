import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Orbit, Sparkles, Layers, ArrowLeft, Cpu, Activity } from 'lucide-react'

const EMBEDDING_POINTS = [
  { label: 'Autonomous Agent', x: 25, y: 30, cluster: 'Agents', color: '#A855F7' },
  { label: 'Multi-Agent Swarm', x: 28, y: 34, cluster: 'Agents', color: '#A855F7' },
  { label: 'Tool Calling / MCP', x: 22, y: 38, cluster: 'Agents', color: '#A855F7' },
  { label: 'Nabla Gradient Descent', x: 75, y: 22, cluster: 'Math', color: '#38BDF8' },
  { label: 'Backpropagation', x: 80, y: 25, cluster: 'Math', color: '#38BDF8' },
  { label: 'Loss Optimization', x: 72, y: 28, cluster: 'Math', color: '#38BDF8' },
  { label: 'Vector RAG Engine', x: 45, y: 70, cluster: 'Retrieval', color: '#10B981' },
  { label: 'Qdrant Dense Index', x: 42, y: 75, cluster: 'Retrieval', color: '#10B981' },
  { label: 'Cross-Encoder Rerank', x: 50, y: 72, cluster: 'Retrieval', color: '#10B981' },
  { label: 'LoRA Quantization', x: 65, y: 60, cluster: 'Fine-Tuning', color: '#F59E0B' },
]

export const LatentSpacePage: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState(EMBEDDING_POINTS[0])
  const [temperature, setTemperature] = useState(0.7)
  const [dimension, setDimension] = useState<1536 | 3072 | 4096>(1536)

  return (
    <div className="min-h-screen bg-[#07080d] text-slate-100 pt-28 pb-20 selection:bg-purple-600 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-700/20 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Terug naar Nablai Hoofdpagina</span>
        </Link>

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 mb-4">
              <Orbit className="w-3.5 h-3.5" />
              <span>AI Research Laboratory &middot; by Nablai</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Latent Space
            </h1>
            <p className="text-xl sm:text-2xl text-purple-200/90 font-light mt-2">
              Verken de hoog-dimensionale geometrie van neurale representaties.
            </p>
            <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-2xl">
              Latent Space is een interactieve laboratorium-omgeving voor het visualiseren van semantische vectorruimtes, cosine similarity afstanden, token clustering en embedding manifolds.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
              <span className="text-purple-400 font-bold">Dimensies:</span> {dimension}d
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
              <span className="text-cyan-400 font-bold">Metric:</span> Cosine Distance
            </div>
          </div>
        </div>

        {/* Interactive Embedding Canvas & Vector Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* 2D Projection Playground */}
          <div className="lg:col-span-8 bg-[#0b0c14] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Activity className="w-4 h-4 text-purple-400" />
                <span>t-SNE / UMAP 2D Manifold Projectie</span>
              </div>
              <span className="text-xs text-slate-500 font-mono">Klik op een vector knoop</span>
            </div>

            {/* Simulated 2D Vector Chart */}
            <div className="relative w-full h-[380px] bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
              {/* Grid Lines */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />

              {/* Connecting lines between same cluster */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="25%" y1="30%" x2="28%" y2="34%" stroke="#A855F7" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                <line x1="28%" y1="34%" x2="22%" y2="38%" stroke="#A855F7" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                <line x1="75%" y1="22%" x2="80%" y2="25%" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                <line x1="80%" y1="25%" x2="72%" y2="28%" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                <line x1="45%" y1="70%" x2="42%" y2="75%" stroke="#10B981" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                <line x1="42%" y1="75%" x2="50%" y2="72%" stroke="#10B981" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
              </svg>

              {/* Embedding Nodes */}
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
                      className={`w-3.5 h-3.5 rounded-full transition-transform ${
                        isSelected ? 'scale-150 ring-4 ring-white/50' : 'hover:scale-125'
                      }`}
                      style={{ backgroundColor: pt.color, boxShadow: `0 0 12px ${pt.color}` }}
                    />
                    <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-mono px-2 py-0.5 rounded bg-black/80 border border-white/10 text-slate-200 pointer-events-none opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all">
                      {pt.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Clusters Legend */}
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-4 border-t border-white/5 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <span className="text-slate-300">Autonomous Agents Cluster</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="text-slate-300">&nabla; Nabla Calculus Cluster</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-300">Retrieval RAG Cluster</span>
              </div>
            </div>
          </div>

          {/* Node Inspector Card */}
          <div className="lg:col-span-4 bg-slate-900/50 rounded-3xl border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Vector Telemetrie</span>
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-black/50 border border-white/5">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Geselecteerde Vector</span>
                <span className="text-lg font-bold text-white mt-1 block">{selectedPoint.label}</span>
                <span className="text-xs font-mono text-purple-400 mt-1 block">Cluster: {selectedPoint.cluster}</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Manifold Coordinates:</span>
                    <span className="text-slate-200">({selectedPoint.x}.0, {selectedPoint.y}.0)</span>
                  </div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Cosine Confidence:</span>
                    <span className="text-emerald-400 font-bold">0.9942</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Euclidean Norm:</span>
                    <span className="text-cyan-300">1.0000 (Unit Sphere)</span>
                  </div>
                </div>

                {/* Dimension Select */}
                <div className="pt-3 border-t border-white/5">
                  <label className="block text-slate-400 mb-2">Embedding Dimensie:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {([1536, 3072, 4096] as const).map((dim) => (
                      <button
                        key={dim}
                        onClick={() => setDimension(dim)}
                        className={`py-1.5 rounded-lg text-xs font-mono transition-all ${
                          dimension === dim
                            ? 'bg-purple-600 text-white font-bold'
                            : 'bg-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {dim}d
                      </button>
                    ))}
                  </div>
                </div>

                {/* Temperature Slider */}
                <div className="pt-3 border-t border-white/5">
                  <div className="flex justify-between text-slate-400 mb-1.5">
                    <span>Softmax Temperature:</span>
                    <span className="text-purple-300 font-bold">{temperature}</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="1.5"
                    step="0.05"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full accent-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4">
              <Orbit className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Vector Geometrie</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Begrijp hoe semantische concepten zich organiseren in meerdimensionale ruimtes en hoe clustering leidt tot voorspelbare agent-beslissingen.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Attention Manifolds</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Analyseer hoe transformermodellen gewichten verdelen over tokens met real-time heatmaps en differentiële gradient visualisaties.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Embedding R&amp;D</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ontwikkel en evalueer maatwerk embedding-modellen voor private domeinen waar standaardmodellen van Big Tech falen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatentSpacePage
