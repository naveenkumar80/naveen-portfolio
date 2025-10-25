import React from 'react';
import { Github, Linkedin } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-slate-900/80 border-t border-purple-500/20">
      <div className="max-w-4xl mx-auto text-center text-gray-400">
        <p className="transition-colors duration-300 hover:text-gray-300">© 2024 Naveen Kumar. Built with React & Tailwind CSS</p>
        <div className="flex gap-4 justify-center mt-4">
          <a href="https://github.com/naveenkumar80" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-purple-400 hover:scale-125 transform">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/naveen-k-6407b3132/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-purple-400 hover:scale-125 transform">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;