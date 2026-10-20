import { VibrantNav } from './VibrantNav';
import { VibrantHero } from './VibrantHero';
import { VibrantFlagship } from './VibrantFlagship';
import { VibrantProjects } from './VibrantProjects';
import { VibrantSkills } from './VibrantSkills';
import { VibrantAbout } from './VibrantAbout';
import { VibrantExperience } from './VibrantExperience';
import { VibrantCredentials } from './VibrantCredentials';
import { VibrantContact } from './VibrantContact';

export const VibrantPortfolio = ({ currentTheme, onToggleTheme }) => {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-gray-200 selection:bg-lime-400 selection:text-slate-950 font-sans relative overflow-x-hidden">
      <VibrantNav currentTheme={currentTheme} onToggleTheme={onToggleTheme} />
      <main>
        <VibrantHero />
        <VibrantFlagship />
        <VibrantProjects />
        <VibrantSkills />
        <VibrantAbout />
        <VibrantExperience />
        <VibrantCredentials />
        <VibrantContact />
      </main>
    </div>
  );
};
