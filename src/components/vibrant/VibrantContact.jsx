import { useState } from 'react';
import { Check, Copy, Download, Globe, Mail, MapPin, Phone, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const VibrantContact = () => {
  const [copied, setCopied] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <footer id="vibrant-contact" className="pt-20 pb-12 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="p-8 sm:p-14 rounded-[40px] bg-[#121620] border-2 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Huge Header matching reference */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-[1.1]">
                LET'S MAKE <br />
                SOMETHING{' '}
                <span className="relative inline-block text-lime-400">
                  DOPE!
                  {/* Purple outline loop doodle around DOPE */}
                  <svg
                    className="absolute -inset-2.5 w-[calc(100%+20px)] h-[calc(100%+20px)] pointer-events-none"
                    viewBox="0 0 160 65"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  >
                    <path d="M10,32 C10,12 35,5 80,5 C130,5 152,15 152,32 C152,50 125,60 80,60 C30,60 8,50 12,32" />
                  </svg>
                </span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-md font-medium">
                Got a project, engineering challenge, or full-stack opportunity? Let's connect and build something remarkable together.
              </p>
            </div>

            {/* Quick Contact Links matching reference */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Email</span>
                    <a href="mailto:naveenkumar80032@gmail.com" className="text-sm font-display font-bold text-white hover:text-lime-400 transition-colors">
                      naveenkumar80032@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('naveenkumar80032@gmail.com', 'email')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                  title="Copy email"
                >
                  {copied === 'email' ? <Check size={16} className="text-lime-400" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-lime-500/20 text-lime-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Phone</span>
                    <a href="tel:+918094914238" className="text-sm font-display font-bold text-white hover:text-lime-400 transition-colors">
                      +91-8094914238
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+918094914238', 'phone')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                  title="Copy phone"
                >
                  {copied === 'phone' ? <Check size={16} className="text-lime-400" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-md">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Location</span>
                  <span className="text-sm font-display font-bold text-white">Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>

            {/* Social Circle Buttons matching reference */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/in/naveenk80-developer"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-lime-400 hover:text-slate-950 text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://github.com/naveenkumar80"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-lime-400 hover:text-slate-950 text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="mailto:naveenkumar80032@gmail.com"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-lime-400 hover:text-slate-950 text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://naveen-portfolio-liart.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-lime-400 hover:text-slate-950 text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="Portfolio"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form & Mascot */}
          <div className="lg:col-span-6 relative">
            <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md">
              <h3 className="font-display font-extrabold text-xl text-white mb-2">Send a Message</h3>
              <p className="text-xs text-gray-400 mb-6">Drop a note and I'll respond as soon as possible.</p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-lime-400/20 border border-lime-400/40 text-center space-y-2">
                  <Check size={28} className="mx-auto text-lime-400" />
                  <p className="font-display font-bold text-white text-base">Message Sent!</p>
                  <p className="text-xs text-lime-300">Thanks for reaching out! Naveen will connect shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] font-display font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 text-sm font-medium transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-display font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 text-sm font-medium transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-display font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell me what you're working on..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 text-sm font-medium transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(163,230,53,0.4)]"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Blue Mascot Sticker peeking out matching reference! */}
            <div className="absolute -bottom-10 -right-8 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none animate-float-slow hidden sm:block">
              <div className="relative p-1 rounded-3xl bg-transparent">
                <img
                  src="/images/footer_mascot.jpg"
                  alt="Playful Mascot Sticker"
                  className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-display text-gray-500">
          <span>© 2026 Naveen Kumar · All rights reserved.</span>
          <span>Designed with inspiration from creative developer portfolios.</span>
        </div>
      </div>
    </footer>
  );
};
