import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Plane, Newspaper } from 'lucide-react'

export const AppsShowcase: React.FC = () => {
  return (
    <section id="apps" className="py-28 relative bg-[#050609] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase block mb-3">
              01 &mdash; Live Studio Applications
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-sans">
              Applications We Build &mdash; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-slate-300">crafted for ourselves.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            We don’t pitch hypothetical decks. We design, architect, and ship complete mobile and web systems that solve real utility problems in our daily lives.
          </p>
        </div>

        {/* Modular Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* App 1: AirFlow (AiR) (7 cols) */}
          <Link
            to="/apps/airflow"
            className="lg:col-span-7 group relative rounded-2xl bg-[#090b10] border border-white/[0.08] hover:border-cyan-500/40 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-[#0c0e16]"
          >
            <div>
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06] text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-slate-300">EXPO + SKIA 60FPS</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-cyan-400">KL1021 &middot; AMS &rarr; LHR</span>
                </div>
                <span className="text-slate-500">Node 24 &middot; BullMQ &middot; Supabase</span>
              </div>

              {/* Title & Concept */}
              <div className="flex items-center gap-3 mb-3">
                <Plane className="w-5 h-5 text-cyan-400 -rotate-45" />
                <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight font-sans">
                  AirFlow <span className="text-slate-500 text-lg font-light">(AiR ✈️)</span>
                </h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-lg mb-8 font-sans">
                Mobile flight companion with React Native Skia GPU-accelerated route mapping, time-window polling state machine, predictive inbound turnaround alerts, and 13-language internationalization.
              </p>

              {/* Realistic Flight Telemetry Card Inside */}
              <div className="p-5 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs space-y-3">
                <div className="flex justify-between items-center text-slate-400 pb-2 border-b border-white/[0.04]">
                  <span className="text-slate-500">Inbound Tail Tracking:</span>
                  <span className="text-emerald-400">PH-BKA (B787-10) &middot; Turnaround OK</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-slate-300 pt-1">
                  <div className="p-2 rounded bg-white/[0.02]">
                    <div className="text-[10px] text-slate-500">MAP ENGINE</div>
                    <div className="font-bold text-white mt-0.5">Skia CanvasKit</div>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02]">
                    <div className="text-[10px] text-slate-500">AIRPORTS</div>
                    <div className="font-bold text-white mt-0.5">4,008 Bundled</div>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02]">
                    <div className="text-[10px] text-slate-500">LOCALES</div>
                    <div className="font-bold text-cyan-400 mt-0.5">13 (inc. RTL)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Link Action */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-300 group-hover:text-cyan-300 transition-colors">
              <span>EXPLORE AIRFLOW ARCHITECTURE &amp; REPO</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>

          {/* App 2: Latent Space (5 cols) */}
          <Link
            to="/apps/latent-space"
            className="lg:col-span-5 group relative rounded-2xl bg-[#090b10] border border-white/[0.08] hover:border-purple-500/40 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-[#0c0e16]"
          >
            <div>
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06] text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-slate-300">PORTS &amp; ADAPTERS</span>
                </div>
                <span className="text-purple-400">Next.js 16 &middot; React 19</span>
              </div>

              {/* Title & Concept */}
              <div className="flex items-center gap-3 mb-3">
                <Newspaper className="w-5 h-5 text-purple-400" />
                <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight font-sans">
                  Latent Space
                </h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                Curated AI news and intelligence engine built on Hexagonal Architecture (Ports &amp; Adapters), Gemini 1.5 Flash structured synthesis, and multi-track heuristic category routing.
              </p>

              {/* Interactive Vector Snapshot */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500">AI Synthesis:</span>
                  <span className="text-purple-300">Gemini 1.5 Flash JSON</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500">Pattern:</span>
                  <span className="text-white">Domain-Driven Design (DDD)</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-purple-500 w-[95%]" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 pt-1">
                  <span>Categories: 5 Tracks</span>
                  <span>Impact: Breakthrough</span>
                </div>
              </div>
            </div>

            {/* Bottom Link Action */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-300 group-hover:text-purple-300 transition-colors">
              <span>EXPLORE LATENT SPACE &amp; REPO</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default AppsShowcase