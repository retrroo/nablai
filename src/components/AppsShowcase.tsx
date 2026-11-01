import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Image as ImageIcon, Download, Terminal, Volume2, ShieldCheck, Zap } from 'lucide-react'
import { GithubIcon } from './Icons'

export const AppsShowcase: React.FC = () => {
  return (
    <section id="apps" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              01 // Live Studio Applications
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950 font-sans">
              Applications We Build <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">crafted for ourselves.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-sm leading-relaxed font-sans">
            We don&apos;t pitch hypothetical decks. We design, architect, and ship complete mobile, web, and browser systems that solve real utility problems in our daily lives.
          </p>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* App 1: AirFlow (6 cols) */}
          <Link
            to="/apps/airflow"
            className="lg:col-span-6 group relative rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:bg-zinc-100/50"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="text-zinc-900 font-semibold">MOBILE APP</span>
                  <span className="text-zinc-300">|</span>
                  <span className="text-zinc-600">Onur &amp; Karim</span>
                </div>
                <span className="text-zinc-700 font-medium">React Native &middot; Expo SDK 52</span>
              </div>

              {/* Title & Concept */}
              <div className="mb-3">
                <h3 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
                  AirFlow
                </h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-sans">
                Personal flight tracking companion. Features 60fps GPU route maps via React Native Skia, direct IATA BCBP boarding pass barcode decoding, and predictive turnaround alerts tracking the incoming aircraft&apos;s prior leg.
              </p>

              {/* Screenshot Placeholder */}
              <div className="rounded-xl border-2 border-dashed border-zinc-300 bg-white/80 p-8 text-center flex flex-col items-center justify-center my-6 group-hover:border-zinc-400 transition-colors">
                <ImageIcon className="w-6 h-6 text-zinc-400 mb-2" />
                <span className="text-xs font-mono text-zinc-800 font-medium">Mobile App Screenshot</span>
                <span className="text-[11px] font-mono text-zinc-500 mt-0.5">Soon to be added</span>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">TypeScript</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">React Native Skia</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Node 24</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">BullMQ + Redis</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Supabase</span>
              </div>
            </div>

            {/* Bottom Link Action */}
            <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-600 group-hover:text-zinc-950 transition-colors">
              <span>VIEW AIRFLOW DETAILS &amp; ARCHITECTURE</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>

          {/* App 2: Latent Space (6 cols) */}
          <div className="lg:col-span-6 group relative rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:bg-zinc-100/40">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-950 border border-zinc-400" />
                  <span className="text-zinc-900 font-semibold">WEB PLATFORM</span>
                  <span className="text-zinc-300">|</span>
                  <span className="text-zinc-600">Onur &amp; Karim</span>
                </div>
                {/* Cosmic Starlight Pill Link */}
                <a
                  href="https://latentspace.science"
                  target="_blank"
                  rel="noreferrer"
                  className="relative overflow-hidden group/pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 text-white border border-zinc-800 hover:border-zinc-500 text-[11px] font-mono font-medium transition-all shadow-xs"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:10px_10px] opacity-20 group-hover/pill:opacity-40 transition-opacity pointer-events-none" />
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>latentspace.science</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-300 group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Title & Concept */}
              <div className="mb-3">
                <h3 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
                  Latent Space
                </h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-sans">
                Curated AI intelligence platform designed to cut through marketing hype. Built on strict Hexagonal Architecture with automated structured summarization via Gemini 1.5 Flash.
              </p>

              {/* Live App Link Box - Light Cosmic Starlight Theme */}
              <a
                href="https://latentspace.science"
                target="_blank"
                rel="noreferrer"
                className="relative overflow-hidden group/preview block rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 text-center my-6 transition-all hover:border-zinc-500 shadow-lg"
              >
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:14px_14px] opacity-20 group-hover/preview:opacity-35 transition-opacity pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-white text-xs font-mono font-medium mb-2 shadow-xs">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                    </span>
                    <span>Live Platform &middot; latentspace.science</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 group-hover/preview:translate-x-0.5 group-hover/preview:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 block group-hover/preview:text-zinc-200 transition-colors">
                    Click to open live site &rarr;
                  </span>
                </div>
              </a>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">TypeScript</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Next.js 16 / React 19</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Hexagonal (Ports/Adapters)</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Gemini 1.5 Flash</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between gap-3 text-xs font-mono">
              <Link
                to="/apps/latent-space"
                className="text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>VIEW DETAILS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://latentspace.science"
                target="_blank"
                rel="noreferrer"
                className="relative overflow-hidden group px-4 py-2 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-mono font-medium border border-zinc-800 hover:border-zinc-500 transition-all flex items-center gap-2 shadow-xs active:scale-95"
              >
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:10px_10px] opacity-20 group-hover:opacity-35 transition-opacity pointer-events-none" />
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>OPEN SITE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </div>

          {/* App 3: Nabla Shield (6 cols) */}
          <div className="lg:col-span-6 group relative rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:bg-zinc-100/40">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-950 border border-zinc-400" />
                  <span className="text-zinc-900 font-semibold">BROWSER EXTENSION</span>
                  <span className="text-zinc-300">|</span>
                  <span className="text-zinc-600">Onur &amp; Karim</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-zinc-200/70 border border-zinc-300 text-zinc-800 text-[11px] font-mono font-medium">
                  Manifest V3 Compliant
                </span>
              </div>

              {/* Title & Concept */}
              <div className="mb-3">
                <h3 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
                  Nabla Shield
                </h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-sans">
                Deterministic Chrome ad &amp; consent shield. Features stealth YouTube video mitigation, zero-overhead Declarative Net Request filtering, automatic cookie consent evasion, and on-device heuristic scoring.
              </p>

              {/* 4-Layer Terminal Preview */}
              <div className="relative rounded-2xl border border-zinc-800/90 bg-zinc-950 p-5 shadow-lg overflow-hidden font-mono text-xs text-zinc-300 space-y-2.5 my-6">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:12px_12px] opacity-20 pointer-events-none" />
                <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-zinc-400">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                    NABLA-DEFENSE-STACK
                  </span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    ACTIVE (0ms)
                  </span>
                </div>

                <div className="relative z-10 space-y-1.5 text-[11px]">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-semibold">L1</span>
                    <span className="text-zinc-400">DNR Kernel Filter:</span>
                    <span className="text-white">Zero-overhead ad block</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-semibold">L2</span>
                    <span className="text-zinc-400">Cosmetic &amp; CMP:</span>
                    <span className="text-white">Auto &quot;Reject All&quot; cookies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-semibold">L3</span>
                    <span className="text-emerald-400 font-semibold">YouTube Canary:</span>
                    <span className="text-white">Strip playerAds &bull; 16x skip</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-semibold">L4</span>
                    <span className="text-zinc-400">Heuristic AI:</span>
                    <span className="text-white">On-device IAB aspect ratio</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Vanilla ES2024</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Chromium MV3</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">declarativeNetRequest</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Stealth YouTube</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Zero Telemetry</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
              <Link
                to="/apps/nabla-shield"
                className="text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>VIEW SHIELD DETAILS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/retrroo/nabla-ad-shield"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 transition-colors shadow-xs"
                  title="GitHub Repository"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/retrroo/nabla-ad-shield/releases/latest/download/nabla-ad-shield.zip"
                  target="_blank"
                  rel="noreferrer"
                  className="relative overflow-hidden group px-3.5 py-2 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-mono font-medium border border-zinc-800 hover:border-zinc-500 transition-all flex items-center gap-1.5 shadow-xs active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ZIP</span>
                </a>
              </div>
            </div>
          </div>

          {/* App 4: SoundBoost (6 cols) */}
          <div className="lg:col-span-6 group relative rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:bg-zinc-100/40">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-950 border border-zinc-400" />
                  <span className="text-zinc-900 font-semibold">BROWSER EXTENSION</span>
                  <span className="text-zinc-300">|</span>
                  <span className="text-zinc-600">Onur &amp; Karim</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-zinc-200/70 border border-zinc-300 text-zinc-800 text-[11px] font-mono font-medium">
                  Web Audio &middot; 600% Boost
                </span>
              </div>

              {/* Title & Concept */}
              <div className="mb-3">
                <h3 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
                  SoundBoost by Nablai
                </h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-sans">
                Next-gen Chrome tab volume booster up to 600% with studio Dynamics Compressor anti-clipping protection and a 5-band parametric EQ. Preserves 100% native HTML5 fullscreen with zero lip-sync lag.
              </p>

              {/* Audio DSP Terminal Preview */}
              <div className="relative rounded-2xl border border-zinc-800/90 bg-zinc-950 p-5 shadow-lg overflow-hidden font-mono text-xs text-zinc-300 space-y-2.5 my-6">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:12px_12px] opacity-20 pointer-events-none" />
                <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-zinc-400">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                    SOUNDBOOST-AUDIO-ENGINE
                  </span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Volume2 className="w-3.5 h-3.5" />
                    ACTIVE (0ms)
                  </span>
                </div>

                <div className="relative z-10 space-y-1.5 text-[11px]">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-semibold">EQ</span>
                    <span className="text-zinc-400">5-Band Studio EQ:</span>
                    <span className="text-white">60Hz &bull; 250Hz &bull; 1kHz &bull; 4kHz &bull; 12kHz</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-semibold">Amp</span>
                    <span className="text-zinc-400">Master Gain:</span>
                    <span className="text-white">0% to 600% amplification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-semibold">Lim</span>
                    <span className="text-zinc-400">Dynamics Compressor:</span>
                    <span className="text-white">-6dB threshold &bull; 8:1 ratio limiter</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-semibold">DOM</span>
                    <span className="text-zinc-400">Direct Hook:</span>
                    <span className="text-white">100% Native OS Fullscreen</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Vanilla ES2024</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Chromium MV3</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Web Audio API</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Dynamics Compressor</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">0ms Latency</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
              <Link
                to="/apps/soundboost"
                className="text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>VIEW SOUNDBOOST DETAILS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/retrroo/soundboost-by-nablai"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 transition-colors shadow-xs"
                  title="GitHub Repository"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/retrroo/soundboost-by-nablai/releases/latest/download/soundboost-by-nablai.zip"
                  target="_blank"
                  rel="noreferrer"
                  className="relative overflow-hidden group px-3.5 py-2 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-mono font-medium border border-zinc-800 hover:border-zinc-500 transition-all flex items-center gap-1.5 shadow-xs active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ZIP</span>
                </a>
              </div>
            </div>
          </div>

          {/* App 5: Nabla Squeezer (12 cols Flagship Spotlight) */}
          <div className="lg:col-span-12 group relative rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 p-8 sm:p-12 transition-all duration-200 hover:bg-zinc-100/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Info, Badges, Tech Stack */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  {/* Header Badges */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 text-xs font-mono text-zinc-500">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-zinc-950 border border-zinc-400" />
                      <span className="text-zinc-900 font-semibold">MACOS NATIVE APP</span>
                      <span className="text-zinc-300">|</span>
                      <span className="text-zinc-600">Onur &amp; Karim</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-zinc-200/70 border border-zinc-300 text-zinc-800 text-[11px] font-mono font-medium">
                      Tauri v2 &middot; Rust Core
                    </span>
                  </div>

                  {/* Title & Concept */}
                  <div className="mb-3">
                    <h3 className="text-2xl sm:text-4xl font-normal text-zinc-950 tracking-tight font-sans">
                      Nabla Squeezer
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 font-sans">
                    100% local macOS menu bar token &amp; rate-limit optimizer for Claude, ChatGPT &amp; Cursor. Squeezes clipboard fluff, code comments, and repetitive logs with global hotkey <kbd className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-200/80 text-zinc-900 border border-zinc-300 font-semibold">⌘⌥C</kbd> in under 1 millisecond.
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Tauri v2</span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Rust 2021</span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">tiktoken-rs (cl100k_base)</span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Global Hotkeys (⌘⌥C / ⌘⇧H)</span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Zero Telemetry</span>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                  <Link
                    to="/apps/nabla-squeezer"
                    className="text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <span>VIEW SQUEEZER DETAILS &amp; ARCHITECTURE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/karimsaid123/nabla-squeezer"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 transition-colors shadow-xs"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://github.com/karimsaid123/nabla-squeezer"
                      target="_blank"
                      rel="noreferrer"
                      className="relative overflow-hidden group px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-mono font-medium border border-zinc-800 hover:border-zinc-500 transition-all flex items-center gap-1.5 shadow-xs active:scale-95"
                    >
                      <span>GET APP</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Menu Bar Popover Visual Preview */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl border border-zinc-800/90 bg-zinc-950 p-6 shadow-xl overflow-hidden text-zinc-200">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:12px_12px] opacity-20 pointer-events-none" />
                  <div className="relative z-10 space-y-4">
                    {/* Popover Top Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white tracking-widest">&nabla; N A B L A</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-zinc-400">
                          SQUEEZER
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[10px] text-emerald-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        SAFE
                      </span>
                    </div>

                    {/* Squeeze Button Mockup */}
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs font-medium text-white">
                      <span className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span>Squeeze Clipboard Now</span>
                      </span>
                      <kbd className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-zinc-300">
                        ⌘⌥C
                      </kbd>
                    </div>

                    {/* Token Counters */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase block">CURRENT TOKENS</span>
                        <span className="text-xl font-bold text-white font-mono mt-0.5 block">75</span>
                        <span className="text-[10px] font-mono text-emerald-400 mt-0.5 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Safe Limit
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase block">TOTAL SAVED</span>
                        <span className="text-xl font-bold text-white font-mono mt-0.5 block">94</span>
                        <span className="text-[10px] font-mono text-zinc-400 mt-0.5 block">Lifetime Tokens</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-sans text-zinc-300 pt-1">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Clean Prompts &amp; Prose</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Strip Code Comments</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Minify JSON &amp; Logs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Clean Whitespace</span>
                      </div>
                    </div>

                    {/* Footer note */}
                    <div className="pt-2 border-t border-white/10 text-center text-[10px] font-mono text-zinc-400">
                      Pure Local Processing &bull; 100% Free &bull; Zero Telemetry
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppsShowcase
