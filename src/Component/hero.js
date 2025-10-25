import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl text-center">
        <div className="mb-6 animate-fadeIn">
          <span className="text-purple-400 text-lg">Hi, I'm</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent transition-all duration-500 hover:scale-105">
          Naveen Kumar
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 transition-all duration-300 hover:text-purple-300">Full Stack Developer</p>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto transition-all duration-300 hover:text-gray-300">
          Building scalable, user-friendly solutions with React.js, Node.js, and modern web technologies
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://github.com/naveenkumar80" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transform">
            <Github size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/naveen-k-6407b3132/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transform">
            <Linkedin size={20} /> LinkedIn
          </a>
          <button onClick={() => scrollToSection('contact')} className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-slate-500/50 transform">
            <Mail size={20} /> Contact Me
          </button>
        </div>
        <div className="mt-12 animate-bounce">
          <ChevronDown size={32} className="mx-auto text-purple-400 cursor-pointer transition-all duration-300 hover:text-pink-400" onClick={() => scrollToSection('about')} />
        </div>
      </div>
    </section>
  );
};
export default Hero;