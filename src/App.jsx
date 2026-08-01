import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { NeumorphicCard } from './components/ui/Neumorphism';

function App() {
  return (
    <div className="min-h-screen bg-nm-bg text-gray-700 selection:bg-blue-200 selection:text-blue-900">
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <NeumorphicCard className="px-8 py-4 flex justify-between items-center bg-nm-bg/80 backdrop-blur-md">
          <div className="text-xl font-black tracking-tighter text-gray-800">NAVEEN<span className="text-blue-500">.</span></div>
          <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </NeumorphicCard>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-12 px-8 border-t border-white/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">Copyright 2026 Naveen Kumar. Built with React and Three.js.</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/naveenk80-developer" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">LinkedIn</a>
            <a href="mailto:naveenkumar80032@gmail.com" className="text-gray-400 hover:text-blue-500 transition-colors">Email</a>
            <a href="https://github.com/naveenkumar80" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
