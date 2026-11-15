import React from 'react'

interface AirFlowPhoneFrameProps {
  src: string
  alt: string
  theme?: 'light' | 'dark'
  size?: 'compact' | 'standard' | 'large'
  eager?: boolean
  className?: string
}

const SIZE_CLASSES: Record<NonNullable<AirFlowPhoneFrameProps['size']>, { outer: string; inner: string }> = {
  compact: {
    outer: 'p-[3px] sm:p-[4px] rounded-[1rem] sm:rounded-[1.35rem]',
    inner: 'rounded-[0.8rem] sm:rounded-[1.1rem]',
  },
  standard: {
    outer: 'p-[6px] rounded-[2.05rem]',
    inner: 'rounded-[1.65rem]',
  },
  large: {
    outer: 'p-[7px] sm:p-[8px] rounded-[2.35rem]',
    inner: 'rounded-[1.9rem]',
  },
}

/**
 * Minimalist, unobstructed iPhone hardware bezel sized to AirFlow's 1179x2556 display aspect ratio.
 */
export const AirFlowPhoneFrame: React.FC<AirFlowPhoneFrameProps> = ({
  src,
  alt,
  theme = 'light',
  size = 'standard',
  eager = false,
  className = '',
}) => {
  const { outer, inner } = SIZE_CLASSES[size]
  const bezelTone =
    theme === 'dark'
      ? 'bg-zinc-800 ring-1 ring-white/20 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)]'
      : 'bg-zinc-900 ring-1 ring-black/15 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.28)]'

  return (
    <div className={`aspect-[1179/2556] w-full select-none ${outer} ${bezelTone} ${className}`}>
      <div className={`w-full h-full overflow-hidden bg-zinc-950 ${inner}`}>
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-full object-cover object-top block"
        />
      </div>
    </div>
  )
}

export default AirFlowPhoneFrame
