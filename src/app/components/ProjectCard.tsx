'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { type Project } from '@/lib/projects';

// --- COLOR LOGIC ---
// 1. Define a color palette of Tailwind classes
const colorPalette = [
  { bg: 'bg-cyan-400/10', text: 'text-cyan-300', border: 'border-cyan-400/30' },
  { bg: 'bg-green-400/10', text: 'text-green-300', border: 'border-green-400/30' },
  { bg: 'bg-purple-400/10', text: 'text-purple-300', border: 'border-purple-400/30' },
  { bg: 'bg-yellow-400/10', text: 'text-yellow-300', border: 'border-yellow-400/30' },
  { bg: 'bg-pink-400/10', text: 'text-pink-300', border: 'border-pink-400/30' },
];

// --- LOCAL GITHUB ICON COMPONENT ---
// Define the icon directly in this file
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// 2. Create a function to pick a color based on the tech name
const getColorFromTech = (tech: string) => {
  let hash = 0;
  for (let i = 0; i < tech.length; i++) {
    hash = tech.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash % colorPalette.length);
  return colorPalette[index];
};


// --- COMPONENT ---
type Props = {
  project: Project;
};

const statusStyle = {
  Ongoing: "border-yellow-400/50 bg-yellow-400/10 text-yellow-300",
  Completed: "border-green-400/50 bg-green-400/10 text-green-300",
  Experiment: "border-purple-400/50 bg-purple-400/10 text-purple-300",
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = ({ project }: Props) => {
const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div variants={cardVariants}>
      <div className="group relative p-8 h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-600/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-50">{project.title}</h3>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${statusStyle[project.status]}`}>{project.status}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
          </div>
          <div className="mt-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => {
                // 3. Get the color for the current tech
                const color = getColorFromTech(tech);
                return (
                  <span 
                    key={tech} 
                    // 4. Apply the dynamic color classes
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${color.bg} ${color.text} ${color.border}`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
            {/* --- NEW GITHUB LINK DESIGN --- */}
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative inline-block px-4 py-2" // Container for positioning
            >
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    layoutId="pill"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute inset-0 bg-white/10 rounded-full"
                    style={{ borderRadius: 9999 }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10 flex items-center gap-2 font-semibold text-slate-200">
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;