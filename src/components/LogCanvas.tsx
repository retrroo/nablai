import React, { useEffect, useRef } from 'react'

interface LogCanvasProps {
  bare: ImageBitmap | null
  moss: ImageBitmap | null
  introRef: React.MutableRefObject<{ zoom: number; pixel: number }>
}

interface Stamp {
  x: number
  y: number
  strength: number
  born: number
}

export const LogCanvas: React.FC<LogCanvasProps> = ({ bare, moss, introRef }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const probeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    const probe = probeRef.current
    if (!container || !canvas || !probe) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let stamps: Stamp[] = []
    let lastX = 0
    let lastY = 0
    let hasPointer = false
    let isInside = false
    let travel = 0
    let lastMoveTime = 0
    let restTimer: number | null = null

    // Offscreen canvases
    const mask = document.createElement('canvas')
    const maskCtx = mask.getContext('2d')
    const layer = document.createElement('canvas')
    const layerCtx = layer.getContext('2d')
    const pixelCanvas = document.createElement('canvas')
    const pixelCtx = pixelCanvas.getContext('2d')

    // Create brush sprite
    const brush = document.createElement('canvas')
    const brushCtx = brush.getContext('2d')

    const updateBrush = (r: number) => {
      brush.width = r * 2
      brush.height = r * 2
      if (!brushCtx) return
      brushCtx.clearRect(0, 0, r * 2, r * 2)
      const grad = brushCtx.createRadialGradient(r, r, 0, r, r, r)
      grad.addColorStop(0, '#000000')
      grad.addColorStop(0.45, 'rgba(0,0,0,0.85)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      brushCtx.fillStyle = grad
      brushCtx.beginPath()
      brushCtx.arc(r, r, r, 0, Math.PI * 2)
      brushCtx.fill()
    }

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const px = e.clientX - rect.left
      const py = e.clientY - rect.top
      const now = performance.now() / 1000

      const unit = (probe.getBoundingClientRect().width || 100) / 100
      const RADIUS = 240 * unit
      const step = RADIUS * 0.12

      if (!hasPointer) {
        lastX = px
        lastY = py
        hasPointer = true
        isInside = true
      }

      const dx = px - lastX
      const dy = py - lastY
      const dist = Math.hypot(dx, dy)

      if (dist > 0) {
        for (let d = step - travel; d <= dist; d += step) {
          stamps.push({
            x: lastX + (dx * d) / dist,
            y: lastY + (dy * d) / dist,
            strength: 0.5,
            born: now,
          })
        }
        travel = (travel + dist) % step
      }

      lastX = px
      lastY = py
      lastMoveTime = now
      isInside = true
    }

    const onMouseLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        isInside = false
        hasPointer = false
      }
    }

    window.addEventListener('mousemove', onPointerMove, { passive: true })
    document.addEventListener('mouseout', onMouseLeave)

    // Rest interval check (every 50ms)
    restTimer = window.setInterval(() => {
      if (!isInside || !hasPointer) return
      const now = performance.now() / 1000
      if (now - lastMoveTime >= 0.05) {
        stamps.push({
          x: lastX,
          y: lastY,
          strength: 0.25,
          born: now,
        })
      }
    }, 50)

    let lastR = 0

    const render = () => {
      animationFrameId = requestAnimationFrame(render)

      const rect = container.getBoundingClientRect()
      const heroW = rect.width
      const heroH = rect.height
      if (heroW === 0 || heroH === 0 || !bare || !moss || !maskCtx || !layerCtx) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const isMobile = window.innerWidth < 1024
      const isTouch = window.matchMedia('(hover: none)').matches

      // Resize canvases if necessary
      if (canvas.width !== Math.round(heroW * dpr) || canvas.height !== Math.round(heroH * dpr)) {
        canvas.width = Math.round(heroW * dpr)
        canvas.height = Math.round(heroH * dpr)
        mask.width = Math.max(1, Math.round(heroW * 0.5))
        mask.height = Math.max(1, Math.round(heroH * 0.5))
        layer.width = Math.round(heroW * dpr)
        layer.height = Math.round(heroH * dpr)
      }

      const unit = (probe.getBoundingClientRect().width || 100) / 100
      const RADIUS = 240 * unit
      const r = Math.max(1, Math.round(RADIUS * 0.5))
      if (r !== lastR) {
        updateBrush(r)
        lastR = r
      }

      const now = performance.now() / 1000

      // Calculate log image destination box
      let w = 0
      let h = 0
      let x0 = 0
      let y0 = 0

      if (!isMobile) {
        w = Math.max(1482 * unit, heroW * 1.0292)
        h = w * (1536 / 2752)
        x0 = (heroW - w) / 2
        y0 = heroH / 2 + 92.5 * unit - h / 2
      } else {
        w = Math.max(826 * unit, heroW * 1.1)
        h = w * (1536 / 2752)
        x0 = (heroW - w) / 2
        y0 = heroH / 2 + 31.5 * unit - 0.229 * (345 * unit) - h / 2
      }

      // Read zoom & pixelation state from introRef
      const zoom = introRef.current.zoom || 1
      const pixelPower = introRef.current.pixel || 0
      const blockSize = Math.max(1, Math.round(Math.pow(2, pixelPower)))

      // Update stamps and paint mask
      maskCtx.clearRect(0, 0, mask.width, mask.height)
      if (!isTouch) {
        stamps = stamps.filter((s) => {
          const a = s.strength * Math.exp(-(now - s.born) / 1.1)
          if (a < 0.004) return false
          maskCtx.globalAlpha = a
          maskCtx.drawImage(brush, s.x * 0.5 - r, s.y * 0.5 - r)
          return true
        })
        maskCtx.globalAlpha = 1
      }

      // Draw layers
      layerCtx.setTransform(dpr, 0, 0, dpr, 0, 0)
      layerCtx.clearRect(0, 0, heroW, heroH)

      // Apply zoom around log center
      const centerX = x0 + w / 2
      const centerY = y0 + h / 2

      layerCtx.save()
      layerCtx.translate(centerX, centerY)
      layerCtx.scale(zoom, zoom)
      layerCtx.translate(-centerX, -centerY)
      layerCtx.drawImage(moss, x0, y0, w, h)
      layerCtx.restore()

      if (!isTouch) {
        layerCtx.globalCompositeOperation = 'destination-in'
        layerCtx.drawImage(mask, 0, 0, heroW, heroH)
        layerCtx.globalCompositeOperation = 'source-over'
      }

      // Main canvas compositing
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, heroW, heroH)

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.scale(zoom, zoom)
      ctx.translate(-centerX, -centerY)
      ctx.drawImage(bare, x0, y0, w, h)
      ctx.restore()

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.drawImage(layer, 0, 0)

      // Pixelation pass if blockSize > 1
      if (blockSize > 1 && pixelCtx) {
        const sw = Math.max(1, Math.floor(canvas.width / blockSize))
        const sh = Math.max(1, Math.floor(canvas.height / blockSize))
        if (pixelCanvas.width !== sw || pixelCanvas.height !== sh) {
          pixelCanvas.width = sw
          pixelCanvas.height = sh
        }
        pixelCtx.imageSmoothingEnabled = false
        pixelCtx.clearRect(0, 0, sw, sh)
        pixelCtx.drawImage(canvas, 0, 0, sw, sh)

        ctx.imageSmoothingEnabled = false
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(pixelCanvas, 0, 0, sw, sh, 0, 0, canvas.width, canvas.height)
        ctx.imageSmoothingEnabled = true
      }
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onPointerMove)
      document.removeEventListener('mouseout', onMouseLeave)
      if (restTimer) clearInterval(restTimer)
    }
  }, [bare, moss, introRef])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      {/* Unit probe element */}
      <div
        ref={probeRef}
        style={{ width: 'calc(100 * var(--u))', height: 0, visibility: 'hidden', position: 'absolute' }}
      />
    </div>
  )
}
export default LogCanvas
