import { NeumorphicCard, NeumorphicButton, NeumorphicInput, NeumorphicTextArea } from '../ui/Neumorphism';
import { Download, Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Let's Connect</h2>
          <p className="text-gray-600 text-lg mb-10">
            I am open to full stack, DevOps, AI tooling, LLM evaluation, and automation opportunities.
          </p>

          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'naveenkumar80032@gmail.com', href: 'mailto:naveenkumar80032@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 8094914238', href: 'tel:+918094914238' },
              { icon: MapPin, label: 'Location', value: 'Jaipur, Rajasthan, India' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-6">
                <div className="p-4 rounded-2xl shadow-nm-flat bg-nm-bg">
                  <item.icon className="text-blue-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-lg font-medium text-gray-700">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="/Naveen_Kumar_Resume.docx" download>
              <NeumorphicButton className="flex items-center gap-3">
                <Download size={20} />
                Download Resume
              </NeumorphicButton>
            </a>
            <a href="https://linkedin.com/in/naveenk80-developer" target="_blank" rel="noreferrer">
              <NeumorphicButton>
                LinkedIn Profile
              </NeumorphicButton>
            </a>
          </div>
        </div>

        <NeumorphicCard className="p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 ml-2">Name</label>
                <NeumorphicInput placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 ml-2">Email</label>
                <NeumorphicInput type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 ml-2">Subject</label>
              <NeumorphicInput placeholder="Opportunity or project inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 ml-2">Message</label>
              <NeumorphicTextArea placeholder="Tell me what you are building..." />
            </div>
            <NeumorphicButton className="w-full bg-blue-500 text-white flex items-center justify-center gap-2 hover:bg-blue-600">
              <Send size={18} />
              Send Message
            </NeumorphicButton>
          </form>
        </NeumorphicCard>
      </div>
    </section>
  );
};
