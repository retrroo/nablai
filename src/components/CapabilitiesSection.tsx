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
    title: 'XGBoost Delay Prediction & Turnaround Telemetry',
    description:
      'Custom XGBoost turnaround delay classification model paired with live ADS-B tail number trajectory ingestion. Calculates ground turnaround margins to predict gate delays hours before airlines broadcast them.',
    tags: ['XGBoost Model', 'Tail-Number Tracking', 'Delay Prediction', 'ADS-B Ingestion'],
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
    <section id="stack" className="py-24 relative bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              03 // Studio Engineering Stack
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950 font-sans">
              How We Build Our Apps <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">our real codebase stack.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-sm leading-relaxed">
            Derived directly from our live repositories (<strong className="text-zinc-950 font-medium">flight-app</strong> &amp; <strong className="text-zinc-950 font-medium">latentspace</strong>). Clean hexagonal boundaries, GPU canvas graphics, and deterministic state machines.
          </p>
        </div>

        {/* Clean Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-200">
          {CORE_SYSTEMS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.num}
                className="group p-8 sm:p-10 border-r border-b border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 text-xs font-mono text-zinc-500">
                    <span className="text-zinc-900 font-semibold">{item.num}</span>
                    <Icon className="w-4 h-4 text-zinc-500 group-hover:text-zinc-900 transition-colors" />
                  </div>

                  <h3 className="text-xl font-normal text-zinc-950 mb-3 tracking-tight font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-8 font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200/60 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-zinc-700 border border-zinc-200"
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
        <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-r border-b border-zinc-200 bg-zinc-50">
          <div className="p-6 sm:p-8 border-r border-zinc-200 last:border-r-0">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-zinc-950 tracking-tight">60 FPS</div>
            <div className="text-[11px] font-mono text-zinc-500 mt-1 uppercase">Skia GPU CanvasKit</div>
          </div>
          <div className="p-6 sm:p-8 border-r border-zinc-200 last:border-r-0">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-zinc-950 tracking-tight">4,008</div>
            <div className="text-[11px] font-mono text-zinc-500 mt-1 uppercase">Bundled Global Airports</div>
          </div>
          <div className="p-6 sm:p-8 border-r border-zinc-200 last:border-r-0">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-zinc-950 tracking-tight">13 Locales</div>
            <div className="text-[11px] font-mono text-zinc-500 mt-1 uppercase">Multi-Language &amp; RTL</div>
          </div>
          <div className="p-6 sm:p-8">
            <div className="text-2xl sm:text-4xl font-normal font-sans text-zinc-950 tracking-tight">100% Pure</div>
            <div className="text-[11px] font-mono text-zinc-500 mt-1 uppercase">Tested FSM Policies</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CapabilitiesSection