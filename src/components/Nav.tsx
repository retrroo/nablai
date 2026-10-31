import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NablaiLogo } from './NablaiLogo'
import { GithubIcon } from './Icons'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export const Nav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 80)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHero = location.pathname === '/' && !isScrolled

  const navLinks = [
    { label: 'AirFlow', path: '/apps/airflow', badge: 'Aviation' },
    { label: 'Latent Space', path: '/apps/latent-space', badge: 'AI Lab' },
    { label: 'Nabla Shield', path: '/apps/nabla-shield', badge: 'MV3' },
    { label: 'SoundBoost', path: '/apps/soundboost', badge: 'Audio' },
    { label: 'Our Stack', path: '/stack' },
    { label: 'Architecture', path: '/architecture' },
    { label: 'About Us', path: '/about', badge: 'Onur & Karim' },
    { label: 'Connect', path: '/contact' },
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const handleConnectClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const el = document.getElementById('contact')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto transition-colors duration-200">
      <div 
        className="w-full flex items-center justify-between mx-auto"
        style={{
          padding: 'calc(20 * var(--u)) var(--page-edge) 0 var(--page-edge)'
        }}
      >
        {/* Left: Nablai Logo with split-A */}
        <Link to="/" className="flex items-center group transition-opacity hover:opacity-90">
          <NablaiLogo size="sm" animated={false} mode={isHero ? 'dark' : 'light'} />
        </Link>

        {/* Center: Frosted Glass Pill */}
        <nav
          className={`hidden lg:flex items-center rounded-full transition-all duration-200 ${
            isHero
              ? 'border border-white/[0.08] bg-black/40 backdrop-blur-xl text-white'
              : 'border border-zinc-200/90 bg-white/90 backdrop-blur-xl text-zinc-900 shadow-xs'
          }`}
          style={{
            height: 'calc(48 * var(--u))',
            padding: '0 calc(15 * var(--u))',
            gap: 'calc(13 * var(--u))',
          }}
        >
          {navLinks.map((link) => {
            const active = isActive(link.path)

            return (
              <Link
                key={link.label}
                to={link.path}
                onClick={link.path === '/contact' ? handleConnectClick : undefined}
                className={`relative flex items-center gap-1.5 text-xs font-medium transition-colors duration-150 tracking-tight ${
                  isHero
                    ? active ? 'text-white' : 'text-slate-400 hover:text-white'
                    : active ? 'text-zinc-950 font-semibold' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded leading-none ${
                      isHero
                        ? 'bg-white/[0.08] text-zinc-300 border border-white/[0.08]'
                        : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                    }`}
                  >
                    {link.badge}
                  </span>
                )}
                {active && (
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full ${
                      isHero ? 'bg-white' : 'bg-zinc-900'
                    }`}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Action: GitHub & Connect */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/retrroo/nablai"
            target="_blank"
            rel="noreferrer"
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-full text-xs font-medium transition-colors ${
              isHero
                ? 'text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08]'
                : 'text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200'
            }`}
            style={{
              height: 'calc(44 * var(--u))',
              padding: '0 calc(16 * var(--u))',
            }}
            title="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <Link
            to="/contact"
            onClick={handleConnectClick}
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-full text-xs font-medium transition-colors ${
              isHero
                ? 'text-white bg-white/[0.12] hover:bg-white/[0.2] border border-white/[0.15]'
                : 'text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-900'
            }`}
            style={{
              height: 'calc(44 * var(--u))',
              padding: '0 calc(15 * var(--u))',
            }}
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button (Optimized solid glass, no GPU blur lag) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden flex items-center justify-center rounded-full transition-colors ${
              isHero
                ? 'border border-white/10 text-white bg-black/60 shadow-xs'
                : 'border border-zinc-200 text-zinc-900 bg-white/95 shadow-xs'
            }`}
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
        <div
          className={`lg:hidden mx-4 mt-3 p-5 rounded-2xl shadow-xl space-y-2 ${
            isHero
              ? 'bg-[#08090d]/98 border border-white/10 text-white'
              : 'bg-white border border-zinc-200 text-zinc-900'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={(e) => {
                setMobileMenuOpen(false)
                if (link.path === '/contact') handleConnectClick(e)
              }}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                isHero
                  ? 'text-slate-300 hover:text-white hover:bg-white/5'
                  : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
              }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isHero
                      ? 'bg-white/10 text-zinc-300 border border-white/10'
                      : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                  }`}
                >
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
          <div className={`pt-3 border-t flex gap-2 ${isHero ? 'border-white/10' : 'border-zinc-200'}`}>
            <a
              href="https://github.com/retrroo/nablai"
              target="_blank"
              rel="noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-mono ${
                isHero
                  ? 'bg-white/5 text-slate-300'
                  : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <Link
              to="/contact"
              onClick={(e) => {
                setMobileMenuOpen(false)
                handleConnectClick(e)
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl font-medium text-xs bg-zinc-900 text-white"
            >
              <span>Connect</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
export default Nav