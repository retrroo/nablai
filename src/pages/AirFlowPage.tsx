import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Smartphone,
  Compass,
  Radio,
  Shield,
  Cpu,
  Globe,
  Sun,
  Moon,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import { AirFlowPhoneFrame } from '../components/AirFlowPhoneFrame'
import {
  AIRFLOW_SCREENSHOTS,
  AIRFLOW_THEME_PAIRS,
  type AirFlowPairKey,
  type AirFlowThemeMode,
} from '../lib/airflowScreenshots'

type GalleryFilter = 'all' | 'light' | 'dark'

export const AirFlowPage: React.FC = () => {
  const [spotlightPair, setSpotlightPair] = useState<AirFlowPairKey>('map')
  const [spotlightTheme, setSpotlightTheme] = useState<AirFlowThemeMode>('light')
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const currentPairOption =
    AIRFLOW_THEME_PAIRS.find((p) => p.pairId === spotlightPair) ?? AIRFLOW_THEME_PAIRS[0]

  const primaryScreenId =
    spotlightTheme === 'light' ? currentPairOption.lightId : currentPairOption.darkId

  const primaryScreen =
    AIRFLOW_SCREENSHOTS.find((s) => s.id === primaryScreenId) ?? AIRFLOW_SCREENSHOTS[0]

  const filteredScreenshots =
    galleryFilter === 'all'
      ? AIRFLOW_SCREENSHOTS
      : AIRFLOW_SCREENSHOTS.filter((screen) => screen.theme === galleryFilter)

  const openLightboxById = (id: string) => {
    const idx = AIRFLOW_SCREENSHOTS.findIndex((s) => s.id === id)
    if (idx !== -1) {
      setLightboxIndex(idx)
    }
  }

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + AIRFLOW_SCREENSHOTS.length) % AIRFLOW_SCREENSHOTS.length
    )
  }

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % AIRFLOW_SCREENSHOTS.length))
  }

  useEffect(() => {
    if (lightboxIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null)
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + AIRFLOW_SCREENSHOTS.length) % AIRFLOW_SCREENSHOTS.length
        )
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % AIRFLOW_SCREENSHOTS.length
        )
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightboxIndex])

  const scrollToGallery = () => {
    const el = document.getElementById('airflow-gallery')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const activeLightboxScreen =
    lightboxIndex !== null ? AIRFLOW_SCREENSHOTS[lightboxIndex] : null

  const techStack = [
    { label: 'Language', value: 'TypeScript (Strict mode)' },
    { label: 'Mobile Framework', value: 'React Native & Expo SDK 52 (Expo Router)' },
    { label: 'GPU Graphics', value: 'React Native Skia (CanvasKit on Web) + Reanimated 4' },
    { label: 'Backend Runtime', value: 'Node.js 24' },
    { label: 'Queue & Mutex', value: 'BullMQ + Redis (Single-flight deduplication)' },
    { label: 'Database & Realtime', value: 'Supabase (PostgreSQL with RLS) + WebSockets' },
    { label: 'Aviation Datasets', value: '4,008 bundled worldwide airports, 1,200+ airline carriers' },
    { label: 'Internationalization', value: '13 languages (including RTL Arabic & Urdu)' },
  ]

  const keyFeatures = [
    {
      title: '60 FPS GPU-Accelerated Route Maps',
      description:
        'Custom interactive vector map rendered via React Native Skia. Flight great-circle arcs, airport markers, and zoom levels are calculated directly on the native UI thread without bridge lag.',
      icon: Compass,
    },
    {
      title: 'Predictive Inbound Turnaround (Where’s My Plane)',
      description:
        'Tracks the aircraft’s tail number on its previous leg in real time. If the inbound flight arrives late and breaches the turnaround buffer (60m widebody / 25m regional), AirFlow alerts the user before airlines officially post the delay.',
      icon: Radio,
    },
    {
      title: 'IATA BCBP Boarding Pass Parser',
      description:
        'Scans 2D Aztec and PDF417 boarding pass barcodes directly from camera or image files, instantly decoding passenger data, PNR, flight number, seat, and gate information locally.',
      icon: Smartphone,
    },
    {
      title: 'Single-Flight API Deduplication',
      description:
        'BullMQ worker pool backed by Redis mutex locks. When hundreds of users track the same flight, exactly one third-party API request is executed, and updates are broadcast via Supabase Realtime WebSockets.',
      icon: Shield,
    },
    {
      title: 'Zero-IO Polling State Machine (FSM)',
      description:
        'A deterministic finite state machine transitions polling intervals automatically: dormant (>7 days out), daily (7d to 24h), pre-departure (24h to 6h), and active live tracking (sub-6h). Prevents runaway API usage.',
      icon: Cpu,
    },
    {
      title: 'Full Offline Support & 13 Locales',
      description:
        'Bundles airport IATA/ICAO coordinates and carrier databases directly in the client bundle. The entire application supports 13 full languages with automatic RTL layout switching.',
      icon: Globe,
    },
  ]

  const roadmapSteps = [
    {
      step: '01',
      timeframe: 'Nov 2026 · Current Stage',
      status: 'IN PROGRESS',
      active: true,
      title: 'Early Development & Testing',
      description:
        'Building core telemetry flows, testing the flight state machine, and refining mobile screens internally.',
    },
    {
      step: '02',
      timeframe: 'Mid December 2026',
      status: 'NEXT UPDATE',
      active: false,
      title: 'Page Content Update',
      description:
        'Next update expected on this page with fresh previews, deeper feature notes, and development progress.',
    },
    {
      step: '03',
      timeframe: 'Early 2027',
      status: 'UPCOMING',
      active: false,
      title: 'Live Flight Testing',
      description:
        'End-to-end validation of inbound turnaround alerts, BCBP pass scanning, and real trip edge cases.',
    },
    {
      step: '04',
      timeframe: 'Q1 2027',
      status: 'TARGET COMPLETION',
      active: false,
      title: 'Expected v1.0 Completion',
      description:
        'Expected target window for completing AirFlow v1.0 and preparing broader availability.',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-32 pb-24 selection:bg-zinc-900 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-950 transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO NABLAI HOME</span>
        </Link>

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 pb-10 border-b border-zinc-200">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              APPLICATION // 01 &middot; AVIATION &middot; EARLY DEVELOPMENT
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal text-zinc-950 tracking-tight font-sans">
              AirFlow <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">
                personal mobile flight companion.
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl font-sans">
              A high-precision mobile flight tracking app engineered by Onur &amp; Karim. Currently in{' '}
              <strong className="font-medium text-zinc-900">early development and internal testing</strong>, built with Expo SDK 52, React Native Skia, and a Node 24 + BullMQ backend.
            </p>

            {/* Early Development & Schedule Pills */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5 text-[11px] font-mono">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span>Early Development &amp; Testing</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700">
                <Calendar className="w-3 h-3 text-zinc-500" />
                <span>Next page update: Mid December 2026</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 text-white border border-zinc-900">
                <span>Est. completion: Q1 2027</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={scrollToGallery}
              className="px-4 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-mono transition-colors flex items-center gap-2 cursor-pointer border border-zinc-200"
            >
              <span>All 9 Screenshots</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://github.com/retrroo/flight-app"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono transition-colors flex items-center gap-2 shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>retrroo/flight-app</span>
            </a>
          </div>
        </div>

        {/* Left-to-Right Development Roadmap */}
        <section aria-labelledby="airflow-roadmap-heading" className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-1.5">
                PROJECT ROADMAP &middot; LEFT TO RIGHT
              </span>
              <h2
                id="airflow-roadmap-heading"
                className="text-xl sm:text-2xl font-normal text-zinc-950 tracking-tight font-sans"
              >
                Development Status &amp; Release Path
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-500">
              Now: Early Development &rarr; Next Update: Mid Dec &rarr; Target: Q1 2027
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmapSteps.map((item, idx) => (
              <div
                key={item.step}
                className={`relative rounded-2xl border p-5 flex flex-col justify-between transition-colors ${
                  item.active
                    ? 'bg-zinc-950 text-white border-zinc-900 shadow-lg'
                    : 'bg-zinc-50 text-zinc-900 border-zinc-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-current/10 text-[11px] font-mono">
                    <span className={item.active ? 'text-amber-400 font-semibold' : 'text-zinc-500'}>
                      {item.step} / {item.status}
                    </span>
                    {idx < roadmapSteps.length - 1 && (
                      <ArrowRight
                        className={`hidden lg:block w-3.5 h-3.5 shrink-0 ${
                          item.active ? 'text-zinc-500' : 'text-zinc-400'
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <span
                    className={`inline-block text-[11px] font-mono mb-1.5 ${
                      item.active ? 'text-emerald-400' : 'text-zinc-500'
                    }`}
                  >
                    {item.timeframe}
                  </span>
                  <h3
                    className={`text-base font-medium tracking-tight font-sans mb-1.5 ${
                      item.active ? 'text-white' : 'text-zinc-950'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed font-sans ${
                      item.active ? 'text-zinc-300' : 'text-zinc-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Progress Bar Indicator */}
                <div className="mt-4 pt-3 border-t border-current/10 flex items-center gap-2">
                  <span
                    className={`h-1.5 flex-1 rounded-full ${
                      item.active
                        ? 'bg-gradient-to-r from-amber-400 to-emerald-400'
                        : idx === 1
                          ? 'bg-zinc-300'
                          : 'bg-zinc-200'
                    }`}
                  />
                  <span
                    className={`text-[10px] font-mono shrink-0 ${
                      item.active ? 'text-zinc-300' : 'text-zinc-400'
                    }`}
                  >
                    {item.active ? 'ACTIVE' : `STEP ${item.step}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Dual-Theme Spotlight Showcase */}
        <div className="mb-20">
          <div className="relative rounded-3xl border border-zinc-800/90 bg-zinc-950 p-5 sm:p-10 lg:p-12 overflow-hidden shadow-2xl text-white">
            {/* Subtle starlight texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:14px_14px] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/40 pointer-events-none" />

            {/* Top Control Bar */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 text-xs font-mono text-zinc-200 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>UI Showcase &middot; Light &amp; Dark</span>
              </div>

              {/* Adaptive Light / Dark Mode Switcher (fixed button widths prevent layout shift) */}
              <div
                className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/[0.06] border border-white/10 w-fit shrink-0"
                role="group"
                aria-label="Preview appearance mode"
              >
                <button
                  type="button"
                  onClick={() => setSpotlightTheme('light')}
                  className={`inline-flex items-center justify-center gap-1.5 w-[118px] h-[38px] rounded-lg border text-xs font-mono font-medium transition-colors cursor-pointer ${
                    spotlightTheme === 'light'
                      ? 'bg-white text-zinc-950 border-white shadow-sm'
                      : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 shrink-0" />
                  <span>Light Mode</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSpotlightTheme('dark')}
                  className={`inline-flex items-center justify-center gap-1.5 w-[118px] h-[38px] rounded-lg border text-xs font-mono font-medium transition-colors cursor-pointer ${
                    spotlightTheme === 'dark'
                      ? 'bg-zinc-800 text-white border-white/20 shadow-sm'
                      : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5 shrink-0" />
                  <span>Dark Mode</span>
                </button>
              </div>
            </div>

            {/* Split Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left: Narrative + Screen Selector */}
              <div className="lg:col-span-5 min-w-0 space-y-6">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase block mb-2">
                    DUAL-THEME ARCHITECTURE
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-normal text-white tracking-tight font-sans leading-tight">
                    Adaptive telemetry <br className="hidden sm:inline" />
                    <span className="font-serif italic text-zinc-400">daylight to night cabin.</span>
                  </h2>
                </div>

                {/* Screen Selector Pills */}
                <div className="space-y-2.5">
                  {AIRFLOW_THEME_PAIRS.map((pair) => {
                    const active = spotlightPair === pair.pairId
                    return (
                      <button
                        key={pair.pairId}
                        type="button"
                        onClick={() => setSpotlightPair(pair.pairId)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                          active
                            ? 'bg-white/[0.1] border-white/30 text-white shadow-sm'
                            : 'bg-white/[0.03] border-white/10 text-zinc-400 hover:bg-white/[0.06] hover:text-zinc-200'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="text-sm font-medium tracking-tight truncate">
                            {pair.label}
                          </div>
                          <div className="text-[11px] font-mono text-zinc-400 truncate mt-0.5">
                            {pair.sublabel}
                          </div>
                        </div>
                        <span
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            active ? 'bg-emerald-400' : 'bg-zinc-700'
                          }`}
                        />
                      </button>
                    )
                  })}
                </div>

                {/* Selected Screen Highlights (min-h locks vertical height across switches) */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5 lg:min-h-[224px]">
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
                    <span className="truncate">{primaryScreen.caption}</span>
                    <span className="uppercase text-emerald-400 font-semibold shrink-0 tabular-nums">
                      {spotlightTheme} active
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans lg:min-h-[66px]">
                    {primaryScreen.description}
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    {primaryScreen.highlights.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-[11px] font-mono text-zinc-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => openLightboxById(primaryScreen.id)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-mono font-semibold transition-all cursor-pointer active:scale-95"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect Full Resolution</span>
                  </button>
                  <span className="text-[11px] font-mono text-zinc-500">
                    Click device preview to zoom
                  </span>
                </div>
              </div>

              {/* Right: Locked-Position & Locked-Size Single iPhone 18 Pro Max */}
              <div className="lg:col-span-7 min-w-0 flex flex-col items-center justify-start pt-1 lg:pt-2">
                <button
                  type="button"
                  onClick={() => openLightboxById(primaryScreen.id)}
                  className="group relative w-[280px] sm:w-[324px] aspect-[476/1000] shrink-0 text-left cursor-pointer focus:outline-none"
                  aria-label={`Zoom ${primaryScreen.title}`}
                >
                  <AirFlowPhoneFrame
                    screen={primaryScreen}
                    size="large"
                    eager
                    className="w-full"
                  />
                  <span className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-zinc-950/90 border border-white/20 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 whitespace-nowrap shadow-lg">
                    <Maximize2 className="w-3 h-3" />
                    <span>Click to zoom</span>
                  </span>
                </button>

                <div className="mt-4 h-6 flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-300 whitespace-nowrap">
                  {spotlightTheme === 'light' ? (
                    <Sun className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  ) : (
                    <Moon className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                  )}
                  <span>iPhone 18 Pro Max &middot; {primaryScreen.shortLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete 9-Screen Interactive Interface Gallery */}
        <div id="airflow-gallery" className="scroll-mt-28 mb-20 pb-16 border-b border-zinc-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-zinc-200">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
                01 // COMPLETE MOBILE INTERFACE ({AIRFLOW_SCREENSHOTS.length} SCREENS)
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal text-zinc-950 tracking-tight font-sans">
                Every Screen in AirFlow <br className="hidden sm:inline" />
                <span className="font-serif italic font-normal text-zinc-600">
                  crafted for calm airport &amp; in-flight clarity.
                </span>
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              {(
                [
                  { key: 'all', label: `All Screens (${AIRFLOW_SCREENSHOTS.length})` },
                  {
                    key: 'light',
                    label: `Light Mode (${AIRFLOW_SCREENSHOTS.filter((s) => s.theme === 'light').length})`,
                  },
                  {
                    key: 'dark',
                    label: `Dark Mode (${AIRFLOW_SCREENSHOTS.filter((s) => s.theme === 'dark').length})`,
                  },
                ] as const
              ).map((tab) => {
                const isActive = galleryFilter === tab.key
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setGalleryFilter(tab.key)}
                    className={`px-3.5 py-2 rounded-xl border font-medium transition-colors cursor-pointer min-h-[40px] ${
                      isActive
                        ? 'bg-zinc-950 text-white border-zinc-950 shadow-xs'
                        : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950'
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 3-Column Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredScreenshots.map((screen) => {
              const isDark = screen.theme === 'dark'
              return (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => openLightboxById(screen.id)}
                  className={`group text-left rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer relative overflow-hidden ${
                    isDark
                      ? 'bg-zinc-950 border-zinc-800 hover:border-zinc-500 text-white shadow-lg'
                      : 'bg-zinc-50 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-100/50 text-zinc-950'
                  }`}
                >
                  {isDark && (
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:14px_14px] opacity-15 pointer-events-none" />
                  )}

                  {/* Top Metadata Bar */}
                  <div
                    className={`relative z-10 w-full flex items-center justify-between pb-4 mb-5 border-b text-[11px] font-mono ${
                      isDark ? 'border-white/10 text-zinc-400' : 'border-zinc-200 text-zinc-500'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={isDark ? 'text-white font-semibold' : 'text-zinc-900 font-semibold'}>
                        {screen.indexLabel}
                      </span>
                      <span className={isDark ? 'text-zinc-600' : 'text-zinc-300'}>/</span>
                      <span>{screen.category}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] border ${
                          isDark
                            ? 'bg-white/10 border-white/15 text-zinc-200'
                            : 'bg-white border-zinc-200 text-zinc-700'
                        }`}
                      >
                        {isDark ? <Moon className="w-2.5 h-2.5" /> : <Sun className="w-2.5 h-2.5" />}
                        <span>{isDark ? 'DARK' : 'LIGHT'}</span>
                      </span>
                      <Maximize2
                        className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${
                          isDark ? 'text-zinc-400 group-hover:text-white' : 'text-zinc-400 group-hover:text-zinc-900'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Centered Phone Frame */}
                  <div className="relative z-10 w-[258px] max-w-full mx-auto my-2">
                    <AirFlowPhoneFrame
                      screen={screen}
                      size="standard"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-1.5"
                    />
                  </div>

                  {/* Screen Caption & Description */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-dashed border-current/15 w-full">
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h3
                        className={`text-base font-medium tracking-tight font-sans ${
                          isDark ? 'text-white' : 'text-zinc-950'
                        }`}
                      >
                        {screen.title}
                      </h3>
                    </div>
                    <span
                      className={`inline-block text-[11px] font-mono mb-2 ${
                        isDark ? 'text-emerald-400' : 'text-zinc-600'
                      }`}
                    >
                      {screen.caption}
                    </span>
                    <p
                      className={`text-xs leading-relaxed font-sans ${
                        isDark ? 'text-zinc-400' : 'text-zinc-600'
                      }`}
                    >
                      {screen.description}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Purpose & Why We Built It */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 pb-16 border-b border-zinc-200">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
              PURPOSE &amp; GOAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
              Why we built AirFlow
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
            <p>
              Commercial airline apps are notoriously bloated with hotel promotions, car rentals, and ads. More importantly, when flights are delayed, airlines often delay announcing it until passengers are already waiting at the gate.
            </p>
            <p>
              We built <strong>AirFlow</strong> for our own travels: a clean, utility-first mobile app that focuses entirely on accurate flight data. By tracking the exact aircraft&apos;s prior inbound flight, AirFlow calculates turnaround margins and informs us of realistic departure delays before the airport displays do.
            </p>
          </div>
        </div>

        {/* Tech Stack & Languages (Clean Ledger) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                TECHNOLOGY FOUNDATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
                Tech Stack &amp; Programming Languages
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-500 hidden sm:block">
              100% Strict TypeScript
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {techStack.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between"
              >
                <span className="text-zinc-500 text-[11px] uppercase tracking-wider block mb-2">
                  {item.label}
                </span>
                <span className="text-zinc-950 font-medium text-sm leading-snug">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Architecture Features */}
        <div>
          <div className="mb-8 pb-4 border-b border-zinc-200">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
              ENGINEERING ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
              Key Architecture &amp; Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-800 mb-4 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-normal text-zinc-950 font-sans tracking-tight mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Full-Resolution Interactive Lightbox Modal */}
      {activeLightboxScreen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex flex-col justify-between text-white"
          style={{
            paddingTop: 'max(1rem, env(safe-area-inset-top, 0px))',
            paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 0px))',
            paddingLeft: 'max(1rem, env(safe-area-inset-left, 0px))',
            paddingRight: 'max(1rem, env(safe-area-inset-right, 0px))',
          }}
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxScreen.title}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="max-w-5xl w-full mx-auto shrink-0 flex items-center justify-between gap-4 pb-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 font-mono text-xs text-zinc-200 shrink-0 tabular-nums">
                {activeLightboxScreen.indexLabel} / 0{AIRFLOW_SCREENSHOTS.length}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-medium text-white truncate">
                  {activeLightboxScreen.title}
                </h3>
                <p className="text-[11px] font-mono text-zinc-400 truncate">
                  {activeLightboxScreen.caption} &middot;{' '}
                  {activeLightboxScreen.theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
              aria-label="Close screenshot viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Display + Prev/Next (phone size & coordinates strictly locked across slides) */}
          <div
            className="max-w-5xl w-full mx-auto flex-1 flex items-center justify-center gap-2 sm:gap-10 py-1 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handlePrevLightbox}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div
              className="shrink-0 aspect-[476/1000]"
              style={{ width: 'min(calc(100vw - 136px), calc(71dvh * 0.476), 344px)' }}
            >
              <AirFlowPhoneFrame
                screen={activeLightboxScreen}
                size="large"
                eager
                className="w-full"
              />
            </div>

            <button
              type="button"
              onClick={handleNextLightbox}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Fixed-height Caption Row outside centering container */}
          <div
            className="hidden sm:flex shrink-0 items-center justify-center h-[38px] max-w-2xl w-full mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-center text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed line-clamp-2">
              {activeLightboxScreen.description}
            </p>
          </div>

          {/* Bottom Strip: Single non-wrapping Switcher across all 9 Screens */}
          <div
            className="max-w-6xl w-full mx-auto shrink-0 pt-2.5 border-t border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center lg:justify-center flex-nowrap gap-1.5 sm:gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {AIRFLOW_SCREENSHOTS.map((screen, idx) => {
                const isSelected = idx === lightboxIndex
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-mono font-medium whitespace-nowrap transition-colors cursor-pointer border shrink-0 tabular-nums ${
                      isSelected
                        ? 'bg-white text-zinc-950 border-white shadow-xs'
                        : 'bg-white/[0.06] text-zinc-300 border-white/10 hover:bg-white/15'
                    }`}
                  >
                    {screen.indexLabel} &middot; {screen.lightboxLabel}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default AirFlowPage
