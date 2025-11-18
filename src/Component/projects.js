import React from 'react';
import { Code, Github, ExternalLink } from 'lucide-react';
const Projects = () => {
  const projects = [
    {
      title: "Eastern Exploration Website",
      description: "Responsive travel and tour website with functional contact form using PHP and Bootstrap.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
      link: "https://naveenkumar80.github.io/eastern_experience.github.io/",
      github: "https://github.com/naveenkumar80/EasternExperience.github.io"
    },
    {
      title: "Hotel Booking Cancellations Analysis Dashboard",
      description: "This project analyzes a dataset of hotel bookings obtained from Kaggle to understand the patterns and factors contributing to booking cancellations.",
      tech: ["Ms Excel", "kaggle", "matplotlib"],
      github: "https://github.com/naveenkumar80/Hotel_cancellation"
    },

    {
      title: "Weather Now ☀️🌧️",
      description: "A fast and beautiful weather application designed for outdoor enthusiasts who need quick access to current weather conditions for any city worldwide.",
      tech: ["React", "Tailwind CSS", "Lucide React", "Open-Meteo API"],
      github: "https://github.com/naveenkumar80/weather-now"
    },

    {
      title: "TO-DO List Application",
      description: "Full-stack task management app with persistent data storage using MongoDB.",
      tech: ["Node.js", "Express.js", "EJS", "MongoDB"],
      github: "https://github.com/naveenkumar80"
    },
    
    {
      title: "Itinerary builder",
      description: "Web app to create and manage travel itineraries with CRUD operations and generate PDF summaries.",
      tech: ["React","Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/naveenkumar80/itinerary-builder",
      link: "https://itinerary-builder-4nqk.vercel.app/"
    },
    {
      title: "Blog Platform",
      description: "Blogging platform where users can add/delete posts stored in MongoDB.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/naveenkumar80"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
          <Code className="text-purple-400 transition-transform duration-300 hover:rotate-12" /> Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 transition-all duration-500 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/20 hover:transform hover:scale-105 hover:-translate-y-2 group cursor-pointer">
              <h3 className="text-xl font-semibold text-purple-400 mb-3 transition-all duration-300 group-hover:text-pink-400">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm transition-colors duration-300 group-hover:text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded text-xs transition-all duration-300 hover:bg-purple-900/50 hover:scale-110 hover:shadow-md">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-400 transition-all duration-300 hover:text-purple-400 hover:translate-x-1">
                    <Github size={16} className="transition-transform duration-300 hover:rotate-12" /> Code
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-400 transition-all duration-300 hover:text-purple-400 hover:translate-x-1">
                    <ExternalLink size={16} className="transition-transform duration-300 hover:rotate-12" /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;