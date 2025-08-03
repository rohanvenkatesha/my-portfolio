'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { skillsData } from '@/lib/skills-data';

const SkillsSection = () => {
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="skills" className="my-24">
      <h2 className="text-center text-4xl font-bold mb-16 gradient-text">Core Competencies</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((category) => (
          <motion.div
            key={category.name}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 bg-white/5 rounded-2xl border border-white/10 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <category.icon className="w-8 h-8 text-cyan-300" />
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
            </div>
            <hr className="border-t border-white/20 mb-6" />
            <div className="flex flex-wrap gap-2">
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
    </section>
  );
};

export default SkillsSection;
