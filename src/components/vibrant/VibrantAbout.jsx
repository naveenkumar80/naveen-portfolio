import { CrownDoodle, SquiggleDoodle } from './Doodles';
import { Download, ExternalLink, Play } from 'lucide-react';

export const VibrantAbout = () => {
  return (
    <section id="vibrant-about" className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <div className="p-8 sm:p-12 rounded-[36px] bg-[#121620] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
        {/* Floating Doodle Squiggle */}
        <div className="absolute bottom-6 right-10 animate-wiggle hidden md:block">
          <SquiggleDoodle className="w-24 h-8 text-purple-400" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: Sticker Graphic matching reference */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-2.5 rounded-[36px] bg-gradient-to-tr from-lime-400 via-cyan-400 to-purple-500 shadow-2xl hover:scale-105 transition-transform duration-500">
              <div className="w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-[30px] overflow-hidden bg-black border-4 border-white">
                <img
                  src="/images/about_sticker.jpg"
                  alt="Focus Code DevOps Ship Sticker Graphic"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: About Me Narrative matching reference */}
          <div className="lg:col-span-7 space-y-5">
            <div className="relative inline-block">
              <div className="absolute -top-6 left-28 animate-bounce">
                <CrownDoodle className="w-8 h-8 text-lime-400" />
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
                ABOUT ME
              </h2>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
              I'm Naveen, a Full Stack Developer & OCI Certified DevOps Engineer who loves turning complex engineering problems into clean, reliable, and high-impact software.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Certified in Oracle Cloud Infrastructure (DevOps Professional & AI Foundations), I have built production MERN platforms, real-time collaborative CRDT systems, and enterprise RAG pipelines. I've also led engineering pods at Turing, crafting RLHF evaluation rubrics to benchmark LLM output fidelity.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { val: '14+', label: 'Shipped Projects' },
                { val: '2x', label: 'OCI Certified' },
                { val: '8.04', label: 'B.Tech CGPA' },
                { val: '90%+', label: 'Automation Gains' },
              ].map((stat) => (
                <div key={stat.label} className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <span className="block font-display font-black text-2xl text-lime-400">{stat.val}</span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="/Naveen_Kumar_Resume.docx"
                download
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-lime-400 hover:bg-lime-300 text-slate-950 font-display font-black text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.4)]"
              >
                <Download size={14} />
                Download Resume
              </a>

              <a
                href="https://linkedin.com/in/naveenk80-developer"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase text-white hover:text-lime-400 transition-colors"
              >
                <span>Know More on LinkedIn</span>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={10} fill="currentColor" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
