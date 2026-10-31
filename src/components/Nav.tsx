import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NablaiLogo } from './NablaiLogo'
import { GithubIcon } from './Icons'
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Volume2,
  Grid,
} from 'lucide-react'

export const Nav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const location = useLocation()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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

  // Auto-close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false)
    setMobileMenuOpen(false)
  }, [location.pathname])

  const isHero = location.pathname === '/' && !isScrolled

  const productItems = [
    {
      title: 'AirFlow',
      subtitle: 'Personal Flight Companion & Skia Maps',
      path: '/apps/airflow',
      icon: Smartphone,
      tag: 'Mobile App',
    },
    {
      title: 'Latent Space',
      subtitle: 'AI Synthesis & Intelligence Engine',
      path: '/apps/latent-space',
      icon: Sparkles,
      tag: 'Web Platform',
    },
    {
      title: 'Nabla Shield',
      subtitle: 'Pure Web Ad & Consent Evasion Shield',
      path: '/apps/nabla-shield',
      icon: ShieldCheck,
      tag: 'Chromium MV3',
    },
    {
      title: 'SoundBoost',
      subtitle: '600% Tab Volume Booster & 5-Band Studio EQ',
      path: '/apps/soundboost',
      icon: Volume2,
      tag: 'Web Audio API',
    },
  ]

  const navLinks = [
    { label: 'Our Stack', path: '/stack' },
    { label: 'Architecture', path: '/architecture' },
    { label: 'About Us', path: '/about' },
    { label: 'Connect', path: '/contact' },
  ]

  const isProductsActive =
    location.pathname === '/products' || location.pathname.startsWith('/apps')

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 180)
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
            padding: '0 calc(28 * var(--u))',
            gap: 'calc(24 * var(--u))',
          }}
        >
          {/* 1. Products Item with Bouncy Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/products"
              className={`relative inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-150 tracking-tight py-1 group ${
                isHero
                  ? isProductsActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
                  : isProductsActive ? 'text-zinc-950 font-semibold' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180 text-white' : 'opacity-60 group-hover:opacity-100'
                }`}
              />
              {isProductsActive && (
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full ${
                    isHero ? 'bg-white' : 'bg-zinc-900'
                  }`}
                />
              )}
            </Link>

            {/* Bouncy Spring Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 transition-all duration-300 origin-top ${
                dropdownOpen
                  ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <div
                className={`w-[360px] p-3 rounded-2xl shadow-2xl backdrop-blur-2xl border ${
                  isHero
                    ? 'bg-zinc-950/95 border-white/10 text-white shadow-black/90'
                    : 'bg-white/95 border-zinc-200 text-zinc-900 shadow-zinc-900/10'
                }`}
              >
                {/* Dropdown Header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Grid className="w-3 h-3" />
                    Studio Portfolio
                  </span>
                  <span className="text-emerald-400">4 Applications</span>
                </div>

                {/* 4 Products List */}
                <div className="space-y-1">
                  {productItems.map((prod) => {
                    const Icon = prod.icon
                    const isItemActive = location.pathname === prod.path

                    return (
                      <Link
                        key={prod.title}
                        to={prod.path}
                        onClick={() => setDropdownOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group ${
                          isHero
                            ? isItemActive
                              ? 'bg-white/10 text-white'
                              : 'hover:bg-white/[0.06] text-zinc-200 hover:text-white'
                            : isItemActive
                              ? 'bg-zinc-100 text-zinc-950'
                              : 'hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isHero
                              ? 'bg-white/10 text-white group-hover:bg-white/20'
                              : 'bg-zinc-100 text-zinc-900 group-hover:bg-zinc-200'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-medium tracking-tight truncate">
                              {prod.title}
                            </span>
                            <span
                              className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                                isHero
                                  ? 'bg-white/10 text-zinc-300'
                                  : 'bg-zinc-100 text-zinc-600'
                              }`}
                            >
                              {prod.tag}
                            </span>
                          </div>
                          <p
                            className={`text-[11px] leading-snug truncate mt-0.5 ${
                              isHero ? 'text-zinc-400' : 'text-zinc-500'
                            }`}
                          >
                            {prod.subtitle}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
                </div>

                {/* Dropdown Footer: Overview Page Link */}
                <div className="mt-2 pt-2 border-t border-white/10 px-1">
                  <Link
                    to="/products"
                    onClick={() => setDropdownOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono font-medium transition-colors ${
                      isHero
                        ? 'bg-white/[0.04] hover:bg-white/10 text-zinc-300 hover:text-white'
                        : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950'
                    }`}
                  >
                    <span>View All Products Overview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Standard Navigation Links */}
          {navLinks.map((link) => {
            const active = location.pathname === link.path

            return (
              <Link
                key={link.label}
                to={link.path}
                onClick={link.path === '/contact' ? handleConnectClick : undefined}
                className={`relative text-xs font-medium transition-colors duration-150 tracking-tight py-1 ${
                  isHero
                    ? active ? 'text-white' : 'text-slate-400 hover:text-white'
                    : active ? 'text-zinc-950 font-semibold' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <span>{link.label}</span>
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

          {/* Mobile Menu Button */}
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
          className={`lg:hidden mx-4 mt-3 p-5 rounded-2xl shadow-xl space-y-2.5 max-h-[85vh] overflow-y-auto ${
            isHero
              ? 'bg-[#08090d]/98 border border-white/10 text-white'
              : 'bg-white border border-zinc-200 text-zinc-900'
          }`}
        >
          {/* Mobile Products Group */}
          <div className="space-y-1 pb-2 border-b border-white/10">
            <div className="flex items-center justify-between px-3 py-1.5">
              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold flex items-center gap-2"
              >
                <span>Products Overview</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </Link>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="p-1 text-zinc-400 hover:text-white"
                aria-label="Toggle Products"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileProductsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {mobileProductsOpen && (
              <div className="pl-3 space-y-1 pt-1">
                {productItems.map((prod) => {
                  const Icon = prod.icon
                  return (
                    <Link
                      key={prod.title}
                      to={prod.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-zinc-400" />
                      <span className="font-medium text-white">{prod.title}</span>
                      <span className="text-[10px] text-zinc-400 truncate">&bull; {prod.tag}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          {/* Standard Navigation Links */}
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
