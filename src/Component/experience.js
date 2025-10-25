import React from 'react';
import { Briefcase } from 'lucide-react';
const Experience = () => {
  const experience = [
    {
      title: "Frontend Developer Intern",
      company: "Anafins Solutions & Analytics",
      location: "Delhi",
      period: "Jul 2023 - Aug 2023",
      points: [
        "Developed and maintained the Eastern Exploration website",
        "Collaborated with backend team to implement RESTful APIs",
        "Optimized code, improving website performance by ~20%"
      ]
    },
    {
      title: "Trainee Intern",
      company: "Yhills",
      location: "Delhi",
      period: "Oct 2022 - Nov 2022",
      points: [
        "Received comprehensive training in cybersecurity",
        "Developed a MAC address changer tool for Linux systems in Python"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
          <Briefcase className="text-purple-400 transition-transform duration-300 hover:rotate-12" /> Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 transition-all duration-500 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/10 hover:transform hover:scale-[1.02] hover:-translate-y-1 group">
              <h3 className="text-2xl font-semibold text-purple-400 transition-all duration-300 group-hover:text-pink-400">{exp.title}</h3>
              <p className="text-gray-300 mt-2 transition-colors duration-300 group-hover:text-gray-200">{exp.company} | {exp.location}</p>
              <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
              <ul className="mt-4 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-400 flex items-start gap-2 transition-all duration-300 hover:translate-x-2 hover:text-gray-300">
                    <span className="text-purple-400 mt-1 transition-transform duration-300 hover:scale-150">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;