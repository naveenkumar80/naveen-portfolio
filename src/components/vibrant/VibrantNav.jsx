import { useState } from 'react';
import { Menu, X, Sparkles, Palette } from 'lucide-react';

export const VibrantNav = ({ currentTheme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#vibrant-projects' },
    { name: 'Skills', href: '#vibrant-skills' },
    { name: 'About', href: '#vibrant-about' },
    { name: 'Experience', href: '#vibrant-experience' },
    { name: 'Credentials', href: '#vibrant-credentials' },
    { name: 'Contact', href: '#vibrant-contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
      <div className="px-6 py-3.5 rounded-full bg-[#121620]/90 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.6)] flex justify-between items-center">
        {/* Brand */}
        <a href="#" className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
          <span>NAVEEN</span>
          <span className="w-2.5 h-2.5 rounded-full bg-lime-400 inline-block"></span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-7 font-display font-bold text-xs uppercase tracking-wider text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-lime-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Design Switcher Pill */}
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 text-white font-display text-xs font-bold transition-all hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            title="Toggle between Neumorphic and Cyber Comic designs"
          >
            <Palette size={14} className="text-lime-400" />
            <span className="hidden sm:inline">Theme:</span>
            <span className="text-lime-400">Comic Dark</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-3 p-5 rounded-3xl bg-[#121620]/95 backdrop-blur-md border border-white/10 lg:hidden flex flex-col gap-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-display font-bold uppercase tracking-wider text-gray-200 hover:text-lime-400 py-1.5 px-3 rounded-xl hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex justify-between items-center">
            <span className="text-xs text-gray-400 font-display">Switch Portfolio Style</span>
            <button
              onClick={() => {
                onToggleTheme();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-bold px-3 py-1 rounded-full bg-blue-600 text-white"
            >
              Neumorphic Mode
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
