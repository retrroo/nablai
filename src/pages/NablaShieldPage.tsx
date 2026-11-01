import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Shield,
  ShieldCheck,
  Zap,
  EyeOff,
  Cpu,
  Download,
  Terminal,
  Lock,
  Sparkles,
  Sliders,
} from 'lucide-react'
import { GithubIcon } from '../components/Icons'

export const NablaShieldPage: React.FC = () => {
  const techStack = [
    { label: 'Language & Runtime', value: 'Vanilla JavaScript (ES2024, zero dependencies)' },
    { label: 'Extension Specification', value: 'Chromium Manifest V3 (MV3 Service Worker)' },
    { label: 'Network Interception', value: 'chrome.declarativeNetRequest (Kernel-level rule engine)' },
    { label: 'Cosmetic Engine', value: '0ms optimistic CSS injection at document_start' },
    { label: 'Consent Automation', value: 'Automated CMP dismissal (OneTrust, Cookiebot, Didomi, etc.)' },
    { label: 'Video Ad Mitigation', value: 'Main-world canary injection + player payload sanitizer + 16x skip' },
    { label: 'Heuristic Classification', value: 'On-device IAB aspect ratio & URL entropy scoring (Zero cloud APIs)' },
    { label: 'Telemetry & Privacy', value: '100% Local execution. Zero cloud calls, Zero tracking' },
  ]

  const defenseLayers = [
    {
      layer: 'Layer 1',
      title: 'Declarative Net Request (DNR)',
      subtitle: 'Zero runtime CPU overhead',
      description:
        'Leverages Chromium\'s native kernel-level declarativeNetRequest API to block known advertising, telemetric, and third-party tracking network requests before byte transfer begins.',
      icon: Shield,
    },
    {
      layer: 'Layer 2',
      title: 'Zero-Latency Cosmetic & Cookie Engine',
      subtitle: '0ms optimistic CSS injection',
      description:
        'Injects deterministic anti-ad stylesheets at document_start to prevent layout shift (FOUC). Automatically detects CMP consent modals and programmatically triggers "Reject All" / "Necessary Only".',
      icon: EyeOff,
    },
    {
      layer: 'Layer 3',
      title: 'Stealth YouTube Mitigation & Grid Reflow',
      subtitle: 'Canary bypass + player sanitizer',
      description:
        'Injects anti-adblock canary flags in the main execution world, strips adPlacements from internal video player payloads, applies 16x speedup on ad streams, and reflows video rows so feeds have zero black gaps.',
      icon: Zap,
    },
    {
      layer: 'Layer 4',
      title: 'On-Device Heuristic Classifier',
      subtitle: 'Pure local pattern recognition',
      description:
        'Evaluates dynamic unblocked iframes and sticky overlays against IAB standard dimensions (300x250, 728x90, 160x600) and query entropy. Structural safety guardrails protect legitimate page layouts.',
      icon: Cpu,
    },
  ]

  const keyFeatures = [
    {
      title: '100% Local & Zero Telemetry',
      description:
        'All rule evaluation, DOM inspection, and whitelist checks run directly inside your browser. No remote analytics, no cloud API pings, and no telemetry sent anywhere.',
      icon: Lock,
    },
    {
      title: 'Automatic Domain Whitelist Manager',
      description:
        'Need to support a creator or access an intranet portal? Add the site to your Whitelist to automatically suspend network rules, CSS injectors, and video handlers across all subdomains.',
      icon: Sliders,
    },
    {
      title: 'Real-Time Diagnostic Console',
      description:
        'Click "Open Console" from the extension popup to view a live telemetry stream of every network rule triggered, element collapsed, and consent modal dismissed, with one-click JSON export.',
      icon: Terminal,
    },
    {
      title: 'Zero Memory Leaks & Energy Efficient',
      description:
        'Built with an event-driven background service worker that sleeps when inactive. The popup particle canvas automatically pauses offscreen for 0% background CPU and GPU usage.',
      icon: Sparkles,
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-zinc-200">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              LIVE APPLICATION // 03 · BROWSER EXTENSION
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal text-zinc-950 tracking-tight font-sans">
              Nabla Shield <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">where browsing becomes pure.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl font-sans">
              A high-performance, deterministic Manifest V3 Chromium extension engineered by Onur &amp; Karim. Delivers stealth video ad mitigation, zero-overhead network filtering, automatic cookie consent evasion, and on-device heuristic detection.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Download Button (Cosmic Starlight Theme) */}
            <a
              href="https://github.com/retrroo/nabla-ad-shield/releases/latest/download/nabla-ad-shield.zip"
              target="_blank"
              rel="noreferrer"
              className="relative overflow-hidden group px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-mono font-medium border border-zinc-800 hover:border-zinc-500 transition-all flex items-center gap-2.5 shadow-lg active:scale-95"
            >
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:12px_12px] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
                <span>DOWNLOAD EXTENSION (v1.0.0 ZIP)</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>

            {/* GitHub Repo Button */}
            <a
              href="https://github.com/retrroo/nabla-ad-shield"
              target="_blank"
              rel="noreferrer"
              className="relative overflow-hidden group px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono transition-colors flex items-center gap-2 border border-zinc-800 shadow-xs"
            >
              <GithubIcon className="w-4 h-4 text-zinc-300" />
              <span>retrroo/nabla-ad-shield</span>
            </a>
          </div>
        </div>

        {/* 15-Second Quick Install Guide Card */}
        <div className="mb-20">
          <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-950 p-8 sm:p-12 overflow-hidden shadow-xl">
            {/* Cosmic starlight texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:14px_14px] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-white text-xs font-mono font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>CHROMIUM MANIFEST V3 &middot; 15-SECOND INSTALLATION</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-normal text-white font-sans tracking-tight mb-4">
                Quick Setup into Chrome, Brave, Edge &amp; Opera
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-8 max-w-2xl">
                No complex compilation or terminal tooling required. Download the pre-built ZIP and install directly via your browser&apos;s native Extensions manager:
              </p>

              {/* 4 Steps Bento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold block mb-1">STEP 01</span>
                    <h3 className="text-sm font-medium text-white mb-1.5">Download &amp; Unzip</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Download <code className="text-zinc-200">nabla-ad-shield.zip</code> and extract it to a local folder.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold block mb-1">STEP 02</span>
                    <h3 className="text-sm font-medium text-white mb-1.5">Open Extensions</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Type <code className="text-zinc-200">chrome://extensions</code> in your URL bar and hit Enter.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold block mb-1">STEP 03</span>
                    <h3 className="text-sm font-medium text-white mb-1.5">Enable Developer Mode</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Toggle the <strong>Developer mode</strong> switch in the top-right corner to <strong className="text-white">ON</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold block mb-1">STEP 04</span>
                    <h3 className="text-sm font-medium text-white mb-1.5">Load Unpacked</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Click <strong>Load unpacked</strong> and select the extracted folder. You are protected!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-zinc-400">
                  Zero accounts &bull; Zero credit cards &bull; 100% Free &amp; Open Source
                </span>
                <a
                  href="https://github.com/retrroo/nabla-ad-shield/releases/latest/download/nabla-ad-shield.zip"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-zinc-950 font-mono text-xs font-medium hover:bg-zinc-200 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download nabla-ad-shield.zip</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Layer Defense Architecture Section */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal text-zinc-950 font-sans tracking-tight">
              The 4-Layer Defense Engine
            </h2>
            <p className="mt-2 text-sm text-zinc-600 max-w-2xl font-sans">
              Engineered from the ground up to avoid broken page layouts, eliminate anti-adblock bans, and minimize CPU cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {defenseLayers.map((layer) => {
              const Icon = layer.icon
              return (
                <div
                  key={layer.layer}
                  className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-medium">
                            {layer.layer}
                          </span>
                          <span className="text-xs font-mono text-zinc-700 font-medium">{layer.subtitle}</span>
                        </div>
                      </div>
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium text-zinc-950 mb-3 tracking-tight font-sans">
                      {layer.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                      {layer.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Why We Built It Section */}
        <div className="mb-24 p-8 sm:p-12 rounded-2xl bg-zinc-50 border border-zinc-200">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              FOUNDERS&apos; NOTE
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-zinc-950 font-sans tracking-tight mb-6">
              Why we built Nabla Shield
            </h2>
            <div className="space-y-4 text-sm text-zinc-600 leading-relaxed font-sans">
              <p>
                Modern ad blocking had become frustratingly compromised. Conventional extensions routinely break web layouts (leaving hollow black voids in content feeds), trigger aggressive anti-adblock bans (like YouTube&apos;s 3-strike playback blocks), and bundle hundreds of megabytes of heavy JavaScript that drains laptop batteries.
              </p>
              <p>
                We built <strong>Nabla Shield</strong> for our daily workflow: a lean, zero-overhead browser extension adhering strictly to Manifest V3. By utilizing kernel-level network rules, running YouTube mitigations inside the main execution world, and enforcing 100% on-device heuristic evaluation, Nabla strips away distractions without breaking the web or sending your browsing telemetry to remote servers.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-zinc-200 flex items-center gap-4 text-xs font-mono text-zinc-500">
              <span>DESIGNED &amp; ARCHITECTED BY ONUR &amp; KARIM</span>
              <span>&bull;</span>
              <span>100% FREE &amp; OPEN SOURCE</span>
            </div>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
              SPECIFICATION
            </span>
            <h2 className="text-2xl font-normal text-zinc-950 font-sans tracking-tight">
              Engineering Matrix
            </h2>
          </div>

          <div className="border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-xs">
            <div className="divide-y divide-zinc-200">
              {techStack.map((item) => (
                <div
                  key={item.label}
                  className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-zinc-50/60 transition-colors"
                >
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{item.label}</span>
                  <span className="text-xs sm:text-sm font-mono text-zinc-900 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
              UTILITY
            </span>
            <h2 className="text-2xl font-normal text-zinc-950 font-sans tracking-tight">
              Operational Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFeatures.map((feat) => {
              const Icon = feat.icon
              return (
                <div key={feat.title} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 mb-4 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-medium text-zinc-950 mb-2 font-sans tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                    {feat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NablaShieldPage
