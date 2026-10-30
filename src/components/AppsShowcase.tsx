import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react'

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
            We don’t pitch hypothetical decks. We design, architect, and ship complete mobile and web systems that solve real utility problems in our daily lives.
          </p>
        </div>

        {/* Modular Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* App 1: AirFlow (7 cols) */}
          <Link
            to="/apps/airflow"
            className="lg:col-span-7 group relative rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:bg-zinc-100/50"
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
                Personal flight tracking companion. Features 60fps GPU route maps via React Native Skia, direct IATA BCBP boarding pass barcode decoding, and predictive turnaround alerts tracking the incoming aircraft’s prior leg.
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

          {/* App 2: Latent Space (5 cols) */}
          <div
            className="lg:col-span-5 group relative rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:bg-zinc-100/40"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-950" />
                  <span className="text-zinc-900 font-semibold">WEB PLATFORM</span>
                  <span className="text-zinc-300">|</span>
                  <span className="text-zinc-600">Onur &amp; Karim</span>
                </div>
                <a
                  href="https://latentspace.science"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200 text-[11px] font-mono font-medium transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>latentspace.science</span>
                  <ArrowUpRight className="w-3 h-3" />
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

              {/* Live App Link Box */}
              <a
                href="https://latentspace.science"
                target="_blank"
                rel="noreferrer"
                className="group/preview block rounded-xl border border-zinc-200 bg-zinc-50/70 hover:bg-zinc-100/80 p-6 text-center my-6 transition-all"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-900 text-xs font-mono font-medium mb-2 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live Platform &middot; latentspace.science</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700 group-hover/preview:translate-x-0.5 group-hover/preview:-translate-y-0.5 transition-transform" />
                </div>
                <span className="text-xs font-mono text-zinc-600 block">Click to open live site &rarr;</span>
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
                className="px-3.5 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-medium transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>OPEN SITE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppsShowcase
