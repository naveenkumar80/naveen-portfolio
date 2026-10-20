import { NeumorphicCard } from '../ui/Neumorphism';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink, GitBranch, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Handshake AI Fellowship',
    role: 'Full Stack Developer — AI/LLM Evaluation',
    period: 'Jul 2026 - Present',
    location: 'Remote · Contractual',
    tags: ['React.js', 'Node.js', 'Express.js', 'Code Review', 'LLM Evaluation', 'Architecture'],
    points: [
      'Reviewed and debugged full-stack (React, Node.js) code submissions for correctness, architecture, and code quality, benchmarking implementations against production engineering standards.',
      'Audited generated code and technical explanations for accuracy, clarity, and depth across full-stack subfields (frontend, backend, APIs), flagging bugs and logic errors.',
      'Delivered structured, written code-review feedback on complex full-stack engineering concepts, documenting root causes and fixes.',
      'Conducted independent technical research into full-stack frameworks and best practices to strengthen review criteria and evaluation methodology.',
    ],
  },
  {
    company: 'Turing',
    role: 'Full Stack Developer — LLM Evaluation & Team Lead',
    period: 'Dec 2025 - Jul 2026',
    location: 'Remote · Contractual',
    tags: ['Pod Leadership', 'RLHF Rubrics', 'Code Evaluation', 'Mentorship', 'Agile Benchmarks'],
    points: [
      'Wrote and reviewed technical code samples and solutions across diverse task types, measurably improving output quality in reasoning, code generation, and factual accuracy.',
      'Led a team of engineers as Pod Lead, coordinating code-review pipelines and enforcing quality standards that drove measurable gains in output fidelity.',
      'Built code-review rubrics and structured feedback frameworks aligned with RLHF best practices to support quality and safety goals.',
      'Coordinated task execution across team members using standardized quality benchmarks, ensuring consistent, high-fidelity code submissions team-wide.',
      'Mentored team members through technical and process-related challenges, fostering a collaborative, high-performance environment.',
    ],
  },
  {
    company: 'SunsysTechsol Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    period: 'Oct 2025 - Dec 2025',
    location: 'Noida, UP · Remote',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PHP', 'JWT Auth', 'Agile Sprints'],
    points: [
      'Led end-to-end development of 2 full-stack platforms (education & IT services) using React.js, Node.js, Express.js, MongoDB, and PHP, serving live production traffic.',
      'Engineered scalable MERN-stack web applications with JWT authentication, dynamic admin panels, RESTful API architecture, and cloud deployment for live business operations.',
      'Managed RESTful API integrations, code reviews, and deployment workflows across a 4-person development team, reducing production bugs and improving delivery quality.',
      'Collaborated in an Agile team environment, contributing to sprint planning, task scoping, and cross-functional technical coordination.',
      'Built AI-ready web platforms on scalable REST API architecture, laying backend infrastructure for future AI service integration.',
    ],
  },
  {
    company: 'Anafins Consulting Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    period: 'Jul 2023 - Sep 2023',
    location: 'Delhi, India · Remote',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Bootstrap', 'REST APIs'],
    link: 'https://naveenkumar80.github.io/eastern_experience.github.io',
    linkText: 'Live Site',
    points: [
      'Developed and maintained the Eastern Exploration production website using HTML, CSS, JavaScript, PHP, and Bootstrap.',
      'Collaborated with the backend team to implement RESTful APIs for seamless data exchange between frontend and server.',
      'Optimized frontend and backend code, improving page performance and long-term maintainability.',
    ],
  },
  {
    company: 'YHills',
    role: 'Cybersecurity Intern',
    period: 'Oct 2022 - Dec 2022',
    location: 'Remote',
    tags: ['Python', 'Nmap', 'Linux Networking', 'Reconnaissance', 'Subprocess'],
    github: 'https://github.com/naveenkumar80/macchanger',
    points: [
      'Received comprehensive training in cybersecurity, including network scanning and reconnaissance using Nmap.',
      'Developed a MAC address changer for Linux-based systems using Python.',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-10 lg:px-16 bg-nm-bg/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nm-bg shadow-nm-inset text-xs font-bold tracking-wider text-blue-600 uppercase mb-3">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Hands-on software engineering, technical AI evaluation, engineering pod leadership, and full-stack product delivery.
          </p>
        </div>

        <div className="space-y-10 relative before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-300/40 md:before:-translate-x-1/2">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2.5rem)] ml-10 md:ml-0">
                  <NeumorphicCard className="p-6 sm:p-8 hover:-translate-y-1 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-nm-bg shadow-nm-inset text-blue-600 flex items-center gap-1.5">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-2">{exp.role}</h3>
                    <p className="text-base font-semibold text-blue-500 mb-4">{exp.company}</p>

                    <ul className="space-y-2 mb-5">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2 leading-relaxed">
                          <span className="text-blue-500 mt-1 font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-200/40">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-nm-bg shadow-nm-inset text-gray-500">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* External links if available */}
                    {(exp.link || exp.github) && (
                      <div className="mt-4 pt-3 flex gap-3">
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <ExternalLink size={14} />
                            {exp.linkText || 'Live Site'}
                          </a>
                        )}
                        {exp.github && (
                          <a
                            href={exp.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                          >
                            <GitBranch size={14} />
                            View Source
                          </a>
                        )}
                      </div>
                    )}
                  </NeumorphicCard>
                </div>

                {/* Timeline Center Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-nm-bg shadow-nm-flat border-2 border-white z-10 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
