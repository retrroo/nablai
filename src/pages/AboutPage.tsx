import React from 'react'
import { Link } from 'react-router-dom'
import { LinkedinIcon, GithubIcon } from '../components/Icons'
import { Users, ArrowLeft, ArrowUpRight, Sparkles, Code2, Compass, ShieldCheck } from 'lucide-react'

export const AboutPage: React.FC = () => {
  const founders = [
    {
      name: 'Onur',
      role: 'Co-Founder & AI Systems Architect',
      specialty: 'Autonomous Multi-Agent Systems & Full-Stack AI Infrastructure',
      bio: 'Specializes in engineering autonomous multi-agent systems, tool-augmented LLM architectures, and resilient cloud infrastructure. Builds production systems that autonomously orchestrate complex operational workflows with zero human bottlenecks.',
      linkedin: 'https://www.linkedin.com/in/onur-nablai',
      github: 'https://github.com/retrroo',
      skills: ['Agent Orchestration', 'Distributed Systems', 'TypeScript / Python', 'Production MLOps', 'Full-Stack Gen-UI'],
      avatarInitial: 'O',
      accentColor: '#A855F7',
    },
    {
      name: 'Karim',
      role: 'Co-Founder & Machine Learning Engineer',
      specialty: 'Gradient Calculus, Model Fine-Tuning & Quantized Inference',
      bio: 'Driven by mathematical optimization and deep learning theory. Translates the foundational principles of the Nabla (∇) gradient operator into efficient LoRA fine-tuning and ultra-low-latency vLLM GPU inference clusters.',
      linkedin: 'https://www.linkedin.com/in/karim-nablai',
      github: 'https://github.com/karim-nablai',
      skills: ['PyTorch & CUDA', 'LoRA / QLoRA', 'Gradient Optimization', 'vLLM / TensorRT', 'Vector Geometry'],
      avatarInitial: 'K',
      accentColor: '#38BDF8',
    },
  ]

  return (
    <div className="min-h-screen bg-[#07080d] text-slate-100 pt-28 pb-20 selection:bg-purple-600 selection:text-white">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-purple-700/15 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

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
        <div className="max-w-3xl mb-16 pb-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>The Founders &middot; Onur &amp; Karim</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            About Nablai
          </h1>
          <p className="text-xl sm:text-2xl text-purple-200/90 font-light mt-2">
            Where Mathematics, Software Engineering, and AI Converge.
          </p>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            We are <strong className="text-white">Onur</strong> and <strong className="text-white">Karim</strong>. We founded Nablai with a clear conviction: the future of software won&apos;t be shaped by superficial wrappers, but by deeply engineered, autonomous systems and private models grounded in mathematical rigor.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all flex flex-col justify-between shadow-2xl relative overflow-hidden group"
            >
              {/* Corner accent glow */}
              <div 
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-35"
                style={{ backgroundColor: founder.accentColor }}
              />

              <div>
                {/* Header: Avatar initial & links */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl text-white shadow-xl border border-white/20"
                      style={{ 
                        background: `linear-gradient(135deg, ${founder.accentColor} 0%, #1e1b4b 100%)` 
                      }}
                    >
                      {founder.avatarInitial}
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-white tracking-tight">{founder.name}</h2>
                      <p className="text-xs font-mono" style={{ color: founder.accentColor }}>{founder.role}</p>
                    </div>
                  </div>

                  {/* LinkedIn & GitHub Buttons */}
                  <div className="flex items-center gap-2">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                      title={`${founder.name} on LinkedIn`}
                    >
                      <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                    </a>
                    <a
                      href={founder.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                      title={`${founder.name} on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-semibold text-slate-300 block mb-1">Focus Area</span>
                  <p className="text-sm font-medium text-slate-200">{founder.specialty}</p>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {founder.bio}
                </p>
              </div>

              {/* Skills and connect CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mb-6">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 font-semibold text-xs border border-purple-500/30 transition-all group/btn"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <span>Connect with {founder.name} on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* The Story & Principles Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              Our Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4">
              Why We Founded Nablai
            </h3>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              In today&apos;s AI ecosystem, there are too many hasty &apos;wrappers&apos; that break under real enterprise pressures &mdash; whether from data privacy, non-deterministic outputs, or compounding latency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/5">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>Code-First &amp; Zero Wrappers</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We engineer at the kernel, vector embedding, and deterministic state-machine levels. No black-box shortcuts.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>100% Data Sovereignty</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your enterprise data belongs exclusively to you. We deploy private RAG and on-premise open-weights models that guarantee confidentiality.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>&nabla; Mathematical Rigor</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                From vector gradient calculus (Nabla) to fine-tuning loss surfaces: we build on scientific principles that produce verifiable ROI.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to get in touch */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Want to collaborate with Onur or Karim?</h3>
          <p className="text-xs text-slate-400 mb-6">Schedule a technical exploration session on your AI use case.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white shadow-xl shadow-purple-600/35 border border-purple-400/30 transition-all active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 50%, #6366f1 100%)',
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Get in Touch with Us</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default AboutPage
