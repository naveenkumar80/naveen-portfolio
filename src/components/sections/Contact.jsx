import { useState } from 'react';
import { NeumorphicCard, NeumorphicButton, NeumorphicInput, NeumorphicTextArea } from '../ui/Neumorphism';
import { Check, Copy, Download, ExternalLink, Globe, Mail, MapPin, Phone, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nm-bg shadow-nm-inset text-xs font-bold tracking-wider text-blue-600 uppercase mb-3">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
              Let's Build Together
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3 leading-relaxed">
              Open to Full Stack Developer, DevOps Engineer, RAG/AI pipeline, and technical AI/LLM evaluation opportunities. Feel free to reach out directly.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { 
                icon: Mail, 
                label: 'Email', 
                value: 'naveenkumar80032@gmail.com', 
                href: 'mailto:naveenkumar80032@gmail.com',
                id: 'email'
              },
              { 
                icon: Phone, 
                label: 'Phone', 
                value: '+91-8094914238', 
                href: 'tel:+918094914238',
                id: 'phone'
              },
              { 
                icon: MapPin, 
                label: 'Location', 
                value: 'Jaipur, Rajasthan, India',
                id: 'location'
              },
              { 
                icon: Globe, 
                label: 'Portfolio', 
                value: 'naveen-portfolio-liart.vercel.app', 
                href: 'https://naveen-portfolio-liart.vercel.app',
                id: 'portfolio'
              },
            ].map((item) => (
              <div 
                key={item.label} 
                className="flex items-center justify-between p-4 rounded-2xl bg-nm-bg shadow-nm-flat hover:shadow-nm-inset transition-all"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3 rounded-xl shadow-nm-inset bg-nm-bg shrink-0">
                    <item.icon className="text-blue-500" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="text-sm sm:text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base font-semibold text-gray-800 truncate">{item.value}</p>
                    )}
                  </div>
                </div>

                {item.id !== 'location' && (
                  <button
                    onClick={() => handleCopy(item.value, item.id)}
                    className="p-2 rounded-xl bg-nm-bg shadow-nm-flat hover:shadow-nm-inset text-gray-500 hover:text-blue-500 transition-all shrink-0 ml-2"
                    title={`Copy ${item.label}`}
                    aria-label={`Copy ${item.label}`}
                  >
                    {copiedField === item.id ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="/Naveen_Kumar_Resume.docx" download className="flex-1 min-w-[200px]">
              <NeumorphicButton className="w-full flex items-center justify-center gap-2.5 bg-blue-500 text-white hover:bg-blue-600">
                <Download size={18} />
                Download Resume
              </NeumorphicButton>
            </a>
            <a 
              href="https://linkedin.com/in/naveenk80-developer" 
              target="_blank" 
              rel="noreferrer"
              className="p-3.5 rounded-2xl bg-nm-bg shadow-nm-flat hover:shadow-nm-inset text-gray-700 hover:text-blue-600 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={22} />
            </a>
            <a 
              href="https://github.com/naveenkumar80" 
              target="_blank" 
              rel="noreferrer"
              className="p-3.5 rounded-2xl bg-nm-bg shadow-nm-flat hover:shadow-nm-inset text-gray-700 hover:text-blue-600 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={22} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <NeumorphicCard className="p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Send a Message</h3>
            <p className="text-sm text-gray-500 mb-8">
              Fill out the form below and I will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                <Check size={32} className="mx-auto text-emerald-600" />
                <p className="font-bold text-lg">Message Received!</p>
                <p className="text-sm text-emerald-700">Thank you for reaching out, Naveen will get in touch shortly.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">Your Name</label>
                    <NeumorphicInput 
                      placeholder="e.g. John Doe" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">Your Email</label>
                    <NeumorphicInput 
                      type="email" 
                      placeholder="you@example.com" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">Subject</label>
                  <NeumorphicInput 
                    placeholder="Project inquiry, Full-stack role, or Consulting" 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">Message</label>
                  <NeumorphicTextArea 
                    placeholder="Tell me about your project, role details, or collaboration ideas..." 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <NeumorphicButton 
                  type="submit"
                  className="w-full bg-blue-500 text-white flex items-center justify-center gap-2 hover:bg-blue-600 shadow-md py-3.5"
                >
                  <Send size={18} />
                  Send Message
                </NeumorphicButton>
              </form>
            )}
          </NeumorphicCard>
        </div>
      </div>
    </section>
  );
};
