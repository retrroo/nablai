import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { AirFlowPage } from './pages/AirFlowPage'
import { LatentSpacePage } from './pages/LatentSpacePage'
import { NablaShieldPage } from './pages/NablaShieldPage'
import { SoundBoostPage } from './pages/SoundBoostPage'
import { AboutPage } from './pages/AboutPage'
import { StackPage } from './pages/StackPage'
import { ArchitecturePage } from './pages/ArchitecturePage'

// Automatically scrolls to top on navigation change, smoothly to anchor hashes,
// and auto-migrates any legacy /#/ URLs to clean paths.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // If a visitor arrives via an old bookmarked or cached /#/ URL, auto-clean to clean path
    if (window.location.hash.startsWith('#/')) {
      const cleanPath = window.location.hash.substring(2) || '/'
      navigate(cleanPath, { replace: true })
      return
    }

    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, navigate])

  return null
}

// Dynamically updates Apple iOS Safari theme-color and document background
// to ensure seamless native-like status bar tinting between the dark cosmic hero and editorial light mode.
function ThemeColorManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')

    const updateTheme = () => {
      // Dark on homepage when inside the hero canvas
      const isHero = pathname === '/' && window.scrollY < (window.innerHeight * 0.7)
      const targetColor = isHero ? '#030305' : '#ffffff'

      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', targetColor)
      }
      document.documentElement.style.backgroundColor = targetColor
      document.body.style.backgroundColor = targetColor

      if (isHero) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
      }
    }

    updateTheme()
    window.addEventListener('scroll', updateTheme, { passive: true })
    window.addEventListener('resize', updateTheme, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateTheme)
      window.removeEventListener('resize', updateTheme)
    }
  }, [pathname])

  return null
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <ThemeColorManager />

      <div className="min-h-screen min-h-[100dvh] flex flex-col justify-between selection:bg-zinc-900 selection:text-white">
        {/* Navigation Bar */}
        <Nav />

        {/* Dynamic Route Pages with Clean URLs */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/apps/airflow" element={<AirFlowPage />} />
            <Route path="/apps/latent-space" element={<LatentSpacePage />} />
            <Route path="/apps/nabla-shield" element={<NablaShieldPage />} />
            <Route path="/apps/soundboost" element={<SoundBoostPage />} />
            <Route path="/stack" element={<StackPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<HomePage />} />
            {/* Fallback to HomePage so no route is ever broken */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
