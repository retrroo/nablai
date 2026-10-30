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
    inboundAssessment: 'Inbound KL1020 landed on time at AMS · 75m buffer vs 60m widebody turnaround requirement',
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
              LIVE APPLICATION // 01 &mdash; AVIATION INTELLIGENCE
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal text-zinc-950 tracking-tight font-sans">
              AirFlow <span className="font-light text-zinc-400 text-3xl sm:text-4xl">(AiR ✈️)</span> &mdash; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">flight telemetry &amp; pass intelligence.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl font-sans">
              A high-precision mobile flight companion engineered by Onur &amp; Karim. Built with Expo SDK 52, React Native Skia GPU mapping, a Node 24 + BullMQ backend, and predictive inbound turnaround analytics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={triggerScan}
              className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono transition-colors flex items-center gap-2"
            >
              <Barcode className="w-4 h-4" />
              <span>Simulate BCBP Barcode Scan</span>
            </button>
            <a
              href="https://github.com/retrroo/flight-app"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-mono border border-zinc-200 transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>retrroo/flight-app</span>
            </a>
          </div>
        </div>

        {/* Digital Boarding Pass & Cockpit Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          {/* Boarding Pass Canvas (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-zinc-50 border border-zinc-200 overflow-hidden shadow-xs">
            {/* Pass Header */}
            <div className="p-6 sm:p-8 border-b border-zinc-200 flex items-center justify-between bg-white">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
                  IATA ELECTRONIC BOARDING PASS // BCBP
                </span>
                <span className="text-xl font-normal text-zinc-950 mt-1 block font-sans">{sampleFlight.airline}</span>
              </div>
              <Plane className="w-5 h-5 text-zinc-800 -rotate-45" />
            </div>

            {/* Flight Route Display */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl sm:text-5xl font-light font-sans text-zinc-950">{sampleFlight.origin.code}</div>
                  <div className="text-xs text-zinc-600 mt-1">{sampleFlight.origin.name}</div>
                  <div className="text-[11px] font-mono text-zinc-500 mt-0.5">Terminal {sampleFlight.origin.terminal} &middot; Gate {sampleFlight.origin.gate}</div>
                </div>

                <div className="flex flex-col items-center px-4">
                  <span className="text-[10px] font-mono text-zinc-500 mb-1">1h 15m &middot; Nonstop</span>
                  <div className="w-24 sm:w-36 h-[1px] bg-zinc-300 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-900" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-700 mt-1">FL380 &middot; 480 kts</span>
                </div>

                <div className="text-right">
                  <div className="text-4xl sm:text-5xl font-light font-sans text-zinc-950">{sampleFlight.destination.code}</div>
                  <div className="text-xs text-zinc-600 mt-1">{sampleFlight.destination.name}</div>
                  <div className="text-[11px] font-mono text-zinc-500 mt-0.5">Terminal {sampleFlight.destination.terminal} &middot; Gate {sampleFlight.destination.gate}</div>
                </div>
              </div>

              {/* Passenger & Aircraft Meta */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white border border-zinc-200 text-xs font-mono shadow-xs">
                <div>
                  <span className="text-zinc-500 text-[10px] block">FLIGHT</span>
                  <span className="text-zinc-950 font-medium">{sampleFlight.flightNumber}</span>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px] block">SEAT</span>
                  <span className="text-zinc-950 font-medium">{sampleFlight.seat.split(' ')[0]}</span>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px] block">DEPARTURE</span>
                  <span className="text-zinc-950 font-medium">{sampleFlight.departureTime}</span>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px] block">TAIL</span>
                  <span className="text-zinc-950 font-medium">PH-BKA</span>
                </div>
              </div>

              {/* Predictive Inbound Assessment Box */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono space-y-1">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                  <Radio className="w-3.5 h-3.5" />
                  <span>PREDICTIVE INBOUND ASSESSMENT (Where&apos;s My Plane)</span>
                </div>
                <p className="text-emerald-900/80 text-[11px] leading-relaxed">
                  {sampleFlight.inboundAssessment}
                </p>
              </div>

              {/* Simulated 2D Barcode Block */}
              <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                <div>
                  <div className="text-[10px] text-zinc-500">IATA RAW OCR STREAM</div>
                  <div className="text-[11px] text-zinc-600 break-all">{sampleFlight.barcodeData}</div>
                </div>

                {scanState === 'scanning' && (
                  <div className="flex items-center gap-2 text-zinc-900 animate-pulse text-xs">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Parsing OCR...</span>
                  </div>
                )}
                {scanState === 'success' && (
                  <div className="flex items-center gap-2 text-emerald-700 font-medium text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>BCBP Parsed (100% Grounded)</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Telemetry Stream & Stack Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4 shadow-xs">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
                ENGINEERING SPECIFICATIONS
              </span>
              <h3 className="text-xl font-normal text-zinc-950 font-sans">
                Full-Stack Architecture
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                AirFlow avoids calling expensive APIs on app-open. Passengers read data purely from Postgres via Row Level Security (RLS) while backend BullMQ workers poll on a strict time-window FSM schedule.
              </p>

              <div className="space-y-3 pt-2 text-xs font-mono">
                <div className="flex justify-between pb-2 border-b border-zinc-200">
                  <span className="text-zinc-500">Mobile Engine</span>
                  <span className="text-zinc-950 font-medium">Expo SDK 52 &middot; Expo Router</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-200">
                  <span className="text-zinc-500">GPU Rendering</span>
                  <span className="text-zinc-950 font-medium">React Native Skia (CanvasKit)</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-200">
                  <span className="text-zinc-500">Backend Queue</span>
                  <span className="text-zinc-950 font-medium">Node 24 &middot; BullMQ &middot; Redis</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-200">
                  <span className="text-zinc-500">Live Broadcast</span>
                  <span className="text-zinc-950 font-medium">Supabase Realtime WebSockets</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Languages</span>
                  <span className="text-zinc-950 font-medium">13 Locales (inc. Arabic/Urdu RTL)</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 font-mono text-xs text-zinc-600 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-zinc-950 font-semibold mb-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-800" />
                <span>Global Aviation Coverage</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Bundles 4,008 international airports, 1,200+ airline carriers, and dynamic LOD zoom levels displaying hubs to regional strips with zero network overhead.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars of AirFlow Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-200 bg-zinc-50">
          {architecturePillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="p-8 border-r border-b border-zinc-200 flex flex-col justify-between"
              >
                <div>
                  <Icon className="w-5 h-5 text-zinc-800 mb-6" />
                  <h4 className="text-base font-normal text-zinc-950 mb-2 font-sans tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans">
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