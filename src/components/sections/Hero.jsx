import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Hero3D } from '../Hero3D';
import { NeumorphicButton } from '../ui/Neumorphism';
import { motion } from 'framer-motion';
import { ArrowDown, Award, Download, FileCode, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center pt-28 pb-16 px-6 sm:px-10 lg:px-16 gap-12 max-w-7xl mx-auto">
      <div className="flex-1 space-y-6 z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nm-bg shadow-nm-inset text-xs sm:text-sm font-semibold tracking-wider text-blue-600 mb-6 uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Full Stack (MERN) · OCI DevOps · AI/LLM Evaluation
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-800 tracking-tight leading-[1.1]">
            Naveen <br />
            <span className="text-blue-500">Kumar</span>
          </h1>

          <div className="flex items-center gap-2 text-gray-500 font-medium text-sm mt-3">
            <MapPin size={16} className="text-blue-500 shrink-0" />
            <span>Jaipur, Rajasthan, India</span>
          </div>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
            Full Stack Developer and OCI Certified DevOps Engineer with hands-on experience building and deploying production-grade MERN-stack applications, RESTful and real-time APIs, RAG pipelines, and cloud-ready architectures. Experienced in technical AI/LLM evaluation and team leadership.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {[
              'OCI DevOps Professional',
              'OCI AI Foundations',
              'React 19 & Express 5',
              'RAG & Vector Search',
              'Pod Lead & Agile Sprints',
            ].map((badge) => (
              <span
                key={badge}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-nm-bg shadow-nm-flat text-gray-700"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a href="#projects">
              <NeumorphicButton className="bg-blue-500 text-white hover:bg-blue-600 shadow-md">
                View My Projects
              </NeumorphicButton>
            </a>
            <a href="#contact">
              <NeumorphicButton>
                Get In Touch
              </NeumorphicButton>
            </a>
            <a href="/Naveen_Kumar_Resume.docx" download>
              <NeumorphicButton className="flex items-center gap-2 text-gray-700">
                <Download size={16} className="text-blue-500" />
                Resume
              </NeumorphicButton>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 pt-2">
            <a
              href="https://github.com/naveenkumar80"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl shadow-nm-flat hover:shadow-nm-inset transition-all text-gray-700 hover:text-blue-500"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/naveenk80-developer"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl shadow-nm-flat hover:shadow-nm-inset transition-all text-gray-700 hover:text-blue-500"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:naveenkumar80032@gmail.com"
              className="p-3 rounded-2xl shadow-nm-flat hover:shadow-nm-inset transition-all text-gray-700 hover:text-blue-500"
              aria-label="Email Naveen"
            >
              <Mail size={20} />
            </a>
            <a
              href="#certifications"
              className="flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-blue-500 transition-colors ml-2"
            >
              <Award size={16} className="text-blue-500" />
              <span>2x OCI Certified</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 w-full h-[360px] sm:h-[450px] lg:h-[550px] relative">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};
