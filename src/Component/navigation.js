import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isScrolled, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transform transition-all duration-300 hover:scale-110 cursor-pointer">
          NK
        </h1>
        
        <div className="hidden md:flex gap-6">
          {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize relative transition-all duration-300 hover:text-purple-400 hover:-translate-y-1 ${activeSection === section ? 'text-purple-400' : ''} group`}
            >
              {section}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button className="md:hidden transition-transform duration-300 hover:scale-110 hover:text-purple-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm animate-fadeIn">
          <div className="flex flex-col gap-4 p-4">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  setIsMenuOpen(false);
                }}
                className="capitalize text-left hover:text-purple-400 transition-all duration-300 hover:translate-x-2"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
