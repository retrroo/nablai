import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { AirFlowPage } from './pages/AirFlowPage'
import { LatentSpacePage } from './pages/LatentSpacePage'
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

export function App() {
  return (
    <BrowserRouter>
      <ScrollManager />

      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between selection:bg-zinc-900 selection:text-white">
        {/* Navigation Bar */}
        <Nav />

        {/* Dynamic Route Pages with Clean URLs */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apps/airflow" element={<AirFlowPage />} />
            <Route path="/apps/latent-space" element={<LatentSpacePage />} />
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
