import React, { useEffect, useRef } from 'react'

interface Node {
  // Normalized base positions [0..1]
  nx: number
  ny: number
  // Current computed pixel coordinates
  x: number
  y: number
  baseRadius: number
  radius: number
  type: 'major' | 'medium' | 'minor'
  baseAlpha: number
  alpha: number
  phase: number
  speed: number
  // Spring displacement physics
  dispX: number
  dispY: number
  targetDispX: number
  targetDispY: number
}

interface Edge {
  from: number
  to: number
  baseAlpha: number
}

interface ConstellationCanvasProps {
  className?: string
}

export const ConstellationCanvas: React.FC<ConstellationCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let dpr = 1

    let nodes: Node[] = []
    let edges: Edge[] = []

    let mouseX = -9999
    let mouseY = -9999
    let isMouseActive = false

    // Seeded pseudo-random for consistent organic branch layout
    let seed = 42
    const pseudoRandom = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }

    const initConstellation = (w: number, h: number) => {
      seed = 7719 // Stable seed for high-aesthetic branch shape
      const isMobile = w < 768
      const count = isMobile ? 48 : 105
      nodes = []

      // Generate nodes following the organic branch/constellation belt from Photo 2:
      // Left cluster: lower (ny ~ 0.45 - 0.78, nx ~ 0.04 - 0.35)
      // Center bridge: waist (ny ~ 0.44 - 0.60, nx ~ 0.35 - 0.65)
      // Right canopy: ascending upper (ny ~ 0.20 - 0.58, nx ~ 0.65 - 0.96)
      for (let i = 0; i < count; i++) {
        let nx = 0
        let ny = 0

        const segment = i / count
        if (segment < 0.38) {
          // Left cluster
          nx = 0.04 + pseudoRandom() * 0.32
          const curveY = 0.58 - (nx - 0.18) * 0.4
          ny = curveY + (pseudoRandom() - 0.5) * 0.34
        } else if (segment < 0.62) {
          // Center bridge / trunk
          nx = 0.33 + pseudoRandom() * 0.32
          const curveY = 0.52 - (nx - 0.5) * 0.15
          ny = curveY + (pseudoRandom() - 0.5) * 0.22
        } else {
          // Right ascending canopy
          nx = 0.63 + pseudoRandom() * 0.33
          const curveY = 0.46 - (nx - 0.63) * 0.48
          ny = curveY + (pseudoRandom() - 0.5) * 0.36
        }

        // Keep within safe normalized boundaries
        nx = Math.max(0.02, Math.min(0.98, nx))
        ny = Math.max(0.12, Math.min(0.88, ny))

        // Determine node type and visual hierarchy
        const typeRoll = pseudoRandom()
        let type: 'major' | 'medium' | 'minor' = 'minor'
        let baseRadius = isMobile ? 1.6 : 2.2
        let baseAlpha = 0.35 + pseudoRandom() * 0.3

        if (typeRoll > 0.86) {
          type = 'major'
          baseRadius = isMobile ? 4.2 : 5.8
          baseAlpha = 0.95
        } else if (typeRoll > 0.52) {
          type = 'medium'
          baseRadius = isMobile ? 2.6 : 3.6
          baseAlpha = 0.7
        }

        nodes.push({
          nx,
          ny,
          x: nx * w,
          y: ny * h,
          baseRadius,
          radius: baseRadius,
          type,
          baseAlpha,
          alpha: baseAlpha,
          phase: pseudoRandom() * Math.PI * 2,
          speed: 0.6 + pseudoRandom() * 0.8,
          dispX: 0,
          dispY: 0,
          targetDispX: 0,
          targetDispY: 0,
        })
      }

      // Compute geometric edges (clean Delaunay-like polygonal web as in photo 2)
      edges = []
      const maxConnectDist = isMobile ? Math.min(w, h) * 0.24 : Math.min(w, h) * 0.17

      for (let i = 0; i < nodes.length; i++) {
        // Find nearest neighbors to connect cleanly without dense blob
        const distances: { index: number; dist: number }[] = []
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue
          const dx = (nodes[i].nx - nodes[j].nx) * w
          const dy = (nodes[i].ny - nodes[j].ny) * h
          const d = Math.hypot(dx, dy)
          if (d < maxConnectDist) {
            distances.push({ index: j, dist: d })
          }
        }

        distances.sort((a, b) => a.dist - b.dist)

        // Connect to up to 3-4 closest neighbors
        const connectCount = Math.min(distances.length, nodes[i].type === 'major' ? 4 : 3)
        for (let k = 0; k < connectCount; k++) {
          const j = distances[k].index
          if (i < j) {
            const relDist = distances[k].dist / maxConnectDist
            const baseAlpha = (1 - relDist * 0.75) * 0.45
            edges.push({ from: i, to: j, baseAlpha })
          }
        }
      }
    }

    const resize = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2) // Cap at 2 for performance

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      initConstellation(width, height)
    }

    resize()
    window.addEventListener('resize', resize)

    // Mouse & Touch interactions
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      let clientX = 0
      let clientY = 0

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else if ('clientX' in e) {
        clientX = e.clientX
        clientY = e.clientY
      }

      mouseX = clientX - rect.left
      mouseY = clientY - rect.top
      isMouseActive = true
    }

    const handlePointerLeave = () => {
      isMouseActive = false
      mouseX = -9999
      mouseY = -9999
    }

    window.addEventListener('mousemove', handlePointerMove, { passive: true })
    window.addEventListener('touchmove', handlePointerMove, { passive: true })
    window.addEventListener('mouseleave', handlePointerLeave)

    // Animation Loop
    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.scale(dpr, dpr)

      const t = time * 0.001
      const isMobile = width < 768
      const hoverRadius = isMobile ? 140 : 210
      const maxDisplacement = isMobile ? 18 : 28

      // 1. Update Node positions with organic breathing + mouse physics
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]

        // Organic celestial floating motion
        const floatX = Math.cos(t * n.speed + n.phase) * (isMobile ? 2 : 4)
        const floatY = Math.sin(t * (n.speed * 1.1) + n.phase) * (isMobile ? 2.5 : 5)

        const baseX = n.nx * width + floatX
        const baseY = n.ny * height + floatY

        // Mouse hover interaction: displacement & starlight ignition
        let proximityFactor = 0
        if (isMouseActive) {
          const dx = baseX - mouseX
          const dy = baseY - mouseY
          const dist = Math.hypot(dx, dy)

          if (dist < hoverRadius && dist > 0) {
            proximityFactor = Math.pow(1 - dist / hoverRadius, 1.8)
            const angle = Math.atan2(dy, dx)
            // Push elastically away from mouse
            n.targetDispX = Math.cos(angle) * proximityFactor * maxDisplacement
            n.targetDispY = Math.sin(angle) * proximityFactor * maxDisplacement
          } else {
            n.targetDispX = 0
            n.targetDispY = 0
          }
        } else {
          n.targetDispX = 0
          n.targetDispY = 0
        }

        // Elastic spring interpolation back to base
        n.dispX += (n.targetDispX - n.dispX) * 0.12
        n.dispY += (n.targetDispY - n.dispY) * 0.12

        n.x = baseX + n.dispX
        n.y = baseY + n.dispY

        // Spatial falloff ("fade in de space" into deep black borders)
        const fadeX = Math.min(1, Math.min(n.x / (width * 0.12), (width - n.x) / (width * 0.12)))
        const fadeY = Math.min(1, Math.min(n.y / (height * 0.16), (height - n.y) / (height * 0.16)))
        const edgeAlpha = Math.max(0, Math.min(1, fadeX * fadeY))

        // Dynamic starlight brightness & halo radius
        n.alpha = Math.min(1, (n.baseAlpha + proximityFactor * 0.6) * edgeAlpha)
        n.radius = n.baseRadius * (1 + proximityFactor * 0.5)
      }

      // 2. Draw Connecting Lines (Edges)
      ctx.lineWidth = 1
      for (let e = 0; e < edges.length; e++) {
        const edge = edges[e]
        const n1 = nodes[edge.from]
        const n2 = nodes[edge.to]

        // Combined edge opacity
        const combinedAlpha = Math.min(n1.alpha, n2.alpha) * edge.baseAlpha * 1.8
        if (combinedAlpha < 0.02) continue

        // Draw crisp geometric connection
        ctx.beginPath()
        ctx.moveTo(n1.x, n1.y)
        ctx.lineTo(n2.x, n2.y)
        ctx.strokeStyle = `rgba(255, 255, 255, ${combinedAlpha.toFixed(3)})`
        ctx.stroke()
      }

      // 3. Dynamic Starlight Links to Mouse Cursor (Active focal point)
      if (isMouseActive && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        // Connect cursor to closest nodes
        const mouseLinks: { index: number; dist: number }[] = []
        for (let i = 0; i < nodes.length; i++) {
          const d = Math.hypot(nodes[i].x - mouseX, nodes[i].y - mouseY)
          if (d < hoverRadius * 0.95) {
            mouseLinks.push({ index: i, dist: d })
          }
        }
        mouseLinks.sort((a, b) => a.dist - b.dist)

        const activeLinks = Math.min(mouseLinks.length, 5)
        for (let k = 0; k < activeLinks; k++) {
          const link = mouseLinks[k]
          const target = nodes[link.index]
          const linkAlpha = (1 - link.dist / (hoverRadius * 0.95)) * 0.55 * target.alpha

          ctx.beginPath()
          ctx.moveTo(mouseX, mouseY)
          ctx.lineTo(target.x, target.y)
          ctx.strokeStyle = `rgba(255, 255, 255, ${linkAlpha.toFixed(3)})`
          ctx.lineWidth = 1.2
          ctx.stroke()
        }

        // Soft mouse reticle glow
        const mouseGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 16)
        mouseGrad.addColorStop(0, 'rgba(255, 255, 255, 0.65)')
        mouseGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.2)')
        mouseGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = mouseGrad
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 16, 0, Math.PI * 2)
        ctx.fill()
      }

      // 4. Draw Nodes with Starlight Halos
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (n.alpha < 0.02) continue

        // Major & Medium nodes have glowing halos
        if (n.type === 'major' || (n.type === 'medium' && n.alpha > 0.6)) {
          const haloRadius = n.radius * (n.type === 'major' ? 3.5 : 2.5)
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, haloRadius)
          grad.addColorStop(0, `rgba(255, 255, 255, ${(n.alpha * 0.45).toFixed(3)})`)
          grad.addColorStop(0.4, `rgba(226, 232, 240, ${(n.alpha * 0.18).toFixed(3)})`)
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)')

          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(n.x, n.y, haloRadius, 0, Math.PI * 2)
          ctx.fill()
        }

        // Core star point
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2)
        if (n.type === 'major') {
          ctx.fillStyle = `rgba(255, 255, 255, ${n.alpha.toFixed(3)})`
        } else if (n.type === 'medium') {
          ctx.fillStyle = `rgba(248, 250, 252, ${n.alpha.toFixed(3)})`
        } else {
          // Subtle silver/slate for minor nodes
          ctx.fillStyle = `rgba(203, 213, 225, ${(n.alpha * 0.85).toFixed(3)})`
        }
        ctx.fill()
      }

      ctx.restore()
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('touchmove', handlePointerMove)
      window.removeEventListener('mouseleave', handlePointerLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-auto overflow-hidden select-none ${className}`}
      style={{ touchAction: 'pan-y' }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}

export default ConstellationCanvas
