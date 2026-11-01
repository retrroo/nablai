import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Zap,
  Gauge,
  Scissors,
  Check,
  Layers,
} from 'lucide-react'
import { GithubIcon } from '../components/Icons'

export const NablaSqueezerPage: React.FC = () => {
  // Interactive simulator states for the popover mockup
  const [cleanPrompts, setCleanPrompts] = useState(true)
  const [stripComments, setStripComments] = useState(true)
  const [minifyJson, setMinifyJson] = useState(true)
  const [cleanWhitespace, setCleanWhitespace] = useState(true)
  const [copiedPrompt, setCopiedPrompt] = useState(false)
  const [squeezed, setSqueezed] = useState(false)

  const techStack = [
    { label: 'Application Architecture', value: 'Tauri v2 (Native macOS Accessory Tray Popover)' },
    { label: 'Core Systems Language', value: 'Rust 2021 (Zero-overhead, 0% background idle CPU)' },
    { label: 'Tokenizer Engine', value: 'tiktoken-rs (cl100k_base BPE tokenizer, <1ms execution)' },
    { label: 'UI Layer', value: 'React 18 & TypeScript with strict type checking' },
    { label: 'Global Shortcuts', value: 'tauri-plugin-global-shortcut (⌘⌥C & ⌘⇧H hotkey listeners)' },
    { label: 'Clipboard Pipeline', value: 'tauri-plugin-clipboard-manager (direct OS pasteboard hook)' },
    { label: 'Desktop Notifications', value: 'tauri-plugin-notification (Native macOS notification banners)' },
    { label: 'Telemetry & Privacy', value: '100% Local execution. Zero cloud calls, Zero network tracking' },
  ]

  const architecturePillars = [
    {
      pillar: 'Pillar 1',
      title: 'Sub-Millisecond Rust BPE Tokenizer',
      subtitle: 'tiktoken-rs cl100k_base on-device',
      description:
        'Computes live OpenAI & Anthropic token counts directly in memory in under 1 millisecond. No network round-trips, no cloud API dependencies, and zero lag while typing or copying text.',
      icon: Gauge,
    },
    {
      pillar: 'Pillar 2',
      title: 'Global Hotkey Pipeline (⌘⌥C / ⌘⇧C)',
      subtitle: 'System-wide instant clipboard squeeze',
      description:
        'Hit the global shortcut from any app (VS Code, Cursor, Chrome, or Terminal). Nabla Squeezer reads the clipboard, strips fluff and deadweight in under 2ms, replaces the pasteboard, and triggers an OS notification showing saved tokens.',
      icon: Zap,
    },
    {
      pillar: 'Pillar 3',
      title: 'Semantic & Syntax Optimization Engine',
      subtitle: 'Indentation-safe comment & log scrubber',
      description:
        'Safely removes C-style /* */ and // comments without mangling Markdown headers (#) or bash shebangs (#!). Minifies raw JSON payloads, collapses repetitive log lines (e.g. x5), and strips polite conversational fluff and corporate email signatures.',
      icon: Scissors,
    },
    {
      pillar: 'Pillar 4',
      title: 'Context Handoff Reset Protocol',
      subtitle: 'Dense thread compaction prompt',
      description:
        'Generates an engineered 1-click summary checkpoint prompt. When long Claude or ChatGPT conversations hit rolling token limits, paste this prompt to crystallize key decisions and restart in a fresh, lightning-fast session without context loss.',
      icon: Layers,
    },
  ]

  const handleCopyPrompt = () => {
    const promptText = `[CONTEXT COMPRESSION CHECKPOINT]
Please synthesize our conversation into a dense, high-signal summary for handoff to a fresh session:
1. Core Architectural Objectives & Decisions Made
2. Current Working State & Implementation Progress
3. Exact Pending Tasks & Unresolved Blockers
Exclude conversational filler, pleasantries, and historical iteration steps.`

    navigator.clipboard.writeText(promptText)
    setCopiedPrompt(true)
    setTimeout(() => setCopiedPrompt(false), 2500)
  }

  const handleSqueezeClick = () => {
    setSqueezed(true)
    setTimeout(() => setSqueezed(false), 1200)
  }

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
              LIVE APPLICATION // 05 · MACOS MENU BAR APP
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal text-zinc-950 tracking-tight font-sans">
              Nabla Squeezer <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">
                compress tokens, bypass rate limits.
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl font-sans">
              An ultra-lightweight macOS menu bar utility engineered by Onur &amp; Karim for heavy users of Claude Desktop, ChatGPT, Cursor, and web LLMs. Squeezes clipboard fluff, code comments, and bloated logs with 1 global hotkey, 100% offline in native Rust.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* GitHub Repo Button */}
            <a
              href="https://github.com/karimsaid123/nabla-squeezer"
              target="_blank"
              rel="noreferrer"
              className="relative overflow-hidden group px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-mono font-medium border border-zinc-800 hover:border-zinc-500 transition-all flex items-center gap-2.5 shadow-lg active:scale-95"
            >
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:12px_12px] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none" />
              <GithubIcon className="w-4 h-4 text-zinc-300" />
              <span>karimsaid123/nabla-squeezer</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Interactive Menu Bar Popover Showcase */}
        <div className="mb-20">
          <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 sm:p-12 overflow-hidden shadow-2xl">
            {/* Cosmic starlight texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:14px_14px] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Context / Description */}
              <div className="max-w-lg space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-white text-xs font-mono font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span>macOS Native Menu Bar Popover</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight font-sans">
                  The LLM Context Saver Sitting in Your Mac Menu Bar.
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  AI providers enforce strict rolling rate limits because chat sessions resend the <strong>entire conversation history</strong> on every turn. Squeezer keeps your context clean, lean, and within tier limits with zero effort.
                </p>

                <div className="space-y-3 pt-2 font-mono text-xs text-zinc-300">
                  <div className="flex items-center gap-3">
                    <kbd className="px-2.5 py-1 rounded bg-white/10 border border-white/15 text-white text-[11px] font-semibold">
                      ⌘⌥C
                    </kbd>
                    <span>Global Hotkey: Squeeze clipboard &amp; notify</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <kbd className="px-2.5 py-1 rounded bg-white/10 border border-white/15 text-white text-[11px] font-semibold">
                      ⌘⇧H
                    </kbd>
                    <span>Instant Context Handoff Reset Prompt</span>
                  </div>
                </div>
              </div>

              {/* Right: The Interactive App Mockup (Exact 1:1 replica of Karim's screenshot) */}
              <div className="w-full max-w-sm rounded-2xl bg-[#090a0f] border border-white/15 p-5 shadow-2xl text-zinc-100 font-sans select-none">
                {/* Popover Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-base tracking-widest text-white flex items-center gap-1.5">
                      <span>&nabla;</span>
                      <span>N A B L A</span>
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium tracking-wider bg-white/5 border border-white/10 text-zinc-400">
                      SQUEEZER
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SAFE
                  </span>
                </div>

                {/* Global Optimization Box */}
                <div className="my-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-zinc-400 font-medium">
                    <span>GLOBAL OPTIMIZATION</span>
                    <span className="text-zinc-200">ACTIVE</span>
                  </div>

                  <button
                    onClick={handleSqueezeClick}
                    className="w-full py-2.5 px-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-white text-xs font-medium flex items-center justify-between transition-all active:scale-98 cursor-pointer shadow-xs"
                  >
                    <span className="flex items-center gap-2">
                      <Zap className={`w-3.5 h-3.5 text-amber-400 ${squeezed ? 'animate-bounce' : ''}`} />
                      <span>{squeezed ? 'Clipboard Squeezed!' : 'Squeeze Clipboard Now'}</span>
                    </span>
                    <kbd className="text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-zinc-300">
                      ⌘⌥C
                    </kbd>
                  </button>
                </div>

                {/* Token Counters */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                      CURRENT TOKENS
                    </span>
                    <span className="text-2xl font-bold text-white font-mono mt-1 block">75</span>
                    <span className="text-[10px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Safe Limit
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                      TOTAL SAVED
                    </span>
                    <span className="text-2xl font-bold text-white font-mono mt-1 block">94</span>
                    <span className="text-[10px] font-mono text-zinc-400 mt-1 block">
                      Cumulative Lifetime
                    </span>
                  </div>
                </div>

                {/* Filter Toggles */}
                <div className="space-y-2 mb-4 font-sans">
                  {/* Toggle 1 */}
                  <div
                    onClick={() => setCleanPrompts(!cleanPrompts)}
                    className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="text-xs font-medium text-white">Clean Prompts &amp; Prose</div>
                      <div className="text-[10px] text-zinc-400">Strip fluff, email headers &amp; disclaimers</div>
                    </div>
                    <div
                      className={`w-9 h-5 rounded-full transition-colors flex items-center p-0.5 ${
                        cleanPrompts ? 'bg-white' : 'bg-zinc-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-transform ${
                          cleanPrompts ? 'translate-x-4 bg-zinc-950' : 'translate-x-0 bg-white'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Toggle 2 */}
                  <div
                    onClick={() => setStripComments(!stripComments)}
                    className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="text-xs font-medium text-white">Strip Code Comments</div>
                      <div className="text-[10px] text-zinc-400">Remove // and /* */ comments</div>
                    </div>
                    <div
                      className={`w-9 h-5 rounded-full transition-colors flex items-center p-0.5 ${
                        stripComments ? 'bg-white' : 'bg-zinc-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-transform ${
                          stripComments ? 'translate-x-4 bg-zinc-950' : 'translate-x-0 bg-white'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Toggle 3 */}
                  <div
                    onClick={() => setMinifyJson(!minifyJson)}
                    className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="text-xs font-medium text-white">Minify JSON &amp; Logs</div>
                      <div className="text-[10px] text-zinc-400">Scrub timestamps &amp; deduplicate lines</div>
                    </div>
                    <div
                      className={`w-9 h-5 rounded-full transition-colors flex items-center p-0.5 ${
                        minifyJson ? 'bg-white' : 'bg-zinc-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-transform ${
                          minifyJson ? 'translate-x-4 bg-zinc-950' : 'translate-x-0 bg-white'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Toggle 4 */}
                  <div
                    onClick={() => setCleanWhitespace(!cleanWhitespace)}
                    className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="text-xs font-medium text-white">Clean Whitespace</div>
                      <div className="text-[10px] text-zinc-400">Collapse blank lines &amp; trim spacing</div>
                    </div>
                    <div
                      className={`w-9 h-5 rounded-full transition-colors flex items-center p-0.5 ${
                        cleanWhitespace ? 'bg-white' : 'bg-zinc-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-transform ${
                          cleanWhitespace ? 'translate-x-4 bg-zinc-950' : 'translate-x-0 bg-white'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Context Handoff Reset Box */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3 mb-4">
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Context Handoff Reset</span>
                    </div>
                    <p className="text-[10px] text-zinc-400 leading-tight mt-0.5 truncate">
                      Compact bloated chats into a fresh reset
                    </p>
                  </div>

                  <button
                    onClick={handleCopyPrompt}
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white text-[11px] font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedPrompt ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <span>Copy Prompt</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                      </>
                    )}
                  </button>
                </div>

                {/* Popover Footer */}
                <div className="pt-3 border-t border-white/10 text-center text-[10px] font-mono text-zinc-400">
                  Pure Local Processing &bull; 100% Free &bull; Zero Telemetry
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Purpose & Why We Built It */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 pb-16 border-b border-zinc-200">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
              PURPOSE &amp; GOAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
              Why we built Nabla Squeezer
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
            <p>
              Whether you are paying for <strong>Claude Pro</strong>, <strong>ChatGPT Plus</strong>, or using <strong>Cursor</strong>, you are governed by strict rolling token rate limits. Many developers hit limits prematurely not because of complex logic, but because conversational interfaces continuously re-send the entire conversation history on every turn.
            </p>
            <p>
              Pasting pretty-printed JSON, verbose unit test fixtures, dense stack traces, or polite conversation openers consumes hundreds of unnecessary tokens. We built <strong>Nabla Squeezer</strong> in Rust to live directly in the macOS menu bar: one global keystroke (<code className="font-mono text-xs bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-800">⌘⌥C</code>) compresses whatever is in your clipboard before you paste it into an AI chat.
            </p>
          </div>
        </div>

        {/* 4 Architecture Pillars */}
        <div className="mb-20">
          <div className="mb-8 pb-4 border-b border-zinc-200">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
              Core Architecture &amp; Rust Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architecturePillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between space-y-4 shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest font-medium">
                        {pillar.pillar}
                      </span>
                    </div>
                    <h3 className="text-lg font-normal text-zinc-950 font-sans tracking-tight mb-1">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-mono text-zinc-600 mb-3">{pillar.subtitle}</div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Technology Foundation Ledger */}
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
              Tauri v2 / Rust 2021 / React 18
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
      </div>
    </div>
  )
}

export default NablaSqueezerPage
