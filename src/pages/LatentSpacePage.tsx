import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Newspaper, Layers, ArrowLeft, Cpu, Activity, Sparkles } from 'lucide-react'
import { GithubIcon } from '../components/Icons'

const SAMPLE_ARTICLES = [
  {
    title: 'DeepSeek-V3 Architecture: Multi-Head Latent Attention & DeepSeekMoE Analysis',
    category: 'LLMs & GenAI',
    impact: 'Breakthrough',
    readTime: 4,
    tldr: 'DeepSeek introduces an innovative Multi-Head Latent Attention (MLA) mechanism that dramatically compresses KV cache footprint while delivering frontier benchmark reasoning scores.',
    takeaways: [
      'MLA compresses KV cache by over 70% compared to standard MHA without loss in perplexity.',
      'Employs dynamic routing across fine-grained experts with auxiliary-loss-free load balancing.',
      'Open-weights checkpoints released for self-hosted inference on consumer and enterprise GPUs.',
    ],
  },
  {
    title: 'NVIDIA Blackwell Ultra: 72-GPU NVLink Liquid-Cooled Inference Pods',
    category: 'Robotics & Hardware',
    impact: 'High',
    readTime: 3,
    tldr: 'NVIDIA details the mass-scale liquid cooling and FP4 precision quantization improvements powering 30x faster token generation for trillion-parameter models.',
    takeaways: [
      'FP4 Tensor Cores double throughput per watt over Hopper architecture.',
      'NVLink 5 switches maintain 1.8 TB/s bidirectional bandwidth per GPU across all 72 nodes.',
      'Liquid-cooling infrastructure adopted by tier-one cloud providers for dense cluster deployments.',
    ],
  },
  {
    title: 'EU AI Act Enforcement Guidelines: High-Risk Classifier Compliance Framework',
    category: 'Ethics & Policy',
    impact: 'Medium',
    readTime: 5,
    tldr: 'The European Commission finalizes statutory definitions for general-purpose AI models with systemic risk and establishes technical documentation thresholds.',
    takeaways: [
      'Models trained with >10^25 FLOPs automatically categorized under heightened scrutiny obligations.',
      'Requires transparency regarding copyright training datasets and adversarial evaluation audits.',
      'Grace period timeline announced for production deployments already operating within the EU.',
    ],
  },
]

export const LatentSpacePage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState(SAMPLE_ARTICLES[0])
  const [selectedFilter, setSelectedFilter] = useState('All')

  const categories = ['All', 'LLMs & GenAI', 'Robotics & Hardware', 'Ethics & Policy']

  const filteredArticles = selectedFilter === 'All' 
    ? SAMPLE_ARTICLES 
    : SAMPLE_ARTICLES.filter(a => a.category === selectedFilter)

  return (
    <div className="min-h-screen bg-[#050609] text-slate-100 pt-32 pb-24 selection:bg-purple-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO NABLAI HOME</span>
        </Link>

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase block mb-3">
              LIVE APPLICATION // 02 &mdash; AI INTELLIGENCE PLATFORM
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight font-sans">
              Latent Space &mdash; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-slate-300">hexagonal news &amp; AI synthesis engine.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-sans">
              An AI intelligence and industry tracking platform engineered by Karim. Built with Next.js 16, React 19, strict Hexagonal Architecture (Ports &amp; Adapters), and Gemini 1.5 Flash structured JSON summarization.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/karimsaid123/latentspace"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-slate-300 hover:text-white text-xs font-mono border border-white/[0.06] transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>karimsaid123/latentspace</span>
            </a>
          </div>
        </div>

        {/* Interactive Ingestion & Gemini Structured Synthesis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          {/* Article List & Categorization (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#08090e] border border-white/[0.08] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-purple-400" />
                <span>FEED INGESTION STREAM</span>
              </div>
              <span className="text-purple-400">5 Tracks</span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`text-[10px] font-mono px-2.5 py-1 rounded-md transition-colors ${
                    selectedFilter === cat
                      ? 'bg-purple-600 text-white font-medium'
                      : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.04]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Feed Cards */}
            <div className="space-y-3">
              {filteredArticles.map((article) => {
                const isSelected = selectedArticle.title === article.title
                return (
                  <button
                    key={article.title}
                    onClick={() => setSelectedArticle(article)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-purple-950/20 border-purple-500/40 shadow-lg shadow-purple-600/10'
                        : 'bg-black/30 border-white/[0.04] hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                      <span className="text-purple-400">{article.category}</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                        {article.impact}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-normal text-white line-clamp-2 leading-snug font-sans">
                      {article.title}
                    </h4>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Gemini 1.5 Flash Structured Synthesis Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#08090e] border border-white/[0.08] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-mono text-purple-300">GEMINI 1.5 FLASH STRUCTURED EVALUATION</span>
                </div>
                <span className="text-xs font-mono text-slate-500">{selectedArticle.readTime} min read</span>
              </div>

              {/* Title & Metadata */}
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                  {selectedArticle.category} &middot; Impact: {selectedArticle.impact}
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-white font-sans tracking-tight">
                  {selectedArticle.title}
                </h3>
              </div>

              {/* TLDR Box */}
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 space-y-1.5">
                <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest block font-bold">
                  EXECUTIVE TL;DR
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {selectedArticle.tldr}
                </p>
              </div>

              {/* 3 Key Strategic Takeaways */}
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-3">
                  STRUCTURED TAKEAWAYS (JSON GROUNDED)
                </span>
                <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
                  {selectedArticle.takeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-purple-300 text-[10px]">
                        {idx + 1}
                      </div>
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hexagonal Architecture Spec Grid */}
              <div className="pt-6 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04]">
                  <span className="text-slate-500 text-[10px] block">FRAMEWORK</span>
                  <span className="text-white mt-0.5 block">Next.js 16 / React 19</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04]">
                  <span className="text-slate-500 text-[10px] block">PATTERN</span>
                  <span className="text-cyan-400 mt-0.5 block">Hexagonal (Ports/Adapters)</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] col-span-2 sm:col-span-1">
                  <span className="text-slate-500 text-[10px] block">AI ENGINE</span>
                  <span className="text-purple-400 mt-0.5 block">Gemini 1.5 Flash</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hexagonal Ports & Adapters Architecture Details */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#08090e] border border-white/[0.08]">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase block mb-2">
              CLEAN ARCHITECTURE BLUEPRINT
            </span>
            <h3 className="text-2xl font-normal text-white font-sans">
              Domain-Driven Ingestion Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2 font-sans">
              Latent Space adheres strictly to Hexagonal Architecture. The core domain layer contains business rules, scoring heuristics, and entity models, completely agnostic to Next.js or external storage implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/[0.04] text-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Ports (Contracts)</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans">
                Typed interfaces like <code>FeedProviderPort</code> and <code>ArticleRepositoryPort</code> ensure zero coupling to specific transport or database vendors.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Adapters (Implementations)</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans">
                Interchangeable storage adapters (In-Memory, SQLite, Redis KV) and RSS feed parsers implementing exponential backoff and lock ports.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>IoC Container</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans">
                A single singleton <code>BackendContainer.getInstance()</code> handles dependency injection and asynchronous bootstrap across serverless route handlers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatentSpacePage