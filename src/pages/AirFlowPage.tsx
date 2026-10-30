import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plane, Compass, Barcode, MapPin, ArrowLeft, RefreshCw, CheckCircle2 } from 'lucide-react'

export const AirFlowPage: React.FC = () => {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'success'>('idle')

  const sampleFlight = {
    flightNumber: 'KL1021',
    airline: 'KLM Royal Dutch Airlines',
    aircraft: 'Boeing 787-10 Dreamliner',
    origin: { code: 'AMS', name: 'Amsterdam Schiphol', terminal: '2', gate: 'D24' },
    destination: { code: 'LHR', name: 'London Heathrow', terminal: '4', gate: '12' },
    departureTime: '14:20 CEST',
    seat: '04A (World Business Class)',
    passenger: 'ONUR / RETRROO',
    barcodeData: 'M1RETRROO/ONUR EK1021 AMSLHR 1021 304Y004A0021 147',
    delayProbability: '4% (On-Time Guaranteed)',
  }

  const triggerScan = () => {
    setScanState('scanning')
    setTimeout(() => {
      setScanState('success')
    }, 1000)
  }

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

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase block mb-3">
              PROP_APP // 01 &mdash; AVIATION INTELLIGENCE
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight font-sans">
              AirFlow &mdash; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-slate-300">flight telemetry &amp; pass intelligence.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              AirFlow is an aviation companion powered by computer vision and predictive machine learning. Scan raw boarding passes via camera or upload, reconstruct full 3D flight trajectories, and forecast arrival gates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={triggerScan}
              className="px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-mono border border-white/[0.1] transition-all flex items-center gap-2"
            >
              <Barcode className="w-4 h-4 text-cyan-400" />
              <span>Simulate Boarding Pass Scan</span>
            </button>
            <a
              href="https://github.com/retrroo/flight-app"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-slate-300 hover:text-white text-xs font-mono border border-white/[0.06] transition-colors"
            >
              GitHub Source
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
                    <Plane className="w-3.5 h-3.5 text-white absolute -top-1.5 left-1/2 -translate-x-1/2 rotate-90" />
                  </div>
                  <span className="text-[10px] text-emerald-400 mt-2 font-mono">{sampleFlight.delayProbability}</span>
                </div>

                <div className="text-right">
                  <div className="text-4xl sm:text-5xl font-light font-sans text-white">{sampleFlight.destination.code}</div>
                  <div className="text-xs text-slate-400 mt-1">{sampleFlight.destination.name}</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">Terminal {sampleFlight.destination.terminal} &middot; Gate {sampleFlight.destination.gate}</div>
                </div>
              </div>

              {/* Passenger & Flight Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.04] text-xs font-mono">
                <div>
                  <span className="text-slate-500 text-[10px] block">PASSENGER</span>
                  <span className="text-white mt-0.5 block">{sampleFlight.passenger}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">FLIGHT</span>
                  <span className="text-cyan-400 mt-0.5 block">{sampleFlight.flightNumber}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">SEAT</span>
                  <span className="text-white mt-0.5 block">{sampleFlight.seat}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">DEPARTURE</span>
                  <span className="text-white mt-0.5 block">{sampleFlight.departureTime}</span>
                </div>
              </div>

              {/* Barcode Strip */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-mono text-slate-500 block">IATA BCBP 2D Barcode Telemetry:</span>
                  <code className="text-[10px] font-mono text-slate-400 break-all">{sampleFlight.barcodeData}</code>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] text-emerald-400 text-[10px] font-mono border border-white/[0.06] flex-shrink-0">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>PARSED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Extraction Console (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#08090e] border border-white/[0.08] p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] text-xs font-mono text-slate-400">
              <span>EXTRACTION LOG</span>
              <span className="text-cyan-400">OCR_V3</span>
            </div>

            {scanState === 'scanning' ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <RefreshCw className="w-6 h-6 text-cyan-400 animate-spin" />
                <div className="text-xs font-mono text-slate-300">Decoding Aztec / PDF417 matrix...</div>
              </div>
            ) : (
              <div className="space-y-4 text-xs font-mono">
                <p className="text-slate-400 leading-relaxed font-sans text-xs">
                  Upload any physical boarding pass, Apple Wallet pass, or PDF e-ticket. AirFlow isolates barcode coordinates and performs high-speed geometric rectification.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] flex justify-between">
                    <span className="text-slate-500">Aircraft Type:</span>
                    <span className="text-white">{sampleFlight.aircraft}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] flex justify-between">
                    <span className="text-slate-500">Delay Probability:</span>
                    <span className="text-emerald-400">&lt; 5 minutes</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] flex justify-between">
                    <span className="text-slate-500">Telemetry Origin:</span>
                    <span className="text-slate-300">ADS-B Satellites</span>
                  </div>
                </div>

                <button
                  onClick={triggerScan}
                  className="w-full mt-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Rescan Telemetry Feed</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/[0.08]">
          <div className="p-8 border-r border-b border-white/[0.08] bg-[#07080d]">
            <Barcode className="w-4 h-4 text-cyan-400 mb-4" />
            <h4 className="text-base font-normal text-white mb-2 font-sans">Instant Barcode Decoding</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Decodes standard IATA BCBP formats across PDF417, Aztec, and QR codes directly on device with zero server latency.
            </p>
          </div>

          <div className="p-8 border-r border-b border-white/[0.08] bg-[#07080d]">
            <Compass className="w-4 h-4 text-purple-400 mb-4" />
            <h4 className="text-base font-normal text-white mb-2 font-sans">Live ADS-B Radar Tracking</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Calculates altitude profile, ground speed, and crosswinds by pulling live telemetry streams directly from global radar nodes.
            </p>
          </div>

          <div className="p-8 border-r border-b border-white/[0.08] bg-[#07080d]">
            <MapPin className="w-4 h-4 text-emerald-400 mb-4" />
            <h4 className="text-base font-normal text-white mb-2 font-sans">Personal Flight Logbook</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Aggregates all scanned journeys into an interactive flight record, calculating nautical miles and aircraft type distributions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AirFlowPage
