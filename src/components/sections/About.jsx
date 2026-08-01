import { NeumorphicCard } from '../ui/Neumorphism';
import { motion } from 'framer-motion';
import { Award, BrainCircuit, Cloud, Code2 } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'MERN platforms', value: 'Production apps, APIs, admin panels' },
  { icon: BrainCircuit, label: 'AI systems', value: 'LLM evaluation, RAG, agent tooling' },
  { icon: Cloud, label: 'Cloud + DevOps', value: 'OCI certified, Docker, CI/CD' },
  { icon: Award, label: 'Leadership', value: 'Trainer pods and 4-person dev teams' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        <NeumorphicCard className="relative overflow-hidden p-8">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-200/50 blur-2xl" />
          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-500">Jaipur, India</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-800">Naveen Kumar</h2>
            <p className="mt-3 text-lg text-gray-600">Full Stack Developer, OCI Certified DevOps Engineer, and hands-on LLM Trainer.</p>
            <div className="mt-8 grid gap-5">
              {highlights.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-nm-bg shadow-nm-flat flex items-center justify-center">
                    <item.icon size={22} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </NeumorphicCard>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              I am a full stack developer focused on building real products: responsive React frontends, secure Node and Express APIs, MongoDB-backed services, and deployment-ready workflows.
            </p>
            <p>
              My work also sits close to AI systems. I have trained and evaluated LLMs, written evaluation rubrics, built RAG pipelines with vector search, and explored agentic workflows using tools like Groq, Gemini embeddings, Pinecone, Tavily, and n8n.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {[
              ['10+', 'Portfolio projects'],
              ['2', 'OCI certifications'],
              ['90%+', 'Automation effort cut'],
            ].map(([value, label]) => (
              <NeumorphicCard key={label} className="px-5 py-4" inset>
                <span className="block text-blue-600 font-bold text-2xl">{value}</span>
                <span className="text-sm text-gray-600">{label}</span>
              </NeumorphicCard>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
