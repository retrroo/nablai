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
// to ensure seamless native-like status bar and bottom toolbar tinting.
function ThemeColorManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metaThemeColors = document.querySelectorAll('meta[name="theme-color"]')

    const updateTheme = () => {
      // Dark on homepage when inside the hero canvas
      const heroActive = pathname === '/' && window.scrollY < (window.innerHeight * 0.7)
      const targetColor = heroActive ? '#030305' : '#ffffff'

      metaThemeColors.forEach((meta) => {
        meta.setAttribute('content', targetColor)
      })
      document.documentElement.style.backgroundColor = targetColor
      document.body.style.backgroundColor = targetColor

      if (heroActive) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
        document.documentElement.style.colorScheme = 'dark'
        document.body.style.colorScheme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        document.documentElement.style.colorScheme = 'light'
        document.body.style.colorScheme = 'light'
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

      <div className="min-h-screen min-h-[100lvh] flex flex-col justify-between selection:bg-zinc-900 selection:text-white bg-[#030305]">
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
