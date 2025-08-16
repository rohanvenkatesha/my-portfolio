'use client';

import { motion, animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Code, Globe, Milestone } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Years of Experience', value: 6, color: 'cyan' },
  { icon: Code, label: 'Projects Built', value: 30, color: 'purple' },
  { icon: Globe, label: 'Countries Travelled', value: 2, color: 'green' },
  { icon: Milestone, label: 'Miles Covered', value: 20000, color: 'red' },
];

const StatItem = ({ icon: Icon, label, value, color }: any) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (v) => setDisplayValue(Math.floor(v)),
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      // Updated styling for a cleaner look without borders or background on individual items
      className="flex flex-col items-center text-center p-6 w-48"
    >
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full mb-3 text-${color}-400 bg-${color}-500/20 shadow-lg`}
      >
        <Icon className="w-7 h-7" />
      </div>
      <div
        className={`text-4xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-${color}-400 to-${color}-200`}
      >
        {displayValue}+
      </div>
      <div className="text-slate-300 mt-2 font-medium">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      // Updated the background to a simple, clean gradient to match the portfolio
       className="py-16 px-4 bg-white/2 flex flex-col items-center justify-center"
    >
      {/* Updated heading to match the Featured Projects style */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400">Highlights & Stats</h2>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto">A quick look at my professional journey and achievements.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </motion.section>
  );
};

export default StatsSection;
