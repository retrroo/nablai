import React from 'react'
import { NablaiLogo } from './NablaiLogo'
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './Icons'
import { ArrowUp } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#030406] text-slate-400 py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <NablaiLogo size="md" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mt-2 font-sans">
              Nablai (Nabla + Ai) is an independent AI application studio and engineering lab founded by Onur &amp; Karim. We build, test, and ship our own intelligent software &mdash; uniting vector calculus with practical utility.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/retrroo/nablai"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                title="GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/onur-nablai"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                title="Onur on LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/karim-nablai"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                title="Karim on LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                title="X"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block">INDEX</span>
            <ul className="space-y-2">
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  01 // Our Apps (AirFlow, Latent Space)
                </a>
              </li>
              <li>
                <a href="#logo-story" className="hover:text-white transition-colors">
                  02 // Mathematical Identity
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  03 // Studio Engineering Stack
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  04 // Systems Architecture
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  05 // Product Build Cycle
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  06 // Connect &amp; Collaborate
                </a>
              </li>
            </ul>
          </div>

          {/* Mathematical Anchor */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block">CALCULUS ANCHOR</span>
            <p className="text-slate-400 leading-relaxed text-[11px] font-sans">
              The name <strong className="text-white">Nablai</strong> derives from the differential vector operator <span className="text-purple-400 font-mono font-bold">&nabla;</span> (Nabla), which determines parameter descent across loss surfaces.
            </p>
            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] text-[11px] text-purple-300 font-mono">
              &nabla; Loss(&theta;) &rarr; Global Optimum
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Nablai Studio &middot; Founded by Onur &amp; Karim.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/retrroo/nablai"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              github.com/retrroo/nablai
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer