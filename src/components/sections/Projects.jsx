import { NeumorphicCard, NeumorphicButton } from '../ui/Neumorphism';
import { motion } from 'framer-motion';
import { Bot, Code2, Database, ExternalLink, GitBranch, Globe, LineChart, Mail, Music, Plane, Shield, Terminal } from 'lucide-react';

const projects = [
  {
    title: 'WaveSync',
    description: 'Full-stack music streaming platform with role-based access for users and artists, JWT auth, artist uploads, album publishing, and ImageKit media delivery.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
    Icon: Music,
  },
  {
    title: 'CollabCode',
    description: 'Real-time collaborative code editor with live cursor presence and conflict-free synchronization powered by Yjs, Monaco, Socket.IO, Node, and Express.',
    tags: ['React 19', 'Yjs', 'Socket.IO', 'Monaco', 'Node.js'],
    Icon: Code2,
    github: 'https://github.com/naveenkumar80/CollabCode',
  },
  {
    title: 'JarvisCLI',
    description: 'Terminal-based conversational AI assistant combining Groq LLM inference with Tavily web search and smart tool-calling for context-aware CLI responses.',
    tags: ['Node.js', 'Groq API', 'Tavily API', 'GenAI'],
    Icon: Terminal,
    github: 'https://github.com/naveenkumar80/JarvisCLI---Groq---Tavily-Powered-Agent',
  },
  {
    title: 'AI Company Chatbot',
    description: 'RAG-powered document Q&A system that chunks PDFs, stores Gemini embeddings in Pinecone, retrieves relevant context, and answers with Groq.',
    tags: ['Node.js', 'RAG', 'Pinecone', 'Gemini', 'Groq API'],
    Icon: Bot,
    github: 'https://github.com/naveenkumar80/AI-company-chatbot',
  },
  {
    title: 'Finance Dashboard',
    description: 'Production-ready personal finance dashboard with income and expense tracking, interactive charts, exports, role-based access, and persistent dark mode.',
    tags: ['React', 'Tailwind', 'Zustand', 'Recharts'],
    Icon: LineChart,
    live: 'https://finance-dashboard-three-beige.vercel.app/',
  },
  {
    title: 'IT Solution Website',
    description: 'Production MERN-stack IT services website with secure admin panel, JWT authentication, dynamic content management, service catalog APIs, and RBAC.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloud'],
    Icon: Globe,
    github: 'https://github.com/naveenkumar80/sunsystechsol',
  },
  {
    title: 'JobHunt-Mailer Automation',
    description: 'n8n workflow that reads target companies from Google Sheets and sends personalized job application emails, cutting manual outreach effort by 90%+.',
    tags: ['n8n', 'Google Sheets API', 'JSON', 'Automation'],
    Icon: Mail,
    github: 'https://github.com/naveenkumar80/JobHunt-Mailer',
  },
  {
    title: 'LinkedIn Connection Automation',
    description: 'Python and Selenium automation tool that sends LinkedIn connection requests at scale and tracks results in Google Sheets with resilient execution logic.',
    tags: ['Python', 'Selenium', 'Google Sheets API', 'Web Scraping'],
    Icon: Code2,
    github: 'https://github.com/naveenkumar80/LinkedIn-Connection-Automation',
  },
  {
    title: 'GPS NY Builders Website',
    description: 'Modern responsive business website for a New York construction company with service pages, portfolio content, contact flows, and SEO-friendly structure.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    Icon: Globe,
  },
  {
    title: 'Itinerary Builder',
    description: 'React application for building personalized travel itineraries and exporting them as PDFs, with dynamic forms, validation, and responsive UI.',
    tags: ['React', 'JavaScript', 'CSS', 'PDF Generation'],
    Icon: Plane,
  },
  {
    title: 'Hotel Booking Dashboard',
    description: 'Excel dashboard built from a Kaggle hotel bookings dataset to analyze cancellation patterns and surface business intelligence insights.',
    tags: ['Excel', 'Kaggle', 'Statistical Analysis', 'Dashboard'],
    Icon: Database,
  },
  {
    title: 'MAC Address Changer',
    description: 'Python CLI tool for spoofing MAC addresses on Linux systems, using subprocess control and low-level networking concepts.',
    tags: ['Python', 'Linux Networking', 'Subprocess', 'Cybersecurity'],
    Icon: Shield,
    github: 'https://github.com/naveenkumar80/macchanger',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-8 bg-nm-bg/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">All Projects</h2>
            <p className="text-gray-600 mt-2">Full-stack products, AI agents, automation workflows, dashboards, and foundational security tools.</p>
          </div>
          <a href="https://github.com/naveenkumar80" target="_blank" rel="noreferrer">
            <NeumorphicButton>View GitHub</NeumorphicButton>
          </a>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <NeumorphicCard className="p-6 h-full flex flex-col group hover:-translate-y-2">
                <div className="h-28 mb-6 rounded-2xl bg-gray-100 flex items-center justify-center shadow-nm-inset">
                  <project.Icon size={46} className="text-blue-500" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-nm-bg shadow-nm-inset text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 min-h-9">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl shadow-nm-flat hover:shadow-nm-inset transition-all" aria-label={`${project.title} GitHub`}>
                      <GitBranch size={20} className="text-gray-600" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="p-2 rounded-xl shadow-nm-flat hover:shadow-nm-inset transition-all" aria-label={`${project.title} live site`}>
                      <ExternalLink size={20} className="text-gray-600" />
                    </a>
                  )}
                </div>
              </NeumorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
