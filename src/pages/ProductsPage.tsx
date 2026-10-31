import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { AppsShowcase } from '../components/AppsShowcase'

export const ProductsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-32 pb-20 selection:bg-zinc-900 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-950 transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO NABLAI HOME</span>
        </Link>

        {/* Page Hero */}
        <div className="pb-12 border-b border-zinc-200 mb-12">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              01 // STUDIO BUILDS &middot; 2026 ACTIVE
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal text-zinc-950 tracking-tight font-sans">
              Our Products &mdash; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">
                engineered for utility &amp; precision.
              </span>
            </h1>
            <p className="mt-4 text-base text-zinc-600 leading-relaxed max-w-2xl font-sans">
              We design, build, and deploy complete applications for our own daily workflows &mdash; spanning GPU-accelerated aviation tracking, LLM synthesis pipelines, and zero-overhead browser privacy and DSP audio extensions.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-zinc-100">
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">Total Applications</span>
              <span className="text-2xl font-normal text-zinc-950 font-mono mt-1 block">04</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">Platforms</span>
              <span className="text-2xl font-normal text-zinc-950 font-mono mt-1 block">iOS &bull; Web &bull; MV3</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">Telemetry</span>
              <span className="text-2xl font-normal text-emerald-600 font-mono mt-1 block">0% Cloud Logs</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">Pricing</span>
              <span className="text-2xl font-normal text-zinc-950 font-mono mt-1 block">100% Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2x2 Bento Showcase */}
      <AppsShowcase />
    </div>
  )
}

export default ProductsPage
