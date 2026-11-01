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
    <div className="bg-[#030305]">
      {/* 1. Full-Screen Interactive Hero Canvas (Space + Driftwood Log) */}
      <InteractiveHero />

      {/* 2. Below Hero: Editorial White Mode Content */}
      <div className="bg-white text-zinc-900">
        {/* Apps Showcase (AirFlow & Latent Space) */}
        <AppsShowcase />

        {/* The Nablai Brand DNA & 50/50 Bisected Identity */}
        <LogoStorySection />

        {/* Studio Engineering Stack */}
        <CapabilitiesSection />

        {/* Systems Architecture & IDE Code Canvas */}
        <ArchitectureSection />

        {/* Product Build Cycle */}
        <ProcessSection />

        {/* Connect & Collaboration Terminal */}
        <ContactSection />
      </div>
    </div>
  )
}
export default HomePage