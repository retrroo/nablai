import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { AirFlowPage } from './pages/AirFlowPage'
import { LatentSpacePage } from './pages/LatentSpacePage'
import { AboutPage } from './pages/AboutPage'
import { StackPage } from './pages/StackPage'
import { ArchitecturePage } from './pages/ArchitecturePage'

// Automatically scrolls to top on navigation change or smoothly to anchor hashes
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export function App() {
  return (
    <HashRouter>
      <ScrollManager />

      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between selection:bg-zinc-900 selection:text-white">
        {/* Navigation Bar */}
        <Nav />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apps/airflow" element={<AirFlowPage />} />
            <Route path="/apps/latent-space" element={<LatentSpacePage />} />
            <Route path="/stack" element={<StackPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<HomePage />} />
            {/* Fallback to HomePage so no route is ever empty */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App