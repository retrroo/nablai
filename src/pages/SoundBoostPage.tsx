import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Volume2,
  Sliders,
  Maximize2,
  Zap,
  Activity,
  ShieldCheck,
  Download,
  Terminal,
  Lock,
  Sparkles,
} from 'lucide-react'
import { GithubIcon, ChromeIcon } from '../components/Icons'

export const SoundBoostPage: React.FC = () => {
  const techStack = [
    { label: 'Language & Runtime', value: 'Vanilla JavaScript (ES2024, zero dependencies)' },
    { label: 'Extension Specification', value: 'Chromium Manifest V3 (Main World & Isolated Bridge)' },
    { label: 'Audio Engine', value: 'Web Audio API (AudioContext, GainNode, DynamicsCompressorNode)' },
    { label: 'Equalizer Topology', value: '5-Band Parametric BiquadFilter (LowShelf, 3x Peaking, HighShelf)' },
    { label: 'Capture Architecture', value: 'Direct DOM Hook (createMediaElementSource, world: "MAIN")' },
    { label: 'Audio Latency', value: '0ms Real-Time Routing (Eliminates 150-300ms WebRTC buffer delay)' },
    { label: 'Fullscreen Protocol', value: '100% Native OS HTML5 requestFullscreen() with GPU acceleration' },
    { label: 'Telemetry & Privacy', value: '100% Local Execution. Zero cloud calls, Zero trackers' },
  ]

  const architecturePillars = [
    {
      pillar: 'Pillar 1',
      title: 'Direct DOM Web Audio Hook',
      subtitle: 'No WebRTC stream trap',
      description:
        'Instead of calling legacy chrome.tabCapture which traps tabs in a simulated WebRTC stream, SoundBoost directly hooks HTMLMediaElement nodes via createMediaElementSource in the main world. Native OS fullscreen remains 100% intact with zero blue warning banners.',
      icon: Maximize2,
    },
    {
      pillar: 'Pillar 2',
      title: 'Studio Dynamics Compression',
      subtitle: 'Anti-clipping & anti-distortion',
      description:
        'Prevents digital square-wave clipping when boosting audio up to 600%. A precision DynamicsCompressorNode (-6 dB threshold, 8:1 ratio, 3ms attack) transparently tames transient peaks while maintaining crisp, punchy audio fidelity.',
      icon: Activity,
    },
    {
      pillar: 'Pillar 3',
      title: '5-Band Parametric Studio EQ',
      subtitle: 'Sub-bass to high air',
      description:
        'Five tuned biquad filters spanning 60 Hz (sub rumble), 250 Hz (bass warmth), 1,000 Hz (vocal midrange), 4,000 Hz (presence & snare snap), and 12,000 Hz (high acoustic sparkle). Includes Flat, Bass Boost, Vocal Clarity, and Late Night presets.',
      icon: Sliders,
    },
    {
      pillar: 'Pillar 4',
      title: '0ms Latency & Lip-Sync Precision',
      subtitle: 'Zero audio-video desync',
      description:
        'Traditional boosters introduce 150ms to 300ms of buffer lag while encoding audio frames. SoundBoost routes signals directly to the hardware audio destination in real time, guaranteeing exact lip-sync alignment for gaming, movies, and streams.',
      icon: Zap,
    },
  ]

  const comparisonRows = [
    {
      metric: 'Native OS Fullscreen',
      legacy: 'Broken. Traps tab in simulated WebRTC stream window.',
      soundboost: '100% Native. True OS-level requestFullscreen() with GPU scaling.',
    },
    {
      metric: 'Capture Method',
      legacy: 'chrome.tabCapture.capture() (Simulated screen recording).',
      soundboost: 'Direct DOM Web Audio Hook (world: "MAIN" via createMediaElementSource).',
    },
    {
      metric: 'Browser Warning',
      legacy: 'Persistent blue "This tab is being shared" banner.',
      soundboost: 'Zero banners or warnings. Runs natively and invisibly.',
    },
    {
      metric: 'Audio Latency',
      legacy: '150ms - 300ms WebRTC buffer delay (noticeable desync).',
      soundboost: '0ms delay. Real-time direct Web Audio node routing.',
    },
    {
      metric: 'High Gain Audio Quality',
      legacy: 'Severe digital clipping and harsh square-wave distortion.',
      soundboost: 'Dynamics Compressor Protection (-6dB threshold, 8:1 ratio) for crisp sound.',
    },
    {
      metric: 'Equalizer Control',
      legacy: 'None, or crude 3-band slider without Q-factor control.',
      soundboost: 'Studio 5-Band Parametric EQ with customizable profiles & presets.',
    },
    {
      metric: 'Privacy & Telemetry',
      legacy: 'Sluggish with third-party tracking & ad scripts.',
      soundboost: '100% Local, Zero trackers, Zero remote calls, MIT Open Source.',
    },
  ]

  const keyFeatures = [
    {
      title: '100% Local & Zero Telemetry',
      description:
        'All volume calculations, equalizer curves, and domain profiles are stored locally in chrome.storage.local. No analytics, no accounts, and no data transmitted across the network.',
      icon: Lock,
    },
    {
      title: 'Automatic Node Recovery',
      description:
        'Single Page Applications (SPAs) like YouTube and Netflix continuously swap video elements into the DOM. SoundBoost automatically detects element replacements and reconnects the Web Audio graph seamlessly.',
      icon: Volume2,
    },
    {
      title: 'Custom Equalizer Profiles',
      description:
        'Save, rename, and switch custom EQ curves with instant synchronization across active tabs. Perfect for tuning specific headphones or compensating for poor laptop speakers.',
      icon: Sliders,
    },
    {
      title: 'Unslop Minimalist UI',
      description:
        'Engineered in alignment with the Unslop craft standard: dual dark/light modes, Nablai ambient particles, monospace tabular readouts to prevent visual jitter, and instant diagnostic telemetry.',
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
<div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                LIVE APPLICATION // 04 &mdash; BROWSER EXTENSION
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-mono text-emerald-700 font-semibold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                LIVE ON CHROME WEB STORE
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-normal text-zinc-950 tracking-tight font-sans">
              SoundBoost <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">600% volume boost &amp; 5-band studio EQ.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl font-sans">
              The next-generation Chrome tab volume booster engineered by Onur &amp; Karim. Boost tab volume up to 600% with studio dynamics compression, 5-band parametric equalization, and zero audio clipping, all without breaking native HTML5 fullscreen or introducing lip-sync lag.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Chrome Web Store Primary Button (Cosmic Starlight Theme) */}
            <a
              href="https://chromewebstore.google.com/detail/soundboost-by-nablai/emaelncbflkcicnceecglgbfpjcikjfj"
              target="_blank"
              rel="noreferrer"
              className="relative overflow-hidden group px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-mono font-medium border border-zinc-800 hover:border-zinc-500 transition-all flex items-center gap-2.5 shadow-lg active:scale-95"
            >
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:12px_12px] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
              <span className="relative z-10 flex items-center gap-2">
                <ChromeIcon className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>ADD TO CHROME &mdash; FREE</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>

            {/* GitHub Repo Button */}
            <a
              href="https://github.com/retrroo/soundboost-by-nablai"
              target="_blank"
              rel="noreferrer"
              className="relative overflow-hidden group px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono transition-colors flex items-center gap-2 border border-zinc-800 shadow-xs"
            >
              <GithubIcon className="w-4 h-4 text-zinc-300" />
              <span>SOURCE (GITHUB)</span>
            </a>
          </div>
        </div>

        {/* Chrome Web Store Live & Direct Install Card */}
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
                <span>OFFICIAL GOOGLE CHROME EXTENSION &middot; 1-CLICK INSTALL</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-normal text-white font-sans tracking-tight mb-4">
                Available Now on the Chrome Web Store
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-8 max-w-2xl">
                Officially reviewed and verified by Google. Install with one click directly into Chrome, Brave, Microsoft Edge, Opera, or any Chromium browser:
              </p>

              {/* 3 Steps Bento */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold block mb-1">STEP 01</span>
                    <h3 className="text-sm font-medium text-white mb-1.5">Open Web Store</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Visit the official SoundBoost extension page on the Chrome Web Store.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold block mb-1">STEP 02</span>
                    <h3 className="text-sm font-medium text-white mb-1.5">Click &ldquo;Add to Chrome&rdquo;</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Confirm the browser prompt to install SoundBoost in seconds.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold block mb-1">STEP 03</span>
                    <h3 className="text-sm font-medium text-white mb-1.5">Pin &amp; Boost</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Pin the SoundBoost icon to your toolbar and boost any quiet tab up to 600%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="text-emerald-400 font-medium">&bull; Verified MV3 Extension</span>
                  <span>&bull; Zero ads &bull; Zero trackers &bull; 100% Free</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://chromewebstore.google.com/detail/soundboost-by-nablai/emaelncbflkcicnceecglgbfpjcikjfj"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-mono text-xs font-semibold transition-all shadow-md active:scale-95"
                  >
                    <ChromeIcon className="w-3.5 h-3.5" />
                    <span>Get on Chrome Web Store &rarr;</span>
                  </a>
                  <a
                    href="https://github.com/retrroo/soundboost-by-nablai/releases/latest/download/soundboost-by-nablai.zip"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 font-mono text-xs border border-white/10 transition-colors"
                    title="Manual ZIP for offline developer install"
                  >
                    <Download className="w-3 h-3 text-zinc-400" />
                    <span>Download ZIP (v1.0.0)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison: SoundBoost vs Legacy Boosters */}
        <div className="mb-24">
          <div className="mb-10">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              ARCHITECTURAL BENCHMARK
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal text-zinc-950 font-sans tracking-tight">
              SoundBoost vs. Legacy Boosters
            </h2>
            <p className="mt-2 text-sm text-zinc-600 max-w-2xl font-sans">
              Why Volume Master and older extensions break fullscreen, distort high frequencies, and introduce lip-sync delay.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/70 text-zinc-500 font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-4 px-6">Capability / Metric</th>
                    <th className="py-4 px-6 text-zinc-500">Legacy Boosters (Volume Master)</th>
                    <th className="py-4 px-6 text-zinc-950 font-semibold">SoundBoost by Nablai &#x2728;</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {comparisonRows.map((row) => (
                    <tr key={row.metric} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-4 px-6 font-mono text-xs text-zinc-900 font-medium whitespace-nowrap">
                        {row.metric}
                      </td>
                      <td className="py-4 px-6 text-zinc-500 leading-relaxed font-sans">
                        {row.legacy}
                      </td>
                      <td className="py-4 px-6 text-zinc-950 font-medium leading-relaxed font-sans bg-zinc-50/40">
                        {row.soundboost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 4 Architectural Pillars */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              AUDIO DSP PIPELINE
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal text-zinc-950 font-sans tracking-tight">
              DSP Architecture &amp; Sound Pipeline
            </h2>
            <p className="mt-2 text-sm text-zinc-600 max-w-2xl font-sans">
              Engineered with studio dynamics compression to eliminate harsh digital clipping while delivering uncompressed 0ms audio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architecturePillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.pillar}
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
                            {pillar.pillar}
                          </span>
                          <span className="text-xs font-mono text-zinc-700 font-medium">{pillar.subtitle}</span>
                        </div>
                      </div>
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium text-zinc-950 mb-3 tracking-tight font-sans">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Audio Pipeline ASCII / Flow Box */}
        <div className="mb-24 p-8 sm:p-10 rounded-2xl bg-zinc-950 text-white border border-zinc-800">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-2 text-white font-medium">
              <Terminal className="w-4 h-4 text-emerald-400" />
              SOUNDBOOST WEB AUDIO GRAPH TOPOLOGY
            </span>
            <span className="text-emerald-400 font-semibold">[0ms DSP LATENCY]</span>
          </div>

          <div className="font-mono text-xs sm:text-sm leading-relaxed text-zinc-300 space-y-3 overflow-x-auto">
            <div className="text-zinc-500">// Real-time Audio Routing Graph:</div>
            <div className="text-white">
              [HTMLMediaElement &lt;video&gt; / &lt;audio&gt;]
            </div>
            <div className="text-zinc-500">&nbsp;&nbsp;&darr; (Direct DOM Hook)</div>
            <div className="text-zinc-200">
              [5-Band Parametric EQ: 60Hz LowShelf &bull; 250Hz Peak &bull; 1kHz Peak &bull; 4kHz Peak &bull; 12kHz HighShelf]
            </div>
            <div className="text-zinc-500">&nbsp;&nbsp;&darr;</div>
            <div className="text-zinc-200">
              [Master GainNode: 0% to 600% / 0.0 to 6.0 gain multiplier]
            </div>
            <div className="text-zinc-500">&nbsp;&nbsp;&darr;</div>
            <div className="text-emerald-400 font-semibold">
              [DynamicsCompressorNode: -6dB Threshold &bull; 8:1 Ratio &bull; Anti-Clipping Limiter]
            </div>
            <div className="text-zinc-500">&nbsp;&nbsp;&darr;</div>
            <div className="text-white">
              [AudioContext.destination &rarr; Hardware Speakers / Headphones]
            </div>
          </div>
        </div>

        {/* Why We Built It Section */}
        <div className="mb-24 p-8 sm:p-12 rounded-2xl bg-zinc-50 border border-zinc-200">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              FOUNDERS&apos; NOTE
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-zinc-950 font-sans tracking-tight mb-6">
              Why we built SoundBoost
            </h2>
            <div className="space-y-4 text-sm text-zinc-600 leading-relaxed font-sans">
              <p>
                Every popular Chrome volume booster we tested suffered from the exact same structural compromises: they use <code className="text-zinc-900 bg-zinc-200/60 px-1 py-0.5 rounded font-mono text-xs">chrome.tabCapture</code> which forces the tab into a fake screen-share stream. That means full-screen video on Netflix, YouTube, or Twitch breaks completely, a giant blue warning banner appears at the top of the browser, and you get 200ms of lag that ruins movie lip-sync.
              </p>
              <p>
                Worse, when you turn them up past 100%, the audio clips into harsh, grating digital distortion that damages speaker drivers and sounds terrible.
              </p>
              <p>
                We built <strong>SoundBoost by Nablai</strong> for our own daily setups: a clean, zero-overhead extension that directly hooks into the page&apos;s audio elements. It keeps native HTML5 fullscreen running at 100%, introduces 0ms delay, and adds studio dynamics compression so that even at 600% gain, your music and speech remain crisp, punchy, and distortion-free.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-zinc-200 flex items-center gap-4 text-xs font-mono text-zinc-500">
              <span>DESIGNED &amp; ENGINEERED BY ONUR &amp; KARIM</span>
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

export default SoundBoostPage
