import React, { useState } from 'react'
import { ArrowRight, Play, CheckCircle2, Sparkles } from 'lucide-react'

export const Hero: React.FC = () => {
  const [activeStep, setActiveStep] = useState(3)
  const [simulating, setSimulating] = useState(false)

  const simulateRun = () => {
    setSimulating(true)
    setActiveStep(0)
    const timers = [
      setTimeout(() => setActiveStep(1), 600),
      setTimeout(() => setActiveStep(2), 1400),
      setTimeout(() => {
        setActiveStep(3)
        setSimulating(false)
      }, 2200),
    ]
    return () => timers.forEach(clearTimeout)
  }

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-purple-700/20 via-indigo-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tag pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 hover:border-purple-500/40 transition-all cursor-pointer group">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              Nabla (&nabla;) Gradient Mathematics <span className="text-purple-400 font-bold">&times;</span> Next-Gen AI
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Architectuur voor <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-slate-200 to-purple-300 bg-clip-text text-transparent">
              Autonome AI Systemen
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Nablai ontwikkelt autonome multi-agent architecturen, private RAG pipelines en op maat gefinetunede modellen die bedrijfsprocessen radicaal versnellen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-base shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transition-all active:scale-95"
            >
              <Sparkles className="w-5 h-5 text-purple-200" />
              <span>Start Jouw AI Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#logo-verhaal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium text-base border border-white/10 transition-all"
            >
              <span>Bekijk Het Logo DNA</span>
            </a>
          </div>

          {/* Live Interactive Agent Visual Terminal */}
          <div className="max-w-3xl mx-auto text-left rounded-2xl bg-[#0b0d14]/90 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden">
            {/* Terminal Topbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">nablai-agent-runtime v2.4</span>
              </div>
              <button
                onClick={simulateRun}
                disabled={simulating}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-600/30 hover:bg-purple-600/50 text-purple-300 text-xs font-mono border border-purple-500/30 transition-colors disabled:opacity-50"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{simulating ? 'Berekenen...' : 'Herstart Agent'}</span>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs sm:text-sm space-y-3">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-purple-400">&gt;</span>
                <span>nablai initialize --pipeline=autonomous_agent --optimizer=nabla_gradient</span>
              </div>

              {activeStep >= 0 && (
                <div className="flex items-start gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400">[0.02s]</span>{' '}
                    <span className="text-emerald-400 font-semibold">Nabla Gradient Operator geactiveerd:</span> Loss backpropagation loop &nabla;L(&theta;) geconvergeerd.
                  </div>
                </div>
              )}

              {activeStep >= 1 && (
                <div className="flex items-start gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400">[0.14s]</span>{' '}
                    <span className="text-cyan-400 font-semibold">RAG Retrieval Stack:</span> 12 embedded document clusters gesynchroniseerd via vector index.
                  </div>
                </div>
              )}

              {activeStep >= 2 && (
                <div className="flex items-start gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400">[0.31s]</span>{' '}
                    <span className="text-purple-400 font-semibold">Autonomous Swarm:</span> 3 sub-agents georchestreerd met zelf-evaluerende verificatie checks.
                  </div>
                </div>
              )}

              {activeStep >= 3 && (
                <div className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/20 text-slate-200 mt-4">
                  <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Nablai Inference Output:</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                    &ldquo;Alle datastromen zijn gekoppeld. Uw agentische workflow draait op sub-40ms latentie met 99.8% nauwkeurigheid over 10.000+ gelijktijdige queries.&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">&lt;45ms</div>
              <div className="text-xs text-slate-400 mt-1">Inference Latency</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">99.8%</div>
              <div className="text-xs text-slate-400 mt-1">Evaluatie Accuratesse</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
              <div className="text-xs text-slate-400 mt-1">Private Cloud Data Soevereiniteit</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">14 Dagen</div>
              <div className="text-xs text-slate-400 mt-1">Van Concept naar Werkende MVP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
