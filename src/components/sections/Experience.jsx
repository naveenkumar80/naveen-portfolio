import { NeumorphicCard } from '../ui/Neumorphism';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Handshake AI Fellowship',
    role: 'AI Trainer - Full Stack Development Expert',
    period: 'Jul 2026 - Present',
    desc: 'Developing and evaluating domain-specific prompts for full stack development tasks, reviewing LLM outputs for accuracy, clarity, and depth.',
  },
  {
    company: 'Turing',
    role: 'LLM Trainer & POD Lead',
    period: 'Dec 2025 - July 2026',
    desc: 'Led AI trainers, designed instruction-response pairs, built RLHF-aligned rubrics, and coordinated evaluation pipelines to improve model output fidelity.',
  },
  {
    company: 'SunsysTechsol Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    period: 'Oct 2025 - Dec 2025',
    desc: 'Shipped MERN and PHP platforms with JWT auth, RESTful APIs, admin panels, cloud deployment workflows, code reviews, and Agile delivery across a 4-person team.',
  },
  {
    company: 'Anafins Consulting Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    period: 'Jul 2023 - Sep 2023',
    desc: 'Built and maintained the Eastern Exploration production website with HTML, CSS, JavaScript, PHP, Bootstrap, and backend API collaboration.',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-8 bg-nm-bg/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Work Experience</h2>
        <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:w-0.5 before:h-full before:bg-gray-300 before:-translate-x-1/2">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full">
                <NeumorphicCard className="p-8">
                  <span className="text-blue-500 font-bold">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-gray-800 mt-2">{exp.role}</h3>
                  <p className="text-lg text-gray-500 mb-4">{exp.company}</p>
                  <p className="text-gray-600">{exp.desc}</p>
                </NeumorphicCard>
              </div>
              <div className="w-12 h-12 rounded-full bg-nm-bg shadow-nm-flat border-4 border-white z-10 hidden md:flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
              </div>
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
