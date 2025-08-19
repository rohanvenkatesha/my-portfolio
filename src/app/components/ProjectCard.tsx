'use client';

// import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { type Project } from '@/lib/projects';
import Image from 'next/image';


const colorPalette = [
  { bg: 'bg-cyan-400/10', text: 'text-cyan-300', border: 'border-cyan-400/30' },
  { bg: 'bg-emerald-400/10', text: 'text-emerald-300', border: 'border-emerald-400/30' },
  { bg: 'bg-indigo-400/10', text: 'text-indigo-300', border: 'border-indigo-400/30' },
  { bg: 'bg-amber-400/10', text: 'text-amber-300', border: 'border-amber-400/30' },
  { bg: 'bg-pink-400/10', text: 'text-pink-300', border: 'border-pink-400/30' },
];

const getColorFromTech = (tech: string) => {
  let hash = 0;
  for (let i = 0; i < tech.length; i++) {
    hash = tech.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash % colorPalette.length);
  return colorPalette[index];
};


// --- ICONS ---
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
);

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M12 4c-2.93 0-5.52 1.64-6.85 4H18.85C17.52 5.64 14.93 4 12 4zm0 16c2.93 0 5.52-1.64 6.85-4H5.15C6.48 18.36 9.07 20 12 20z"/><path d="M4.15 10h15.7c.21-.64.35-1.31.35-2 0-.69-.14-1.36-.35-2H4.15c-.21.64-.35 1.31-.35 2 0 .69.14 1.36.35 2z"/></svg>
);

// --- STYLING LOGIC ---
const statusStyles = {
  Ongoing: "border-amber-400/50 bg-amber-400/10 text-amber-300",
  Completed: "border-emerald-400/50 bg-emerald-400/10 text-emerald-300",
  Experiment: "border-indigo-400/50 bg-indigo-400/10 text-indigo-300",
};

const categoryStyles = {
  'Web App': 'text-cyan-300',
  'AI/ML': 'text-pink-300',
  'DevOps': 'text-amber-300',
  'CLI Tool': 'text-emerald-300',
};

// --- ANIMATION VARIANTS ---
// Variants for each individual card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

// Variants for the container to orchestrate staggered animations
// const containerVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };


// --- COMPONENT ---
type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <motion.div 
      variants={cardVariants}
      className="group w-full h-full"
    >
      <div className="relative flex flex-col h-full rounded-2xl bg-zinc-950 border border-zinc-800 p-2 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30">
        
        <div className="grid grid-cols-2 grid-rows-4 gap-2 flex-grow">

          <div className="relative col-span-2 row-span-2 flex flex-col justify-end rounded-lg bg-zinc-900 p-4 overflow-hidden">
            <Image
  src={project.image || "https://placehold.co/600x400/0f172a/334155?text=Project"}
  alt={project.title}
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-300"
  onError={(e) => {
    (e.currentTarget as HTMLImageElement).src =
      "https://placehold.co/600x400/0f172a/334155?text=Image+Error"
  }}
/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-zinc-50">{project.title}</h3>
                <div className="flex items-center gap-2">
                   <span className={`text-xs font-semibold ${categoryStyles[project.category]}`}>{project.category}</span>
                   <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusStyles[project.status]}`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-1 flex items-center rounded-lg bg-zinc-900 p-4">
            <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
          </div>

          <div className="col-span-2 row-span-1 rounded-lg bg-zinc-900 p-4 overflow-hidden">
             <p className="text-xs font-semibold text-zinc-400 mb-3">Tech Stack</p>
             <div className="flex flex-wrap gap-2">
               {project.stack.map((tech) => {
                 const color = getColorFromTech(tech);
                 return (
                   <span 
                     key={tech} 
                     className={`text-xs font-medium px-2 py-1 rounded-full ${color.bg} ${color.text} ${color.border}`}
                   >
                     {tech}
                   </span>
                 );
               })}
             </div>
          </div>
        </div>

        {/* --- ACTION BUTTONS (NEW DESIGN) --- */}
        <div className="flex items-center gap-2 mt-2">
            <a 
              href={project.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 group/button flex items-center justify-center gap-2 rounded-md bg-zinc-900 p-2 text-sm font-semibold text-zinc-200 transition-colors duration-300 hover:bg-zinc-800"
            >
              <GitHubIcon className="w-4 h-4 text-zinc-400 transition-colors duration-300 group-hover/button:text-white" />
              GitHub
            </a>
          
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 group/button flex items-center justify-center gap-2 rounded-md bg-zinc-900 p-2 text-sm font-semibold text-zinc-200 transition-colors duration-300 hover:bg-zinc-800"
            >
              <GlobeIcon className="w-4 h-4 text-zinc-400 transition-colors duration-300 group-hover/button:text-white" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
