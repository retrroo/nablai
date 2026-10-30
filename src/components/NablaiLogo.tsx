import React from 'react'

interface NablaiLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  showIcon?: boolean
  accentColor?: string
  className?: string
  animated?: boolean
  mode?: 'light' | 'dark'
}

export const NablaiLogo: React.FC<NablaiLogoProps> = ({
  size = 'md',
  showIcon = true,
  accentColor,
  className = '',
  animated = false,
  mode = 'dark',
}) => {
  // Size mappings
  const textSizes = {
    sm: 'text-lg tracking-tight',
    md: 'text-2xl tracking-tight',
    lg: 'text-4xl tracking-tighter',
    xl: 'text-6xl tracking-tighter',
    '2xl': 'text-7xl md:text-8xl tracking-tighter',
  }

  const iconSizes = {
    sm: 22,
    md: 28,
    lg: 40,
    xl: 56,
    '2xl': 72,
  }

  const currentIconSize = iconSizes[size]

  // Default accent: refined, non-neon deep violet
  const resolvedAccent = accentColor ?? (mode === 'light' ? '#6d28d9' : '#a855f7')
  const primaryText = mode === 'light' ? '#09090b' : '#ffffff'

  return (
    <div className={`inline-flex items-center gap-2.5 font-bold select-none ${className}`}>
      {showIcon && (
        <div className={`relative flex-shrink-0 ${animated ? 'transition-transform duration-300 hover:scale-105' : ''}`}>
          <svg
            width={currentIconSize}
            height={currentIconSize}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`nablaGrad-${size}-${mode}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={mode === 'light' ? '#09090b' : '#ffffff'} />
                <stop offset="100%" stopColor={resolvedAccent} />
              </linearGradient>
            </defs>

            {/* Left side representing Nabla (Primary) */}
            <path
              d="M 18 24 L 50 82 L 42 82 L 12 28 Z"
              fill={primaryText}
            />
            <path
              d="M 14 24 L 50 24 L 50 31 L 14 31 Z"
              fill={primaryText}
            />

            {/* Right side representing Ai (Accent) */}
            <path
              d="M 50 82 L 82 24 L 88 28 L 58 82 Z"
              fill={`url(#nablaGrad-${size}-${mode})`}
            />
            <path
              d="M 50 24 L 86 24 L 86 31 L 50 31 Z"
              fill={resolvedAccent}
            />

            {/* Core anchor node */}
            <circle cx="50" cy="48" r="4.5" fill={resolvedAccent} />
            <circle cx="50" cy="48" r="2" fill={primaryText} />
          </svg>
        </div>
      )}

      {/* Typography: Nabl + [a (50/50 split)] + i */}
      <span className={`font-extrabold flex items-baseline leading-none font-['Plus_Jakarta_Sans',sans-serif] ${textSizes[size]}`}>
        {/* 'Nabl' */}
        <span style={{ color: primaryText }}>
          Nabl
        </span>

        {/* The shared 'a': Exactly split 50/50 down the middle! 
            Left half = primaryText (completing 'Nabla')
            Right half = resolvedAccent (starting 'Ai') */}
        <span
          className="relative inline-block"
          style={{
            background: `linear-gradient(90deg, ${primaryText} 0%, ${primaryText} 50%, ${resolvedAccent} 50%, ${resolvedAccent} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          title="Nabla + Ai shared anchor letter"
        >
          a
        </span>

        {/* 'i' */}
        <span
          className="font-extrabold"
          style={{
            color: resolvedAccent,
          }}
        >
          i
        </span>
      </span>
    </div>
  )
}
export default NablaiLogo