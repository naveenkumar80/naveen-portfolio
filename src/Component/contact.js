import React from 'react';
import { Mail, Phone } from 'lucide-react';
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 transition-all duration-300 hover:scale-105">Get In Touch</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto transition-colors duration-300 hover:text-gray-300">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <a href="mailto:naveenkumar80032@gmail.com" className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 px-6 py-3 rounded-lg border border-purple-500/20 transition-all duration-500 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-110 transform group">
            <Mail size={20} className="text-purple-400 transition-transform duration-300 group-hover:rotate-12" />
            <span className="transition-colors duration-300 group-hover:text-purple-300">naveenkumar80032@gmail.com</span>
          </a>
          <a href="tel:+918094914238" className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 px-6 py-3 rounded-lg border border-purple-500/20 transition-all duration-500 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-110 transform group">
            <Phone size={20} className="text-purple-400 transition-transform duration-300 group-hover:rotate-12" />
            <span className="transition-colors duration-300 group-hover:text-purple-300">+91 8094914238</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;