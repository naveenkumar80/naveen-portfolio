import { NeumorphicCard } from '../ui/Neumorphism';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Languages', items: ['Python', 'JavaScript (ES6+)', 'C++', 'Bash/Shell', 'HTML5', 'CSS3'] },
  { name: 'Frontend', items: ['React.js', 'Vite', 'Bootstrap', 'Responsive Design', 'Tailwind CSS', 'Monaco Editor'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'REST API Design', 'JWT Authentication', 'MVC Architecture', 'Socket.IO', 'WebSockets', 'Real-Time Sync'] },
  { name: 'Databases', items: ['MongoDB', 'MySQL', 'JSON'] },
  { name: 'AI / ML', items: ['LLM Training & Evaluation', 'Prompt Engineering', 'Generative AI', 'RAG', 'Vector Embeddings', 'Semantic Search'] },
  { name: 'AI Tooling', items: ['n8n', 'OpenAI API', 'LangChain', 'Hugging Face', 'Groq API', 'Tavily API', 'Pinecone', 'Gemini Embeddings API'] },
  { name: 'Cloud & DevOps', items: ['OCI Certified', 'Git', 'GitHub', 'CI/CD Pipelines', 'Docker', 'Linux', 'Cloud Deployment'] },
  { name: 'Automation', items: ['Selenium', 'n8n Workflows', 'Google Sheets API', 'Web Scraping'] },
  { name: 'Testing & Tools', items: ['Postman', 'Nmap', 'VS Code'] },
  { name: 'Data', items: ['Data Analytics', 'Statistical Analysis', 'Excel', 'Kaggle', 'Power BI'] },
  { name: 'CS Fundamentals', items: ['Data Structures', 'OOP', 'Agile', 'Code Review', 'API Integration'] },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800">My Toolkit</h2>
        <p className="mt-3 text-gray-600">A full-stack, AI, DevOps, automation, and analytics skill map from my master resume.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
          >
            <NeumorphicCard className="p-6 h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-5">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="text-xs font-medium text-gray-500 px-3 py-2 rounded-full bg-nm-bg shadow-nm-inset">
                    {item}
                  </span>
                ))}
              </div>
            </NeumorphicCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
