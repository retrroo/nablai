import React from 'react'
import { InteractiveHero } from '../components/InteractiveHero'
import { AppsShowcase } from '../components/AppsShowcase'
import { LogoStorySection } from '../components/LogoStorySection'
import { CapabilitiesSection } from '../components/CapabilitiesSection'
import { ArchitectureSection } from '../components/ArchitectureSection'
import { ProcessSection } from '../components/ProcessSection'
import { ContactSection } from '../components/ContactSection'

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#050609]">
      {/* 1. Full-Screen Interactive Hero (Deep Space + Starfield + Dark Purple Log Canvas) */}
      <InteractiveHero />

      {/* 2. Bespoke Live Apps Showcase (AirFlow & Latent Space) */}
      <AppsShowcase />

      {/* 3. The Nablai Brand DNA & Mathematical Foundation */}
      <LogoStorySection />

      {/* 4. Studio Engineering Stack & Core Systems */}
      <CapabilitiesSection />

      {/* 5. Deterministic Systems Architecture & IDE Canvas */}
      <ArchitectureSection />

      {/* 6. Product Build Cycle */}
      <ProcessSection />

      {/* 7. Connect & Collaboration Terminal */}
      <ContactSection />
    </div>
  )
}
export default HomePage
