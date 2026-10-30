import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plane, Compass, Barcode, MapPin, Sparkles, ArrowLeft, RefreshCw, CheckCircle2 } from 'lucide-react'

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
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 pt-28 pb-20 selection:bg-cyan-500 selection:text-black">
      {/* Background atmospheric glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-600/15 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Nablai Home</span>
        </Link>

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
              <Plane className="w-3.5 h-3.5" />
              <span>Aviation Intelligence &amp; Flight Radar &middot; by Nablai</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              AirFlow
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-200/90 font-light mt-2">
              Scan your boarding pass. Track real-time telemetry. Uncover flight analytics.
            </p>
            <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-2xl">
              AirFlow is an advanced aviation intelligence application powered by computer vision and predictive machine learning. From parsing raw PDF/paper boarding passes to live ADS-B satellite radar feeds and automated delay predictions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={triggerScan}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all active:scale-95"
            >
              <Barcode className="w-4 h-4" />
              <span>Simulate Boarding Pass Scan</span>
            </button>
            <a
              href="https://github.com/retrroo/flight-app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-sm font-semibold border border-white/10 transition-all"
            >
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Interactive Boarding Pass Card & Scanner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          {/* Digital Boarding Pass Display */}
          <div className="lg:col-span-7 bg-[#0b0e17] rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative">
            {/* Top Pass Brand */}
            <div className="bg-gradient-to-r from-cyan-900/60 to-blue-900/40 p-6 sm:p-8 border-b border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-cyan-300 font-mono">AirFlow Intelligence Boarding Pass</div>
                <div className="text-2xl font-black text-white mt-1">{sampleFlight.airline}</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15">
                <Plane className="w-7 h-7 text-cyan-300 transform -rotate-45" />
              </div>
            </div>

            {/* Pass Flight Route */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white">{sampleFlight.origin.code}</div>
                  <div className="text-xs text-slate-400 mt-1">{sampleFlight.origin.name}</div>
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">Terminal {sampleFlight.origin.terminal} &middot; Gate {sampleFlight.origin.gate}</div>
                </div>

                <div className="flex flex-col items-center px-4">
                  <span className="text-[11px] font-mono text-slate-500 mb-1">1h 15m nonstop</span>
                  <div className="w-24 sm:w-36 h-[2px] bg-gradient-to-r from-cyan-500 via-white to-blue-500 relative">
                    <Plane className="w-4 h-4 text-white absolute -top-2 left-1/2 -translate-x-1/2 transform rotate-90" />
                  </div>
                  <span className="text-[10px] text-emerald-400 mt-2 font-mono">{sampleFlight.delayProbability}</span>
                </div>

                <div className="text-right">
                  <div className="text-4xl sm:text-5xl font-black text-white">{sampleFlight.destination.code}</div>
                  <div className="text-xs text-slate-400 mt-1">{sampleFlight.destination.name}</div>
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">Terminal {sampleFlight.destination.terminal} &middot; Gate {sampleFlight.destination.gate}</div>
                </div>
              </div>

              {/* Passenger & Flight Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5 text-xs">
                <div>
                  <span className="text-slate-500 block">Passenger</span>
                  <span className="font-bold text-white font-mono">{sampleFlight.passenger}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Flight</span>
                  <span className="font-bold text-cyan-300 font-mono">{sampleFlight.flightNumber}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Seat</span>
                  <span className="font-bold text-white font-mono">{sampleFlight.seat}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Departure</span>
                  <span className="font-bold text-emerald-400 font-mono">{sampleFlight.departureTime}</span>
                </div>
              </div>

              {/* Barcode & IATA Data block */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[11px] font-mono text-slate-400 block">IATA BCBP 2D Barcode Data:</span>
                  <code className="text-[10px] font-mono text-slate-300 break-all">{sampleFlight.barcodeData}</code>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20 flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scanner Simulation & AI Extraction Console */}
          <div className="lg:col-span-5 bg-slate-900/50 rounded-3xl border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>AI Vision &amp; Extraction Engine</span>
            </h3>

            {scanState === 'scanning' ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin" />
                <div className="text-sm font-mono text-cyan-200">Boarding Pass OCR &amp; IATA Barcode Parsing...</div>
                <div className="text-xs text-slate-500">Cross-referencing with live ADS-B flight telemetry</div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Upload a photo or screenshot of your boarding pass (Apple Wallet, PDF, or physical paper ticket). Our vision parser instantly decodes the IATA barcodes and flight identifiers, synchronizing them with real-time flight tracking.
                </p>

                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Aircraft Model</span>
                    <span className="text-white font-semibold">{sampleFlight.aircraft}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Expected Delay</span>
                    <span className="text-emerald-400 font-semibold">&lt; 5 minutes</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Historical Flights</span>
                    <span className="text-cyan-300 font-semibold">24 Recorded Flights</span>
                  </div>
                </div>

                <button
                  onClick={triggerScan}
                  className="w-full mt-4 py-3 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 font-mono text-xs font-semibold border border-cyan-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Scan Another Test Flight</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-4">
              <Barcode className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Instant Ticket Scanner</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Scan any boarding pass via camera or upload. AirFlow decodes PDF417 and Aztec 2D barcodes instantly according to IATA BCBP specifications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Live Telemetry &amp; Radar</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Track your flight live in 3D: flight altitude, ground speed, route deviations, and approach patterns fed directly by real-time ADS-B satellite data.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Personal Travel Passport</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Build an interactive digital logbook of your total nautical miles, visited airport hubs, aircraft types, and flight hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AirFlowPage
