import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Smartphone, Compass, Radio, Shield, Cpu, Globe, Image as ImageIcon } from 'lucide-react'
import { GithubIcon } from '../components/Icons'

export const AirFlowPage: React.FC = () => {
  const techStack = [
    { label: 'Language', value: 'TypeScript (Strict mode)' },
    { label: 'Mobile Framework', value: 'React Native & Expo SDK 52 (Expo Router)' },
    { label: 'GPU Graphics', value: 'React Native Skia (CanvasKit on Web) + Reanimated 4' },
    { label: 'Backend Runtime', value: 'Node.js 24' },
    { label: 'Queue & Mutex', value: 'BullMQ + Redis (Single-flight deduplication)' },
    { label: 'Database & Realtime', value: 'Supabase (PostgreSQL with RLS) + WebSockets' },
    { label: 'Aviation Datasets', value: '4,008 bundled worldwide airports, 1,200+ airline carriers' },
    { label: 'Internationalization', value: '13 languages (including RTL Arabic & Urdu)' },
  ]

  const keyFeatures = [
    {
      title: '60 FPS GPU-Accelerated Route Maps',
      description:
        'Custom interactive vector map rendered via React Native Skia. Flight great-circle arcs, airport markers, and zoom levels are calculated directly on the native UI thread without bridge lag.',
      icon: Compass,
    },
    {
      title: 'Predictive Inbound Turnaround (Where’s My Plane)',
      description:
        'Tracks the aircraft’s tail number on its previous leg in real time. If the inbound flight arrives late and breaches the turnaround buffer (60m widebody / 25m regional), AirFlow alerts the user before airlines officially post the delay.',
      icon: Radio,
    },
    {
      title: 'IATA BCBP Boarding Pass Parser',
      description:
        'Scans 2D Aztec and PDF417 boarding pass barcodes directly from camera or image files, instantly decoding passenger data, PNR, flight number, seat, and gate information locally.',
      icon: Smartphone,
    },
    {
      title: 'Single-Flight API Deduplication',
      description:
        'BullMQ worker pool backed by Redis mutex locks. When hundreds of users track the same flight, exactly one third-party API request is executed, and updates are broadcast via Supabase Realtime WebSockets.',
      icon: Shield,
    },
    {
      title: 'Zero-IO Polling State Machine (FSM)',
      description:
        'A deterministic finite state machine transitions polling intervals automatically: dormant (>7 days out), daily (7d to 24h), pre-departure (24h to 6h), and active live tracking (sub-6h). Prevents runaway API usage.',
      icon: Cpu,
    },
    {
      title: 'Full Offline Support & 13 Locales',
      description:
        'Bundles airport IATA/ICAO coordinates and carrier databases directly in the client bundle. The entire application supports 13 full languages with automatic RTL layout switching.',
      icon: Globe,
    },
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

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-zinc-200">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              LIVE APPLICATION // 01 · AVIATION
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal text-zinc-950 tracking-tight font-sans">
              AirFlow <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">personal mobile flight companion.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl font-sans">
              A high-precision mobile flight tracking app engineered by Onur &amp; Karim. Built with Expo SDK 52, React Native Skia, a Node 24 + BullMQ backend, and predictive inbound turnaround analytics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/retrroo/flight-app"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>retrroo/flight-app</span>
            </a>
          </div>
        </div>

        {/* App Screenshot Placeholder Box */}
        <div className="mb-20">
          <div className="relative rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50/70 p-12 sm:p-20 text-center flex flex-col items-center justify-center overflow-hidden transition-colors hover:border-zinc-400">
            <div className="w-16 h-16 rounded-2xl bg-zinc-200/80 flex items-center justify-center text-zinc-700 mb-5 shadow-xs">
              <ImageIcon className="w-8 h-8 stroke-[1.5]" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/60 text-zinc-800 text-xs font-mono font-medium mb-3">
              <span>App Screenshot</span>
              <span className="text-zinc-400">&middot;</span>
              <span className="text-zinc-600">Soon to be added</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-normal text-zinc-950 tracking-tight font-sans max-w-md">
              Mobile Interface &amp; Live Route View
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-lg mt-2 leading-relaxed font-sans">
              Screenshots showing the Skia 60fps route map, boarding pass scanner, and inbound turnaround tracking will be placed here.
            </p>
          </div>
        </div>

        {/* Purpose & Why We Built It */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 pb-16 border-b border-zinc-200">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
              PURPOSE &amp; GOAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
              Why we built AirFlow
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
            <p>
              Commercial airline apps are notoriously bloated with hotel promotions, car rentals, and ads. More importantly, when flights are delayed, airlines often delay announcing it until passengers are already waiting at the gate.
            </p>
            <p>
              We built <strong>AirFlow</strong> for our own travels: a clean, utility-first mobile app that focuses entirely on accurate flight data. By tracking the exact aircraft&apos;s prior inbound flight, AirFlow calculates turnaround margins and informs us of realistic departure delays before the airport displays do.
            </p>
          </div>
        </div>

        {/* Tech Stack & Languages (Clean Ledger) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                TECHNOLOGY FOUNDATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
                Tech Stack &amp; Programming Languages
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-500 hidden sm:block">
              100% Strict TypeScript
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {techStack.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between"
              >
                <span className="text-zinc-500 text-[11px] uppercase tracking-wider block mb-2">
                  {item.label}
                </span>
                <span className="text-zinc-950 font-medium text-sm leading-snug">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Architecture Features */}
        <div>
          <div className="mb-8 pb-4 border-b border-zinc-200">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
              ENGINEERING ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
              Key Architecture &amp; Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-800 mb-4 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-normal text-zinc-950 font-sans tracking-tight mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default AirFlowPage
