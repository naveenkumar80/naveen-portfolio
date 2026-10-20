import { Play, Sparkles, Star, ExternalLink } from 'lucide-react';

export const VibrantFlagship = () => {
  return (
    <section id="vibrant-flagship" className="py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <div className="p-8 sm:p-12 rounded-[36px] bg-[#121620] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-purple-400 font-display font-black text-xl uppercase tracking-wider">
              <Star size={20} fill="currentColor" />
              <span>FLAGSHIP EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
              Heritage Kits — 3D & Cinematic Web
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              An immersive storytelling experience built with Next.js, Three.js, and a custom scroll-driven video scrubbing engine with Blob asset preloading.
            </p>

            <div className="pt-2">
              <a
                href="https://heritage-kits.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-display font-black uppercase text-lime-400 hover:text-lime-300 group tracking-wider transition-colors"
              >
                <span>Explore Live Demo</span>
                <span className="w-7 h-7 rounded-full bg-lime-400/20 group-hover:bg-lime-400/40 flex items-center justify-center transition-colors">
                  <Play size={12} fill="currentColor" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Banner Preview */}
          <div className="lg:col-span-7">
            <a
              href="https://heritage-kits.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group block relative rounded-3xl overflow-hidden border-2 border-white/15 aspect-video shadow-2xl"
            >
              <img
                src="/images/showreel_banner.jpg"
                alt="Heritage Kits 3D Cinematic Experience Showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

              {/* Centered Glowing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.7)] group-hover:scale-110 transition-transform">
                  <Play size={26} fill="currentColor" className="ml-1" />
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs font-display font-bold text-white border border-white/20">
                Next.js · Three.js · React 19 · Video Scrubbing
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
