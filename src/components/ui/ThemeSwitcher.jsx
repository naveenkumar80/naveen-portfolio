import { Palette, Sparkles, Layers } from 'lucide-react';

export const ThemeSwitcher = ({ currentTheme, onToggleTheme }) => {
  const isVibrant = currentTheme === 'vibrant';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onToggleTheme}
        className={`group relative flex items-center gap-3 px-5 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl ${
          isVibrant
            ? 'bg-gradient-to-r from-purple-600 to-lime-500 text-slate-950 shadow-[0_0_25px_rgba(163,230,53,0.5)] border-2 border-white/20'
            : 'bg-nm-bg text-blue-600 shadow-nm-flat hover:shadow-nm-inset border border-white/60'
        }`}
        aria-label="Toggle Design Theme"
      >
        <span className="p-1 rounded-full bg-black/10 flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
          <Palette size={16} className={isVibrant ? 'text-slate-950' : 'text-blue-500'} />
        </span>

        <span className="flex flex-col text-left leading-tight">
          <span className="text-[10px] opacity-75 font-medium normal-case">
            Switch Style ({isVibrant ? '2 of 2' : '1 of 2'}):
          </span>
          <span className="font-extrabold">
            {isVibrant ? '🎨 Cyber Comic' : '💎 Clean Neumorphic'}
          </span>
        </span>

        <span className={`w-2.5 h-2.5 rounded-full ${isVibrant ? 'bg-slate-950' : 'bg-blue-500'} animate-pulse`} />
      </button>
    </div>
  );
};
