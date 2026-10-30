import React, { useState } from 'react'
import { ArrowUpRight, Check, Mail, MessageSquare } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from './Icons'

const COLLAB_TOPICS = [
  'Beta Access / App Feedback',
  'Technical Discussion',
  'Open Source & Collab',
  'General / Say Hello',
]

export const ContactSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState(COLLAB_TOPICS[0])
  const [submitted, setSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <section id="contact" className="py-24 relative bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries & Founder Dossiers */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
                06 &mdash; Connect &amp; Collaborate
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950 font-sans">
                Get in touch with <br className="hidden sm:inline" />
                <span className="font-serif italic font-normal text-zinc-600">Onur &amp; Karim.</span>
              </h2>
              <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-sans">
                We are an independent software development team &mdash; we build applications for ourselves, not clients. If you have feedback on <strong className="text-zinc-950 font-medium">AirFlow</strong> or <strong className="text-zinc-950 font-medium">Latent Space</strong>, want early access to our upcoming builds, or want to exchange ideas on AI engineering, drop us a line.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-200 text-xs font-mono">
              {/* Copy Email Card */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-zinc-200 shadow-xs">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-zinc-700" />
                  <span className="text-zinc-800">contact@nablai.dev</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-colors border border-zinc-200"
                >
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* GitHub Repo Card */}
              <a
                href="https://github.com/retrroo/nablai"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 transition-colors group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-zinc-800" />
                  <span className="text-zinc-800 font-medium">github.com/retrroo/nablai</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              </a>

              {/* Founder Direct LinkedIn Links */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/in/onurryilmaz/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 transition-colors group shadow-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-zinc-950 font-sans text-sm font-medium">Onur</span>
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5]" />
                  </div>
                  <span className="text-[10px] text-zinc-500 block">AI Architect</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/karim-said-5691a231a/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 transition-colors group shadow-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-zinc-950 font-sans text-sm font-medium">Karim</span>
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5]" />
                  </div>
                  <span className="text-[10px] text-zinc-500 block">ML Engineer</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Mode Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-zinc-200 shadow-xs">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-normal text-zinc-950 font-sans">Message Dispatched</h3>
                  <p className="text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed font-sans">
                    Thanks for reaching out! Onur or Karim will get back to you directly via email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-zinc-50 hover:bg-zinc-100 text-xs font-mono text-zinc-700 transition-colors border border-zinc-200"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Topic Selector */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">
                      Topic
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {COLLAB_TOPICS.map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setSelectedTopic(topic)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                            selectedTopic === topic
                              ? 'bg-zinc-950 text-white font-medium'
                              : 'bg-zinc-50 text-zinc-700 hover:text-zinc-950 border border-zinc-200'
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-500 mb-1.5 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-950 text-sm focus:outline-none focus:border-zinc-950 transition-colors placeholder:text-zinc-400 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-500 mb-1.5 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-950 text-sm focus:outline-none focus:border-zinc-950 transition-colors placeholder:text-zinc-400 font-sans"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-1.5 uppercase tracking-wider">
                      Message / Note
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share your thoughts on AirFlow, Latent Space, ideas, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-950 text-sm focus:outline-none focus:border-zinc-950 transition-colors placeholder:text-zinc-400 resize-none font-sans"
                    />
                  </div>

                  {/* Solid ink submit button (no neon gradient) */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-medium text-xs text-white bg-zinc-950 hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 tracking-tight"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send Message to Onur &amp; Karim</span>
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