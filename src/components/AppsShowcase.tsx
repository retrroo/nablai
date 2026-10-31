import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Image as ImageIcon, Download, Terminal } from 'lucide-react'
import { GithubIcon } from './Icons'

export const AppsShowcase: React.FC = () => {
  return (
    <section id="apps" className="py-24 relative bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              01 &mdash; Live Studio Applications
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950 font-sans">
              Applications We Build &mdash; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">crafted for ourselves.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-sm leading-relaxed font-sans">
            We don&apos;t pitch hypothetical decks. We design, architect, and ship complete mobile, web, and browser systems that solve real utility problems in our daily lives.
          </p>
        </div>

        {/* Bento Grid */}
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

          {/* App 3: Nabla Shield (Featured 12 cols) */}
          <div className="lg:col-span-12 group relative rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:bg-zinc-100/40">
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-zinc-200 text-xs font-mono text-zinc-500 gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-950 border border-zinc-400" />
                  <span className="text-zinc-900 font-semibold">BROWSER EXTENSION</span>
                  <span className="text-zinc-300">|</span>
                  <span className="text-zinc-600">Onur &amp; Karim</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-zinc-200/70 border border-zinc-300 text-zinc-800 text-[11px] font-mono font-medium">
                    Manifest V3 Compliant
                  </span>
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-medium">
                    Zero Cloud Telemetry
                  </span>
                </div>
              </div>

              {/* Main Content Split (2 Columns) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Concept & Info */}
                <div className="lg:col-span-7">
                  <div className="mb-3">
                    <h3 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
                      Nabla Shield &mdash;{' '}
                      <span className="font-serif italic text-zinc-600 font-normal">
                        Pure Web Ad &amp; Consent Shield
                      </span>
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-sans">
                    A high-performance, deterministic Chromium extension engineered to make browsing pure. Features stealth YouTube video ad mitigation, zero-overhead Declarative Net Request filtering, automatic cookie consent evasion (OneTrust, Cookiebot, etc.), and on-device heuristic ad classification without broken layouts or cloud API dependencies.
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Vanilla ES2024</span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Chromium MV3</span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">declarativeNetRequest</span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">0ms Optimistic CSS</span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">Stealth YouTube Canary</span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700">On-Device Heuristic AI</span>
                  </div>
                </div>

                {/* Right: 4-Layer Diagnostic Terminal Preview */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl border border-zinc-800/90 bg-zinc-950 p-6 shadow-xl overflow-hidden font-mono text-xs text-zinc-300 space-y-3">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:12px_12px] opacity-20 pointer-events-none" />
                    <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-zinc-400">
                      <span className="text-white font-medium flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                        NABLA-DEFENSE-STACK
                      </span>
                      <span className="text-emerald-400 font-semibold">[ACTIVE // 0ms]</span>
                    </div>

                    <div className="relative z-10 space-y-2 text-[11px]">
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
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
              <Link
                to="/apps/nabla-shield"
                className="text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>VIEW SHIELD ARCHITECTURE &amp; MANUAL</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/retrroo/nabla-ad-shield"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 transition-colors flex items-center gap-2 shadow-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {/* Cosmic Starlight Download Button */}
                <a
                  href="https://github.com/retrroo/nabla-ad-shield/releases/latest/download/nabla-ad-shield.zip"
                  target="_blank"
                  rel="noreferrer"
                  className="relative overflow-hidden group px-4 py-2 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-mono font-medium border border-zinc-800 hover:border-zinc-500 transition-all flex items-center gap-2 shadow-xs active:scale-95"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:10px_10px] opacity-20 group-hover:opacity-35 transition-opacity pointer-events-none" />
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>DOWNLOAD v1.0.0 (ZIP)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppsShowcase
