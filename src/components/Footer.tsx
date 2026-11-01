import React from 'react'
import { Link } from 'react-router-dom'
import { NablaiLogo } from './NablaiLogo'
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './Icons'
import { ArrowUp, ArrowUpRight } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer 
      className="bg-zinc-50 text-zinc-600 pt-16 border-t border-zinc-200 relative"
      style={{
        paddingBottom: 'max(5rem, calc(env(safe-area-inset-bottom, 0px) + 3rem))',
        paddingLeft: 'max(0px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(0px, env(safe-area-inset-right, 0px))',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-200">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <NablaiLogo size="md" mode="light" />
            <p className="text-xs sm:text-sm text-zinc-600 max-w-sm leading-relaxed mt-2 font-sans">
              Nablai (Nabla + Ai) is an independent AI application studio and engineering lab founded by Onur &amp; Karim. We build, test, and ship our own intelligent software, uniting vector calculus with practical utility.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/retrroo/nablai"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors shadow-xs"
                title="GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/onurryilmaz/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors shadow-xs"
                title="Onur on LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/karim-said-5691a231a/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors shadow-xs"
                title="Karim on LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors shadow-xs"
                title="X"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-medium">INDEX</span>
            <ul className="space-y-2">
              <li>
                <Link to="/apps/airflow" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  01 // AirFlow (Aviation App)
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Link to="/apps/latent-space" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                    02 // Latent Space (AI Lab)
                  </Link>
                  <a
                    href="https://latentspace.science"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-zinc-600 hover:text-zinc-950 transition-colors inline-flex items-center gap-0.5"
                    title="Open live site latentspace.science"
                  >
                    <span>[live]</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Link to="/apps/nabla-shield" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                    03 // Nabla Shield (Pure Web &amp; Ad Shield)
                  </Link>
                  <a
                    href="https://github.com/retrroo/nabla-ad-shield"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-zinc-600 hover:text-zinc-950 transition-colors inline-flex items-center gap-0.5"
                    title="Open GitHub repo"
                  >
                    <span>[github]</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Link to="/apps/soundboost" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                    04 // SoundBoost (600% Tab Volume &amp; Studio EQ)
                  </Link>
                  <a
                    href="https://github.com/retrroo/soundboost-by-nablai"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-zinc-600 hover:text-zinc-950 transition-colors inline-flex items-center gap-0.5"
                    title="Open GitHub repo"
                  >
                    <span>[github]</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Link to="/apps/nabla-squeezer" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                    05 // Nabla Squeezer (Token &amp; Context Optimizer)
                  </Link>
                  <a
                    href="https://github.com/karimsaid123/nabla-squeezer"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-zinc-600 hover:text-zinc-950 transition-colors inline-flex items-center gap-0.5"
                    title="Open GitHub repo"
                  >
                    <span>[github]</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </li>
              <li>
                <Link to="/stack" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  06 // Studio Engineering Stack
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  07 // Systems Architecture
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  08 // About Onur &amp; Karim
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  09 // Connect &amp; Collaborate
                </Link>
              </li>
            </ul>
          </div>

          {/* Mathematical Anchor */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-medium">CALCULUS ANCHOR</span>
            <p className="text-zinc-600 leading-relaxed text-[11px] font-sans">
              The name <strong className="text-zinc-950">Nablai</strong> derives from the differential vector operator <span className="text-zinc-950 font-mono font-bold">&nabla;</span> (Nabla), which determines parameter descent across loss surfaces.
            </p>
            <div className="p-3 rounded-lg bg-white border border-zinc-200 text-[11px] text-zinc-800 font-mono shadow-xs">
              &nabla; Loss(&theta;) &rarr; Global Optimum
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Nablai Studio &middot; Founded by Onur &amp; Karim.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/retrroo/nablai"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              github.com/retrroo/nablai
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-950 transition-colors"
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