import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LogoStorySection } from './components/LogoStorySection'
import { ServicesSection } from './components/ServicesSection'
import { SolutionsSection } from './components/SolutionsSection'
import { ArchitectureSection } from './components/ArchitectureSection'
import { ProcessSection } from './components/ProcessSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 selection:bg-purple-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Logo & Brand Story Section: Nabla + Ai with split-A */}
        <LogoStorySection />

        {/* AI Engineering Services */}
        <ServicesSection />

        {/* Proven Solutions & Case Studies */}
        <SolutionsSection />

        {/* Robust Production Architecture */}
        <ArchitectureSection />

        {/* 4-Step Agile Delivery Process */}
        <ProcessSection />

        {/* Interactive Consultation / Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
