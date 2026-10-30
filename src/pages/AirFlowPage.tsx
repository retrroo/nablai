import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plane, Compass, Barcode, MapPin, ArrowLeft, RefreshCw, CheckCircle2, Shield, Radio } from 'lucide-react'
import { GithubIcon } from '../components/Icons'

export const AirFlowPage: React.FC = () => {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'success'>('idle')

  const sampleFlight = {
    flightNumber: 'KL1021',
    airline: 'KLM Royal Dutch Airlines',
    aircraft: 'Boeing 787-10 Dreamliner (PH-BKA)',
    origin: { code: 'AMS', name: 'Amsterdam Schiphol', terminal: '2', gate: 'D24' },
    destination: { code: 'LHR', name: 'London Heathrow', terminal: '4', gate: '12' },
    departureTime: '14:20 CEST',
    seat: '04A (World Business Class)',
    passenger: 'ONUR / RETRROO',
    barcodeData: 'M1RETRROO/ONUR EK1021 AMSLHR 1021 304Y004A0021 147',
    inboundAssessment: 'Inbound KL1020 landed on time at AMS · 75m buffer vs 60m widebody requirement',
  }

  const triggerScan = () => {
    setScanState('scanning')
    setTimeout(() => {
      setScanState('success')
    }, 1000)
  }

  const architecturePillars = [
    {
      title: 'React Native Skia & CanvasKit',
      description: '60fps GPU-accelerated globe and route map rendering. Interactivity is delegated to the UI-thread via Reanimated 4 and Gesture Handler with 4,008 bundled global airport nodes.',
      icon: Compass,
    },
    {
      title: 'Time-Window State Machine (FSM)',
      description: 'Zero-IO policy engine transitioning through dormant (>7d), daily (7d..24h), pre_departure (24h..6h), and active (6h..landing, 1-min poll) to strictly control external API expenses.',
      icon: RefreshCw,
    },
    {
      title: 'Predictive Inbound Tail Tracker',
      description: 'Tracks aircraft tail numbers on their preceding leg. Warns travelers if an incoming plane is delayed beyond the turnaround window (60m widebody / 25m regional) before airlines broadcast it.',
      icon: Radio,
    },
    {
      title: 'Distributed BullMQ & Redis Locks',
      description: 'Node 24 backend utilizing Redis single-flight mutex locks so 200 passengers on the same flight trigger exactly 1 API call, broadcast to all clients via Supabase Realtime WebSockets.',
      icon: Shield,
    },
  ]

  return (
    <div className="min-h-screen bg-[#050609] text-slate-100 pt-32 pb-24 selection:bg-cyan-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO NABLAI HOME</span>
        </Link>

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase block mb-3">
              LIVE APPLICATION // 01 &mdash; AVIATION INTELLIGENCE
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight font-sans">
              AirFlow <span className="font-light text-slate-500 text-3xl sm:text-4xl">(AiR ✈️)</span> &mdash; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-slate-300">flight telemetry &amp; pass intelligence.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-sans">
              A high-precision mobile flight companion engineered by Onur &amp; Karim. Built with Expo SDK 52, React Native Skia GPU mapping, a Node 24 + BullMQ backend, and predictive inbound turnaround analytics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={triggerScan}
              className="px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-mono border border-white/[0.1] transition-all flex items-center gap-2"
            >
              <Barcode className="w-4 h-4 text-cyan-400" />
              <span>Simulate BCBP Barcode Scan</span>
            </button>
            <a
              href="https://github.com/retrroo/flight-app"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-slate-300 hover:text-white text-xs font-mono border border-white/[0.06] transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>retrroo/flight-app</span>
            </a>
          </div>
        </div>

        {/* Digital Boarding Pass & Cockpit Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          {/* Boarding Pass Canvas (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#08090e] border border-white/[0.08] overflow-hidden">
            {/* Pass Header */}
            <div className="p-6 sm:p-8 border-b border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
                  IATA ELECTRONIC BOARDING PASS // BCBP
                </span>
                <span className="text-xl font-normal text-white mt-1 block font-sans">{sampleFlight.airline}</span>
              </div>
              <Plane className="w-5 h-5 text-cyan-400 -rotate-45" />
            </div>

            {/* Flight Route Display */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl sm:text-5xl font-light font-sans text-white">{sampleFlight.origin.code}</div>
                  <div className="text-xs text-slate-400 mt-1">{sampleFlight.origin.name}</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">Terminal {sampleFlight.origin.terminal} &middot; Gate {sampleFlight.origin.gate}</div>
                </div>

                <div className="flex flex-col items-center px-4">
                  <span className="text-[10px] font-mono text-slate-500 mb-1">1h 15m &middot; Nonstop</span>
                  <div className="w-24 sm:w-36 h-[1px] bg-white/[0.15] relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 mt-1">FL380 &middot; 480 kts</span>
                </div>

                <div className="text-right">
                  <div className="text-4xl sm:text-5xl font-light font-sans text-white">{sampleFlight.destination.code}</div>
                  <div className="text-xs text-slate-400 mt-1">{sampleFlight.destination.name}</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">Terminal {sampleFlight.destination.terminal} &middot; Gate {sampleFlight.destination.gate}</div>
                </div>
              </div>

              {/* Passenger & Aircraft Meta */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-black/40 border border-white/[0.04] text-xs font-mono">
                <div>
                  <span className="text-slate-500 text-[10px] block">FLIGHT</span>
                  <span className="text-white font-medium">{sampleFlight.flightNumber}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">SEAT</span>
                  <span className="text-white font-medium">{sampleFlight.seat.split(' ')[0]}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">DEPARTURE</span>
                  <span className="text-white font-medium">{sampleFlight.departureTime}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">TAIL</span>
                  <span className="text-cyan-400 font-medium">PH-BKA</span>
                </div>
              </div>

              {/* Predictive Inbound Assessment Box */}
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs font-mono space-y-1">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                  <Radio className="w-3.5 h-3.5" />
                  <span>PREDICTIVE INBOUND ASSESSMENT (Where&apos;s My Plane)</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {sampleFlight.inboundAssessment}
                </p>
              </div>

              {/* Simulated 2D Barcode Block */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                <div>
                  <div className="text-[10px] text-slate-500">IATA RAW OCR STREAM</div>
                  <div className="text-[11px] text-slate-400 break-all">{sampleFlight.barcodeData}</div>
                </div>

                {scanState === 'scanning' && (
                  <div className="flex items-center gap-2 text-cyan-400 animate-pulse text-xs">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Parsing OCR...</span>
                  </div>
                )}
                {scanState === 'success' && (
                  <div className="flex items-center gap-2 text-emerald-400 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>BCBP Parsed (100% Grounded)</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Telemetry Stream & Stack Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#08090e] border border-white/[0.08] space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase block">
                ENGINEERING SPECIFICATIONS
              </span>
              <h3 className="text-xl font-normal text-white font-sans">
                Full-Stack Architecture
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                AirFlow avoids calling expensive APIs on app-open. Passengers read data purely from Postgres via Row Level Security (RLS) while backend BullMQ workers poll on a strict time-window FSM schedule.
              </p>

              <div className="space-y-3 pt-2 text-xs font-mono">
                <div className="flex justify-between pb-2 border-b border-white/[0.04]">
                  <span className="text-slate-500">Mobile Engine</span>
                  <span className="text-white">Expo SDK 52 &middot; Expo Router</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/[0.04]">
                  <span className="text-slate-500">GPU Rendering</span>
                  <span className="text-cyan-400">React Native Skia (CanvasKit)</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/[0.04]">
                  <span className="text-slate-500">Backend Queue</span>
                  <span className="text-white">Node 24 &middot; BullMQ &middot; Redis</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/[0.04]">
                  <span className="text-slate-500">Live Broadcast</span>
                  <span className="text-white">Supabase Realtime WebSockets</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Languages</span>
                  <span className="text-purple-300">13 Locales (inc. Arabic/Urdu RTL)</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#08090e] border border-white/[0.08] font-mono text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold mb-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Global Aviation Coverage</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Bundles 4,008 international airports, 1,200+ airline carriers, and dynamic LOD zoom levels displaying hubs to regional strips with zero network overhead.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars of AirFlow Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/[0.08] bg-[#07080d]">
          {architecturePillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="p-8 border-r border-b border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <Icon className="w-5 h-5 text-cyan-400 mb-6" />
                  <h4 className="text-base font-normal text-white mb-2 font-sans tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default AirFlowPage