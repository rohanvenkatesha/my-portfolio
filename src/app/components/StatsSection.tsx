
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { motion, animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState} from 'react';
import { Briefcase, Code, Globe, Milestone, GitCommit, Coffee} from 'lucide-react';

// --- COLOR STYLES ---
const colorStyles: { [key: string]: { text: string; bg: string; gradientFrom: string; gradientTo: string; solidBg: string; } } = {
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/20', gradientFrom: 'from-cyan-400', gradientTo: 'to-cyan-200', solidBg: 'bg-cyan-500' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-500/20', gradientFrom: 'from-purple-400', gradientTo: 'to-purple-200', solidBg: 'bg-purple-500' },
  green: { text: 'text-green-400', bg: 'bg-green-500/20', gradientFrom: 'from-green-400', gradientTo: 'to-green-200', solidBg: 'bg-green-500' },
  red: { text: 'text-red-400', bg: 'bg-red-500/20', gradientFrom: 'from-red-400', gradientTo: 'to-red-200', solidBg: 'bg-red-500' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/20', gradientFrom: 'from-amber-400', gradientTo: 'to-amber-200', solidBg: 'bg-amber-500' },
  blue: { text: 'text-blue-400', bg: 'bg-blue-500/20', gradientFrom: 'from-blue-400', gradientTo: 'to-blue-200', solidBg: 'bg-blue-500' },
  yellow: { text: 'text-yellow-400', bg: 'bg-yellow-500/20', gradientFrom: 'from-yellow-400', gradientTo: 'to-yellow-200', solidBg: 'bg-yellow-500' },
};

// --- DATA ---
const stats = [
  { icon: Briefcase, label: 'Years of Experience', value: 6, color: 'cyan' },
  { icon: Code, label: 'Projects Built', value: 30, color: 'purple' },
  { icon: GitCommit, label: 'GitHub Commits', value: 1500, color: 'amber' },
  { icon: Globe, label: 'Countries Travelled', value: 2, color: 'green' },
  { icon: Milestone, label: 'Miles Covered', value: 20000, color: 'red' },
  { icon: Coffee, label: 'Cups of Coffee', value: 5000, color: 'blue' },
];

const milestones = [
  { year: '2015 - 2019', event: 'Completed Bachelors in Computer Science', color: 'cyan' },
  { year: '2017', event: 'Took first solo bike trip', color: 'yellow' },
  { year: '2018', event: 'Started first software internship', color: 'purple' },
  { year: '2019', event: 'Began corporate career as Software Engineer', color: 'green' },
  { year: '2023', event: 'Moved to USA for Master’s studies', color: 'red' },
  { year: '2024', event: 'Backpacked across South-West India', color: 'amber' },
  { year: '2025', event: 'Graduated with Masters in Computer Science', color: 'blue' },
];

// --- COMPONENTS ---

// Vertical Milestone Timeline (for Mobile)
const VerticalMilestoneTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative w-full max-w-xs mx-auto p-4 h-full flex flex-col justify-center">
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 bg-zinc-800"
        initial={{ height: 0 }}
        animate={{ height: inView ? '100%' : 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
      />
      <div className="relative flex flex-col items-start gap-12">
        {milestones.map((milestone, index) => {
          const styles = colorStyles[milestone.color];
          return (
            <motion.div 
              key={index}
              className="flex items-center w-full relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.3, ease: 'easeOut' }}
            >
              <div className={`absolute left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full ${styles.solidBg} border-2 border-slate-900`}></div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8 order-2'}`}>
                <p className={`font-bold text-lg ${styles.text}`}>{milestone.year}</p>
                <p className="text-slate-400 text-sm">{milestone.event}</p>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
};

// Horizontal Milestone Timeline (for Desktop) - CORRECTED
const HorizontalMilestoneTimeline = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
  
    return (
      <div ref={ref} className="relative w-full p-4 flex items-center justify-center my-12">
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-zinc-800"
          initial={{ width: 0 }}
          animate={{ width: inView ? '100%' : 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
        />
        <div className="relative flex justify-between w-full items-center">
          {milestones.map((milestone, index) => {
            const styles = colorStyles[milestone.color];
            return (
              <motion.div 
                key={index}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2, ease: 'easeOut' }}
              >
                {/* Text Above */}
                <div className={`text-center w-32 pb-4 ${index % 2 === 0 ? 'visible' : 'invisible'}`}>
                  <p className={`font-bold text-lg ${styles.text}`}>{milestone.year}</p>
                  <p className="text-slate-400 text-sm">{milestone.event}</p>
                </div>

                {/* Dot */}
                <div className={`z-10 w-4 h-4 rounded-full ${styles.solidBg} border-2 border-slate-900`}></div>

                {/* Text Below */}
                <div className={`text-center w-32 pt-4 ${index % 2 !== 0 ? 'visible' : 'invisible'}`}>
                  <p className={`font-bold text-lg ${styles.text}`}>{milestone.year}</p>
                  <p className="text-slate-400 text-sm">{milestone.event}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    );
  };

// Stat Item
const StatItem = ({ icon: Icon, label, value, color }: any) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const styles = colorStyles[color];

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
      className="flex flex-col items-center text-center p-4 w-40"
    >
      <div className={`w-14 h-14 flex items-center justify-center rounded-full mb-3 shadow-lg ${styles.text} ${styles.bg}`}>
        <Icon className="w-7 h-7" />
      </div>
      <div className={`text-4xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r ${styles.gradientFrom} ${styles.gradientTo}`}>
        {displayValue.toLocaleString()}+
      </div>
      <div className="text-slate-300 mt-2 font-medium text-sm">{label}</div>
    </motion.div>
  );
};

// Stats Section
const StatsSection = () => {
  return (
    <motion.section
      className="py-24 px-4"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h2
            className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
          >
            Highlights & Stats
          </motion.h2>
          <motion.p
            className="text-slate-400 mt-3 max-w-xl mx-auto"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } } }}
          >
            A quick look at my professional journey and achievements.
          </motion.p>
        </motion.div>

        {/* Responsive Timeline */}
        <div className="hidden lg:block w-full"><HorizontalMilestoneTimeline /></div>
        <div className="block lg:hidden"><VerticalMilestoneTimeline /></div>

        {/* Stats Grid */}
        <motion.div
          className="flex flex-wrap gap-6 justify-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              <StatItem {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
