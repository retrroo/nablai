import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Layers, Cpu, Newspaper, Shield, Database, Sparkles, Image as ImageIcon } from 'lucide-react'
import { GithubIcon } from '../components/Icons'

export const LatentSpacePage: React.FC = () => {
  const techStack = [
    { label: 'Language', value: 'TypeScript (Strict mode)' },
    { label: 'Web Framework', value: 'Next.js 16 (App Router) & React 19' },
    { label: 'Architecture Pattern', value: 'Hexagonal Architecture (Ports & Adapters) + DDD' },
    { label: 'AI Summarization', value: 'Google Gemini 1.5 Flash (Strict JSON schema output)' },
    { label: 'Dependency Injection', value: 'Centralized BackendContainer (IoC Singleton)' },
    { label: 'Storage Adapters', value: 'Interchangeable Ports: SQLite, In-Memory, Redis KV' },
    { label: 'Feed Processing', value: 'RSS/Atom ingest with exponential backoff & rate-limits' },
    { label: 'Styling & Tokens', value: 'Tailwind CSS + custom typography tokens' },
  ]

  const keyFeatures = [
    {
      title: 'Hexagonal Architecture (Ports & Adapters)',
      description:
        'Business entities (Article, Source, AISummary) live in a pure domain layer with zero framework dependencies. Feed fetching, storage, and AI processing are isolated behind typed port interfaces.',
      icon: Layers,
    },
    {
      title: 'Structured Gemini 1.5 Flash Synthesis',
      description:
        'Automated synthesis pipeline that runs over raw technical articles, generating structured JSON with an executive TL;DR, 3 bulleted key strategic takeaways, and algorithmic impact scores.',
      icon: Sparkles,
    },
    {
      title: 'Inversion of Control Container',
      description:
        'A single BackendContainer instance handles lifecycle, repository instantiation, and asynchronous bootstrapping across Next.js serverless route handlers without memory leaks.',
      icon: Cpu,
    },
    {
      title: 'Swappable Storage Implementations',
      description:
        'Repository ports allow switching between SQLite for local development, Redis for serverless caching, and in-memory stores for unit testing without touching any domain logic.',
      icon: Database,
    },
    {
      title: 'Focused Multi-Track Curation',
      description:
        'Separates firehose content into clean, high-signal technical tracks: LLMs & Generative AI, Robotics & Hardware, and European / Global AI Statutory Policy.',
      icon: Newspaper,
    },
    {
      title: 'Resilient Feed Ingestion',
      description:
        'Custom feed adapter with exponential backoff, circuit-breaking locks, and typed domain error handling (RateLimitError, ProviderUnavailableError) for high reliability.',
      icon: Shield,
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
              LIVE APPLICATION // 02 &mdash; AI PLATFORM
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal text-zinc-950 tracking-tight font-sans">
              Latent Space &mdash; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">hexagonal news &amp; AI synthesis engine.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl font-sans">
              A curated AI intelligence dashboard engineered by Karim. Built with Next.js 16, React 19, strict Hexagonal Architecture (Ports &amp; Adapters), and Gemini 1.5 Flash structured JSON summarization.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/karimsaid123/latentspace"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>karimsaid123/latentspace</span>
            </a>
          </div>
        </div>

        {/* App Screenshot Placeholder Box */}
        <div className="mb-20">
          <div className="relative rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50/70 p-12 sm:p-20 text-center flex flex-col items-center justify-center overflow-hidden transition-colors hover:border-zinc-400">
            <div className="w-16 h-16 rounded-2xl bg-zinc-200/80 flex items-center justify-center text-zinc-700 mb-5 shadow-xs">
              <ImageIcon className="w-8 h-8 stroke-[1.5]" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/60 text-zinc-800 text-xs font-mono font-medium mb-3">
              <span>App Screenshot</span>
              <span className="text-zinc-400">&middot;</span>
              <span className="text-zinc-600">Soon to be added</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-normal text-zinc-950 tracking-tight font-sans max-w-md">
              Platform Interface &amp; Feed View
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-lg mt-2 leading-relaxed font-sans">
              Screenshots showing the news stream, category filters, and structured Gemini summaries will be placed here.
            </p>
          </div>
        </div>

        {/* Purpose & Why We Built It */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 pb-16 border-b border-zinc-200">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
              PURPOSE &amp; GOAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-zinc-950 tracking-tight font-sans">
              Why Karim built Latent Space
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
            <p>
              The machine learning space moves at breakneck speed, but 90% of online discussion is superficial marketing noise, re-hashed tweets, and breathless hype. Finding genuine architectural breakthroughs or hardware announcements requires sifting through hundreds of posts.
            </p>
            <p>
              <strong>Latent Space</strong> was built as a clean, personal intelligence engine. It continuously tracks authoritative sources, passes articles through Gemini 1.5 Flash with strict JSON schemas, and outputs succinct, factual takeaways and impact assessments in a clean reading view.
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
              TypeScript / Next.js 16
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
    </div>
  )
}
export default LatentSpacePage
