import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { loadHeroAssets, type LoadedAssets } from '../lib/loadImages'
import { LogCanvas } from './LogCanvas'
import { ArrowDown } from 'lucide-react'

export const InteractiveHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [assets, setAssets] = useState<LoadedAssets | null>(null)
  const [progress, setProgress] = useState(0)
  const [preloaderVisible, setPreloaderVisible] = useState(true)

  // Shared mutable ref for GSAP tweening zoom & pixelation
  const introState = useRef({
    zoom: 2.6,
    pixel: 6, // log2(64) = 6
  })

  const headlineRef = useRef<HTMLHeadingElement>(null)
  const leadRef = useRef<HTMLParagraphElement>(null)
  const actionRef = useRef<HTMLDivElement>(null)
  const bottomBarRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
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
          // Character reveal for headline
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
        // Fallback reveals even without webp images
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
  }, [])

  const line1 = 'Every layer'
  const line2 = 'tells a story.'

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] overflow-hidden select-none"
      style={{
        background:
          'radial-gradient(ellipse 100% 100% at 50% 100%, var(--sky-0) 0%, var(--sky-1) 27.5%, var(--sky-2) 55%, var(--sky-3) 77.5%, var(--sky-4) 100%)',
      }}
    >
      {/* Interactive Log Canvas with moss cursor mask */}
      <LogCanvas bare={assets?.bare || null} moss={assets?.moss || null} introRef={introState} />

      {/* Preloader Counter (bottom right, active during intro) */}
      {preloaderVisible && (
        <div
          ref={counterRef}
          className="absolute z-40 pointer-events-none flex items-baseline font-mono text-white tracking-tighter"
          style={{
            right: 'calc(40 * var(--u))',
            bottom: 'calc(38 * var(--u))',
            fontFamily: 'var(--font-sans)',
            fontSize: 'calc(170 * var(--u))',
            lineHeight: 1,
            textShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }}
        >
          <span>{String(progress).padStart(2, '0')}</span>
          <span style={{ fontSize: '0.25em', marginLeft: '0.04em' }}>%</span>
        </div>
      )}

      {/* 3. Headline (Top Left) */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{
          left: 'calc(28 * var(--u))',
          top: 'calc(114.5 * var(--u))',
        }}
      >
        <h1
          ref={headlineRef}
          aria-label={`${line1} ${line2}`}
          className="flex flex-col text-white font-normal"
          style={{ gap: 'calc(8 * var(--u))' }}
        >
          {/* Line 1: Instrument Serif Italic */}
          <span
            className="block whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'calc(184 * var(--u))',
              letterSpacing: '-0.06em',
              lineHeight: 0.85,
            }}
            aria-hidden="true"
          >
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
          <span
            className="block whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'calc(170 * var(--u))',
              letterSpacing: '-0.06em',
              lineHeight: 0.85,
            }}
            aria-hidden="true"
          >
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

      {/* Lead Paragraph (Top Right, x = 1087 at 1440) */}
      <p
        ref={leadRef}
        className="hero-reveal absolute z-20 pointer-events-none text-white font-medium opacity-0"
        style={{
          top: 'calc(162 * var(--u))',
          right: 'calc(34 * var(--u))',
          width: 'calc(319 * var(--u))',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--body-size)',
          lineHeight: 'var(--body-leading)',
          letterSpacing: '-0.02em',
          textShadow: '0 2px 10px rgba(0,0,0,0.15)',
        }}
      >
        Turn forgotten records, scattered logs, and silent activity into autonomous intelligence.
      </p>

      {/* 4. Action Block (Bottom Right) */}
      <div
        ref={actionRef}
        className="hero-reveal absolute z-20 opacity-0 flex flex-col items-start pointer-events-auto"
        style={{
          right: 'calc(28 * var(--u))',
          bottom: 'calc(89 * var(--u))',
          width: 'calc(325 * var(--u))',
          gap: 'calc(28 * var(--u))',
        }}
      >
        <p
          className="text-white font-medium"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--body-size)',
            lineHeight: 'var(--body-leading)',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 10px rgba(0,0,0,0.15)',
          }}
        >
          <strong className="text-white font-bold">Nablai</strong> transforms historical data into structured decisions &mdash; without losing the story behind it.
        </p>

        {/* CTA Button */}
        <a
          href="#diensten"
          className="inline-flex items-center justify-center font-normal transition-transform duration-200 hover:scale-[1.03] active:scale-95 text-center"
          style={{
            width: 'calc(207 * var(--u))',
            height: 'calc(61 * var(--u))',
            borderRadius: '99px',
            backgroundColor: '#D0F24B',
            color: '#17242B',
            fontFamily: 'var(--font-sans)',
            fontSize: 'calc(18 * var(--u))',
            letterSpacing: '-0.04em',
            boxShadow: '0 8px 30px rgba(208, 242, 75, 0.35)',
          }}
        >
          Start uncovering
        </a>
      </div>

      {/* 5. Bottom Bar */}
      <div
        ref={bottomBarRef}
        className="hero-reveal absolute z-20 opacity-0 flex items-center justify-between text-white pointer-events-none"
        style={{
          left: 'calc(28 * var(--u))',
          right: 'calc(28 * var(--u))',
          bottom: 'calc(28 * var(--u))',
          fontFamily: 'var(--font-sans)',
          fontSize: 'calc(18 * var(--u))',
          letterSpacing: '-0.03em',
        }}
      >
        {/* Left: Scroll indicator */}
        <div className="flex items-center" style={{ gap: 'calc(12 * var(--u))' }}>
          <div
            className="flex items-center justify-center rounded-full bg-white text-black shadow-md"
            style={{
              width: 'calc(33 * var(--u))',
              height: 'calc(33 * var(--u))',
              fontSize: 'calc(18 * var(--u))',
            }}
          >
            <ArrowDown className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span>Scroll down for more</span>
        </div>

        {/* Right: Year Range */}
        <div className="font-mono text-sm opacity-90">
          20&ndash;26 &middot; Nablai
        </div>
      </div>
    </section>
  )
}
export default InteractiveHero
