import React, { useState } from 'react'
import { Check, Terminal, FileCode, Layers } from 'lucide-react'

export const ArchitectureSection: React.FC = () => {
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
    <section id="architecture" className="py-28 relative bg-[#040508] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase block mb-3">
              04 &mdash; Systems Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-sans">
              Production Code Patterns <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-slate-300">from our live studio repositories.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Real code from <strong className="text-white font-medium">flight-app</strong> and <strong className="text-white font-medium">latentspace</strong>. Clean hexagonal boundaries, deterministic state machines, and predictive heuristics.
          </p>
        </div>

        {/* Tab Selector & Engineering Terminal Window */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#07080d] overflow-hidden">
          {/* Top Bar with IDE tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.06] bg-black/40 px-4 sm:px-6">
            <div className="flex items-center gap-2 py-3 overflow-x-auto">
              <button
                onClick={() => setActiveTab('policy')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'policy'
                    ? 'bg-white/[0.08] text-white border border-white/[0.08]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>tracking_policy.ts</span>
              </button>
              <button
                onClick={() => setActiveTab('hexagonal')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'hexagonal'
                    ? 'bg-white/[0.08] text-white border border-white/[0.08]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                <span>container.ts</span>
              </button>
              <button
                onClick={() => setActiveTab('inbound')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'inbound'
                    ? 'bg-white/[0.08] text-white border border-white/[0.08]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>inbound_turnaround.ts</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              REPOSITORIES: retrroo/flight-app &middot; karimsaid123/latentspace
            </span>
          </div>

          {/* Terminal Body with Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Blueprint Specs (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.06] space-y-6">
              {activeTab === 'policy' && (
                <>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                      TIME-WINDOW FSM // FLIGHT-APP
                    </span>
                    <h3 className="text-xl font-normal text-white font-sans">
                      Zero-IO Polling Policy
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Pure mathematical state machine. Because there is zero I/O inside the policy function, every transition and API budget decision is 100% deterministic and unit-testable.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300 font-mono pt-4 border-t border-white/[0.04]">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>Dormant (&gt;7d) to Active (6h..landing, 1-min poll)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>Redis single-flight mutex deduplicating shared flights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>Automatic archive 2 hours post-landing</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === 'hexagonal' && (
                <>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                      PORTS &amp; ADAPTERS // LATENTSPACE
                    </span>
                    <h3 className="text-xl font-normal text-white font-sans">
                      Hexagonal IoC Container
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Clean architecture decoupling core domain entities from infrastructure. Ports define contracts for Feed providers and storage; adapters implement Redis, memory, and RSS streaming.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300 font-mono pt-4 border-t border-white/[0.04]">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Domain Entities isolated from external frameworks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Pluggable memory, SQLite, and Redis KV repositories</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Concurrency locking with typed domain error handling</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === 'inbound' && (
                <>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                      PREDICTIVE TELEMETRY // FLIGHT-APP
                    </span>
                    <h3 className="text-xl font-normal text-white font-sans">
                      Where&apos;s My Plane Engine
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Tracks aircraft tail numbers (`reg_number`/`hex`) on their preceding leg. When inbound arrival buffer drops below minimum turnaround ground time, early warning alerts are triggered before airlines report them.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300 font-mono pt-4 border-t border-white/[0.04]">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Widebody (60m) vs Regional (25m) turnaround specs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>ADS-B live telemetry ingested via AirLabs &amp; OpenSky</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Instant push notifications via Supabase Realtime</span>
                    </li>
                  </ul>
                </>
              )}
            </div>

            {/* Right Syntax-Highlighted Code Canvas (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-black/50 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
              {activeTab === 'policy' && (
                <div className="space-y-2">
                  <div className="text-slate-500">// flight-app/backend/src/tracking/policy.ts</div>
                  <div><span className="text-purple-400">export function</span> <span className="text-cyan-300">decide</span>(</div>
                  <div className="pl-4">state: <span className="text-amber-300">TrackingState</span>,</div>
                  <div className="pl-4">now: <span className="text-amber-300">Date</span>,</div>
                  <div className="pl-4">config: <span className="text-amber-300">PollingConfig</span> = defaultPollingConfig</div>
                  <div>): <span className="text-amber-300">PollDecision</span> &#123;</div>
                  <div className="pl-4 text-slate-500">// Pure state machine: no I/O, zero external cost bugs</div>
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
                  <div className="text-slate-500">// latentspace/src/core/container.ts</div>
                  <div><span className="text-purple-400">import</span> &#123; RssFeedAdapter &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;@/adapters/providers/rss-feed.adapter&apos;</span>;</div>
                  <div><span className="text-purple-400">import</span> &#123; MemoryArticleRepository &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;@/adapters/storage/memory-article.repository&apos;</span>;</div>
                  <div><span className="text-purple-400">import</span> &#123; IngestionService &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;./services/ingestion.service&apos;</span>;</div>
                  <br />
                  <div><span className="text-purple-400">class</span> <span className="text-cyan-300">BackendContainer</span> &#123;</div>
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
                  <div className="text-slate-500">// flight-app/backend/src/tracking/inbound.ts</div>
                  <div><span className="text-purple-400">export function</span> <span className="text-cyan-300">assessInbound</span>(</div>
                  <div className="pl-4">flight: <span className="text-amber-300">InboundInput</span>,</div>
                  <div className="pl-4">inbound: <span className="text-amber-300">FlightSnapshot | null</span></div>
                  <div>): <span className="text-amber-300">InboundAssessment | null</span> &#123;</div>
                  <div className="pl-4"><span className="text-purple-400">if</span> (!inbound || !flight.scheduledDeparture || !flight.depIata) <span className="text-purple-400">return</span> <span className="text-amber-300">null</span>;</div>
                  <br />
                  <div className="pl-4 text-slate-500">// Widebody (60m) vs Regional (25m) minimum ground turnaround</div>
                  <div className="pl-4">const turnaroundMin = WIDEBODY.test(flight.aircraftIcao) ? <span className="text-amber-300">60</span> : <span className="text-amber-300">35</span>;</div>
                  <div className="pl-4">const readyAt = inboundArrival.getTime() + turnaroundMin * <span className="text-amber-300">60_000</span>;</div>
                  <div className="pl-4">const predictedDelay = Math.max(<span className="text-amber-300">0</span>, Math.round((readyAt - scheduledDep) / <span className="text-amber-300">60_000</span>));</div>
                  <br />
                  <div className="pl-4 text-slate-500">// Warn traveller if inbound aircraft arrives too late to turn around</div>
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

        {/* Minimalist Monospaced Tech Index */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500">
          <span className="text-slate-400">STUDIO STACK:</span>
          {techStack.map((tech) => (
            <span key={tech} className="hover:text-white transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ArchitectureSection