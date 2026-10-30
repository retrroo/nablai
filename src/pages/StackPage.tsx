import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Cpu, Layers, Layout, Activity, Shield, Radio, Check, Globe } from 'lucide-react'
import { GithubIcon } from '../components/Icons'

export const StackPage: React.FC = () => {
  const stackItems = [
    {
      category: 'MOBILE & GPU CANVAS',
      title: 'React Native Skia & Expo SDK 52',
      repo: 'retrroo/flight-app',
      repoUrl: 'https://github.com/retrroo/flight-app',
      description:
        'GPU-accelerated route and airport rendering using React Native Skia (compiled to CanvasKit WebAssembly for the web). Complex gesture handling (pinch, pan, momentum deceleration) runs entirely on the native UI-thread using Reanimated 4 and Gesture Handler.',
      highlights: [
        '60 FPS UI-thread rendering with zero bridge serialization lag',
        '4,008 bundled international airport nodes with dynamic LOD zoom clustering',
        'CanvasKit WASM postinstall pipeline for identical Mac & Windows web parity',
        'NativeWind & strict design token theming across light and dark modes',
      ],
      icon: Layout,
    },
    {
      category: 'SOFTWARE PATTERNS',
      title: 'Hexagonal Architecture & Clean Ports',
      repo: 'karimsaid123/latentspace',
      repoUrl: 'https://github.com/karimsaid123/latentspace',
      description:
        'Clean separation of concerns adhering strictly to Domain-Driven Design (DDD). Domain entities (Article, Source, AISummary) remain completely free of external dependencies. Inversion of Control (IoC) is managed by a centralized Dependency Injection container.',
      highlights: [
        'Ports (FeedProviderPort, ArticleRepositoryPort, CachePort, LockPort)',
        'Pluggable in-memory, SQLite, and Redis KV storage adapters',
        'Centralized BackendContainer.getInstance() for zero-leakage bootstrap',
        'Tested domain errors: RateLimitError, ProviderUnavailableError',
      ],
      icon: Layers,
    },
    {
      category: 'DISTRIBUTED SYSTEMS',
      title: 'Node 24, BullMQ & Redis Single-Flight',
      repo: 'retrroo/flight-app',
      repoUrl: 'https://github.com/retrroo/flight-app',
      description:
        'A resilient Node 24 backend driving background polling, caching, and webhook processing. Distributed Redis mutex locks ensure that if 200 users track the same flight, exactly 1 external API request is dispatched.',
      highlights: [
        'BullMQ queue workers with exponential backoff and jittered retries',
        'Single-flight mutex locks and strict daily call budgets (PROVIDER_DAILY_BUDGET)',
        'Multi-provider fallback abstraction (AirLabs, Aviationstack, OpenSky Network)',
        'Supabase Realtime WebSockets pushing instant updates to all connected devices',
      ],
      icon: Cpu,
    },
    {
      category: 'STATE MACHINES',
      title: 'Pure Time-Window Polling FSM',
      repo: 'retrroo/flight-app',
      repoUrl: 'https://github.com/retrroo/flight-app',
      description:
        'A deterministic finite state machine (FSM) written as a pure function without I/O. Decides polling intervals strictly based on time to departure and flight status, eliminating runaway API bills.',
      highlights: [
        'Dormant (>7d): zero paid calls',
        'Daily (7d..24h): 1 schedule check per 24 hours',
        'Pre-departure (24h..6h): 15-minute polling + inbound tail verification',
        'Active (6h..landing): 1-minute live poll / webhook alerts with safety net',
      ],
      icon: Activity,
    },
    {
      category: 'AI EVALUATIONS',
      title: 'Gemini 1.5 Flash Structured Synthesis',
      repo: 'karimsaid123/latentspace',
      repoUrl: 'https://github.com/karimsaid123/latentspace',
      description:
        'Real-time multimodal evaluation engine enforcing strict JSON schema generation. Produces grounded executive summaries, strategic impact classifications, and reading time metrics.',
      highlights: [
        'Enforced JSON schema with zero hallucinated markdown wrapping',
        'Impact tier categorization: Breakthrough, High, Medium, Notable',
        'Heuristic keyword scoring allocating articles across 5 strategic industry tracks',
        'Automatic fallback to heuristic summarizer if API limits are reached',
      ],
      icon: Shield,
    },
    {
      category: 'PREDICTIVE TELEMETRY',
      title: 'Inbound Aircraft Turnaround Engine',
      repo: 'retrroo/flight-app',
      repoUrl: 'https://github.com/retrroo/flight-app',
      description:
        'Tracks the aircraft tail number (reg_number / hex) on its previous leg. Calculates minimum turnaround ground times to alert travelers of impending delays hours before airlines announce them.',
      highlights: [
        'Aircraft-specific minimum ground buffers: 60m widebody, 25m regional, 35m standard',
        'ADS-B trajectory ingestion combined with scheduled departure timestamps',
        'Instant push alerts triggered when turnaround buffer becomes negative',
        'Supabase Row Level Security (RLS) guaranteeing private user flight records',
      ],
      icon: Radio,
    },
  ]

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

        {/* Hero Header with Editorial Typography */}
        <div className="max-w-3xl mb-16 pb-12 border-b border-white/[0.08]">
          <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase block mb-3">
            03 &mdash; STUDIO STACK &amp; INFRASTRUCTURE
          </span>
          <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight font-sans">
            How We Build Our Products &mdash; <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-slate-300">our real engineering stack.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            We don’t build on fragile abstractions or superficial API wrappers. Every system in the Nablai studio is architected on clean hexagonal boundaries, deterministic state machines, and GPU-accelerated canvas graphics.
          </p>
        </div>

        {/* High-Level Architecture Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/[0.08] bg-[#08090e] rounded-2xl overflow-hidden mb-16">
          <div className="p-6 sm:p-8 border-r border-b lg:border-b-0 border-white/[0.08]">
            <div className="text-3xl sm:text-5xl font-light font-sans text-white tracking-tight">60 FPS</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Skia GPU CanvasKit</div>
          </div>
          <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/[0.08]">
            <div className="text-3xl sm:text-5xl font-light font-sans text-white tracking-tight">4,008</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Bundled Global Airports</div>
          </div>
          <div className="p-6 sm:p-8 border-r border-white/[0.08]">
            <div className="text-3xl sm:text-5xl font-light font-sans text-purple-400 tracking-tight">13 Locales</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Multi-Language &amp; RTL</div>
          </div>
          <div className="p-6 sm:p-8">
            <div className="text-3xl sm:text-5xl font-light font-sans text-white tracking-tight">100% Pure</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Tested FSM Policies</div>
          </div>
        </div>

        {/* Deep-Dive Grid into Stack Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {stackItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-[#08090e] border border-white/[0.08] p-8 sm:p-10 flex flex-col justify-between hover:border-purple-500/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] text-xs font-mono">
                    <span className="text-purple-400 font-semibold">{item.category}</span>
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{item.repo}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <h3 className="text-xl font-normal text-white font-sans tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/[0.04]">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                      KEY ARCHITECTURAL HIGHLIGHTS
                    </span>
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                        <Check className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Global Multi-Language System Banner */}
        <div className="rounded-2xl bg-[#08090e] border border-white/[0.08] p-8 sm:p-12 mb-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-mono">
              <Globe className="w-4 h-4" />
              <span>13 LOCALES ARCHITECTURE</span>
            </div>
            <h3 className="text-2xl font-normal text-white font-sans">
              Internationalized with Native RTL Mirroring
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              AirFlow supports 13 languages natively (English, Mandarin, Hindi, Spanish, Arabic, French, Portuguese, Bengali, Russian, Urdu, Indonesian, German, Dutch). For Arabic and Urdu, the layout automatically mirrors right-to-left using native flex-direction transformations and CLDR pluralization rules.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 max-w-sm">
            {['EN', 'ZH', 'HI', 'ES', 'AR (RTL)', 'FR', 'PT', 'BN', 'RU', 'UR (RTL)', 'ID', 'DE', 'NL'].map((code) => (
              <span
                key={code}
                className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-slate-300 text-[11px] font-mono"
              >
                {code}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Architecture Page */}
        <div className="text-center pt-8 border-t border-white/[0.08]">
          <h3 className="text-lg font-normal text-white mb-2 font-sans">Want to see the actual code in our IDE?</h3>
          <p className="text-xs text-slate-400 mb-6 font-mono">Inspect tracking_policy.ts, container.ts, and inbound_turnaround.ts.</p>
          <Link
            to="/architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-600/25 border border-purple-400/30"
          >
            <span>Explore Systems Architecture &amp; Code</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default StackPage