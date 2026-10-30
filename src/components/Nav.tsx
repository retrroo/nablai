import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NablaiLogo } from './NablaiLogo'
import { Plane, Orbit, Users, Menu, X, ArrowUpRight } from 'lucide-react'

export const Nav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Home', path: '/', isApp: false },
    { 
      label: 'AirFlow', 
      path: '/apps/airflow', 
      isApp: true, 
      tag: 'Aviation App',
      icon: Plane,
      color: 'text-cyan-400'
    },
    { 
      label: 'Latent Space', 
      path: '/apps/latent-space', 
      isApp: true, 
      tag: 'AI Lab',
      icon: Orbit,
      color: 'text-purple-400'
    },
    { 
      label: 'About Us', 
      path: '/about', 
      isApp: false,
      tag: 'Onur & Karim',
      icon: Users
    },
    { label: 'Services', path: '/#services', isApp: false },
    { label: 'Architecture', path: '/#architecture', isApp: false },
    { label: 'Contact', path: '/#contact', isApp: false },
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
          padding: 'calc(24 * var(--u)) calc(28 * var(--u)) 0 calc(28 * var(--u))'
        }}
      >
        {/* Left: Nablai Logo with split-A */}
        <Link to="/" className="flex items-center group transition-transform hover:scale-105">
          <NablaiLogo size="sm" animated={true} />
        </Link>

        {/* Center: Desktop Glass Pill */}
        <nav
          className="hidden lg:flex items-center rounded-full border"
          style={{
            height: 'calc(50 * var(--u))',
            padding: '0 calc(24 * var(--u))',
            gap: 'calc(20 * var(--u))',
            backgroundColor: 'var(--glass-fill)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderColor: 'rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
          }}
        >
          {navLinks.map((link) => {
            const active = isActive(link.path)
            const Icon = link.icon

            if (link.path.startsWith('/#')) {
              return (
                <a
                  key={link.label}
                  href={link.path}
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            }

            return (
              <Link
                key={link.label}
                to={link.path}
                className={`relative flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 ${
                  active ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {Icon && <Icon className={`w-3.5 h-3.5 ${link.color || 'text-slate-400'}`} />}
                <span>{link.label}</span>
                {link.tag && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-white/10 text-purple-300 border border-white/10">
                    {link.tag}
                  </span>
                )}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-purple-500 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Action Button - Nablai Logo Themed Purple Gradient */}
        <div className="flex items-center gap-3">
          <Link
            to="/#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full text-xs font-bold text-white transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-lg shadow-purple-600/30 border border-purple-400/30"
            style={{
              height: 'calc(50 * var(--u))',
              padding: '0 calc(22 * var(--u))',
              background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 50%, #6366f1 100%)',
            }}
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center rounded-full border border-white/20 text-white"
            style={{
              width: 'calc(44 * var(--u))',
              height: 'calc(44 * var(--u))',
              backgroundColor: 'var(--glass-fill-strong)',
              backdropFilter: 'blur(12px)',
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-3 p-5 rounded-2xl bg-[#0a0b12]/95 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-3">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isAnchor = link.path.startsWith('/#')

            return isAnchor ? (
              <a
                key={link.label}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4 text-purple-400" />}
                  <span>{link.label}</span>
                </div>
                {link.tag && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                    {link.tag}
                  </span>
                )}
              </Link>
            )
          })}
          <div className="pt-3 border-t border-white/10">
            <Link
              to="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white shadow-lg shadow-purple-600/30 border border-purple-400/30"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 50%, #6366f1 100%)',
              }}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
export default Nav
