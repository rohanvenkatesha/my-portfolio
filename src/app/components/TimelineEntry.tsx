'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Briefcase, GraduationCap, ChevronRight, Clock, PenTool } from 'lucide-react';

type TimelineEntryProps = {
  type: 'work' | 'education';
  title: string;
  companyOrSchool: string;
  date: string;
  description: string | string[];
  workType?: 'Full-time' | 'Part-time' | 'Internship';
  logo?: string;
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const typeStyles = {
  work: {
    'Full-time': { icon: Briefcase, badgeColor: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20' },
    'Part-time': { icon: Clock, badgeColor: 'bg-purple-400/10 text-purple-300 border-purple-400/20' },
    'Internship': { icon: PenTool, badgeColor: 'bg-yellow-400/10 text-yellow-300 border-yellow-400/20' },
  },
  education: {
    icon: GraduationCap,
  },
};

const TimelineEntry = ({ type, title, companyOrSchool, date, description, workType, logo }: TimelineEntryProps) => {
  const Icon = type === 'education' 
    ? typeStyles.education.icon 
    : typeStyles.work[workType || 'Full-time'].icon;
  
  const badgeStyle = type === 'work' ? typeStyles.work[workType || 'Full-time'].badgeColor : '';

  return (
    <motion.div
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative pl-12 pb-12"
    >
      {/* Vertical line */}
      <div className="absolute left-[18px] top-0 h-full w-0.5 bg-gradient-to-b from-purple-400/40 to-cyan-400/40"></div>
      
      {/* Icon / Logo Circle */}
      <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 overflow-hidden p-1 shadow-md">
        {type === 'education' && logo ? (
          <Image 
            src={logo} 
            alt={`${companyOrSchool} logo`}
            width={24}
            height={24}
            className="object-contain h-full w-full"
          />
        ) : (
          <Icon className="h-5 w-5 text-cyan-300" />
        )}
      </div>

      {/* Glassmorphic Card */}
      <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 p-6">
        {/* Date */}
        <p className="text-sm font-semibold text-slate-400 mb-1">{date}</p>

        {/* Title */}
        <h3 className="text-xl font-bold text-white">{title}</h3>
        
        {/* Company / School + Badge */}
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2 mb-4">
          <h4 className="text-md font-medium text-slate-300">{companyOrSchool}</h4>
          {type === 'work' && workType && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeStyle}`}>
              {workType}
            </span>
          )}
        </div>

        {/* Description */}
        {Array.isArray(description) ? (
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                <ChevronRight className="w-4 h-4 mt-1 text-cyan-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineEntry;
