import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check, Terminal, FileCode, Layers, Activity } from 'lucide-react'
import { GithubIcon } from '../components/Icons'

export const ArchitecturePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'policy' | 'hexagonal' | 'inbound'>('policy')

  const techStack = [
    'Expo SDK 52',
    'React Native Skia',
    'Next.js 16',
    'React 19',
    'Node.js 24',
    'BullMQ & Redis',
    'Supabase & RLS',
    'Gemini 1.5 Flash',
    'Hexagonal Architecture',
    'AirLabs & OpenSky',
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-32 pb-24 selection:bg-zinc-900 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-950 transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO NABLAI HOME</span>
        </Link>

        {/* Hero Header with Editorial Typography */}
        <div className="max-w-3xl mb-16 pb-12 border-b border-zinc-200">
          <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
            04 &mdash; SYSTEMS ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-6xl font-normal text-zinc-950 tracking-tight font-sans">
            Production Code Patterns &mdash; <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-zinc-600">from our live studio repositories.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
            Inspect the live code powering our applications. We prioritize deterministic state transitions, strict architectural boundaries, and high-framerate GPU pipelines.
          </p>
        </div>

        {/* Interactive IDE Terminal Window */}
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden mb-20 shadow-xs">
          {/* Top Bar with IDE tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-zinc-200 bg-zinc-100/70 px-4 sm:px-6">
            <div className="flex items-center gap-1.5 py-2.5 overflow-x-auto">
              <button
                onClick={() => setActiveTab('policy')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'policy'
                    ? 'bg-white text-zinc-950 border border-zinc-200 shadow-xs font-medium'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-zinc-700" />
                <span>tracking_policy.ts</span>
              </button>
              <button
                onClick={() => setActiveTab('hexagonal')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'hexagonal'
                    ? 'bg-white text-zinc-950 border border-zinc-200 shadow-xs font-medium'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-zinc-700" />
                <span>container.ts</span>
              </button>
              <button
                onClick={() => setActiveTab('inbound')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'inbound'
                    ? 'bg-white text-zinc-950 border border-zinc-200 shadow-xs font-medium'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-zinc-700" />
                <span>inbound_turnaround.ts</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
              REPOSITORIES: retrroo/flight-app &middot; karimsaid123/latentspace
            </span>
          </div>

          {/* Terminal Body with Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Blueprint Specs (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-zinc-200 space-y-6 bg-white">
              {activeTab === 'policy' && (
                <>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      TIME-WINDOW FSM // FLIGHT-APP
                    </span>
                    <h3 className="text-xl font-normal text-zinc-950 font-sans">
                      Zero-IO Polling Policy
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                      Pure mathematical state machine. Because there is zero I/O inside the policy function, every transition and API budget decision is 100% deterministic and unit-testable without database mocks.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-700 font-mono pt-4 border-t border-zinc-100">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                      <span>Dormant (&gt;7d) to Active (6h..landing, 1-min poll)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                      <span>Redis single-flight mutex deduplicating shared flights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                      <span>Automatic archive 2 hours post-landing</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <a
                      href="https://github.com/retrroo/flight-app/blob/main/backend/src/tracking/policy.ts"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-800 hover:text-zinc-950 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View policy.ts on GitHub</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </>
              )}

              {activeTab === 'hexagonal' && (
                <>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      PORTS &amp; ADAPTERS // LATENTSPACE
                    </span>
                    <h3 className="text-xl font-normal text-zinc-950 font-sans">
                      Hexagonal IoC Container
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                      Clean architecture decoupling core domain entities from infrastructure. Ports define contracts for Feed providers and storage; adapters implement Redis, memory, and RSS streaming.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-700 font-mono pt-4 border-t border-zinc-100">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                      <span>Domain Entities isolated from external frameworks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                      <span>Pluggable memory, SQLite, and Redis KV repositories</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                      <span>Concurrency locking with typed domain error handling</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <a
                      href="https://github.com/karimsaid123/latentspace/blob/main/src/core/container.ts"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-800 hover:text-zinc-950 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View container.ts on GitHub</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </>
              )}

              {activeTab === 'inbound' && (
                <>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      PREDICTIVE TELEMETRY // FLIGHT-APP
                    </span>
                    <h3 className="text-xl font-normal text-zinc-950 font-sans">
                      Where&apos;s My Plane Engine
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                      Tracks aircraft tail numbers (`reg_number`/`hex`) on their preceding leg. When inbound arrival buffer drops below minimum turnaround ground time, early warning alerts are triggered before airlines report them.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-700 font-mono pt-4 border-t border-zinc-100">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                      <span>Widebody (60m) vs Regional (25m) turnaround specs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                      <span>ADS-B live telemetry ingested via AirLabs &amp; OpenSky</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                      <span>Instant push notifications via Supabase Realtime</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <a
                      href="https://github.com/retrroo/flight-app/blob/main/backend/src/tracking/inbound.ts"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-800 hover:text-zinc-950 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View inbound.ts on GitHub</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* Right Syntax-Highlighted Code Canvas (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-zinc-950 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto">
              {activeTab === 'policy' && (
                <div className="space-y-2">
                  <div className="text-zinc-500">// flight-app/backend/src/tracking/policy.ts</div>
                  <div><span className="text-purple-400">export function</span> <span className="text-blue-300">decide</span>(</div>
                  <div className="pl-4">state: <span className="text-amber-300">TrackingState</span>,</div>
                  <div className="pl-4">now: <span className="text-amber-300">Date</span>,</div>
                  <div className="pl-4">config: <span className="text-amber-300">PollingConfig</span> = defaultPollingConfig</div>
                  <div>): <span className="text-amber-300">PollDecision</span> &#123;</div>
                  <div className="pl-4 text-zinc-500">// Pure state machine: no I/O, zero external cost bugs</div>
                  <div className="pl-4">const t = now.getTime();</div>
                  <div className="pl-4">const hoursToDep = (depTime - t) / HOUR;</div>
                  <br />
                  <div className="pl-4"><span className="text-purple-400">if</span> (hoursToDep &gt; <span className="text-amber-300">168</span>) &#123;</div>
                  <div className="pl-8"><span className="text-purple-400">return</span> &#123; phase: <span className="text-emerald-300">&apos;dormant&apos;</span>, fetchStatus: <span className="text-amber-300">false</span> &#125;;</div>
                  <div className="pl-4">&#125;</div>
                  <div className="pl-4"><span className="text-purple-400">if</span> (hoursToDep &gt; <span className="text-amber-300">24</span>) &#123;</div>
                  <div className="pl-8"><span className="text-purple-400">return</span> &#123; phase: <span className="text-emerald-300">&apos;daily&apos;</span>, fetchStatus: isDue(DAY) &#125;;</div>
                  <div className="pl-4">&#125;</div>
                  <div className="pl-4"><span className="text-purple-400">if</span> (hoursToDep &gt; <span className="text-amber-300">6</span>) &#123;</div>
                  <div className="pl-8"><span className="text-purple-400">return</span> &#123; phase: <span className="text-emerald-300">&apos;pre_departure&apos;</span>, fetchStatus: isDue(<span className="text-amber-300">15</span> * MINUTE), checkInbound: <span className="text-amber-300">true</span> &#125;;</div>
                  <div className="pl-4">&#125;</div>
                  <div className="pl-4"><span className="text-purple-400">return</span> &#123; phase: <span className="text-emerald-300">&apos;active&apos;</span>, fetchStatus: isDue(<span className="text-amber-300">5</span> * MINUTE) &#125;;</div>
                  <div>&#125;</div>
                </div>
              )}

              {activeTab === 'hexagonal' && (
                <div className="space-y-2">
                  <div className="text-zinc-500">// latentspace/src/core/container.ts</div>
                  <div><span className="text-purple-400">import</span> &#123; RssFeedAdapter &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;@/adapters/providers/rss-feed.adapter&apos;</span>;</div>
                  <div><span className="text-purple-400">import</span> &#123; MemoryArticleRepository &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;@/adapters/storage/memory-article.repository&apos;</span>;</div>
                  <div><span className="text-purple-400">import</span> &#123; IngestionService &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;./services/ingestion.service&apos;</span>;</div>
                  <br />
                  <div><span className="text-purple-400">class</span> <span className="text-blue-300">BackendContainer</span> &#123;</div>
                  <div className="pl-4"><span className="text-purple-400">public readonly</span> feedProvider: <span className="text-amber-300">FeedProviderPort</span>;</div>
                  <div className="pl-4"><span className="text-purple-400">public readonly</span> articleRepo: <span className="text-amber-300">ArticleRepositoryPort</span>;</div>
                  <div className="pl-4"><span className="text-purple-400">public readonly</span> ingestionService: <span className="text-amber-300">IngestionService</span>;</div>
                  <br />
                  <div className="pl-4"><span className="text-purple-400">private constructor</span>() &#123;</div>
                  <div className="pl-8">this.feedProvider = <span className="text-purple-400">new</span> RssFeedAdapter(<span className="text-amber-300">9000</span>);</div>
                  <div className="pl-8">this.articleRepo = <span className="text-purple-400">new</span> MemoryArticleRepository();</div>
                  <div className="pl-8">this.ingestionService = <span className="text-purple-400">new</span> IngestionService(</div>
                  <div className="pl-12">this.feedProvider, this.articleRepo</div>
                  <div className="pl-8">);</div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              )}

              {activeTab === 'inbound' && (
                <div className="space-y-2">
                  <div className="text-zinc-500">// flight-app/backend/src/tracking/inbound.ts</div>
                  <div><span className="text-purple-400">export function</span> <span className="text-blue-300">assessInbound</span>(</div>
                  <div className="pl-4">flight: <span className="text-amber-300">InboundInput</span>,</div>
                  <div className="pl-4">inbound: <span className="text-amber-300">FlightSnapshot | null</span></div>
                  <div>): <span className="text-amber-300">InboundAssessment | null</span> &#123;</div>
                  <div className="pl-4"><span className="text-purple-400">if</span> (!inbound || !flight.scheduledDeparture || !flight.depIata) <span className="text-purple-400">return</span> <span className="text-amber-300">null</span>;</div>
                  <br />
                  <div className="pl-4 text-zinc-500">// Widebody (60m) vs Regional (25m) ground turnaround</div>
                  <div className="pl-4">const turnaroundMin = WIDEBODY.test(flight.aircraftIcao) ? <span className="text-amber-300">60</span> : <span className="text-amber-300">35</span>;</div>
                  <div className="pl-4">const readyAt = inboundArrival.getTime() + turnaroundMin * <span className="text-amber-300">60_000</span>;</div>
                  <div className="pl-4">const predictedDelay = Math.max(<span className="text-amber-300">0</span>, Math.round((readyAt - scheduledDep) / <span className="text-amber-300">60_000</span>));</div>
                  <br />
                  <div className="pl-4 text-zinc-500">// Early warning alert before airlines report delay</div>
                  <div className="pl-4"><span className="text-purple-400">return</span> &#123;</div>
                  <div className="pl-8">inboundFlightIata: inbound.flightIata,</div>
                  <div className="pl-8">predictedDelayMinutes: predictedDelay,</div>
                  <div className="pl-8">alert: predictedDelay &gt; (flight.reportedDepDelayMinutes ?? <span className="text-amber-300">0</span>) + <span className="text-amber-300">15</span>,</div>
                  <div className="pl-4">&#125;;</div>
                  <div>&#125;</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* System Architecture Flow Blueprints */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Blueprint 1: Flight Tracking Realtime Stream */}
          <div className="p-8 sm:p-10 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-800 font-semibold">
              <Activity className="w-4 h-4" />
              <span>FLIGHT-APP REALTIME PIPELINE</span>
            </div>
            <h3 className="text-xl font-normal text-zinc-950 font-sans">
              Single-Flight Mutex &amp; Deduplication
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
              Passengers never trigger external API calls directly. When an app opens, it reads from Supabase Postgres with strict Row Level Security (RLS). A background BullMQ scheduler evaluates time-window FSMs, calls AirLabs/OpenSky through a single-flight Redis lock, and broadcasts diff events over Supabase Realtime WebSockets.
            </p>
            <div className="p-4 rounded-xl bg-white border border-zinc-200 text-xs font-mono text-zinc-800 space-y-2 shadow-xs">
              <div className="text-zinc-950 font-medium">App (Expo Skia) &rarr; Supabase RLS (Postgres)</div>
              <div className="text-zinc-400">&darr; WebSocket Realtime Events</div>
              <div className="text-zinc-950 font-medium">Node 24 (BullMQ Workers) &larr;&rarr; Redis Mutex Lock</div>
              <div className="text-zinc-400">&darr; 1 Shared Ingestion Call</div>
              <div className="text-emerald-700 font-medium">AirLabs &amp; OpenSky Network ADS-B</div>
            </div>
          </div>

          {/* Blueprint 2: Latent Space Hexagonal Pipeline */}
          <div className="p-8 sm:p-10 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-zinc-800 font-semibold">
                <Layers className="w-4 h-4" />
                <span>LATENTSPACE HEXAGONAL PIPELINE</span>
              </div>
              <a
                href="https://latentspace.science"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-violet-600 hover:text-violet-800 font-medium transition-colors"
              >
                <span>latentspace.science</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <h3 className="text-xl font-normal text-zinc-950 font-sans">
              Ports &amp; Adapters Ingestion Engine
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
              Core domain models are insulated by TypeScript port contracts. When an RSS source is synchronized, the <code>FeedProviderPort</code> streams items to <code>IngestionService</code>, which invokes Gemini 1.5 Flash for structured JSON synthesis and stores the resulting entities through <code>ArticleRepositoryPort</code>.
            </p>
            <div className="p-4 rounded-xl bg-white border border-zinc-200 text-xs font-mono text-zinc-800 space-y-2 shadow-xs">
              <div className="text-zinc-950 font-medium">Feed Sources &rarr; FeedProviderPort Adapter</div>
              <div className="text-zinc-400">&darr; Domain FeedSnapshot</div>
              <div className="text-zinc-950 font-medium">IngestionService &larr;&rarr; Heuristic Categorizer</div>
              <div className="text-zinc-400">&darr; Gemini 1.5 Flash Grounding (JSON Schema)</div>
              <div className="text-emerald-700 font-medium">ArticleRepositoryPort (Memory / SQLite / Redis)</div>
            </div>
          </div>
        </div>

        {/* Minimalist Monospaced Tech Index */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-500">
          <span className="text-zinc-800 font-semibold">STUDIO STACK:</span>
          {techStack.map((tech) => (
            <span key={tech} className="hover:text-zinc-950 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ArchitecturePage