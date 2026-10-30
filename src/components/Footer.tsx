import React from 'react'
import { NablaiLogo } from './NablaiLogo'
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './Icons'
import { ArrowUp } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#030408] text-slate-400 py-16 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <NablaiLogo size="lg" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-2">
              Nablai (Nabla + Ai) unites mathematical gradient vector calculus with frontier artificial intelligence. We build autonomous apps, private RAG, and custom models for ambitious teams.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/retrroo/nablai"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                title="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                title="X / Twitter"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Capabilities &amp; Services
                </a>
              </li>
              <li>
                <a href="#logo-story" className="hover:text-white transition-colors">
                  Brand DNA &amp; Split-A Logo
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Case Studies &amp; Solutions
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  Production Architecture
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Our Engineering Process
                </a>
              </li>
            </ul>
          </div>

          {/* Tech & Identity */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Mathematical Origin</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              The name <strong className="text-white">Nablai</strong> stems from the differential vector operator <span className="text-purple-400 font-mono font-bold">&nabla;</span> (Nabla), which calculates the loss function gradient in deep learning.
            </p>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-purple-300">
              &nabla; Loss(&theta;) &rarr; Global Optimum
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Nablai Development. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/retrroo/nablai"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub: retrroo/nablai
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
