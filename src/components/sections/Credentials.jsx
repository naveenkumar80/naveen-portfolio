import { NeumorphicCard } from '../ui/Neumorphism';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, CheckCircle2, Cloud, Cpu, Database, GraduationCap, MapPin, Sparkles } from 'lucide-react';

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    shortName: 'OCI AI Foundations Associate (2025)',
    issuer: 'Oracle',
    validity: 'Mar 2026 – Mar 2028',
    credentialId: '103028915OCI25AIFA',
    skills: ['Generative AI', 'Machine Learning', 'Cloud AI Services'],
    verified: true,
    highlight: true,
  },
  {
    title: 'OCI DevOps Professional (2025)',
    shortName: 'OCI DevOps Professional (2025)',
    issuer: 'Oracle',
    validity: 'Oct 2025 – Oct 2027',
    credentialId: '103028915OCI25DOPOCP',
    skills: ['Docker', 'CI/CD Pipelines', 'Cloud Deployment'],
    verified: true,
    highlight: true,
  },
  {
    title: 'Cloud Computing Certification',
    shortName: 'Cloud Computing',
    issuer: 'Specialized Cloud Program',
    validity: 'Certified',
    skills: ['Cloud Architecture', 'Infrastructure', 'Virtualization'],
    verified: false,
    highlight: false,
  },
  {
    title: 'Data & Analytics Certification',
    shortName: 'Data & Analytics',
    issuer: 'Analytics Program',
    validity: 'Certified',
    skills: ['EDA', 'Statistical Analysis', 'Business Intelligence'],
    verified: false,
    highlight: false,
  },
  {
    title: 'C++ Excellence Certification',
    shortName: 'C++ Excellence',
    issuer: 'Technical Excellence Program',
    validity: 'Certified',
    skills: ['OOP', 'Memory Management', 'Algorithms'],
    verified: false,
    highlight: false,
  },
];

export const Credentials = () => {
  return (
    <section id="certifications" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nm-bg shadow-nm-inset text-xs font-bold tracking-wider text-blue-600 uppercase mb-3">
          <BadgeCheck size={14} /> Official Credentials
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
          Certifications & Education
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          Industry-recognized Oracle Cloud Infrastructure certifications, specialized technical achievements, and engineering degree.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Certifications (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Award className="text-blue-500" size={22} />
              Certifications ({certifications.length})
            </h3>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Oracle Certified
            </span>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <NeumorphicCard
                  className={`p-6 transition-all ${
                    cert.highlight ? 'border border-blue-400/30' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800">
                          {cert.issuer}
                        </span>
                        {cert.verified && (
                          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                            <CheckCircle2 size={13} />
                            Verified Credential
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mt-2">{cert.title}</h4>
                      {cert.credentialId && (
                        <p className="text-xs font-mono text-gray-500 mt-1">
                          Credential ID: <span className="font-semibold text-gray-700">{cert.credentialId}</span>
                        </p>
                      )}
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-nm-bg shadow-nm-inset px-3 py-1.5 rounded-xl whitespace-nowrap self-start">
                      {cert.validity}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-gray-200/50">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium text-gray-600 px-2.5 py-1 rounded-lg bg-nm-bg shadow-nm-inset"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </NeumorphicCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Academic Highlights (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <GraduationCap className="text-blue-500" size={22} />
              Formal Education
            </h3>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Graduated
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <NeumorphicCard className="p-8 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-blue-100/60 blur-2xl pointer-events-none" />
              
              <div className="relative">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-nm-bg shadow-nm-inset text-blue-600">
                  Jul 2020 – May 2024
                </span>

                <h4 className="text-2xl font-extrabold text-gray-800 mt-4 leading-snug">
                  Bachelor of Technology
                </h4>
                <p className="text-base font-bold text-blue-600 mt-1">
                  Computer Engineering
                </p>

                <p className="text-base font-medium text-gray-700 mt-3">
                  Global Institute of Technology, Jaipur
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-1">
                  <MapPin size={13} className="text-blue-500" />
                  Jaipur, Rajasthan, India
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-nm-bg shadow-nm-inset flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Academic Score</p>
                    <p className="text-2xl font-extrabold text-blue-600 mt-0.5">8.04 / 10</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-nm-bg shadow-nm-flat text-gray-700">
                    First Class
                  </span>
                </div>

                <div className="mt-6 space-y-2">
                  <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Core Coursework & Foundations</p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Data Structures & Algorithms',
                      'Database Management Systems',
                      'Operating Systems & Linux',
                      'Computer Networks & Protocols',
                      'Object-Oriented Programming (OOP)',
                      'Software Engineering & System Design',
                    ].map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium text-gray-600 px-3 py-1 rounded-xl bg-nm-bg shadow-nm-inset"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </NeumorphicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
