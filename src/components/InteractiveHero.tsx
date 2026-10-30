import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { StarfieldCanvas } from './StarfieldCanvas'
import { ConstellationCanvas } from './ConstellationCanvas'
import { ArrowDown, Sparkles } from 'lucide-react'
import styles from './InteractiveHero.module.css'

export const InteractiveHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const leadRef = useRef<HTMLParagraphElement>(null)
  const actionRef = useRef<HTMLDivElement>(null)
  const bottomBarRef = useRef<HTMLDivElement>(null)

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 1024
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    let ctx: gsap.Context | null = null
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.to(['.hero-reveal'], {
          opacity: 1,
          duration: 0.3,
          ease: 'power1.out',
          clearProps: 'filter,transform',
        })
        return
      }

      const tl = gsap.timeline({ delay: 0.15 })

      // Reveal headline characters with subtle starlight blur-in
      const chars = headlineRef.current?.querySelectorAll('.char-span')
      if (chars && chars.length > 0) {
        tl.fromTo(
          chars,
          { opacity: 0, filter: 'blur(16px)', yPercent: 20 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            yPercent: 0,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.025,
            clearProps: 'filter,transform',
          },
          0
        )
      }

      // Lead paragraph fade in
      if (leadRef.current) {
        tl.fromTo(
          leadRef.current,
          { opacity: 0, filter: 'blur(10px)', y: 15 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'filter,transform',
          },
          0.4
        )
      }

      // Action CTA block fade in
      if (actionRef.current) {
        tl.fromTo(
          actionRef.current,
          { opacity: 0, filter: 'blur(10px)', y: 15 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'filter,transform',
          },
          0.6
        )
      }

      // Bottom bar fade in
      if (bottomBarRef.current) {
        tl.fromTo(
          bottomBarRef.current,
          { opacity: 0, filter: 'blur(8px)' },
          {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'filter',
          },
          0.8
        )
      }
    }, containerRef)

    return () => {
      if (ctx) ctx.revert()
    }
  }, [isMobile])

  // Dedicated responsive mobile layout (fluid 60fps, 0 lag, deep black cosmic space)
  if (isMobile) {
    return (
      <section
        ref={containerRef}
        className="relative w-full min-h-screen overflow-hidden select-none bg-black flex flex-col justify-between px-6 pt-24 pb-8"
        style={{
          background:
            'radial-gradient(ellipse 140% 100% at 50% 15%, #0a0a0f 0%, #030305 60%, #000000 100%)',
          transform: 'translateZ(0)',
        }}
      >
        {/* Twinkling pure white starlight canvas */}
        <StarfieldCanvas className="z-0 opacity-80" />

        {/* Interactive Constellation / Neural Branch Canvas (Dots & Lines) */}
        <ConstellationCanvas className="z-0 opacity-90" />

        {/* Top: Studio Tag + Headline + Lead */}
        <div className="relative z-20 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-mono text-zinc-300 tracking-tight">Independent AI Studio</span>
          </div>

          <h1 className="text-white font-normal flex flex-col gap-1 tracking-tight">
            <span
              className="font-serif italic text-5xl sm:text-6xl text-white leading-[0.95]"
              style={{
                fontFamily: 'var(--font-serif)',
                textShadow: '0 0 35px rgba(255,255,255,0.35), 0 4px 20px rgba(0,0,0,0.9)',
              }}
            >
              Every layer
            </span>
            <span
              className="font-sans text-4xl sm:text-5xl text-white font-light tracking-tight leading-[0.95]"
              style={{
                fontFamily: 'var(--font-sans)',
                textShadow: '0 0 35px rgba(255,255,255,0.35), 0 4px 20px rgba(0,0,0,0.9)',
              }}
            >
              tells a story.
            </span>
          </h1>

          <p className="mt-6 text-sm text-zinc-300 leading-relaxed font-sans max-w-sm">
            We build our own applications. Nablai is an independent software studio and AI engineering lab founded by Onur &amp; Karim.
          </p>
        </div>

        {/* Middle: Studio Apps Quick Cards (Monochrome High Contrast) */}
        <div className="relative z-20 my-6 p-4 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3 backdrop-blur-md shadow-2xl">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-2 border-b border-white/10">
            <span className="text-white font-medium">STUDIO BUILDS</span>
            <span className="text-zinc-300">2026 ACTIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 text-xs">
            <a
              href="#apps"
              className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors block"
            >
              <span className="text-zinc-400 font-mono text-[10px] block font-medium">01 &middot; AVIATION</span>
              <span className="text-white font-medium text-sm mt-0.5 block">AirFlow</span>
            </a>
            <a
              href="#apps"
              className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors block"
            >
              <span className="text-zinc-400 font-mono text-[10px] block font-medium">02 &middot; AI LAB</span>
              <span className="text-white font-medium text-sm mt-0.5 block">Latent Space</span>
            </a>
          </div>
        </div>

        {/* Bottom: Action Block & CTA */}
        <div className="relative z-20 space-y-5">
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            We are the builders. We design, code, and deploy our own products &mdash; exploring the frontier of autonomous intelligence and practical software utility.
          </p>

          <a
            href="#apps"
            className="w-full py-3.5 px-6 rounded-full font-medium text-sm text-zinc-950 bg-white hover:bg-zinc-100 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 text-center"
          >
            <Sparkles className="w-4 h-4 text-zinc-900" />
            <span>Explore Our Apps</span>
          </a>

          {/* Bottom Bar indicator */}
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono pt-2 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-xs">
                <ArrowDown className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span className="text-[11px] text-zinc-300">Scroll for portfolio</span>
            </div>
            <span className="text-[11px] text-zinc-400 font-mono">20&ndash;26 &middot; Nablai</span>
          </div>
        </div>
      </section>
    )
  }

  // Full-fidelity interactive canvas hero for desktop (width >= 1024px)
  const line1 = 'Every layer'
  const line2 = 'tells a story.'

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] overflow-hidden select-none bg-black"
      style={{
        background:
          'radial-gradient(ellipse 120% 100% at 50% 25%, #08080c 0%, #030304 55%, #000000 100%)',
      }}
    >
      {/* 1. Interactive Twinkling Starfield Canvas (Pitch Black Cosmic Sky) */}
      <StarfieldCanvas className="z-0" />

      {/* 2. Interactive Constellation / Neural Lattice Canvas (Connecting Dots & Lines from Photo 2) */}
      <ConstellationCanvas className="z-10" />

      {/* 3. Headline and Lead */}
      <div className={styles.topStack}>
        <div className={styles.headlineBlock}>
          <h1
            ref={headlineRef}
            aria-label={`${line1} ${line2}`}
            className="flex flex-col text-white font-normal"
            style={{ gap: 'calc(8 * var(--u))' }}
          >
            {/* Line 1: Instrument Serif Italic */}
            <span className={`block whitespace-nowrap ${styles.line1}`} aria-hidden="true">
              {line1.split('').map((char, i) => (
                <span
                  key={i}
                  className="char-span inline-block hero-reveal whitespace-pre"
                  style={{ opacity: 0 }}
                >
                  {char}
                </span>
              ))}
            </span>

            {/* Line 2: Instrument Sans */}
            <span className={`block whitespace-nowrap ${styles.line2}`} aria-hidden="true">
              {line2.split('').map((char, i) => (
                <span
                  key={i}
                  className="char-span inline-block hero-reveal whitespace-pre"
                  style={{ opacity: 0 }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>
        </div>

        {/* Lead Paragraph */}
        <p
          ref={leadRef}
          className={`hero-reveal text-white font-medium opacity-0 ${styles.leadParagraph}`}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--body-size)',
            lineHeight: 'var(--body-leading)',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 14px rgba(0,0,0,0.9), 0 0 25px rgba(255,255,255,0.15)',
          }}
        >
          We build our own applications. Nablai is an independent software studio and AI engineering lab founded by Onur &amp; Karim.
        </p>
      </div>

      {/* 4. Action Block */}
      <div
        ref={actionRef}
        className={`hero-reveal opacity-0 flex flex-col items-start ${styles.actionBlock}`}
      >
        <p
          className="text-white font-medium"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--body-size)',
            lineHeight: 'var(--body-leading)',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 14px rgba(0,0,0,0.9), 0 0 25px rgba(255,255,255,0.15)',
          }}
        >
          We are the builders. We design, code, and deploy our own products &mdash; exploring the frontier of autonomous intelligence and practical software utility.
        </p>

        {/* CTA Button - Links to Portfolio */}
        <a
          href="#apps"
          className={`inline-flex items-center justify-center gap-2 font-medium text-zinc-950 bg-white hover:bg-zinc-100 transition-all duration-200 active:scale-95 text-center shadow-lg border border-white/60 rounded-full ${styles.actionBtn}`}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'calc(17 * var(--u))',
            letterSpacing: '-0.02em',
          }}
        >
          <Sparkles className="w-4 h-4 text-zinc-950" />
          <span>Explore Our Apps</span>
        </a>
      </div>

      {/* 5. Bottom Bar */}
      <div
        ref={bottomBarRef}
        className={`hero-reveal opacity-0 flex items-center justify-between text-white ${styles.bottomBar}`}
        style={{
          fontFamily: 'var(--font-sans)',
          letterSpacing: '-0.03em',
        }}
      >
        {/* Left: Scroll indicator */}
        <div className="flex items-center" style={{ gap: 'calc(12 * var(--u))' }}>
          <div
            className="flex items-center justify-center rounded-full bg-white text-black shadow-md flex-shrink-0"
            style={{
              width: 'calc(33 * var(--u))',
              height: 'calc(33 * var(--u))',
              fontSize: 'calc(18 * var(--u))',
            }}
          >
            <ArrowDown className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="truncate text-zinc-300">Scroll down for our portfolio</span>
        </div>

        {/* Right: Year Range */}
        <div className="font-mono text-xs sm:text-sm opacity-90 text-zinc-400 whitespace-nowrap pl-2">
          20&ndash;26 &middot; Nablai Studio
        </div>
      </div>
    </section>
  )
}

export default InteractiveHero
