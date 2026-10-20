import { motion } from 'framer-motion';
import { 
  CrownDoodle, 
  HandArrowDoodle, 
  LightningDoodle, 
  SmileyDoodle, 
  SpeechBubble, 
  StarDoodle 
} from './Doodles';
import { ArrowDown, ExternalLink, Play } from 'lucide-react';

export const VibrantHero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden">
      {/* Background Organic Color Splash Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Handwritten 'Hey, I'm' with Arrow */}
          <div className="relative inline-block">
            <span className="font-marker text-2xl sm:text-3xl text-gray-200 tracking-wide inline-block -rotate-3">
              Hey, I'm
            </span>
            <div className="absolute left-20 top-4 animate-wiggle">
              <HandArrowDoodle className="w-10 h-10 text-white/80" />
            </div>
          </div>

          {/* Main Giant Headline with Crown */}
          <div className="relative">
            <div className="absolute -top-7 left-36 sm:left-52 animate-bounce">
              <CrownDoodle className="w-9 h-9 text-lime-400" />
            </div>
            <h1 className="font-display font-black text-6xl sm:text-8xl xl:text-9xl tracking-tighter text-white leading-[0.9]">
              NAVEEN <br />
              <span className="text-lime-400 drop-shadow-[0_0_35px_rgba(163,230,53,0.4)]">
                KUMAR
              </span>
            </h1>
          </div>

          {/* Subtitle Roles */}
          <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base font-display font-bold text-gray-300 pt-2">
            <span>Full Stack Developer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
            <span>OCI DevOps Engineer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>AI/LLM Evaluation</span>
          </div>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
            Building production-grade MERN applications, high-performance RAG pipelines, and cloud-native systems with verified OCI DevOps standards.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#vibrant-projects"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-lime-400 hover:bg-lime-300 text-slate-950 font-display font-black text-sm uppercase tracking-wider transition-all duration-200 hover:scale-105 shadow-[0_0_25px_rgba(163,230,53,0.5)]"
            >
              <Play size={16} fill="currentColor" />
              View Projects
            </a>
            <a
              href="https://github.com/naveenkumar80"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#121620] hover:bg-[#1a2130] border border-white/20 text-white font-display font-bold text-sm tracking-wider transition-all duration-200 hover:scale-105"
            >
              <span>Explore GitHub</span>
              <ExternalLink size={16} className="text-lime-400" />
            </a>
          </div>
        </div>

        {/* Right Column: Character Sticker Art & Floating Doodles */}
        <div className="lg:col-span-5 relative flex justify-center">
          {/* Floating Speech Bubble */}
          <div className="absolute -top-10 sm:-top-8 right-4 sm:right-10 z-20 animate-float-slow">
            <SpeechBubble>
              LET'S CREATE SOMETHING AWESOME!
            </SpeechBubble>
          </div>

          {/* Star Doodle */}
          <div className="absolute top-6 -left-4 sm:left-4 z-20 animate-spin" style={{ animationDuration: '10s' }}>
            <StarDoodle className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]" />
          </div>

          {/* Smiley Doodle */}
          <div className="absolute bottom-12 -left-6 sm:left-0 z-20 animate-bounce">
            <SmileyDoodle className="w-10 h-10 text-lime-400 drop-shadow-[0_0_10px_rgba(163,230,53,0.5)]" />
          </div>

          {/* Lightning Doodle */}
          <div className="absolute bottom-6 right-2 sm:right-6 z-20 animate-pulse">
            <LightningDoodle className="w-8 h-10 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.6)]" />
          </div>

          {/* Avatar Graphic Sticker Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative p-2 rounded-[36px] bg-gradient-to-tr from-purple-600 via-cyan-400 to-lime-400 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          >
            <div className="w-[280px] sm:w-[360px] h-[340px] sm:h-[420px] rounded-[32px] overflow-hidden bg-[#0d111a] relative border-4 border-white/90">
              <img
                src="/images/avatar.jpg"
                alt="Naveen Kumar Cartoon Developer Illustration"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              {/* Inner Gradient Overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d111a] via-[#0d111a]/40 to-transparent flex items-end p-4">
                <span className="text-xs font-display font-extrabold px-3 py-1 rounded-full bg-lime-400/90 text-slate-950 uppercase tracking-wider">
                  ⚡ Ready to Build
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-16 flex flex-col items-center justify-center gap-2 text-gray-400">
        <a href="#vibrant-flagship" className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest hover:text-lime-400 transition-colors">
          <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-lime-400 animate-bounce" />
          </div>
          <span>Scroll Down</span>
        </a>
      </div>
    </section>
  );
};
