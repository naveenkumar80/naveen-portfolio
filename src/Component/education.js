import React from 'react';
import { GraduationCap } from 'lucide-react';
const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
          <GraduationCap className="text-purple-400 transition-transform duration-300 hover:rotate-12" /> Education
        </h2>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 transition-all duration-500 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/10 hover:transform hover:scale-[1.02] group">
          <h3 className="text-2xl font-semibold text-purple-400 transition-all duration-300 group-hover:text-pink-400">Bachelor of Technology</h3>
          <p className="text-gray-300 mt-2 transition-colors duration-300 group-hover:text-gray-200">Computer Science and Engineering</p>
          <p className="text-gray-400 mt-1 transition-colors duration-300 group-hover:text-gray-300">Global Institute of Technology, Jaipur</p>
          <p className="text-gray-500 text-sm mt-1">2020-2024 | CGPA: 8.04</p>
        </div>
      </div>
    </section>
  );
};
export default Education;