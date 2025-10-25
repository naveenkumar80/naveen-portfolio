import React, { useState, useEffect } from 'react';
import Navigation from './Component/navigation.js';
import Hero from './Component/hero.js';
import About from './Component/about.js';
import Experience from './Component/experience.js';
import Projects from './Component/projects.js';
import Skills from './Component/skills.js';
import Education from './Component/education.js';
import Contact from './Component/contact.js';
import Footer from './Component/footer.js';

// Navigation Component

// Hero Component

// About Component

// Experience Component


// Projects Component

// Skills Component

// Education Component


// Contact Component

// Footer Component

// Main App Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation isScrolled={isScrolled} activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}