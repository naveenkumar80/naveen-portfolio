import React from 'react';
import { Code, MapPin } from 'lucide-react';
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
          <Code className="text-purple-400 transition-transform duration-300 hover:rotate-12" /> About Me
        </h2>
        <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20 transition-all duration-500 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/10 hover:transform hover:scale-[1.02]">
          <p className="text-gray-300 leading-relaxed mb-6 transition-colors duration-300 hover:text-gray-200">
            Detail-oriented Full Stack Developer with hands-on experience in frontend and backend technologies including React.js, Node.js, Express.js, MongoDB, and RESTful APIs. Proven ability to develop responsive websites and applications with optimized performance.
          </p>
          <p className="text-gray-300 leading-relaxed transition-colors duration-300 hover:text-gray-200">
            Strong understanding of data structures, OOPS principles, and cybersecurity basics. Passionate about building scalable, user-friendly solutions and contributing to team success.
          </p>
          <div className="mt-6 flex items-center gap-2 text-purple-400 transition-all duration-300 hover:translate-x-2 hover:text-pink-400">
            <MapPin size={20} className="transition-transform duration-300 hover:scale-125" />
            <span>Jaipur, Rajasthan | Open to Relocation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;