import { useState } from 'react';
import { NeumorphicCard, NeumorphicButton } from '../ui/Neumorphism';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Bot, 
  BrainCircuit, 
  Cloud, 
  Code2, 
  Database, 
  Layers, 
  Layout, 
  Server, 
  Terminal, 
  Wrench 
} from 'lucide-react';

const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    color: 'text-amber-500',
    items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'PHP', 'C++', 'SQL', 'Bash / Shell Scripting', 'HTML5', 'CSS3'],
  },
  {
    name: 'Frontend',
    icon: Layout,
    color: 'text-blue-500',
    items: ['React.js (React 19)', 'Next.js', 'Redux Toolkit', 'Zustand', 'React Router', 'React Hook Form', 'Tailwind CSS', 'Bootstrap', 'SCSS', 'Vite', 'Monaco Editor', 'Recharts', 'Responsive / Mobile-First Design'],
  },
  {
    name: 'Backend',
    icon: Server,
    color: 'text-emerald-500',
    items: ['Node.js', 'Express.js (Express 5)', 'REST API Design', 'JWT Authentication', 'MVC Architecture', 'Socket.IO', 'WebSockets', 'Real-Time Data Sync', 'Zod (Schema Validation)', 'Puppeteer'],
  },
  {
    name: 'Databases',
    icon: Database,
    color: 'text-purple-500',
    items: ['MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL (working knowledge)', 'JSON', 'Redis (familiar)'],
  },
  {
    name: 'AI / ML & GenAI',
    icon: BrainCircuit,
    color: 'text-rose-500',
    items: ['LLM Training & Evaluation', 'RLHF (from Human Feedback)', 'Prompt Engineering', 'Generative AI (GenAI)', 'Retrieval-Augmented Generation (RAG)', 'Vector Embeddings', 'Semantic Search', 'AI Agent Architectures', 'NLP'],
  },
  {
    name: 'AI Tooling & APIs',
    icon: Bot,
    color: 'text-indigo-500',
    items: ['OpenAI API', 'Google Gemini API', 'Gemini Embeddings API', 'Groq API', 'Tavily API', 'LangChain (in progress)', 'Hugging Face (in progress)', 'Pinecone (Vector DB)', 'n8n (AI Workflow Automation)'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-sky-500',
    items: ['OCI Certified DevOps Professional', 'OCI AI Foundations Certified', 'Docker', 'CI/CD Pipelines', 'Git', 'GitHub', 'GitHub Actions', 'Linux', 'Cloud Deployment'],
  },
  {
    name: 'Automation & Scripting',
    icon: Terminal,
    color: 'text-teal-500',
    items: ['Selenium', 'n8n Workflows', 'Web Scraping', 'Google Sheets API', 'Process Automation'],
  },
  {
    name: 'Testing & Tools',
    icon: Wrench,
    color: 'text-orange-500',
    items: ['Postman', 'Nmap', 'VS Code', 'Git Version Control', 'Code Review'],
  },
  {
    name: 'Data & Analytics',
    icon: BarChart3,
    color: 'text-green-500',
    items: ['Data Analytics', 'Statistical Analysis', 'Exploratory Data Analysis (EDA)', 'Excel (Pivot Tables)', 'Power BI', 'Kaggle'],
  },
  {
    name: 'Software Engineering',
    icon: Layers,
    color: 'text-pink-500',
    items: ['System Design', 'Distributed Systems', 'Scalability', 'Microservices-Oriented Design', 'RBAC', 'API Integration', 'Agile / Scrum', 'OOP', 'Data Structures & Algorithms'],
  },
];

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map(c => c.name)];

  const filteredCategories = selectedCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.name === selectedCategory);

  return (
    <section id="skills" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nm-bg shadow-nm-inset text-xs font-bold tracking-wider text-blue-600 uppercase mb-3">
          Comprehensive Technical Stack
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
          Technical Skills & Tooling
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          Covering full-stack MERN, OCI DevOps, RAG/GenAI pipelines, automation workflows, and core software engineering principles.
        </p>

        {/* Quick Filter Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-nm-bg shadow-nm-flat hover:shadow-nm-inset text-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {filteredCategories.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <NeumorphicCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200/50">
                    <div className="p-2.5 rounded-xl bg-nm-bg shadow-nm-inset">
                      <Icon size={20} className={skill.color} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{skill.name}</h3>
                      <span className="text-[11px] font-semibold text-gray-400">
                        {skill.items.length} skills listed
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium text-gray-600 px-3 py-1.5 rounded-xl bg-nm-bg shadow-nm-inset hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </NeumorphicCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
