import { useState } from 'react';
import { NeumorphicCard, NeumorphicButton } from '../ui/Neumorphism';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3,
  Bot, 
  Building,
  Code2, 
  Database, 
  ExternalLink, 
  FileText, 
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

const allProjects = [
  {
    title: 'Heritage Kits',
    subtitle: 'Cinematic 3D Football Kit Experience',
    category: 'Full Stack & Web',
    featured: true,
    year: '2026',
    description: 'Cinematic interactive landing page delivering an immersive storytelling experience for a vintage football kit brand, with a custom scroll-driven video scrubbing engine and 3D visual elements.',
    highlights: [
      'Scroll-driven video scrubbing engine synchronized with scroll position',
      'Video assets preloaded as Blobs for zero-buffering scrub playback',
      'Three.js & React Three Fiber 3D visual experiences',
      'Config-driven scene architecture for pacing, styling, and animations',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'R3F'],
    Icon: Sparkles,
    live: 'https://heritage-kits.vercel.app/',
  },
  {
    title: 'InterviewAI',
    subtitle: 'AI-Powered Interview Preparation Platform',
    category: 'AI & GenAI / RAG',
    featured: true,
    year: '2026',
    description: 'Full-stack AI platform analyzing resumes, candidate profiles, and job descriptions to generate interview reports, match scores, technical/behavioral questions, skill-gap analysis, and day-wise prep plans.',
    highlights: [
      'Google Gemini API integration with structured JSON-schema & Zod validation',
      'Secure JWT authentication with HTTP-only cookies and protected routes',
      'Automated ATS resume generation pipeline converting AI output to PDF via Puppeteer',
      'Modular Express 5 MVC architecture with React 19 & SCSS frontend',
    ],
    tags: ['React 19', 'Node.js', 'Express 5', 'MongoDB', 'Google Gemini API', 'JWT', 'Puppeteer', 'Zod'],
    Icon: Bot,
    github: 'https://github.com/naveenkumar80/InterviewAI',
  },
  {
    title: 'WaveSync',
    subtitle: 'Full Stack Music Streaming Platform',
    category: 'Full Stack & Web',
    featured: true,
    year: '2026',
    description: 'Full-stack music streaming platform supporting role-based access control (RBAC) for users and artists, secure JWT auth, artist track/album portal, and ImageKit cloud storage.',
    highlights: [
      'Role-based access (RBAC) for listeners and artists',
      'Scalable RESTful APIs for audio uploads, metadata, and artist profiles',
      'ImageKit cloud storage & Multer for optimized media delivery',
      'React Hook Form, Zod validation, and Tailwind CSS responsive interface',
    ],
    tags: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'ImageKit', 'Multer'],
    Icon: Music,
  },
  {
    title: 'CollabCode',
    subtitle: 'Real-Time Collaborative Code Editor',
    category: 'Full Stack & Web',
    featured: true,
    year: '2026',
    description: 'Real-time collaborative code editor supporting multi-user co-editing with live cursor presence and conflict-free synchronization powered by CRDT-based Yjs and WebSockets.',
    highlights: [
      'Low-latency bidirectional WebSocket communication via Socket.IO & Express',
      'Conflict-free Replicated Data Types (CRDTs) using Yjs for concurrent editing',
      'Integrated y-monaco and y-socket.io for real-time editor state synchronization',
      'React 19 frontend with Monaco Editor and Tailwind CSS',
    ],
    tags: ['React 19', 'Vite', 'Yjs (CRDT)', 'Socket.IO', 'Node.js', 'Express', 'Monaco Editor'],
    Icon: Code2,
    github: 'https://github.com/naveenkumar80/CollabCode',
  },
  {
    title: 'JarvisCLI',
    subtitle: 'Groq & Tavily Powered AI Agent',
    category: 'AI & GenAI / RAG',
    featured: false,
    year: 'Apr 2026',
    description: 'Terminal-based conversational AI assistant combining fast LLM inference (Groq) with real-time web search (Tavily) and smart tool-calling for context-aware CLI responses.',
    highlights: [
      'Smart tool-calling system auto-switching between LLM reasoning and live web search',
      'Modular CLI architecture using Node.js and RESTful API integrations',
      'Prompt engineering and NLP-driven context synthesis',
    ],
    tags: ['Node.js', 'Groq API', 'Tavily API', 'GenAI', 'CLI Tooling', 'Tool Calling'],
    Icon: Terminal,
    github: 'https://github.com/naveenkumar80/JarvisCLI---Groq---Tavily-Powered-Agent',
  },
  {
    title: 'AI Company Chatbot',
    subtitle: 'RAG-Powered Document Q&A System',
    category: 'AI & GenAI / RAG',
    featured: true,
    year: '2026',
    description: 'RAG chatbot indexing company PDF documentation into a Pinecone vector database for accurate, hallucination-resistant Q&A over private enterprise knowledge bases.',
    highlights: [
      'Sliding-window text chunking with Gemini embeddings generation',
      'Semantic vector search in Pinecone to retrieve top-k context',
      'Groq LLM API integration to synthesize natural-language source-backed answers',
      'Fault-tolerant keyword search fallback if embeddings API is unreachable',
    ],
    tags: ['Node.js', 'RAG', 'Pinecone', 'Gemini Embeddings', 'Groq API', 'Semantic Search'],
    Icon: Bot,
    github: 'https://github.com/naveenkumar80/AI-company-chatbot',
  },
  {
    title: 'Finance Dashboard',
    subtitle: 'Interactive Financial Analytics & Trends',
    category: 'Data & Dashboards',
    featured: false,
    year: 'Apr 2026',
    description: 'Production-ready personal finance dashboard tracking income, expenses, and financial trends with interactive Recharts visualizations and real-time budgeting insights.',
    highlights: [
      'Advanced filtering, sorting, and CSV/JSON export capabilities',
      'Role-based access control (Admin & Viewer) with persistent dark mode',
      'Savings rate, category-wise spending analytics, and Zustand global state',
    ],
    tags: ['React.js', 'Tailwind CSS', 'Zustand', 'Recharts', 'Financial Analytics'],
    Icon: LineChart,
    live: 'https://finance-dashboard-three-beige.vercel.app/',
  },
  {
    title: 'IT Solution Full Stack Website',
    subtitle: 'Production MERN IT Services Platform',
    category: 'Full Stack & Web',
    featured: false,
    year: 'Oct-Dec 2025',
    description: 'Shipped a production MERN-stack IT services website with secure admin panel, JWT authentication, dynamic content management, and RESTful service-catalog APIs.',
    highlights: [
      'Secure RESTful API architecture with JWT authentication & RBAC',
      'MVC design patterns and production database modeling',
      'Built for SunsysTechsol Pvt. Ltd. to serve live business traffic',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloud Deployment'],
    Icon: Globe,
    github: 'https://github.com/naveenkumar80/sunsystechsol',
  },
  {
    title: 'JobHunt-Mailer Automation',
    subtitle: 'Low-Code Workflow for Job Outreach',
    category: 'Automation & Tools',
    featured: false,
    year: 'Jan 2026',
    description: 'End-to-end automation workflow that reads target company leads from Google Sheets and automatically sends personalized job application emails, cutting manual outreach by 90%+.',
    highlights: [
      'n8n workflow automation pipeline with Google Sheets API integration',
      'JSON payload templating and dynamic email generation',
      'Automated rate-limiting and delivery verification logging',
    ],
    tags: ['n8n', 'Google Sheets API', 'JSON', 'No-Code Automation', 'Process Automation'],
    Icon: Mail,
    github: 'https://github.com/naveenkumar80/JobHunt-Mailer',
  },
  {
    title: 'LinkedIn Connection Automation',
    subtitle: 'Browser Automation & Lead Tracking',
    category: 'Automation & Tools',
    featured: false,
    year: 'Jan 2026',
    description: 'Python and Selenium automation tool that sends targeted LinkedIn connection requests at scale and syncs results to Google Sheets via API.',
    highlights: [
      'Resilient web scraping and browser automation with built-in error recovery',
      'Anti-detection rate limiting and randomized delay intervals',
      'Google Sheets API logging for end-to-end campaign metrics',
    ],
    tags: ['Python', 'Selenium', 'Google Sheets API', 'Web Scraping', 'Automation'],
    Icon: Share2,
    github: 'https://github.com/naveenkumar80/LinkedIn-Connection-Automation',
  },
  {
    title: 'GPS NY Builders Website',
    subtitle: 'Responsive Construction Business Site',
    category: 'Full Stack & Web',
    featured: false,
    year: 'Nov-Dec 2025',
    description: 'Designed and shipped a responsive business website for a New York construction company, covering services, project showcase, and inquiry contact flows.',
    highlights: [
      'Mobile-first responsive architecture using semantic HTML5 and CSS3',
      'Fast page-load performance and cross-browser compatibility',
      'SEO-friendly site structure and accessible layout',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO'],
    Icon: Building,
  },
  {
    title: 'Itinerary Builder',
    subtitle: 'Personalized Travel Planner & PDF Exporter',
    category: 'Full Stack & Web',
    featured: false,
    year: 'Sep 2025',
    description: 'React application for creating and exporting custom travel itineraries as downloadable PDFs, with dynamic form management and client-side document generation.',
    highlights: [
      'Dynamic multi-step form management with real-time field validation',
      'Client-side PDF document generation and automated formatting',
      'Clean modular React component structure with responsive UI',
    ],
    tags: ['React.js', 'JavaScript', 'CSS3', 'PDF Generation', 'Form Validation'],
    Icon: Plane,
  },
  {
    title: 'Hotel Booking Cancellations Dashboard',
    subtitle: 'EDA & Statistical Predictive Insights',
    category: 'Data & Dashboards',
    featured: false,
    year: '2024',
    description: 'Cleaned and analyzed a large hotel booking cancellations dataset from Kaggle; built an interactive dashboard revealing cancellation patterns to support data-driven decisions.',
    highlights: [
      'Exploratory data analysis (EDA) and data cleansing across thousands of records',
      'Statistical modeling and pivot table analytics in Excel',
      'Visualized seasonal booking lead-times and cancellation risk indicators',
    ],
    tags: ['Excel', 'Pivot Tables', 'Kaggle', 'Statistical Analysis', 'EDA'],
    Icon: Database,
  },
  {
    title: 'MAC Address Changer',
    subtitle: 'Linux Networking Security CLI',
    category: 'Automation & Tools',
    featured: false,
    year: '2022',
    description: 'Command-line tool in Python to spoof MAC addresses on Linux network interfaces, demonstrating low-level systems programming and network security fundamentals.',
    highlights: [
      'Python subprocess management to interface with Linux networking internals',
      'Regex validation for network interface names and MAC address formats',
      'Built during YHills cybersecurity training',
    ],
    tags: ['Python', 'Linux Networking', 'Subprocess', 'Cybersecurity', 'CLI'],
    Icon: Shield,
    github: 'https://github.com/naveenkumar80/macchanger',
  },
];

const filterTabs = [
  'All',
  'Featured',
  'Full Stack & Web',
  'AI & GenAI / RAG',
  'Automation & Tools',
  'Data & Dashboards',
];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = allProjects.filter((project) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Featured') return project.featured;
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="py-24 px-6 sm:px-10 lg:px-16 bg-nm-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nm-bg shadow-nm-inset text-xs font-bold tracking-wider text-blue-600 uppercase mb-3">
              Portfolio Catalog ({allProjects.length} Projects)
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
              Featured Work & Projects
            </h2>
            <p className="text-gray-600 mt-2 text-base sm:text-lg max-w-2xl">
              Production full-stack platforms, 3D web applications, RAG pipelines, AI agents, workflow automations, and systems tools.
            </p>
          </div>
          <div className="flex gap-3">
            <a href="https://github.com/naveenkumar80" target="_blank" rel="noreferrer">
              <NeumorphicButton className="flex items-center gap-2">
                <GitBranch size={16} className="text-blue-500" />
                View GitHub Repos
              </NeumorphicButton>
            </a>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-nm-bg shadow-nm-flat hover:shadow-nm-inset text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const ProjectIcon = project.Icon;
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <NeumorphicCard className="p-6 h-full flex flex-col justify-between group hover:-translate-y-2 transition-all">
                    <div>
                      {/* Top Header with Icon, Category, & Year */}
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="h-14 w-14 rounded-2xl bg-nm-bg flex items-center justify-center shadow-nm-inset">
                          <ProjectIcon size={26} className="text-blue-500" strokeWidth={2} />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 justify-end">
                            {project.featured && (
                              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-300">
                                Featured
                              </span>
                            )}
                            {project.year && (
                              <span className="text-xs font-semibold text-gray-400">
                                {project.year}
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-medium text-blue-600 block mt-0.5">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-bold text-gray-800 leading-snug">{project.title}</h3>
                      <p className="text-xs font-semibold text-gray-500 mb-3">{project.subtitle}</p>

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>

                      {/* Bullet Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="mb-5 space-y-1.5 p-3 rounded-2xl bg-nm-bg/60 shadow-nm-inset">
                          {project.highlights.map((h, i) => (
                            <p key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                              <span className="text-blue-500 font-bold shrink-0">•</span>
                              <span>{h}</span>
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-gray-200/50">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-1 rounded-xl bg-nm-bg shadow-nm-inset text-gray-500 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-3 pt-2">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 py-2 px-3 rounded-xl shadow-nm-flat hover:shadow-nm-inset text-xs font-bold text-blue-600 flex items-center justify-center gap-1.5 transition-all"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className={`py-2 px-3 rounded-xl shadow-nm-flat hover:shadow-nm-inset text-xs font-bold text-gray-700 flex items-center justify-center gap-1.5 transition-all ${
                              !project.live ? 'flex-1' : ''
                            }`}
                          >
                            <GitBranch size={14} />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </NeumorphicCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
