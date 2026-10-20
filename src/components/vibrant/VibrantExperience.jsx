import { Calendar, ExternalLink, GitBranch, MapPin, Sparkles } from 'lucide-react';
import { SquiggleDoodle } from './Doodles';

const experiences = [
  {
    company: 'Handshake AI Fellowship',
    role: 'Full Stack Developer — AI/LLM Evaluation',
    period: 'Jul 2026 - Present',
    location: 'Remote · Contractual',
    accent: 'border-purple-500/50 text-purple-400',
    tags: ['React.js', 'Node.js', 'LLM Evaluation', 'Code Review', 'Standards'],
    points: [
      'Reviewed and debugged full-stack (React, Node.js) code submissions for correctness, architecture, and code quality.',
      'Audited generated code and technical explanations for accuracy, clarity, and depth across full-stack subfields.',
      'Delivered structured, written feedback on complex full-stack engineering concepts, documenting root causes and fixes.',
    ],
  },
  {
    company: 'Turing',
    role: 'Full Stack Developer — LLM Evaluation & Pod Lead',
    period: 'Dec 2025 - Jul 2026',
    location: 'Remote · Contractual',
    accent: 'border-lime-500/50 text-lime-400',
    tags: ['Pod Leadership', 'RLHF Rubrics', 'Code Quality', 'Sprint Benchmarks'],
    points: [
      'Led an engineering pod, coordinating code-review pipelines and enforcing quality standards for measurable fidelity gains.',
      'Built code-review rubrics and structured feedback frameworks aligned with RLHF best practices.',
      'Coordinated task execution across team members using standardized quality benchmarks.',
    ],
  },
  {
    company: 'SunsysTechsol Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    period: 'Oct 2025 - Dec 2025',
    location: 'Noida, UP · Remote',
    accent: 'border-cyan-500/50 text-cyan-400',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'Agile Team'],
    points: [
      'Led end-to-end development of 2 full-stack platforms (education & IT services) serving live production traffic.',
      'Engineered scalable MERN web applications with JWT authentication, dynamic admin panels, and RESTful APIs.',
      'Managed API integrations and deployment workflows across a 4-person development team.',
    ],
  },
  {
    company: 'Anafins Consulting Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    period: 'Jul 2023 - Sep 2023',
    location: 'Delhi, India · Remote',
    accent: 'border-blue-500/50 text-blue-400',
    link: 'https://naveenkumar80.github.io/eastern_experience.github.io',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Bootstrap'],
    points: [
      'Developed and maintained the Eastern Exploration production website with seamless RESTful API data exchange.',
      'Optimized frontend and backend code, improving performance and long-term maintainability.',
    ],
  },
  {
    company: 'YHills',
    role: 'Cybersecurity Intern',
    period: 'Oct 2022 - Dec 2022',
    location: 'Remote',
    accent: 'border-rose-500/50 text-rose-400',
    github: 'https://github.com/naveenkumar80/macchanger',
    tags: ['Python', 'Nmap', 'Linux Networking', 'Subprocess'],
    points: [
      'Network scanning and reconnaissance using Nmap; built a Linux MAC address changer tool in Python.',
    ],
  },
];

export const VibrantExperience = () => {
  return (
    <section id="vibrant-experience" className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          EXPERIENCE
        </h2>
        <div className="animate-wiggle">
          <SquiggleDoodle className="w-16 h-6 text-lime-400" />
        </div>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className={`p-6 sm:p-8 rounded-3xl bg-[#121620] border ${exp.accent} hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-display font-extrabold uppercase tracking-wider text-lime-400">
                  {exp.company}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
                  {exp.role}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-display font-bold px-3 py-1 rounded-full bg-white/10 text-gray-300">
                  {exp.period}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <MapPin size={12} />
                  {exp.location}
                </span>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.points.map((p, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-lime-400 font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-black/40 text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>

              {(exp.link || exp.github) && (
                <div className="flex gap-3 text-xs font-display font-bold">
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noreferrer" className="text-lime-400 hover:underline flex items-center gap-1">
                      <ExternalLink size={13} /> Live Site
                    </a>
                  )}
                  {exp.github && (
                    <a href={exp.github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white flex items-center gap-1">
                      <GitBranch size={13} /> Source Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
