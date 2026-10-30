import React from 'react'
import { NablaiLogo } from './NablaiLogo'
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './Icons'
import { ArrowUp } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#050608] text-slate-400 py-16 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <NablaiLogo size="lg" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-2">
              Nablai (Nabla + Ai) verenigt wiskundige gradient vector calculus met grensverleggende artificial intelligence. Wij bouwen agents, private RAG en custom modellen voor enterprise teams.
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Navigatie</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#diensten" className="hover:text-white transition-colors">
                  Diensten &amp; Expertise
                </a>
              </li>
              <li>
                <a href="#logo-verhaal" className="hover:text-white transition-colors">
                  Merk DNA &amp; Split-A Logo
                </a>
              </li>
              <li>
                <a href="#oplossingen" className="hover:text-white transition-colors">
                  Case Studies &amp; Oplossingen
                </a>
              </li>
              <li>
                <a href="#architectuur" className="hover:text-white transition-colors">
                  Productie Architectuur
                </a>
              </li>
              <li>
                <a href="#werkwijze" className="hover:text-white transition-colors">
                  Werkwijze &amp; Timeline
                </a>
              </li>
            </ul>
          </div>

          {/* Tech & Identity */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Wiskundige Oorsprong</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Het woord <strong className="text-white">Nablai</strong> stamt af van de differentiaaloperator <span className="text-purple-400 font-mono font-bold">&nabla;</span> (Nabla), die in deep learning de gradiënt van de verliesfunctie berekent.
            </p>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-purple-300">
              &nabla; Loss(&theta;) &rarr; Global Optimum
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Nablai Development. Alle rechten voorbehouden.
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
              <span>Naar boven</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
