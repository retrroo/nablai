import React from 'react'
import type { AirFlowScreenshot } from '../lib/airflowScreenshots'

interface AirFlowPhoneFrameProps {
  screen: AirFlowScreenshot
  size?: 'compact' | 'standard' | 'large'
  eager?: boolean
  showButtons?: boolean
  className?: string
}

const CHASSIS_TOKENS = {
  compact: {
    shell: 'p-[3px] rounded-[1.28rem] sm:rounded-[1.5rem]',
    innerLip: 'p-[1.5px] rounded-[1.08rem] sm:rounded-[1.26rem]',
    oled: 'rounded-[0.98rem] sm:rounded-[1.16rem]',
    statusTime: 'text-[6px] sm:text-[7px]',
    island: 'w-[27%] h-[6px] sm:h-[7.5px]',
    signalW: 8.5,
    batteryW: 12,
    homeBar: 'w-[34%] h-[2px]',
    opticDot: 'hidden',
  },
  standard: {
    shell: 'p-[5px] rounded-[2.7rem]',
    innerLip: 'p-[1.5px] rounded-[2.36rem]',
    oled: 'rounded-[2.24rem]',
    statusTime: 'text-[10px]',
    island: 'w-[26.5%] h-[12.5px]',
    signalW: 12,
    batteryW: 17,
    homeBar: 'w-[34%] h-[3px]',
    opticDot: 'block w-[4px] h-[4px]',
  },
  large: {
    shell: 'p-[6px] rounded-[3.1rem]',
    innerLip: 'p-[2px] rounded-[2.72rem]',
    oled: 'rounded-[2.56rem]',
    statusTime: 'text-[11.5px]',
    island: 'w-[26.5%] h-[15px]',
    signalW: 13.5,
    batteryW: 20,
    homeBar: 'w-[35%] h-[3.5px]',
    opticDot: 'block w-[5px] h-[5px]',
  },
} as const

/**
 * Transparent Crystal-Titanium iPhone 18 Pro Max mockup shell with Dynamic Island,
 * status bar safe area, and Home Indicator scaled to real physical Pro Max body ratio (476:1000).
 */
export const AirFlowPhoneFrame: React.FC<AirFlowPhoneFrameProps> = ({
  screen,
  size = 'standard',
  eager = false,
  showButtons = size !== 'compact',
  className = '',
}) => {
  const t = CHASSIS_TOKENS[size]
  const inkColor = screen.statusInk === 'dark' ? '#09090b' : '#ffffff'
  const homeBarBg = screen.homeInk === 'dark' ? 'bg-zinc-950/75' : 'bg-white/80'

  return (
    <div className={`relative w-full aspect-[476/1000] select-none ${className}`}>
      {/* Subtle Machined Titanium Side Hardware Buttons */}
      {showButtons && (
        <>
          {/* Left: Action + Volume Up + Volume Down */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-[2.5px] top-[15%] w-[2.5px] h-[3.2%] rounded-l-sm bg-gradient-to-b from-zinc-300/70 to-zinc-500/70"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-[2.5px] top-[21.5%] w-[2.5px] h-[6.5%] rounded-l-sm bg-gradient-to-b from-zinc-300/70 to-zinc-500/70"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-[2.5px] top-[30%] w-[2.5px] h-[6.5%] rounded-l-sm bg-gradient-to-b from-zinc-300/70 to-zinc-500/70"
          />
          {/* Right: Side Power + Camera Control */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-[2.5px] top-[24%] w-[2.5px] h-[9.5%] rounded-r-sm bg-gradient-to-b from-zinc-300/70 to-zinc-500/70"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-[2px] top-[60%] w-[2px] h-[7%] rounded-r-sm bg-zinc-400/50"
          />
        </>
      )}

      {/* Translucent Frosted Crystal-Titanium Outer Chassis */}
      <div
        className={`w-full h-full bg-zinc-400/[0.16] backdrop-blur-md border border-white/30 ring-1 ring-black/15 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.42)] ${t.shell}`}
      >
        {/* Ultra-Slim Precision OLED Bezel */}
        <div className={`w-full h-full bg-[#09090c] ring-1 ring-white/10 ${t.innerLip}`}>
          {/* Locked Edge-to-Edge Pro Max Display */}
          <div
            className={`relative w-full h-full overflow-hidden flex flex-col ${t.oled}`}
            style={{ backgroundColor: screen.bottomBg }}
          >
            {/* Dynamic Island + Authentic iOS Status Bar Overlay */}
            <div
              className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-[8%] pointer-events-none"
              style={{
                height: '4.1%',
                color: inkColor,
              }}
            >
              {/* Left: Time */}
              <span
                className={`w-[24%] font-sans font-semibold tracking-tight leading-none tabular-nums ${t.statusTime}`}
              >
                9:41
              </span>

              {/* Center: iPhone 18 Pro Max Dynamic Island */}
              <div
                className={`rounded-full bg-[#040406] border border-white/[0.16] shadow-inner flex items-center justify-end pr-[7%] shrink-0 ${t.island}`}
              >
                <span
                  className={`rounded-full bg-[#1b2845] ring-1 ring-[#3b82f6]/25 ${t.opticDot}`}
                />
              </div>

              {/* Right: Signal + Battery */}
              <div className="w-[24%] flex items-center justify-end gap-[3px]">
                <svg
                  width={t.signalW}
                  height={t.signalW * 0.72}
                  viewBox="0 0 16 11"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <rect x="0" y="7" width="2.6" height="4" rx="0.7" />
                  <rect x="4.2" y="5" width="2.6" height="6" rx="0.7" />
                  <rect x="8.4" y="2.5" width="2.6" height="8.5" rx="0.7" />
                  <rect x="12.6" y="0" width="2.6" height="11" rx="0.7" />
                </svg>
                <svg
                  width={t.batteryW}
                  height={t.batteryW * 0.52}
                  viewBox="0 0 25 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="0.7"
                    y="0.7"
                    width="20.6"
                    height="10.6"
                    rx="2.8"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeOpacity="0.45"
                  />
                  <rect x="2.2" y="2.2" width="16.5" height="7.6" rx="1.6" fill="currentColor" />
                  <path
                    d="M23 4.2V7.8C23.8 7.5 24.3 6.8 24.3 6C24.3 5.2 23.8 4.5 23 4.2Z"
                    fill="currentColor"
                    fillOpacity="0.5"
                  />
                </svg>
              </div>
            </div>

            {/* Top Safe Area Spacer (Prevents top corner clipping & hosts Dynamic Island) */}
            <div
              className="w-full shrink-0"
              style={{
                height: screen.isSheetModal ? '0.4%' : '2.7%',
                backgroundColor: screen.topBg,
              }}
            />

            {/* Uncropped App Screenshot within true Pro Max OLED proportions */}
            <div className="relative w-full flex-1 min-h-0">
              <img
                src={screen.src}
                alt={screen.alt}
                loading={eager ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-fill block"
              />
              {/* Seamless feather at top seam */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[4px]"
                style={{
                  background: `linear-gradient(to bottom, ${screen.topBg}, transparent)`,
                }}
              />
            </div>

            {/* Bottom Home Indicator Safe Area (Prevents bottom corner clipping) */}
            <div
              className="w-full shrink-0 flex items-center justify-center"
              style={{
                height: '1.8%',
                backgroundColor: screen.bottomBg,
              }}
            >
              <span className={`rounded-full ${t.homeBar} ${homeBarBg}`} />
            </div>

            {/* Subtle Glass Specular Reflection */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.07]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AirFlowPhoneFrame
