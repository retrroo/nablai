import React from 'react'
import { Link } from 'react-router-dom'
import { LinkedinIcon, GithubIcon } from '../components/Icons'
import { ArrowLeft, ArrowUpRight, Code2, Compass, ShieldCheck } from 'lucide-react'

export const AboutPage: React.FC = () => {
  const founders = [
    {
      name: 'Onur',
      role: 'Co-Founder & AI Systems Architect',
      focus: 'Aviation Telemetry, GPU Canvas Graphics & Distributed Queues',
      bio: 'Architect of AirFlow (flight-app). Specializes in React Native Skia 60fps GPU mapping, zero-IO time-window polling state machines, and Node 24 distributed BullMQ backends with predictive inbound aircraft turnaround forecasting.',
      linkedin: 'https://www.linkedin.com/in/onur-nablai',
      github: 'https://github.com/retrroo',
      stack: ['Expo SDK 52', 'React Native Skia', 'Node.js 24', 'BullMQ & Redis', 'Supabase Realtime', 'TypeScript'],
      initial: 'O',
    },
    {
      name: 'Karim',
      role: 'Co-Founder & Machine Learning Engineer',
      focus: 'Hexagonal Architecture, Structured LLM Synthesis & Domain Systems',
      bio: 'Architect of Latent Space. Specializes in Domain-Driven Design (DDD), Ports & Adapters architectures in Next.js 16, and multimodal LLM synthesis pipelines using Gemini 1.5 Flash structured JSON schemas and heuristic NLP classifiers.',
      linkedin: 'https://www.linkedin.com/in/karim-nablai',
      github: 'https://github.com/karimsaid123',
      stack: ['Next.js 16', 'React 19', 'Hexagonal DDD', 'Gemini 1.5 Flash', 'Tailwind v4', 'TypeScript'],
      initial: 'K',
    },
  ]

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

        {/* Hero Header with Editorial Typography */}
        <div className="max-w-3xl mb-16 pb-12 border-b border-white/[0.08]">
          <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase block mb-3">
            FOUNDERS DOSSIER &middot; ONUR &amp; KARIM
          </span>
          <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight font-sans">
            Where Mathematics <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-slate-300">meets autonomous engineering.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            We are <strong className="text-white font-medium">Onur</strong> and <strong className="text-white font-medium">Karim</strong>. We founded Nablai as an independent software studio and engineering lab. We do not build client websites or run an agency &mdash; we build, test, and release our own AI products, exploring the frontier where vector calculus meets practical utility.
          </p>
        </div>

        {/* Founders Dossiers (Clean split layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-2xl bg-[#08090e] border border-white/[0.08] p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                {/* Dossier Header */}
                <div className="flex items-start justify-between pb-6 mb-6 border-b border-white/[0.06]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center font-sans font-light text-xl text-purple-300">
                      {founder.initial}
                    </div>
                    <div>
                      <h2 className="text-xl font-normal text-white font-sans">{founder.name}</h2>
                      <p className="text-xs font-mono text-purple-400 mt-0.5">{founder.role}</p>
                    </div>
                  </div>

                  {/* External Links */}
                  <div className="flex items-center gap-2">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors"
                      title={`${founder.name} on LinkedIn`}
                    >
                      <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                    </a>
                    <a
                      href={founder.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors"
                      title={`${founder.name} on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                    CORE SPECIALIZATION
                  </span>
                  <p className="text-xs font-mono text-slate-300">{founder.focus}</p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans pt-2">
                    {founder.bio}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04] mb-6">
                  {founder.stack.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.04]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-slate-300 hover:text-white border border-white/[0.06] transition-colors flex items-center justify-center gap-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>Connect with {founder.name} on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Credo / Manifesto */}
        <div className="rounded-2xl bg-[#08090e] border border-white/[0.08] p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase block mb-2">
              BUILDER CREDO
            </span>
            <h3 className="text-2xl font-normal text-white font-sans">
              Why We Build For Ourselves
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2 font-sans">
              The modern AI landscape is flooded with superficial wrappers and sales promises. We prefer to spend our hours deep in code: writing deterministic state graphs, tuning quantized weights, and shipping fast tools that we use ourselves every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/[0.04] text-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>Deterministic Systems</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans">
                We design state graphs with explicit assertion gates, validation loops, and fallback pathways.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Model Sovereignty</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans">
                We prefer open-weights and self-hosted inference clusters over closed-source third-party dependencies.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>&nabla; Mathematical Rigor</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans">
                From loss gradient calculus to contrastive vector projections, every layer has an empirical purpose.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-normal text-white mb-2 font-sans">Want to exchange notes with Onur or Karim?</h3>
          <p className="text-xs text-slate-400 mb-6 font-mono">Feedback on our apps or ideas on autonomous systems are always welcome.</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-600/25 border border-purple-400/30"
          >
            <span>Connect with Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default AboutPage