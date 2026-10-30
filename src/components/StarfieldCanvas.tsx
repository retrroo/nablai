import React, { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  baseX: number
  baseY: number
  r: number
  baseAlpha: number
  alpha: number
  twinkleSpeed: number
  phase: number
  color: string
  hasSpikes: boolean
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  decay: number
  color: string
  size: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  alpha: number
  active: boolean
}

export const StarfieldCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let stars: Star[] = []
    let particles: Particle[] = []
    let shootingStar: ShootingStar | null = null
    let nextShootingStarTime = performance.now() + 3000 + Math.random() * 4000

    let mouseX = -1000
    let mouseY = -1000
    let lastMouseX = -1000
    let lastMouseY = -1000

    const STAR_COLORS = ['#FFFFFF', '#FFFFFF', '#F8FAFC', '#F1F5F9', '#E2E8F0', '#CBD5E1']

    const initStars = (width: number, height: number) => {
      // Density ~ 1 star per 3500 px^2, with min 200, max 350
      const count = Math.min(350, Math.max(180, Math.round((width * height) / 3600)))
      stars = []

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const rand = Math.random()

        let r = 0.6 + Math.random() * 0.6 // 0.6 to 1.2px
        let hasSpikes = false

        if (rand > 0.9) {
          r = 1.4 + Math.random() * 0.9 // prominent star: 1.4 to 2.3px
          hasSpikes = true
        } else if (rand > 0.65) {
          r = 1.0 + Math.random() * 0.4 // medium star
        }

        const baseAlpha = 0.25 + Math.random() * 0.65
        const twinkleSpeed = 0.8 + Math.random() * 2.4
        const phase = Math.random() * Math.PI * 2
        const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]

        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          r,
          baseAlpha,
          alpha: baseAlpha,
          twinkleSpeed,
          phase,
          color,
          hasSpikes,
        })
      }
    }

    const resize = () => {
      const parent = canvas.parentElement
      const width = parent ? parent.clientWidth : window.innerWidth
      const height = parent ? parent.clientHeight : window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      initStars(width, height)
    }

    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top

      // Add a couple of interactive sparkling dust particles on mouse move
      if (lastMouseX !== -1000) {
        const dist = Math.hypot(mouseX - lastMouseX, mouseY - lastMouseY)
        if (dist > 8 && particles.length < 40) {
          particles.push({
            x: mouseX + (Math.random() - 0.5) * 12,
            y: mouseY + (Math.random() - 0.5) * 12,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            alpha: 0.9,
            decay: 0.02 + Math.random() * 0.02,
            color: Math.random() > 0.5 ? '#A855F7' : '#FFFFFF',
            size: 0.8 + Math.random() * 1.2,
          })
        }
      }
      lastMouseX = mouseX
      lastMouseY = mouseY
    }

    const onMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
      lastMouseX = -1000
      lastMouseY = -1000
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)

    const triggerShootingStar = (width: number, height: number) => {
      shootingStar = {
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.45,
        length: 80 + Math.random() * 70,
        speed: 12 + Math.random() * 8,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3, // ~45 degrees downward
        alpha: 1.0,
        active: true,
      }
    }

    const render = (now: number) => {
      animationFrameId = requestAnimationFrame(render)

      const timeSec = now / 1000
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const parent = canvas.parentElement
      const width = parent ? parent.clientWidth : window.innerWidth
      const height = parent ? parent.clientHeight : window.innerHeight

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      // Check shooting star trigger
      if (now > nextShootingStarTime && (!shootingStar || !shootingStar.active)) {
        triggerShootingStar(width, height)
        nextShootingStarTime = now + 7000 + Math.random() * 7000
      }

      // 1. Draw twinkling stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        // Organic periodic twinkling sine formula
        const twinkle = Math.sin(timeSec * star.twinkleSpeed + star.phase)
        let alpha = star.baseAlpha + twinkle * (star.baseAlpha * 0.55)

        // Mouse proximity interaction: brighten & subtle gravitational shimmer
        let drawX = star.baseX
        let drawY = star.baseY

        if (mouseX !== -1000) {
          const dx = mouseX - star.baseX
          const dy = mouseY - star.baseY
          const dist = Math.hypot(dx, dy)

          if (dist < 160) {
            const proximity = 1 - dist / 160
            // Boost brightness
            alpha = Math.min(1.0, alpha + proximity * 0.8)
            // Subtle interactive gravitational drift (up to 3px towards cursor)
            const drift = proximity * 3.5
            drawX += (dx / dist) * drift
            drawY += (dy / dist) * drift
          }
        }

        // Clamp alpha
        alpha = Math.max(0.15, Math.min(1.0, alpha))

        // Draw star core
        ctx.fillStyle = star.color
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(drawX, drawY, star.r, 0, Math.PI * 2)
        ctx.fill()

        // Prominent stars get soft halo & cross diffraction spikes
        if (star.hasSpikes && alpha > 0.5) {
          // Halo glow
          ctx.fillStyle = star.color === '#FFFFFF' ? 'rgba(255,255,255,0.18)' : 'rgba(168,85,247,0.22)'
          ctx.beginPath()
          ctx.arc(drawX, drawY, star.r * 2.8, 0, Math.PI * 2)
          ctx.fill()

          // 4-pointed sparkle spikes
          const spikeLen = star.r * 3.5 * alpha
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.65})`
          ctx.lineWidth = 0.75
          ctx.beginPath()
          // Horizontal
          ctx.moveTo(drawX - spikeLen, drawY)
          ctx.lineTo(drawX + spikeLen, drawY)
          // Vertical
          ctx.moveTo(drawX, drawY - spikeLen)
          ctx.lineTo(drawX, drawY + spikeLen)
          ctx.stroke()
        }
      }

      // 2. Draw interactive mouse particles (stardust)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.alpha -= p.decay

        if (p.alpha <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      // 3. Draw shooting star if active
      if (shootingStar && shootingStar.active) {
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed
        shootingStar.alpha -= 0.018

        if (shootingStar.alpha <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar.active = false
        } else {
          const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length
          const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length

          const grad = ctx.createLinearGradient(tailX, tailY, shootingStar.x, shootingStar.y)
          grad.addColorStop(0, 'rgba(255, 255, 255, 0)')
          grad.addColorStop(0.7, 'rgba(200, 220, 255, 0.4)')
          grad.addColorStop(1, `rgba(255, 255, 255, ${shootingStar.alpha})`)

          ctx.strokeStyle = grad
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.moveTo(tailX, tailY)
          ctx.lineTo(shootingStar.x, shootingStar.y)
          ctx.stroke()

          // Head glow
          ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.alpha})`
          ctx.beginPath()
          ctx.arc(shootingStar.x, shootingStar.y, 1.8, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      ctx.globalAlpha = 1.0
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-[1] ${className}`}
      style={{ display: 'block' }}
    />
  )
}
export default StarfieldCanvas
