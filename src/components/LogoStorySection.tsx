import React, { useState } from 'react'
import { Sparkles, Code2, Check, Copy, Layers, Compass } from 'lucide-react'

const COLOR_PRESETS = [
  { name: 'Electric Violet', hex: '#A855F7', glow: 'rgba(168, 85, 247, 0.4)' },
  { name: 'Cyber Cyan', hex: '#06B6D4', glow: 'rgba(6, 182, 212, 0.4)' },
  { name: 'Emerald Neural', hex: '#10B981', glow: 'rgba(16, 185, 129, 0.4)' },
  { name: 'Solar Amber', hex: '#F59E0B', glow: 'rgba(245, 158, 11, 0.4)' },
]

export const LogoStorySection: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(COLOR_PRESETS[0])
  const [viewMode, setViewMode] = useState<'fusion' | 'exploded' | 'math'>('fusion')
  const [copied, setCopied] = useState(false)

  const handleCopySvg = () => {
    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <defs>
    <linearGradient id="splitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="50%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="${selectedColor.hex}"/>
    </linearGradient>
  </defs>
  <text x="10" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="800">
    <tspan fill="#ffffff">Nabl</tspan>
    <tspan fill="url(#splitGradient)">a</tspan>
    <tspan fill="${selectedColor.hex}">i</tspan>
  </text>
</svg>`
    navigator.clipboard.writeText(svgCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="logo-verhaal" className="py-24 relative overflow-hidden border-t border-b border-white/5 bg-[#0a0b10]">
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-20 transition-all duration-500"
        style={{ backgroundColor: selectedColor.hex }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Het Merk DNA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Waar Wiskunde &amp; Machine Intelligence Samenkomen
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            De naam <strong className="text-white">Nablai</strong> is een fusie van de wiskundige gradient-operator{' '}
            <strong className="text-white">Nabla (&nabla;)</strong> en <strong className="text-white">AI</strong>. 
            In ons logo vormt de tweede <span className="underline decoration-purple-500 font-bold">&apos;a&apos;</span> het exacte snijpunt.
          </p>
        </div>

        {/* Interactive Logo Stage */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/5">
            {/* View Modes */}
            <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10">
              <button
                onClick={() => setViewMode('fusion')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'fusion'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Fusie Weergave (Nablai)
              </button>
              <button
                onClick={() => setViewMode('exploded')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'exploded'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Woord Split (Nabla + Ai)
              </button>
              <button
                onClick={() => setViewMode('math')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'math'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                &nabla; Calculus Betekenis
              </button>
            </div>

            {/* Color Switcher */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 hidden sm:inline">Accent Kleur:</span>
              <div className="flex items-center gap-2">
                {COLOR_PRESETS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                    className={`w-6 h-6 rounded-full transition-transform ${
                      selectedColor.hex === color.hex ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-slate-900' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>

              {/* Copy SVG button */}
              <button
                onClick={handleCopySvg}
                className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-colors"
                title="Kopieer SVG Wordmark"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Gekopieerd!' : 'SVG'}</span>
              </button>
            </div>
          </div>

          {/* Canvas Display */}
          <div className="py-16 sm:py-20 flex flex-col items-center justify-center min-h-[300px]">
            {viewMode === 'fusion' && (
              <div className="flex flex-col items-center">
                <div className="flex items-baseline font-black tracking-tighter text-6xl sm:text-8xl md:text-9xl transition-all duration-300">
                  {/* Nabl in pure white */}
                  <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                    Nabl
                  </span>

                  {/* Dual color split 'a' */}
                  <div className="relative inline-block mx-[1px]">
                    <span
                      style={{
                        background: `linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 50%, ${selectedColor.hex} 50%, ${selectedColor.hex} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: `drop-shadow(0 0 24px ${selectedColor.hex}55)`,
                      }}
                      className="inline-block"
                    >
                      a
                    </span>

                    {/* Subtle visual divider guide indicator */}
                    <div 
                      className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/40 -translate-x-1/2 pointer-events-none opacity-40 animate-pulse"
                      title="50/50 Split Axis"
                    />
                  </div>

                  {/* i in AI accent color */}
                  <span
                    style={{
                      color: selectedColor.hex,
                      textShadow: `0 0 30px ${selectedColor.hex}88`,
                    }}
                  >
                    i
                  </span>
                </div>

                {/* Annotation Labels */}
                <div className="mt-8 flex items-center gap-6 sm:gap-12 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-white" />
                    <span className="font-semibold text-white">Nabla</span>
                    <span className="text-slate-500">(Wiskundige Gradient)</span>
                  </div>

                  <div className="h-4 w-[1px] bg-white/20" />

                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedColor.hex }} />
                    <span className="font-semibold" style={{ color: selectedColor.hex }}>Ai</span>
                    <span className="text-slate-500">(Artificial Intelligence)</span>
                  </div>
                </div>
              </div>
            )}

            {viewMode === 'exploded' && (
              <div className="flex flex-col items-center">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-4xl sm:text-6xl md:text-7xl font-extrabold">
                  {/* Left Word: Nabla */}
                  <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <span className="text-white">Nabl</span>
                    <span className="text-white font-black underline decoration-2 decoration-white/40">a</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-slate-300 ml-2">Woord 1</span>
                  </div>

                  <span className="text-slate-600 font-mono text-3xl">+</span>

                  {/* Right Word: Ai */}
                  <div 
                    className="p-4 sm:p-6 rounded-2xl border flex items-center gap-1"
                    style={{ borderColor: `${selectedColor.hex}44`, backgroundColor: `${selectedColor.hex}11` }}
                  >
                    <span className="font-black underline decoration-2" style={{ color: selectedColor.hex }}>a</span>
                    <span style={{ color: selectedColor.hex }}>i</span>
                    <span 
                      className="text-xs px-2 py-0.5 rounded ml-2"
                      style={{ backgroundColor: `${selectedColor.hex}22`, color: selectedColor.hex }}
                    >
                      Woord 2
                    </span>
                  </div>
                </div>

                <div className="mt-8 max-w-lg text-center text-sm text-slate-400">
                  De letter <span className="text-white font-bold">&apos;a&apos;</span> overlapt beide woorden. In ons logo wordt deze letter precies doormidden gesplitst (50% wit, 50% AI-kleur), waardoor het brein tegelijkertijd <em>Nabla</em> én <em>Ai</em> registreert.
                </div>
              </div>
            )}

            {viewMode === 'math' && (
              <div className="flex flex-col items-center max-w-2xl text-center">
                <div className="p-6 rounded-2xl bg-black/40 border border-white/10 font-mono text-xl sm:text-2xl text-purple-300 mb-6 flex items-center gap-4">
                  <span className="text-4xl sm:text-5xl font-serif text-white">&nabla;</span>
                  <div className="text-left text-sm sm:text-base font-mono text-slate-200">
                    <div>&nabla;L = &part;Loss / &part;Weights</div>
                    <div className="text-xs text-slate-400 mt-1 font-sans">
                      Gradient descent: De kern van alle moderne deep learning en LLM training
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  In wiskundige analyse is <strong className="text-white">&nabla; (Nabla)</strong> de vector-differentiaaloperator. Bij het trainen van neurale netwerken (backpropagation) berekent de Nabla-operator precies in welke richting de parameters moeten veranderen om intelligentie te maximaliseren en fouten te minimaliseren.
                </p>
              </div>
            )}
          </div>

          {/* Feature Grid inside Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/5">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Pixel-Perfect Split-A</span>
              </div>
              <p className="text-xs text-slate-400">
                De 50/50 gradient stop zorgt voor een haarscherpe scheiding zonder visuele verspringing of render-artefacten.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>&nabla; Nabla Symbool</span>
              </div>
              <p className="text-xs text-slate-400">
                Het omgekeerde driehoek-symbool refereert rechtstreeks naar gradient vector calculus en backpropagation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>Modern AI Dev Merk</span>
              </div>
              <p className="text-xs text-slate-400">
                Een herkenbare, intellectueel gegronde merkidentiteit voor enterprise machine learning en agentic engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LogoStorySection
