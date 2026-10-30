import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Newspaper } from 'lucide-react'

export const AppsShowcase: React.FC = () => {
  return (
    <section id="apps" className="py-24 relative bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              01 &mdash; Live Studio Applications
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950 font-sans">
              Applications We Build &mdash; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">crafted for ourselves.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-sm leading-relaxed">
            We don’t pitch hypothetical decks. We design, architect, and ship complete mobile and web systems that solve real utility problems in our daily lives.
          </p>
        </div>

        {/* Modular Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* App 1: AirFlow (AiR) (7 cols) */}
          <Link
            to="/apps/airflow"
            className="lg:col-span-7 group relative rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:bg-zinc-100/50"
          >
            <div>
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="text-zinc-800 font-medium">EXPO + SKIA 60FPS</span>
                  <span className="text-zinc-300">|</span>
                  <span className="text-zinc-600">KL1021 &middot; AMS &rarr; LHR</span>
                </div>
                <span className="text-zinc-500">Node 24 &middot; BullMQ &middot; Supabase</span>
              </div>

              {/* Title & Concept */}
              <div className="mb-3">
                <h3 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
                  AirFlow
                </h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed max-w-lg mb-8 font-sans">
                Mobile flight companion with React Native Skia GPU-accelerated route mapping, time-window polling state machine, predictive inbound turnaround alerts, and 13-language internationalization.
              </p>

              {/* Flight Telemetry Card Inside */}
              <div className="p-5 rounded-xl bg-white border border-zinc-200 font-mono text-xs space-y-3 shadow-xs">
                <div className="flex justify-between items-center text-zinc-600 pb-2 border-b border-zinc-100">
                  <span className="text-zinc-500">Inbound Tail Tracking:</span>
                  <span className="text-emerald-700 font-medium">PH-BKA (B787-10) &middot; Turnaround OK</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-zinc-800 pt-1">
                  <div className="p-2 rounded bg-zinc-50 border border-zinc-100">
                    <div className="text-[10px] text-zinc-500">MAP ENGINE</div>
                    <div className="font-bold text-zinc-950 mt-0.5">Skia CanvasKit</div>
                  </div>
                  <div className="p-2 rounded bg-zinc-50 border border-zinc-100">
                    <div className="text-[10px] text-zinc-500">AIRPORTS</div>
                    <div className="font-bold text-zinc-950 mt-0.5">4,008 Bundled</div>
                  </div>
                  <div className="p-2 rounded bg-zinc-50 border border-zinc-100">
                    <div className="text-[10px] text-zinc-500">LOCALES</div>
                    <div className="font-bold text-zinc-950 mt-0.5">13 (inc. RTL)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Link Action */}
            <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-600 group-hover:text-zinc-950 transition-colors">
              <span>EXPLORE AIRFLOW ARCHITECTURE &amp; REPO</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>

          {/* App 2: Latent Space (5 cols) */}
          <Link
            to="/apps/latent-space"
            className="lg:col-span-5 group relative rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:bg-zinc-100/50"
          >
            <div>
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-600" />
                  <span className="text-zinc-800 font-medium">PORTS &amp; ADAPTERS</span>
                </div>
                <span className="text-zinc-600">Next.js 16 &middot; React 19</span>
              </div>

              {/* Title & Concept */}
              <div className="flex items-center gap-3 mb-3">
                <Newspaper className="w-5 h-5 text-zinc-800" />
                <h3 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
                  Latent Space
                </h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-sans">
                Curated AI news and intelligence engine built on Hexagonal Architecture (Ports &amp; Adapters), Gemini 1.5 Flash structured synthesis, and multi-track heuristic category routing.
              </p>

              {/* Vector / AI Snapshot */}
              <div className="p-5 rounded-xl bg-white border border-zinc-200 font-mono text-xs space-y-2.5 shadow-xs">
                <div className="flex justify-between text-[11px]">
                  <span className="text-zinc-500">AI Synthesis:</span>
                  <span className="text-zinc-900 font-medium">Gemini 1.5 Flash JSON</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-zinc-500">Pattern:</span>
                  <span className="text-zinc-900 font-medium">Domain-Driven Design (DDD)</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden mt-1.5">
                  <div className="h-full bg-zinc-900 w-[95%]" />
                </div>
                <div className="flex justify-between text-[10px] text-zinc-500 pt-1">
                  <span>Categories: 5 Tracks</span>
                  <span>Impact: Breakthrough</span>
                </div>
              </div>
            </div>

            {/* Bottom Link Action */}
            <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-600 group-hover:text-zinc-950 transition-colors">
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