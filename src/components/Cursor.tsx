import React, { useEffect, useRef, useState } from 'react'

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show on mouse/fine pointer devices
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isFinePointer) return

    const cursor = cursorRef.current
    if (!cursor) return

    let currentX = window.innerWidth / 2
    let currentY = window.innerHeight / 2
    let targetX = currentX
    let targetY = currentY
    let animationFrameId: number
    let lastTime = performance.now()

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      setVisible(true)
    }

    const onMouseLeave = () => {
      setVisible(false)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)

    const tick = (now: number) => {
      animationFrameId = requestAnimationFrame(tick)
      const dt = Math.max(1, Math.min(100, now - lastTime))
      lastTime = now

      // Frame rate independent easing: k = 1 - 0.7^(dt / 16.67)
      const k = 1 - Math.pow(0.7, dt / 16.67)
      currentX += (targetX - currentX) * k
      currentY += (targetY - currentY) * k

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
    }

    animationFrameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none rounded-full z-[9999] transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        width: 'calc(40 * var(--u))',
        height: 'calc(40 * var(--u))',
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: '0 0 15px rgba(168, 85, 247, 0.25)',
      }}
    />
  )
}
export default Cursor
