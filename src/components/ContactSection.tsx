import React, { useState } from 'react'
import { Send, CheckCircle2, Shield, Clock, Mail } from 'lucide-react'

const PROJECT_TYPES = [
  'Autonomous AI Agent(s)',
  'Private RAG Knowledge Base',
  'Model Fine-Tuning / LoRA',
  'Full-Stack AI Web App',
  'Inference & MLOps Optimization',
]

const BUDGET_RANGES = [
  '$5,000 - $15,000',
  '$15,000 - $30,000',
  '$30,000 - $75,000',
  '$75,000+',
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
    <section id="contact" className="py-24 relative bg-[#05060a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Info & Trust */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                Direct Contact
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
                Let&apos;s Build Your AI Application
              </h2>
              <p className="mt-4 text-slate-400 text-base leading-relaxed">
                Have a concrete use case or want to explore how autonomous agents and private models can transform your business? Schedule a technical deep-dive with our team.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Clock className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Response Within 24 Hours</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    You talk directly with a senior AI engineer &mdash; never a commissioned salesperson.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Shield className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Strict NDA &amp; Data Security</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Your intellectual property and proprietary training data remain 100% confidential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct Email</h4>
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
                  <h3 className="text-2xl font-bold text-white">Request Received Successfully!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to Nablai. We are reviewing your project specifications and will get back to you within 24 hours to schedule a technical discovery call.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Select Project Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      What kind of AI app or solution do you need?
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
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Business Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Company Name &amp; Existing Tech Stack (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp / PostgreSQL, Python, AWS"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Estimated Project Budget
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
                      Brief Description of Your Vision or Use Case
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe the workflow you want to automate or the AI product you want to build..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  {/* Submit Button - Nablai Logo Themed Purple Gradient */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white shadow-xl shadow-purple-600/35 border border-purple-400/30 transition-all active:scale-[0.99]"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 50%, #6366f1 100%)',
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Discovery Request</span>
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
