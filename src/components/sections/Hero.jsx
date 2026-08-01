import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Hero3D } from '../Hero3D';
import { NeumorphicButton } from '../ui/Neumorphism';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 gap-12">
      <div className="flex-1 space-y-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-500 mb-4">
            Full Stack Developer + OCI DevOps Engineer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 tracking-tight">
            Naveen <br />
            <span className="text-blue-500">Kumar</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-lg">
            I build production-ready MERN applications, RAG-powered AI tools, and cloud-ready platforms with clean APIs, responsive interfaces, and practical automation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#projects">
              <NeumorphicButton className="w-full sm:w-auto bg-blue-500 text-white hover:bg-blue-600">
                View My Work
              </NeumorphicButton>
            </a>
            <a href="#contact">
              <NeumorphicButton className="w-full sm:w-auto">
                Contact Me
              </NeumorphicButton>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 w-full h-[400px] md:h-[600px] relative">
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
