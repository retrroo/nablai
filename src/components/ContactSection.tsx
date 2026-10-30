import React, { useState } from 'react'
import { Send, CheckCircle2, Shield, Clock, Mail } from 'lucide-react'

const PROJECT_TYPES = [
  'Autonome AI Agent(s)',
  'Private RAG Kennisbank',
  'Model Fine-Tuning / LoRA',
  'Full-Stack AI Webapp',
  'Inference / MLOps Optimalisatie',
]

const BUDGET_RANGES = [
  '€5.000 - €15.000',
  '€15.000 - €30.000',
  '€30.000 - €75.000',
  '€75.000+',
]

export const ContactSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0])
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_RANGES[1])
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 relative bg-[#08090d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Info & Trust */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                Direct Contact
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
                Laten We Jouw AI Systeem Bouwen
              </h2>
              <p className="mt-4 text-slate-400 text-base leading-relaxed">
                Heb je een concrete use case of wil je onderzoeken hoe autonome agents of private modellen jouw organisatie vooruit helpen? Plan direct een technische deep-dive.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Clock className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Reactie Binnen 24 Uur</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Je spreekt rechtstreeks met een senior AI engineer, geen verkoopadviseurs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Shield className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Strikte NDA &amp; Data Veiligheid</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Jouw intellectueel eigendom en bedrijfsdata blijven 100% vertrouwelijk en beschermd.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct E-mailen</h4>
                  <p className="text-xs text-slate-400 mt-0.5 font-mono">
                    contact@nablai.dev
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-xl shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Aanvraag Succesvol Ontvangen!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Bedankt voor je interesse in Nablai. We beoordelen jouw projectspecificaties en nemen binnen 24 uur contact met je op voor een technische discovery call.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors mt-4"
                  >
                    Nog een bericht versturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Select Project Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Wat voor soort AI oplossing heb je nodig?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            selectedType === type
                              ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                              : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Volledige Naam
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Bijv. Mark Jansen"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Zakelijk E-mailadres
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="mark@bedrijf.nl"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Bedrijfsnaam &amp; Huidige Software Stack (Optioneel)
                    </label>
                    <input
                      type="text"
                      placeholder="Bijv. Acme Corp / PostgreSQL, Python, AWS"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Geschat Budget Indicatie
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_RANGES.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setSelectedBudget(range)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all text-center ${
                            selectedBudget === range
                              ? 'bg-purple-600/30 text-purple-200 border border-purple-500'
                              : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Korte Toelichting op de Use Case
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Beschrijf in een paar zinnen welke handmatige taak je wilt automatiseren of welk AI product je wilt realiseren..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 transition-all active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Verstuur Discovery Aanvraag</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactSection
