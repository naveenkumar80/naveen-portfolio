export const CrownDoodle = ({ className = "w-8 h-8 text-lime-400" }) => (
  <svg viewBox="0 0 40 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 25L2 10L12 16L20 4L28 16L38 10L35 25H5Z" />
    <circle cx="2" cy="8" r="2" fill="currentColor" />
    <circle cx="20" cy="3" r="2" fill="currentColor" />
    <circle cx="38" cy="8" r="2" fill="currentColor" />
  </svg>
);

export const StarDoodle = ({ className = "w-6 h-6 text-yellow-400" }) => (
  <svg viewBox="0 0 30 30" fill="currentColor" className={className}>
    <path d="M15 0L17.5 11L28 15L17.5 19L15 30L12.5 19L2 15L12.5 11L15 0Z" />
  </svg>
);

export const LightningDoodle = ({ className = "w-6 h-8 text-lime-400" }) => (
  <svg viewBox="0 0 24 36" fill="currentColor" className={className}>
    <path d="M14 0L2 18H12L10 36L22 15H12L14 0Z" />
  </svg>
);

export const SmileyDoodle = ({ className = "w-8 h-8 text-lime-400" }) => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className}>
    <circle cx="18" cy="18" r="16" />
    <circle cx="12" cy="14" r="2" fill="currentColor" />
    <circle cx="24" cy="14" r="2" fill="currentColor" />
    <path d="M11 22C13 26 23 26 25 22" />
  </svg>
);

export const SquiggleDoodle = ({ className = "w-16 h-6 text-purple-400" }) => (
  <svg viewBox="0 0 80 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 14C12 4 18 20 26 12C34 4 42 20 50 12C58 4 66 18 76 10" />
  </svg>
);

export const HandArrowDoodle = ({ className = "w-12 h-12 text-white" }) => (
  <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 8 C 18 20, 24 32, 40 38" />
    <path d="M28 40 L 41 39 L 39 26" />
  </svg>
);

export const SpeechBubble = ({ children, className = "" }) => (
  <div className={`relative px-4 py-2.5 rounded-2xl bg-cyan-400 text-slate-950 font-display font-extrabold text-xs tracking-wider uppercase shadow-[0_8px_20px_rgba(6,182,212,0.4)] ${className}`}>
    {children}
    <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-cyan-400"></div>
  </div>
);

export const ClapperDoodle = ({ className = "w-10 h-10 text-white" }) => (
  <svg viewBox="0 0 36 36" fill="currentColor" className={className}>
    <path d="M4 10h28v20H4z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
    <path d="M4 6h28v4H4z" fill="#0f172a" />
    <polygon points="15,15 24,20 15,25" fill="#38bdf8" />
  </svg>
);
