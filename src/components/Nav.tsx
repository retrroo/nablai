import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NablaiLogo } from './NablaiLogo'
import { GithubIcon } from './Icons'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export const Nav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'AirFlow', path: '/apps/airflow', isApp: true, badge: 'Aviation App' },
    { label: 'Latent Space', path: '/apps/latent-space', isApp: true, badge: 'AI Lab' },
    { label: 'Our Stack', path: '/#stack', isApp: false },
    { label: 'Architecture', path: '/#architecture', isApp: false },
    { label: 'About Us', path: '/about', isApp: false, badge: 'Onur & Karim' },
    { label: 'Connect', path: '/#contact', isApp: false },
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto">
      <div 
        className="w-full flex items-center justify-between mx-auto"
        style={{
          padding: 'calc(24 * var(--u)) calc(32 * var(--u)) 0 calc(32 * var(--u))'
        }}
      >
        {/* Left: Nablai Logo with split-A */}
        <Link to="/" className="flex items-center group transition-opacity hover:opacity-90">
          <NablaiLogo size="sm" animated={false} />
        </Link>

        {/* Center: Clean Frosted Glass Pill */}
        <nav
          className="hidden lg:flex items-center rounded-full border border-white/[0.08] bg-black/40 backdrop-blur-xl"
          style={{
            height: 'calc(48 * var(--u))',
            padding: '0 calc(24 * var(--u))',
            gap: 'calc(22 * var(--u))',
          }}
        >
          {navLinks.map((link) => {
            const active = isActive(link.path)

            if (link.path.startsWith('/#')) {
              return (
                <a
                  key={link.label}
                  href={link.path}
                  className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-150 tracking-tight"
                >
                  {link.label}
                </a>
              )
            }

            return (
              <Link
                key={link.label}
                to={link.path}
                className={`relative flex items-center gap-1.5 text-xs font-medium transition-colors duration-150 tracking-tight ${
                  active ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-purple-300 border border-white/[0.06] leading-none">
                    {link.badge}
                  </span>
                )}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-purple-400 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Action: GitHub & Connect */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/retrroo/nablai"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
            style={{
              height: 'calc(44 * var(--u))',
              padding: '0 calc(16 * var(--u))',
            }}
            title="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full text-xs font-medium text-white bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 hover:border-purple-400 transition-all duration-200"
            style={{
              height: 'calc(44 * var(--u))',
              padding: '0 calc(18 * var(--u))',
            }}
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-purple-300" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center rounded-full border border-white/10 text-white bg-black/50 backdrop-blur-md"
            style={{
              width: 'calc(42 * var(--u))',
              height: 'calc(42 * var(--u))',
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-3 p-5 rounded-2xl bg-[#08090d]/95 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-2">
          {navLinks.map((link) => {
            const isAnchor = link.path.startsWith('/#')

            return isAnchor ? (
              <a
                key={link.label}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-purple-300 border border-white/5">
                    {link.badge}
                  </span>
                )}
              </Link>
            )
          })}
          <div className="pt-3 border-t border-white/10 flex gap-2">
            <a
              href="https://github.com/retrroo/nablai"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-mono bg-white/5 text-slate-300"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl font-medium text-xs bg-purple-600 text-white"
            >
              <span>Connect</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
export default Nav
