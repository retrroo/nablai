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
              LIVE APPLICATION // 02 &mdash; AI INTELLIGENCE PLATFORM
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal text-zinc-950 tracking-tight font-sans">
              Latent Space &mdash; <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">hexagonal news &amp; AI synthesis engine.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl font-sans">
              An AI intelligence and industry tracking platform engineered by Karim. Built with Next.js 16, React 19, strict Hexagonal Architecture (Ports &amp; Adapters), and Gemini 1.5 Flash structured JSON summarization.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/karimsaid123/latentspace"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-mono border border-zinc-200 transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>karimsaid123/latentspace</span>
            </a>
          </div>
        </div>

        {/* Interactive Ingestion & Gemini Structured Synthesis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          {/* Article List & Categorization (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-zinc-50 border border-zinc-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-zinc-800" />
                <span>FEED INGESTION STREAM</span>
              </div>
              <span className="text-zinc-800 font-semibold">5 Tracks</span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`text-[10px] font-mono px-2.5 py-1 rounded-md transition-colors ${
                    selectedFilter === cat
                      ? 'bg-zinc-950 text-white font-medium'
                      : 'bg-white text-zinc-700 hover:text-zinc-950 border border-zinc-200'
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
                        ? 'bg-white border-zinc-900 shadow-sm'
                        : 'bg-white/60 border-zinc-200 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                      <span className="text-zinc-950 font-semibold">{article.category}</span>
                      <span className="px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
                        {article.impact}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-normal text-zinc-950 line-clamp-2 leading-snug font-sans">
                      {article.title}
                    </h4>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Gemini 1.5 Flash Structured Synthesis Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-zinc-800" />
                  <span className="text-xs font-mono text-zinc-800 font-semibold">GEMINI 1.5 FLASH STRUCTURED EVALUATION</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">{selectedArticle.readTime} min read</span>
              </div>

              {/* Title & Metadata */}
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  {selectedArticle.category} &middot; Impact: {selectedArticle.impact}
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-zinc-950 font-sans tracking-tight">
                  {selectedArticle.title}
                </h3>
              </div>

              {/* TLDR Box */}
              <div className="p-4 rounded-xl bg-white border border-zinc-200 space-y-1.5 shadow-xs">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                  EXECUTIVE TL;DR
                </span>
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-sans">
                  {selectedArticle.tldr}
                </p>
              </div>

              {/* 3 Key Strategic Takeaways */}
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-3">
                  STRUCTURED TAKEAWAYS (JSON GROUNDED)
                </span>
                <ul className="space-y-2.5 text-xs text-zinc-700 font-sans">
                  {selectedArticle.takeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-zinc-900 font-mono text-[10px] font-semibold">
                        {idx + 1}
                      </div>
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hexagonal Architecture Spec Grid */}
              <div className="pt-6 border-t border-zinc-200 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-zinc-200">
                  <span className="text-zinc-500 text-[10px] block">FRAMEWORK</span>
                  <span className="text-zinc-950 mt-0.5 block font-medium">Next.js 16 / React 19</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-zinc-200">
                  <span className="text-zinc-500 text-[10px] block">PATTERN</span>
                  <span className="text-zinc-950 mt-0.5 block font-medium">Hexagonal (Ports/Adapters)</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-zinc-200 col-span-2 sm:col-span-1">
                  <span className="text-zinc-500 text-[10px] block">AI ENGINE</span>
                  <span className="text-zinc-950 mt-0.5 block font-medium">Gemini 1.5 Flash</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hexagonal Ports & Adapters Architecture Details */}
        <div className="p-8 sm:p-12 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
              CLEAN ARCHITECTURE BLUEPRINT
            </span>
            <h3 className="text-2xl font-normal text-zinc-950 font-sans">
              Domain-Driven Ingestion Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-2 font-sans">
              Latent Space adheres strictly to Hexagonal Architecture. The core domain layer contains business rules, scoring heuristics, and entity models, completely agnostic to Next.js or external storage implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-200 text-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-950 font-medium">
                <Layers className="w-4 h-4 text-zinc-800" />
                <span>Ports (Contracts)</span>
              </div>
              <p className="text-zinc-600 leading-relaxed font-sans">
                Typed interfaces like <code>FeedProviderPort</code> and <code>ArticleRepositoryPort</code> ensure zero coupling to specific transport or database vendors.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-950 font-medium">
                <Activity className="w-4 h-4 text-zinc-800" />
                <span>Adapters (Implementations)</span>
              </div>
              <p className="text-zinc-600 leading-relaxed font-sans">
                Interchangeable storage adapters (In-Memory, SQLite, Redis KV) and RSS feed parsers implementing exponential backoff and lock ports.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-950 font-medium">
                <Cpu className="w-4 h-4 text-zinc-800" />
                <span>IoC Container</span>
              </div>
              <p className="text-zinc-600 leading-relaxed font-sans">
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