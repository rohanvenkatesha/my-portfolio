'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { Briefcase, GraduationCap, ChevronRight, Clock, PenTool, Star, X } from 'lucide-react';

type TimelineEntryProps = {
  id: string;
  type: 'work' | 'education' | 'award';
  title: string;
  companyOrSchool: string;
  date: string;
  description: string | string[];
  workType?: 'Full-time' | 'Part-time' | 'Internship';
  logo?: string;
  imageUrl?: string;
  gpa?: string; // <-- Added GPA prop
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const modalContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalTransition = {
  duration: 0.3,
  ease: 'easeOut' as const,
};

const typeStyles = {
  work: {
    'Full-time': { icon: Briefcase, badgeColor: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20' },
    'Part-time': { icon: Clock, badgeColor: 'bg-purple-400/10 text-purple-300 border-purple-400/20' },
    Internship: { icon: PenTool, badgeColor: 'bg-yellow-400/10 text-yellow-300 border-yellow-400/20' },
  },
  education: {
    icon: GraduationCap,
  },
  award: {
    icon: Star,
  },
};

const TimelineEntry = ({
  id,
  type,
  title,
  companyOrSchool,
  date,
  description,
  workType,
  logo,
  imageUrl,
  gpa,
}: TimelineEntryProps) => {
  const Icon =
    type === 'education'
      ? typeStyles.education.icon
      : type === 'award'
      ? typeStyles.award.icon
      : typeStyles.work[workType || 'Full-time'].icon;

  const badgeStyle = type === 'work' ? typeStyles.work[workType || 'Full-time'].badgeColor : '';

  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageClick = () => {
    if (imageUrl) setIsImageOpen(true);
  };

  const handleCloseImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsImageOpen(false);
  };

  return (
    <>
      <motion.div
        layout
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative pl-12 pb-12"
      >
        {/* Vertical line & icon/logo */}
        <div className="absolute left-[18px] top-0 h-full w-0.5 bg-gradient-to-b from-purple-400/40 to-cyan-400/40"></div>
        <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 overflow-hidden p-1 shadow-md">
          {type === 'education' && logo ? (
            <Image src={logo} alt={`${companyOrSchool} logo`} width={24} height={24} className="object-contain" />
          ) : (
            <Icon className="h-5 w-5 text-cyan-300" />
          )}
        </div>

        {/* Main container */}
        <div
          className={`rounded-2xl bg-white/5 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 p-6
            ${type === 'award' && imageUrl ? 'flex flex-col md:flex-row md:items-start gap-6' : ''}`}
        >
          {/* Text block */}
          <div className={`${type === 'award' && imageUrl ? 'md:flex-1' : ''}`}>
            <div className="flex items-center space-x-4 mb-1">
              <p className="text-sm font-semibold text-slate-400">{date}</p>

              {/* GPA - only for education */}
              {type === 'education' && gpa && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm font-semibold text-cyan-400"
                >
                  {gpa}
                </motion.p>
              )}
            </div>

            <h3 className="text-xl font-bold text-white">{title}</h3>

            <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2 mb-2">
              <h4 className="text-md font-medium text-slate-300">{companyOrSchool}</h4>

              {/* WorkType badge */}
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

          {/* Image block */}
          {imageUrl && (
            <motion.div
              layoutId={`image-${id}`}
              onClick={handleImageClick}
              className="relative w-full md:w-60 aspect-video mx-auto md:mx-0 rounded-lg overflow-hidden border border-white/10 cursor-pointer transition-opacity hover:opacity-80 md:flex-none"
            >
              <Image src={imageUrl} alt={title} fill className="object-cover" />
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageOpen && imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={handleCloseImage}
          >
            <motion.div
              layoutId={`image-${id}`}
              className="relative max-w-full sm:max-w-4xl max-h-full rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              transition={modalTransition}
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Image
                src={imageUrl}
                alt={title}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-auto mx-auto"
              />
              <button
                onClick={handleCloseImage}
                className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
                aria-label="Close image modal"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TimelineEntry;
