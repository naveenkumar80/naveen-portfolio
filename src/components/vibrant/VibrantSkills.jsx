import { useState } from 'react';
import { SquiggleDoodle } from './Doodles';

const coreTools = [
  { name: 'React 19', badge: 'Re', color: 'border-cyan-500 text-cyan-400 bg-cyan-950/40' },
  { name: 'Node.js', badge: 'No', color: 'border-emerald-500 text-emerald-400 bg-emerald-950/40' },
  { name: 'Express 5', badge: 'Ex', color: 'border-blue-500 text-blue-400 bg-blue-950/40' },
  { name: 'MongoDB', badge: 'Mg', color: 'border-green-500 text-green-400 bg-green-950/40' },
  { name: 'Docker', badge: 'Dk', color: 'border-sky-500 text-sky-400 bg-sky-950/40' },
  { name: 'OCI Cloud', badge: 'OCI', color: 'border-orange-500 text-orange-400 bg-orange-950/40' },
  { name: 'Python', badge: 'Py', color: 'border-yellow-500 text-yellow-400 bg-yellow-950/40' },
  { name: 'Pinecone RAG', badge: 'Pc', color: 'border-purple-500 text-purple-400 bg-purple-950/40' },
  { name: 'Gemini AI', badge: 'Ge', color: 'border-indigo-500 text-indigo-400 bg-indigo-950/40' },
  { name: 'Selenium', badge: 'Se', color: 'border-teal-500 text-teal-400 bg-teal-950/40' },
  { name: 'TypeScript', badge: 'TS', color: 'border-blue-400 text-blue-300 bg-blue-950/40' },
  { name: 'Next.js', badge: 'Nx', color: 'border-slate-400 text-slate-200 bg-slate-900/40' },
];

const fullCategories = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'PHP', 'C++', 'SQL', 'Bash/Shell', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend Frameworks',
    items: ['React.js (React 19)', 'Next.js', 'Redux Toolkit', 'Zustand', 'Tailwind CSS', 'Vite', 'Monaco Editor', 'Recharts'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express 5', 'REST API Design', 'JWT Auth', 'Socket.IO', 'WebSockets', 'Zod Validation', 'Puppeteer'],
  },
  {
    title: 'AI & GenAI Tooling',
    items: ['LLM Evaluation & RLHF', 'Prompt Engineering', 'RAG Pipelines', 'Pinecone Vector DB', 'Google Gemini', 'Groq API', 'Tavily', 'n8n'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['OCI DevOps Professional', 'OCI AI Foundations', 'Docker Containers', 'CI/CD Pipelines', 'GitHub Actions', 'Linux'],
  },
];

export const VibrantSkills = () => {
  const [activeTab, setActiveTab] = useState('Core Tools');

  return (
    <section id="vibrant-skills" className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          SKILLS
        </h2>
        <div className="animate-wiggle">
          <SquiggleDoodle className="w-16 h-6 text-purple-400" />
        </div>
      </div>

      {/* Squircle App Icons row matching Dikshant reference */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6 sm:gap-8 mb-12">
        {coreTools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center gap-3 group">
            <div
              className={`w-18 h-18 sm:w-20 sm:h-20 rounded-3xl border-2 ${tool.color} flex items-center justify-center font-display font-black text-xl sm:text-2xl shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_currentColor] transition-all duration-300`}
            >
              {tool.badge}
            </div>
            <span className="font-display font-bold text-xs sm:text-sm text-gray-300 text-center group-hover:text-white transition-colors">
              {tool.name}
            </span>
          </div>
        ))}
      </div>

      {/* Detailed Skill Badges Grid */}
      <div className="p-8 rounded-[36px] bg-[#121620] border border-white/10 shadow-xl">
        <h3 className="font-display font-extrabold text-xl text-white mb-6 flex items-center gap-2">
          <span className="text-lime-400">⚡</span> Full Spectrum Skill Inventory
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fullCategories.map((cat) => (
            <div key={cat.title} className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <h4 className="text-xs font-display font-bold text-lime-400 uppercase tracking-wider mb-3">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-black/40 text-gray-300 border border-white/10 hover:border-lime-400/50 hover:text-white transition-all"
                  >
                    {item}
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
