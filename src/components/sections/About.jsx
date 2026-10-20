import { NeumorphicCard } from '../ui/Neumorphism';
import { motion } from 'framer-motion';
import { Award, BrainCircuit, Cloud, Code2, Cpu, Sparkles, Users } from 'lucide-react';

const pillars = [
  {
    icon: Code2,
    label: 'Full Stack MERN',
    title: 'Production Apps & Real-Time APIs',
    value: 'React 19, Next.js, Node.js, Express 5, MongoDB, WebSockets & modular MVC architecture.',
  },
  {
    icon: Cloud,
    label: 'OCI Certified DevOps',
    title: 'CI/CD & Cloud Infrastructure',
    value: 'Certified OCI DevOps Professional & AI Foundations, Docker containerization & GitHub Actions.',
  },
  {
    icon: BrainCircuit,
    label: 'AI/LLM Evaluation',
    title: 'RLHF Benchmarks & RAG Pipelines',
    value: 'Code reviews for LLM training, evaluation rubrics, Pinecone vector search & Gemini/Groq APIs.',
  },
  {
    icon: Users,
    label: 'Engineering Leadership',
    title: 'Pod Lead & Agile Sprints',
    value: 'Led Turing Pod of engineers, managed 4-person dev team at SunsysTechsol, driving quality.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-12 gap-12 items-start"
      >
        <div className="lg:col-span-5">
          <NeumorphicCard className="relative overflow-hidden p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-200/50 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Jaipur, Rajasthan, India</p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-800">
                Naveen Kumar
              </h2>
              <p className="mt-2 text-base font-semibold text-blue-500">
                Full Stack Developer (MERN) · OCI Certified DevOps · AI/LLM Evaluation
              </p>

              <div className="mt-8 space-y-4">
                {pillars.map((item) => (
                  <div key={item.label} className="flex gap-4 items-start p-3 rounded-2xl bg-nm-bg/60 shadow-nm-inset">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-nm-bg shadow-nm-flat flex items-center justify-center mt-0.5">
                      <item.icon size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-800 mt-0.5">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </NeumorphicCard>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nm-bg shadow-nm-inset text-xs font-bold tracking-wider text-blue-600 uppercase">
            <Sparkles size={14} /> Professional Summary
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
            Engineering robust web systems, cloud infrastructure & AI workflows.
          </h2>

          <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              I am a <strong className="text-gray-800">Full Stack Developer</strong> and <strong className="text-gray-800">OCI Certified DevOps Engineer</strong> with hands-on experience building and deploying production-grade MERN-stack applications, RESTful and real-time APIs, and responsive web platforms across React.js, Node.js, Express.js, and MongoDB.
            </p>
            <p>
              Certified in <strong className="text-gray-800">Oracle Cloud Infrastructure DevOps</strong> (CI/CD, Docker, containerized deployment) and <strong className="text-gray-800">OCI AI Foundations</strong> (Generative AI, Machine Learning, Cloud AI Services).
            </p>
            <p>
              Experienced in full-stack code review and technical evaluation for AI/LLM training programs, building evaluation rubrics and RLHF-aligned quality benchmarks, and leading engineering teams to measurable gains in output fidelity.
            </p>
            <p>
              I bring a proven track record leading small engineering teams, running Agile sprints, and shipping live products end to end, with applied expertise in <strong className="text-gray-800">Retrieval-Augmented Generation (RAG)</strong>, LangChain, vector databases, and AI agent architectures.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {[
              ['14+', 'Projects Shipped'],
              ['2', 'OCI Certifications'],
              ['8.04', 'B.Tech CGPA'],
              ['90%+', 'Automation Gains'],
            ].map(([value, label]) => (
              <NeumorphicCard key={label} className="p-4 text-center" inset>
                <span className="block text-blue-600 font-extrabold text-2xl sm:text-3xl">{value}</span>
                <span className="text-xs font-medium text-gray-600 mt-1 block">{label}</span>
              </NeumorphicCard>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
