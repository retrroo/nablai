import React from 'react'
import { Cpu, Network, Bot, Layout, Activity, Eye } from 'lucide-react'

const CORE_SYSTEMS = [
  {
    num: '01',
    icon: Layout,
    title: 'React Native Skia & 60fps GPU Canvas',
    description:
      'High-framerate GPU-accelerated route and airport mapping with React Native Skia (CanvasKit WASM on web). Driven by Reanimated 4 and Gesture Handler for frictionless UI-thread pinch, pan, and LOD clustering.',
    tags: ['Expo SDK 52', 'React Native Skia', 'Reanimated 4', 'CanvasKit WASM'],
  },
  {
    num: '02',
    icon: Network,
    title: 'Hexagonal Architecture & DDD Ports',
    description:
      'Strict separation between Domain Entities, Ports, and Adapters. An IoC Container binds pluggable repository, cache, and feed provider adapters without polluting the core business logic.',
    tags: ['Hexagonal / Ports & Adapters', 'IoC Container', 'Next.js 16', 'Domain Entities'],
  },
  {
    num: '03',
    icon: Activity,
    title: 'Time-Window State Machine FSM',
    description:
      'Pure mathematical scheduling state machine (dormant → daily → pre_departure → active → archived). Decides polling frequency and safety nets to eliminate redundant paid API calls.',
    tags: ['Pure State Machine', 'Zero-IO Policy', 'Single-Flight Mutex', 'Daily Budget Limits'],
  },
  {
    num: '04',
    icon: Eye,
    title: 'Predictive Inbound Aircraft Telemetry',
    description:
      'Calculates ground turnaround margins (60m widebody, 25m regional) by tracking the aircraft’s live previous leg in real time. Predicts gate delays before airlines broadcast them.',
    tags: ['Tail-Number Tracking', 'Turnaround Heuristics', 'AirLabs & OpenSky', 'ADS-B Ingestion'],
  },
  {
    num: '05',
    icon: Bot,
    title: 'Gemini 1.5 Flash Structured Synthesis',
    description:
      'Low-latency multimodal LLM pipelines with strict JSON schemas. Produces executive TL;DRs, 3 bulleted strategic impact takeaways, reading time metrics, and algorithmic category classification.',
    tags: ['Gemini 1.5 Flash', 'Structured JSON Schema', 'Heuristic Scoring', 'Impact Tiers'],
  },
  {
    num: '06',
    icon: Cpu,
    title: 'Distributed BullMQ & Supabase Realtime',
    description:
      'Node 24 backend orchestrating background workers with BullMQ and Redis single-flight mutex locks. Broadcasts shared flight events and live changes over Supabase Realtime WebSockets.',
    tags: ['Node.js 24', 'BullMQ & Redis', 'Supabase Postgres RLS', 'Realtime WebSockets'],
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
              <span className="font-serif italic font-normal text-slate-300">our real codebase stack.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Derived directly from our live repositories (<strong className="text-white font-medium">flight-app</strong> &amp; <strong className="text-white font-medium">latentspace</strong>). We engineer with clean hexagonal boundaries, GPU canvas graphics, and deterministic state machines.
          </p>
        </div>

        {/* Clean Architectural Grid */}
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

        {/* Real Codebase Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-r border-b border-white/[0.08] bg-[#08090e]">
          <div className="p-6 sm:p-8 border-r border-white/[0.08] last:border-r-0">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-white tracking-tight">60 FPS</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Skia GPU CanvasKit</div>
          </div>
          <div className="p-6 sm:p-8 border-r border-white/[0.08] last:border-r-0">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-white tracking-tight">4,008</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Bundled Global Airports</div>
          </div>
          <div className="p-6 sm:p-8 border-r border-white/[0.08] last:border-r-0">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-purple-400 tracking-tight">13 Locales</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Multi-Language &amp; RTL</div>
          </div>
          <div className="p-6 sm:p-8">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-white tracking-tight">100% Pure</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Tested FSM Policies</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CapabilitiesSection