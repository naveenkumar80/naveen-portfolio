import { useState, useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Credentials } from './components/sections/Credentials';
import { Contact } from './components/sections/Contact';
import { NeumorphicCard } from './components/ui/Neumorphism';
import { Globe, Mail, Menu, Palette, Phone, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/ui/Icons';
import { ThemeSwitcher } from './components/ui/ThemeSwitcher';
import { VibrantPortfolio } from './components/vibrant/VibrantPortfolio';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('naveen_portfolio_theme') || 'neumorphic';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('naveen_portfolio_theme', theme);
    document.title = theme === 'vibrant'
      ? "Naveen Kumar | Creative Full Stack & OCI DevOps Engineer"
      : "Naveen Kumar | Full Stack Developer (MERN) · OCI DevOps Engineer · AI/LLM Evaluation";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'neumorphic' ? 'vibrant' : 'neumorphic'));
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  if (theme === 'vibrant') {
    return (
      <>
        <VibrantPortfolio currentTheme={theme} onToggleTheme={toggleTheme} />
        <ThemeSwitcher currentTheme={theme} onToggleTheme={toggleTheme} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-nm-bg text-gray-700 selection:bg-blue-200 selection:text-blue-900 transition-colors duration-300">
      {/* Sticky Top Navigation */}
      <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
        <NeumorphicCard className="px-6 sm:px-8 py-3.5 flex justify-between items-center bg-nm-bg/90 backdrop-blur-md">
          <a href="#" className="text-xl font-black tracking-tight text-gray-800">
            NAVEEN<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 font-semibold text-xs uppercase tracking-wider text-gray-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Design Switcher Button in Navbar */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-nm-bg shadow-nm-flat hover:shadow-nm-inset text-blue-600 font-bold transition-all"
              title="Switch to Cyber Comic Design"
            >
              <Palette size={14} className="text-purple-500" />
              <span>Comic Style</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-nm-bg shadow-nm-flat hover:shadow-nm-inset text-purple-600"
              title="Switch Style"
            >
              <Palette size={18} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-nm-bg shadow-nm-flat hover:shadow-nm-inset text-gray-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </NeumorphicCard>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <NeumorphicCard className="mt-3 p-5 flex flex-col gap-3 lg:hidden bg-nm-bg/95 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-blue-500 py-1.5 px-3 rounded-lg hover:bg-white/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-300/40 flex justify-between items-center">
              <span className="text-xs text-gray-500 font-medium">Alternative Style:</span>
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-bold px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-lime-500 text-slate-950 shadow-md flex items-center gap-1.5"
              >
                <Palette size={13} />
                Switch to Comic Style
              </button>
            </div>
          </NeumorphicCard>
        )}
      </nav>

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>

      {/* Floating Style Switcher */}
      <ThemeSwitcher currentTheme={theme} onToggleTheme={toggleTheme} />

      {/* Enriched Footer */}
      <footer className="py-14 px-6 sm:px-10 border-t border-white/40 bg-nm-bg/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-black tracking-tight text-gray-800">
              NAVEEN<span className="text-blue-500">.</span>
            </div>
            <p className="text-xs text-gray-500 mt-1 max-w-md">
              Full Stack Developer (MERN) · DevOps Engineer (OCI Certified) · AI/LLM Evaluation
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              Jaipur, Rajasthan, India · +91-8094914238
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-gray-600">
            <a
              href="https://linkedin.com/in/naveenk80-developer"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/naveenkumar80"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href="mailto:naveenkumar80032@gmail.com"
              className="hover:text-blue-500 transition-colors flex items-center gap-1.5"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href="https://naveen-portfolio-liart.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors flex items-center gap-1.5"
            >
              <Globe size={16} />
              Portfolio
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-300/40 text-center text-xs text-gray-500">
          © 2026 Naveen Kumar. All rights reserved. Built with React 19, Three.js, and Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}

export default App;


