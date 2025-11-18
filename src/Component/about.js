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
            
          </p>
          <p className="text-gray-300 leading-relaxed transition-colors duration-300 hover:text-gray-200">
            Full Stack Developer skilled in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, PHP, REST APIs, and Bootstrap. Experienced in developing responsive web applications, integrating APIs, building backend services, and optimizing performance.
            Completed impactful projects including a travel & tour website, React-based itinerary builder with PDF generator, and hotel booking cancellation analytics dashboard using Python, Pandas, PowerBI, and Matplotlib.
            Certified OCI DevOps Professional, with practical experience in CI/CD pipelines, Docker, Kubernetes, Jenkins, AWS, Azure, and GCP. Strong knowledge of data structures, OOPs, cybersecurity basics, and agile development.
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