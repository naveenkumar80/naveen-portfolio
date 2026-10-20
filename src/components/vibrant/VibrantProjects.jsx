import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SquiggleDoodle } from './Doodles';
import { 
  ArrowUpRight, 
  Bot, 
  Building, 
  Code2, 
  Database, 
  ExternalLink, 
  GitBranch, 
  Globe, 
  LineChart, 
  Mail, 
  Music, 
  Plane, 
  Share2, 
  Shield, 
  Sparkles, 
  Terminal 
} from 'lucide-react';

const projectList = [
  {
    title: 'Heritage Kits',
    category: '3D Web Experience',
    type: 'Full Stack & Web',
    featured: true,
    bgGradient: 'from-amber-500 via-orange-600 to-red-600',
    description: 'Cinematic landing page with scroll-driven video scrubbing engine and Three.js visual assets.',
    tags: ['Next.js', 'React', 'Three.js', 'Tailwind'],
    live: 'https://heritage-kits.vercel.app/',
    Icon: Sparkles,
  },
  {
    title: 'InterviewAI',
    category: 'AI Prep Platform',
    type: 'AI & GenAI / RAG',
    featured: true,
    bgGradient: 'from-purple-600 via-indigo-600 to-blue-700',
    description: 'AI platform analyzing resumes with Google Gemini API, Zod validation, and Puppeteer ATS PDF generation.',
    tags: ['React 19', 'Express 5', 'Gemini API', 'Puppeteer'],
    github: 'https://github.com/naveenkumar80/InterviewAI',
    Icon: Bot,
  },
  {
    title: 'WaveSync',
    category: 'Music Streaming',
    type: 'Full Stack & Web',
    featured: true,
    bgGradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    description: 'Full-stack music streaming platform with RBAC for artists, JWT auth, and ImageKit cloud storage.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    Icon: Music,
  },
  {
    title: 'CollabCode',
    category: 'Real-Time CRDT Editor',
    type: 'Full Stack & Web',
    featured: true,
    bgGradient: 'from-blue-600 via-indigo-600 to-purple-800',
    description: 'Real-time collaborative code editor with live cursor presence and Yjs CRDT conflict-free sync.',
    tags: ['React 19', 'Yjs', 'Socket.IO', 'Monaco'],
    github: 'https://github.com/naveenkumar80/CollabCode',
    Icon: Code2,
  },
  {
    title: 'JarvisCLI',
    category: 'AI CLI Agent',
    type: 'AI & GenAI / RAG',
    featured: false,
    bgGradient: 'from-green-600 via-emerald-700 to-teal-800',
    description: 'Terminal AI assistant combining Groq LLM inference with Tavily web search and smart tool calling.',
    tags: ['Node.js', 'Groq API', 'Tavily API', 'GenAI'],
    github: 'https://github.com/naveenkumar80/JarvisCLI---Groq---Tavily-Powered-Agent',
    Icon: Terminal,
  },
  {
    title: 'AI Company Chatbot',
    category: 'Enterprise RAG System',
    type: 'AI & GenAI / RAG',
    featured: true,
    bgGradient: 'from-rose-600 via-pink-700 to-purple-800',
    description: 'RAG chatbot indexing PDF documentation into Pinecone vector DB with Gemini embeddings and Groq.',
    tags: ['Node.js', 'RAG', 'Pinecone', 'Gemini', 'Groq'],
    github: 'https://github.com/naveenkumar80/AI-company-chatbot',
    Icon: Bot,
  },
  {
    title: 'Finance Dashboard',
    category: 'Financial Analytics',
    type: 'Data & Dashboards',
    featured: false,
    bgGradient: 'from-yellow-500 via-amber-600 to-orange-700',
    description: 'Personal finance dashboard tracking income, expenses, and trends with interactive Recharts.',
    tags: ['React', 'Zustand', 'Recharts', 'Tailwind'],
    live: 'https://finance-dashboard-three-beige.vercel.app/',
    Icon: LineChart,
  },
  {
    title: 'IT Solution Website',
    category: 'Production MERN Services',
    type: 'Full Stack & Web',
    featured: false,
    bgGradient: 'from-blue-500 via-sky-600 to-indigo-700',
    description: 'Production MERN IT services website for SunsysTechsol with secure admin panel, JWT auth, and RBAC.',
    tags: ['MERN', 'JWT Auth', 'MVC Architecture'],
    github: 'https://github.com/naveenkumar80/sunsystechsol',
    Icon: Globe,
  },
  {
    title: 'JobHunt-Mailer',
    category: 'n8n Workflow Automation',
    type: 'DevOps & Tools',
    featured: false,
    bgGradient: 'from-violet-600 via-purple-700 to-fuchsia-800',
    description: 'Automation workflow reading company targets from Google Sheets to send personalized application emails.',
    tags: ['n8n', 'Google Sheets API', 'JSON'],
    github: 'https://github.com/naveenkumar80/JobHunt-Mailer',
    Icon: Mail,
  },
  {
    title: 'LinkedIn Automation',
    category: 'Browser Bot & Scraping',
    type: 'DevOps & Tools',
    featured: false,
    bgGradient: 'from-cyan-600 via-blue-700 to-indigo-800',
    description: 'Python and Selenium automation tool sending connection requests at scale with rate limiting.',
    tags: ['Python', 'Selenium', 'Automation'],
    github: 'https://github.com/naveenkumar80/LinkedIn-Connection-Automation',
    Icon: Share2,
  },
  {
    title: 'GPS NY Builders',
    category: 'Responsive Business Site',
    type: 'Full Stack & Web',
    featured: false,
    bgGradient: 'from-amber-600 via-orange-700 to-red-800',
    description: 'Responsive website for a New York construction firm with service catalogs and SEO structure.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
    Icon: Building,
  },
  {
    title: 'Itinerary Builder',
    category: 'Dynamic PDF Generator',
    type: 'Full Stack & Web',
    featured: false,
    bgGradient: 'from-sky-500 via-blue-600 to-indigo-700',
    description: 'React app for creating personalized travel itineraries with client-side PDF document generation.',
    tags: ['React', 'PDF Generation', 'Validation'],
    Icon: Plane,
  },
  {
    title: 'Hotel Booking Analysis',
    category: 'Kaggle Dataset Analytics',
    type: 'Data & Dashboards',
    featured: false,
    bgGradient: 'from-lime-600 via-emerald-700 to-teal-800',
    description: 'Exploratory data analysis and cancellation prediction patterns modeled in Excel from Kaggle data.',
    tags: ['Excel', 'Pivot Tables', 'EDA', 'Kaggle'],
    Icon: Database,
  },
  {
    title: 'MAC Address Changer',
    category: 'Linux Networking Security',
    type: 'DevOps & Tools',
    featured: false,
    bgGradient: 'from-red-600 via-rose-700 to-pink-800',
    description: 'Python CLI tool for spoofing MAC addresses on Linux interfaces using subprocess calls.',
    tags: ['Python', 'Linux Networking', 'Subprocess'],
    github: 'https://github.com/naveenkumar80/macchanger',
    Icon: Shield,
  },
];

const categories = ['All', 'Featured', 'Full Stack & Web', 'AI & GenAI / RAG', 'DevOps & Tools', 'Data & Dashboards'];

export const VibrantProjects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = projectList.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return p.featured;
    return p.type === activeCategory;
  });

  return (
    <section id="vibrant-projects" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* Header matching Dikshant reference */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-3">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            FEATURED PROJECTS
          </h2>
          <div className="animate-wiggle">
            <SquiggleDoodle className="w-14 h-6 text-purple-400" />
          </div>
        </div>

        <a
          href="https://github.com/naveenkumar80"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-display font-bold text-lime-400 hover:text-lime-300 transition-colors"
        >
          <span>View All Projects</span>
          <span className="text-lg">→</span>
        </a>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-display text-xs font-bold transition-all ${
              activeCategory === cat
                ? 'bg-lime-400 text-slate-950 shadow-[0_0_15px_rgba(163,230,53,0.4)] scale-105'
                : 'bg-[#121620] text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {filtered.map((project, index) => {
            const Icon = project.Icon;
            return (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="group flex flex-col justify-between p-4 rounded-3xl bg-[#121620] border border-white/10 hover:border-lime-400/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-all duration-300"
              >
                <div>
                  {/* Thumbnail Banner with Gradient & Icon */}
                  <div className={`h-40 rounded-2xl bg-gradient-to-tr ${project.bgGradient} p-4 flex flex-col justify-between relative overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform`}>
                    <div className="flex justify-between items-start">
                      <div className="p-2.5 rounded-xl bg-black/40 backdrop-blur-md text-white">
                        <Icon size={20} />
                      </div>
                      {project.featured && (
                        <span className="text-[10px] font-display font-extrabold px-2.5 py-0.5 rounded-full bg-lime-400 text-slate-950 uppercase tracking-wider">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="text-white/90 text-[11px] font-display font-bold uppercase tracking-wider">
                      {project.type}
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="mt-4 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-white group-hover:text-lime-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-medium mt-0.5">
                        {project.category}
                      </p>
                    </div>

                    {/* Arrow Button */}
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-lime-400 group-hover:text-slate-950 text-gray-400 transition-all shrink-0">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Footer Tags & Links */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/5 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-lime-400 hover:underline flex items-center gap-1"
                        title="Live Demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1"
                        title="View GitHub Repo"
                      >
                        <GitBranch size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
