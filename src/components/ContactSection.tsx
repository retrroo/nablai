import React, { useState } from 'react'
import { ArrowUpRight, Check, Shield, Clock, Mail } from 'lucide-react'

const PROJECT_TYPES = [
  'Autonomous AI Agent',
  'Private RAG Knowledge Base',
  'Model Fine-Tuning / LoRA',
  'Full-Stack AI Web App',
  'MLOps & GPU Cluster',
]

const BUDGET_RANGES = [
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
]

export const ContactSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0])
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_RANGES[1])
  const [submitted, setSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@nablai.dev')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 relative bg-[#040508] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase block mb-3">
                06 &mdash; Contact &amp; Discovery
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white font-sans">
                Start an Engineering <br className="hidden sm:inline" />
                <span className="font-serif italic font-normal text-slate-300">conversation with us.</span>
              </h2>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                Whether you have an immediate use case or want to explore how autonomous agents and private models fit into your software roadmap &mdash; let&apos;s talk.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/[0.06] text-xs font-mono">
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#08090e] border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-300">contact@nablai.dev</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                >
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#08090e] border border-white/[0.06] text-slate-400">
                <Clock className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white block mb-0.5">24-Hour Engineer SLA</span>
                  <p className="text-[11px] text-slate-500">
                    You talk directly with a senior AI engineer &mdash; zero sales fluff.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#08090e] border border-white/[0.06] text-slate-400">
                <Shield className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white block mb-0.5">Mutual NDA &amp; Data Security</span>
                  <p className="text-[11px] text-slate-500">
                    All proprietary data and discussions remain 100% confidential.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#08090e] border border-white/[0.08]">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mx-auto text-purple-300">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-normal text-white font-sans">Inquiry Received</h3>
                  <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Thank you. We are reviewing your technical specifications and will respond within 24 hours to schedule a deep-dive call.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-slate-300 transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Scope Selector */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Target Capability
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                            selectedType === type
                              ? 'bg-purple-600 text-white font-medium'
                              : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.04]'
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
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-purple-400 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-purple-400 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                      Company &amp; Stack (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Systems / Python, AWS, PostgreSQL"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-purple-400 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_RANGES.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setSelectedBudget(range)}
                          className={`py-2 px-3 rounded-lg text-xs font-mono text-center transition-colors ${
                            selectedBudget === range
                              ? 'bg-white/[0.1] text-white border border-purple-400/50'
                              : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.04]'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                      Project Goals &amp; Constraints
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe the workflow you want to automate or the custom application you want to engineer..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-purple-400 transition-colors placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-medium text-xs text-white bg-purple-600 hover:bg-purple-500 transition-colors flex items-center justify-center gap-2 tracking-tight"
                  >
                    <span>Submit Discovery Request</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
