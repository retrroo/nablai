import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { loadHeroAssets, type LoadedAssets } from '../lib/loadImages'
import { LogCanvas } from './LogCanvas'
import { StarfieldCanvas } from './StarfieldCanvas'
import { ArrowDown, Sparkles } from 'lucide-react'
import styles from './InteractiveHero.module.css'

export const InteractiveHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [assets, setAssets] = useState<LoadedAssets | null>(null)
  const [progress, setProgress] = useState(0)
  const [preloaderVisible, setPreloaderVisible] = useState(true)

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

  // Shared mutable ref for GSAP tweening zoom & pixelation (desktop)
  const introState = useRef({
    zoom: 2.6,
    pixel: 6, // log2(64) = 6
  })

  const headlineRef = useRef<HTMLHeadingElement>(null)
  const leadRef = useRef<HTMLParagraphElement>(null)
  const actionRef = useRef<HTMLDivElement>(null)
  const bottomBarRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // If mobile: skip all heavy canvas asset downloads, 8.4M pixel loops, and GSAP tweens
    if (isMobile) {
      setPreloaderVisible(false)
      return
    }

    let ctx: gsap.Context | null = null
    let isCancelled = false

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    loadHeroAssets((p) => {
      if (!isCancelled) {
        setProgress(Math.round(p * 100))
      }
    })
      .then((loaded) => {
        if (isCancelled) return
        setAssets(loaded)

        ctx = gsap.context(() => {
          if (prefersReducedMotion) {
            introState.current.zoom = 1
            introState.current.pixel = 0
            setPreloaderVisible(false)

            gsap.to(['.hero-reveal'], {
              opacity: 1,
              duration: 0.4,
              ease: 'power1.out',
              stagger: 0.05,
              clearProps: 'filter,transform',
            })
            return
          }

          const tl = gsap.timeline()

          // Preloader count to 100
          const countObj = { val: progress }
          tl.to(
            countObj,
            {
              val: 100,
              duration: 0.8,
              ease: 'power1.out',
              onUpdate: () => setProgress(Math.round(countObj.val)),
            },
            0
          )

          // Zoom 2.6x to 1x
          tl.to(
            introState.current,
            {
              zoom: 1,
              duration: 0.9,
              ease: 'expo.out',
            },
            0
          )

          // Pixelation 64px to 1px (log2 from 6 to 0)
          tl.to(
            introState.current,
            {
              pixel: 0,
              duration: 1.0,
              ease: 'none',
            },
            0
          )

          // Counter fade out
          if (counterRef.current) {
            tl.to(
              counterRef.current,
              {
                opacity: 0,
                duration: 0.4,
                ease: 'power1.in',
                onComplete: () => setPreloaderVisible(false),
              },
              0.85
            )
          }

          // M2: Reveal sequence
          const chars = headlineRef.current?.querySelectorAll('.char-span')
          if (chars && chars.length > 0) {
            tl.fromTo(
              chars,
              { opacity: 0, filter: 'blur(18px)', xPercent: -30 },
              {
                opacity: 1,
                filter: 'blur(0px)',
                xPercent: 0,
                duration: 0.8,
                ease: 'power2.out',
                stagger: 0.035,
                clearProps: 'filter,transform',
              },
              1.3
            )
          }

          // Lead blurs in
          if (leadRef.current) {
            tl.fromTo(
              leadRef.current,
              { opacity: 0, filter: 'blur(10px)' },
              {
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.6,
                ease: 'power2.out',
                clearProps: 'filter',
              },
              2.1
            )
          }

          // Bottom bar
          if (bottomBarRef.current) {
            tl.fromTo(
              bottomBarRef.current,
              { opacity: 0, filter: 'blur(10px)' },
              {
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.6,
                ease: 'power2.out',
                clearProps: 'filter',
              },
              2.5
            )
          }

          // Action block
          if (actionRef.current) {
            tl.fromTo(
              actionRef.current,
              { opacity: 0, filter: 'blur(10px)' },
              {
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.6,
                ease: 'power2.out',
                clearProps: 'filter',
              },
              2.7
            )
          }
        }, containerRef)
      })
      .catch((err) => {
        console.warn('Hero asset load note:', err)
        setPreloaderVisible(false)
        gsap.to(['.hero-reveal'], {
          opacity: 1,
          duration: 0.5,
          clearProps: 'filter,transform',
        })
      })

    return () => {
      isCancelled = true
      if (ctx) ctx.revert()
    }
  }, [isMobile])

  // Dedicated lightweight static mobile hero (0ms load, 0 CPU overhead)
  if (isMobile) {
    return (
      <section
        className="relative w-full min-h-screen overflow-hidden select-none bg-[#030307] flex flex-col justify-between px-6 pt-24 pb-8"
        style={{
          background:
            'radial-gradient(ellipse 140% 100% at 50% 10%, #1c0f3c 0%, #0e0822 40%, #060410 75%, #030307 100%)',
          transform: 'translateZ(0)',
        }}
      >
        {/* Static Cosmic Nebulae Glows (Pure 2D radial gradient, 0 GPU blur cost) */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.18) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(79, 70, 229, 0.14) 0%, transparent 70%)' }}
        />

        {/* Static Subtle Stars Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        {/* Top: Tag + Headline + Lead */}
        <div className="relative z-10 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-mono text-purple-200 tracking-tight">Independent AI Studio</span>
          </div>

          <h1 className="text-white font-normal flex flex-col gap-1 tracking-tight">
            <span
              className="font-serif italic text-5xl sm:text-6xl text-white leading-[0.95]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Every layer
            </span>
            <span
              className="font-sans text-4xl sm:text-5xl text-white font-light tracking-tight leading-[0.95]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              tells a story.
            </span>
          </h1>

          <p className="mt-6 text-sm text-zinc-300 leading-relaxed font-sans max-w-sm">
            We build our own applications. Nablai is an independent software studio and AI engineering lab founded by Onur &amp; Karim.
          </p>
        </div>

        {/* Middle: Studio Apps Quick Cards (Instant, zero blur) */}
        <div className="relative z-10 my-6 p-4 rounded-2xl bg-[#0e0a1e]/90 border border-white/10 space-y-3 shadow-md">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-2 border-b border-white/10">
            <span className="text-white font-medium">STUDIO BUILDS</span>
            <span className="text-purple-300">2026 ACTIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 text-xs">
            <a
              href="#apps"
              className="p-3 rounded-xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] transition-colors block"
            >
              <span className="text-emerald-400 font-mono text-[10px] block font-medium">01 &middot; AVIATION</span>
              <span className="text-white font-medium text-sm mt-0.5 block">AirFlow</span>
            </a>
            <a
              href="#apps"
              className="p-3 rounded-xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] transition-colors block"
            >
              <span className="text-purple-400 font-mono text-[10px] block font-medium">02 &middot; AI LAB</span>
              <span className="text-white font-medium text-sm mt-0.5 block">Latent Space</span>
            </a>
          </div>
        </div>

        {/* Bottom: Action Block & CTA */}
        <div className="relative z-10 space-y-5">
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            We are the builders. We design, code, and deploy our own products &mdash; exploring the frontier of autonomous intelligence and practical software utility.
          </p>

          <a
            href="#apps"
            className="w-full py-3.5 px-6 rounded-full font-medium text-sm text-zinc-950 bg-white hover:bg-zinc-100 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 text-center"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
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
            <span className="text-[11px] text-purple-300 font-mono">20&ndash;26 &middot; Nablai</span>
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
      className="relative w-full h-[100svh] overflow-hidden select-none bg-[#030307]"
      style={{
        background:
          'radial-gradient(ellipse 120% 100% at 50% 15%, #180d32 0%, #0d081e 35%, #070512 70%, #030307 100%)',
      }}
    >
      {/* Subtle Cosmic Nebulae Clouds */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-900/18 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-indigo-900/14 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-[250px] bg-violet-950/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Interactive Twinkling & Blinking Starfield Canvas */}
      <StarfieldCanvas className="z-0" />

      {/* Interactive Floating Tree Log Canvas (Dark Purple Moss) */}
      <LogCanvas bare={assets?.bare || null} moss={assets?.moss || null} introRef={introState} />

      {/* Preloader Counter (bottom right, active during intro) */}
      {preloaderVisible && (
        <div ref={counterRef} className={styles.counter}>
          <span>{String(progress).padStart(2, '0')}</span>
          <span style={{ fontSize: '0.25em', marginLeft: '0.04em' }}>%</span>
        </div>
      )}

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
            textShadow: '0 2px 14px rgba(0,0,0,0.8), 0 0 20px rgba(168,85,247,0.2)',
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
            textShadow: '0 2px 14px rgba(0,0,0,0.8), 0 0 20px rgba(168,85,247,0.2)',
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
          <Sparkles className="w-4 h-4 text-zinc-700" />
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
          <span className="truncate">Scroll down for our portfolio</span>
        </div>

        {/* Right: Year Range */}
        <div className="font-mono text-xs sm:text-sm opacity-90 text-purple-200 whitespace-nowrap pl-2">
          20&ndash;26 &middot; Nablai Studio
        </div>
      </div>
    </section>
  )
}
export default InteractiveHero
