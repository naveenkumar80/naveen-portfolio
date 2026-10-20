import { Award, BadgeCheck, CheckCircle2, GraduationCap, MapPin } from 'lucide-react';
import { SquiggleDoodle } from './Doodles';

export const VibrantCredentials = () => {
  return (
    <section id="vibrant-credentials" className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          CREDENTIALS
        </h2>
        <div className="animate-wiggle">
          <SquiggleDoodle className="w-16 h-6 text-purple-400" />
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Certifications (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-display font-extrabold text-xl text-white flex items-center gap-2">
              <Award className="text-lime-400" size={22} />
              Oracle Cloud Certifications
            </h3>
            <span className="text-xs font-display font-bold text-lime-400 uppercase tracking-wider">
              Verified
            </span>
          </div>

          {/* OCI AI Foundations */}
          <div className="p-6 rounded-3xl bg-[#121620] border-2 border-purple-500/40 hover:border-purple-400 transition-all shadow-lg">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-display font-black px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 uppercase">
                  Oracle Certified
                </span>
                <h4 className="text-xl font-display font-extrabold text-white mt-2">
                  OCI 2025 Certified AI Foundations Associate
                </h4>
                <p className="text-xs font-mono text-gray-400 mt-1">
                  Credential ID: <span className="text-lime-400 font-semibold">103028915OCI25AIFA</span>
                </p>
              </div>
              <span className="text-xs font-display font-bold text-gray-300 bg-white/10 px-3 py-1 rounded-full shrink-0">
                2026 – 2028
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/10">
              {['Generative AI', 'Machine Learning', 'Cloud AI Services'].map((skill) => (
                <span key={skill} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/40 text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* OCI DevOps Professional */}
          <div className="p-6 rounded-3xl bg-[#121620] border-2 border-lime-500/40 hover:border-lime-400 transition-all shadow-lg">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-display font-black px-2.5 py-0.5 rounded-md bg-lime-500/20 text-lime-300 uppercase">
                  Oracle Certified
                </span>
                <h4 className="text-xl font-display font-extrabold text-white mt-2">
                  OCI DevOps Professional (2025)
                </h4>
                <p className="text-xs font-mono text-gray-400 mt-1">
                  Credential ID: <span className="text-lime-400 font-semibold">103028915OCI25DOPOCP</span>
                </p>
              </div>
              <span className="text-xs font-display font-bold text-gray-300 bg-white/10 px-3 py-1 rounded-full shrink-0">
                2025 – 2027
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/10">
              {['Docker Containers', 'CI/CD Pipelines', 'Cloud Deployment'].map((skill) => (
                <span key={skill} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/40 text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-display font-extrabold text-xl text-white flex items-center gap-2">
              <GraduationCap className="text-cyan-400" size={22} />
              Education
            </h3>
            <span className="text-xs font-display font-bold text-gray-400 uppercase tracking-wider">
              Degree
            </span>
          </div>

          <div className="p-8 rounded-3xl bg-[#121620] border-2 border-cyan-500/40 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />

            <span className="text-xs font-display font-black px-3 py-1 rounded-full bg-cyan-400 text-slate-950 uppercase">
              2020 – 2024
            </span>

            <h4 className="text-2xl font-display font-black text-white mt-4">
              Bachelor of Technology
            </h4>
            <p className="text-base font-display font-bold text-cyan-400 mt-1">
              Computer Engineering
            </p>

            <p className="text-sm font-medium text-gray-300 mt-3">
              Global Institute of Technology, Jaipur
            </p>
            <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
              <MapPin size={12} className="text-cyan-400" />
              Jaipur, Rajasthan, India
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Graduation CGPA</p>
                <p className="text-3xl font-display font-black text-lime-400 mt-0.5">8.04 / 10</p>
              </div>
              <span className="text-xs font-display font-extrabold px-3 py-1 rounded-xl bg-lime-400/20 text-lime-300">
                First Class
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
