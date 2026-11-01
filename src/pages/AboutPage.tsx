import React from 'react'
import { Link } from 'react-router-dom'
import { LinkedinIcon, GithubIcon } from '../components/Icons'
import { ArrowLeft, ArrowUpRight, Code2, Compass, ShieldCheck } from 'lucide-react'

export const AboutPage: React.FC = () => {
  const founders = [
    {
      name: 'Onur',
      role: 'Co-Founder · Product Ideas & App Design',
      focus: 'Product Conceptualization, UI/UX Systems & Application Architecture',
      bio: 'Leads product ideas, visual design systems, and application architecture across the Nablai suite. Specializes in translating complex agentic systems and AI workflows into intuitive, high-craft interfaces and practical desktop, mobile, and web apps.',
      linkedin: 'https://www.linkedin.com/in/onurryilmaz/',
      github: 'https://github.com/retrroo',
      stack: ['Product Ideation', 'App Design', 'UI/UX Systems', 'Agent Orchestration', 'Design Systems', 'Interface Architecture'],
      initial: 'O',
    },
    {
      name: 'Karim',
      role: 'Co-Founder · Model Orchestration & Backend Systems',
      focus: 'Model Orchestration, Predictive ML & Backend Architecture',
      bio: 'Directs model orchestration, backend systems, and predictive machine learning. Built the custom XGBoost turnaround delay forecasting models powering AirFlow, structured LLM synthesis pipelines for Latent Space, and resilient local agent execution engines.',
      linkedin: 'https://www.linkedin.com/in/karim-said-5691a231a/',
      github: 'https://github.com/karimsaid123',
      stack: ['Model Orchestration', 'XGBoost & Predictive ML', 'Backend Architecture', 'Agent Workflows', 'Domain Systems', 'Structured LLMs'],
      initial: 'K',
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

        {/* Hero Header with Editorial Typography */}
        <div className="max-w-3xl mb-16 pb-12 border-b border-zinc-200">
          <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
            FOUNDERS DOSSIER &middot; ONUR &amp; KARIM
          </span>
          <h1 className="text-4xl sm:text-6xl font-normal text-zinc-950 tracking-tight font-sans">
            Where models become products <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-zinc-600">through autonomous engineering.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
            We are <strong className="text-zinc-950 font-medium">Onur</strong> and <strong className="text-zinc-950 font-medium">Karim</strong>. We founded Nablai as an independent software studio. We are AI architects, app designers, and agent orchestrators. We do not build client websites or run an agency. We design, build, test, and release our own applications together as a team, turning raw models and agent workflows into practical everyday products. Every build in our studio is designed and coded collaboratively by us.
          </p>
        </div>

        {/* Founders Dossiers (Clean split layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-2xl bg-zinc-50 border border-zinc-200 p-8 sm:p-10 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Dossier Header */}
                <div className="flex items-start justify-between pb-6 mb-6 border-b border-zinc-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center font-sans font-medium text-xl text-zinc-950 shadow-xs">
                      {founder.initial}
                    </div>
                    <div>
                      <h2 className="text-xl font-normal text-zinc-950 font-sans">{founder.name}</h2>
                      <p className="text-xs font-mono text-zinc-500 mt-0.5">{founder.role}</p>
                    </div>
                  </div>

                  {/* External Links */}
                  <div className="flex items-center gap-2">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 border border-zinc-200 transition-colors shadow-xs"
                      title={`${founder.name} on LinkedIn`}
                    >
                      <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                    </a>
                    <a
                      href={founder.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 border border-zinc-200 transition-colors shadow-xs"
                      title={`${founder.name} on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-medium">
                    CORE SPECIALIZATION
                  </span>
                  <p className="text-xs font-mono text-zinc-800 font-medium">{founder.focus}</p>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans pt-2">
                    {founder.bio}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200 mb-6">
                  {founder.stack.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-zinc-700 border border-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-lg bg-white hover:bg-zinc-100 text-xs font-mono text-zinc-800 hover:text-zinc-950 border border-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-xs"
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
        <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-8 sm:p-12 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2 font-medium">
              BUILDER CREDO
            </span>
            <h3 className="text-2xl font-normal text-zinc-950 font-sans">
              Why We Build For Ourselves
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-2 font-sans">
              The modern AI landscape is flooded with superficial wrappers and sales promises. We prefer to spend our hours deep in code: writing deterministic state graphs, tuning quantized weights, and shipping fast tools that we use ourselves every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-200 text-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-950 font-medium">
                <Code2 className="w-4 h-4 text-zinc-800" />
                <span>Deterministic Systems</span>
              </div>
              <p className="text-zinc-600 leading-relaxed font-sans">
                We design state graphs with explicit assertion gates, validation loops, and fallback pathways.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-950 font-medium">
                <ShieldCheck className="w-4 h-4 text-zinc-800" />
                <span>Model Sovereignty</span>
              </div>
              <p className="text-zinc-600 leading-relaxed font-sans">
                We prefer open-weights and self-hosted inference clusters over closed-source third-party dependencies.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-950 font-medium">
                <Compass className="w-4 h-4 text-zinc-800" />
                <span>&nabla; Mathematical Rigor</span>
              </div>
              <p className="text-zinc-600 leading-relaxed font-sans">
                From loss gradient calculus to contrastive vector projections, every layer has an empirical purpose.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-normal text-zinc-950 mb-2 font-sans">Want to exchange notes with Onur or Karim?</h3>
          <p className="text-xs text-zinc-500 mb-6 font-mono">Feedback on our apps or ideas on autonomous systems are always welcome.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
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