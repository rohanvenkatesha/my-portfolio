'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { skillsData } from '@/lib/skills-data';

const SkillsSection = () => {
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 py-8">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Core Competencies
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A look at the languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>
        
        {/* Changed gap-8 to separate gap-x-8 and gap-y-20 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
          {skillsData.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative p-8 pt-16 bg-white/5 rounded-2xl border border-white/10 flex flex-col"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-900 border border-white/10">
                  <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 opacity-30 blur-lg"></div>
                  <category.icon className="w-10 h-10 text-white relative z-10" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-6">{category.name}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-2 bg-white/10 text-slate-300 px-3 py-1.5 rounded-full border border-white/10"
                  >
                    <Image
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;