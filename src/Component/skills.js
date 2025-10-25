import React from 'react';
import { Award } from 'lucide-react';
const Skills = () => {
  const skills = {
    "Programming": ["Python", "C++", "JavaScript"],
    "Frontend": ["React.js", "HTML", "CSS", "Bootstrap"],
    "Backend": ["Node.js", "Express.js", "PHP", "REST APIs"],
    "Database": ["MongoDB", "MySQL", "Django ORM"],
    "DevOps": ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "Jenkins", "Ansible"],
    "Data Science": ["NumPy", "Pandas", "PowerBI", "Matplotlib"]
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
          <Award className="text-purple-400 transition-transform duration-300 hover:rotate-12" /> Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 transition-all duration-500 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/10 hover:transform hover:scale-105 group">
              <h3 className="text-xl font-semibold text-purple-400 mb-4 transition-all duration-300 group-hover:text-pink-400">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span key={i} className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-purple-600/50 hover:text-white hover:scale-110 hover:shadow-md cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;