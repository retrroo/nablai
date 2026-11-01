import React, { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'

export const LogoStorySection: React.FC = () => {
  const [splitDistance, setSplitDistance] = useState(0) // 0 = fused Nablai, 100 = fully exploded Nabla + Ai
  const [copied, setCopied] = useState(false)

  const handleCopySvg = () => {
    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <defs>
    <linearGradient id="splitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="50%" stop-color="#09090b"/>
      <stop offset="50%" stop-color="#71717a"/>
    </linearGradient>
  </defs>
  <text x="10" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="800">
    <tspan fill="#09090b">Nabl</tspan>
    <tspan fill="url(#splitGradient)">a</tspan>
    <tspan fill="#71717a">i</tspan>
  </text>
</svg>`
    navigator.clipboard.writeText(svgCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="logo-story" className="py-24 relative bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
              02 // Brand Identity &amp; Vector Mathematics
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950 font-sans">
              Where Vector Calculus <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-zinc-600">meets machine intelligence.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-sm leading-relaxed">
            The name <strong className="text-zinc-950 font-medium">Nablai</strong> bridges the mathematical gradient operator <strong className="text-zinc-950 font-medium">Nabla (&nabla;)</strong> and <strong className="text-zinc-950 font-medium">AI</strong>. The second &apos;a&apos; is the exact 50/50 fulcrum.
          </p>
        </div>

        {/* Minimalist Exhibition Stage */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-14 relative overflow-hidden shadow-xs">
          {/* Stage Top Bar */}
          <div className="flex items-center justify-between pb-6 mb-12 border-b border-zinc-100 text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              <span className="text-zinc-800 font-medium">IDENTITY EXPLORER</span>
            </div>
            <button
              onClick={handleCopySvg}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied SVG' : 'Copy SVG'}</span>
            </button>
          </div>

          {/* Interactive Wordmark Display */}
          <div className="py-12 sm:py-20 flex flex-col items-center justify-center relative">
            <div className="flex items-baseline font-black tracking-tight text-6xl sm:text-8xl md:text-9xl select-none transition-all duration-150">
              {/* Part 1: Nabla */}
              <div 
                className="flex items-baseline transition-transform"
                style={{ transform: `translateX(-${splitDistance * 0.4}px)` }}
              >
                <span className="text-zinc-950">Nabl</span>
                {splitDistance === 0 ? (
                  // Shared split 'a' in fusion mode (bulletproof clip-path without background-clip glitch)
                  <span
                    className="relative inline-block select-none text-zinc-950"
                  >
                    <span>a</span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 pointer-events-none select-none text-zinc-500"
                      style={{
                        clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
                        WebkitClipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
                      }}
                    >
                      a
                    </span>
                  </span>
                ) : (
                  // Separate full 'a' in exploded mode
                  <span className="text-zinc-950 underline decoration-zinc-300 decoration-2">a</span>
                )}
              </div>

              {/* Exploded '+' separator */}
              {splitDistance > 0 && (
                <span 
                  className="mx-3 sm:mx-6 text-zinc-300 font-mono text-3xl sm:text-5xl transition-opacity font-light"
                  style={{ opacity: Math.min(1, splitDistance / 30) }}
                >
                  +
                </span>
              )}

              {/* Part 2: Ai */}
              <div 
                className="flex items-baseline text-zinc-500 transition-transform"
                style={{ transform: `translateX(${splitDistance * 0.4}px)` }}
              >
                {splitDistance > 0 && (
                  <span className="underline decoration-zinc-400 decoration-2">a</span>
                )}
                <span>i</span>
              </div>
            </div>

            {/* Split Slider Control */}
            <div className="mt-12 w-full max-w-sm flex flex-col items-center gap-2">
              <div className="w-full flex justify-between text-[11px] font-mono text-zinc-500">
                <span className={splitDistance < 20 ? 'text-zinc-950 font-medium' : ''}>Unified Brand</span>
                <span className={splitDistance > 70 ? 'text-zinc-950 font-medium' : ''}>Calculus Split</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={splitDistance}
                onChange={(e) => setSplitDistance(parseInt(e.target.value, 10))}
                className="w-full accent-zinc-900 cursor-pointer"
              />
            </div>
          </div>

          {/* Mathematical Rationale Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-100 mt-8 text-xs font-mono text-zinc-600">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
              <span className="text-lg font-serif text-zinc-950">&nabla;</span>
              <div>
                <span className="text-zinc-950 font-semibold block mb-1">Nabla Gradient Calculus</span>
                <p className="leading-relaxed text-zinc-600">
                  In vector calculus, &nabla;L = &part;Loss / &part;Weights defines the direction of steepest loss minimization. It is the mathematical backpropagation foundation of all neural networks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
              <Terminal className="w-4 h-4 text-zinc-800 mt-1 flex-shrink-0" />
              <div>
                <span className="text-zinc-950 font-semibold block mb-1">The 50/50 Split Axis</span>
                <p className="leading-relaxed text-zinc-600">
                  The second letter &apos;a&apos; is bisected at the 50% coordinate. Ink black honors the classical mathematical rigor of Nabla; high-contrast metallic silver represents machine intelligence in a pure monochrome palette.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LogoStorySection