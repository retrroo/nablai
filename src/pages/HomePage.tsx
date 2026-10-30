import React from 'react'
import { Link } from 'react-router-dom'
import { InteractiveHero } from '../components/InteractiveHero'
import { LogoStorySection } from '../components/LogoStorySection'
import { ServicesSection } from '../components/ServicesSection'
import { SolutionsSection } from '../components/SolutionsSection'
import { ArchitectureSection } from '../components/ArchitectureSection'
import { ProcessSection } from '../components/ProcessSection'
import { ContactSection } from '../components/ContactSection'
import { Plane, Orbit, ArrowRight } from 'lucide-react'

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* 1. Full-Screen Interactive Hero (Canvas + Pixel Preloader + GSAP timeline) */}
      <InteractiveHero />

      {/* 2. Featured Apps Spotlight: AirFlow & Latent Space */}
      <section className="py-20 bg-[#090b12] border-t border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                Nablai Applicaties
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                Live AI Producten Gebouwd door Nablai
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-400">
                Ervaar direct hoe onze wiskundige modellen en agentische architectuur in de praktijk presteren.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AirFlow Card */}
            <Link
              to="/apps/airflow"
              className="group p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    <Plane className="w-6 h-6 transform -rotate-45" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    Aviation Intelligence
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                  AirFlow
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Scan je boarding pass via camera of barcode, bekijk je vluchthistorie en monitor real-time telemetrie en vertragingsvoorspellingen via live ADS-B radardata.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>Verken AirFlow App</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>

            {/* Latent Space Card */}
            <Link
              to="/apps/latent-space"
              className="group p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    <Orbit className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    AI Vector Lab
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors">
                  Latent Space
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Interactieve 2D/3D projectie van hoog-dimensionale embedding ruimtes. Bereken semantische cosine similarity afstanden en onderzoek hoe transformermodellen concepten clusteren.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                <span>Verken Latent Space Lab</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. The Nablai Brand DNA & Split-A Logo Studio */}
      <LogoStorySection />

      {/* 4. AI Services & Core Disciplines */}
      <ServicesSection />

      {/* 5. Proven Solutions & Industrial Case Studies */}
      <SolutionsSection />

      {/* 6. Production Architecture */}
      <ArchitectureSection />

      {/* 7. 4-Step Agile Delivery Process */}
      <ProcessSection />

      {/* 8. Interactive Project Discovery / Contact Form */}
      <ContactSection />
    </div>
  )
}
export default HomePage
