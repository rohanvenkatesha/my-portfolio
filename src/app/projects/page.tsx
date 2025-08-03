'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects, type Project } from '@/lib/projects';
import BodyClassName from '../components/BodyClassName';
// Import icons for the new filters
import { List, AppWindow, BrainCircuit, CloudCog, SquareTerminal } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const INITIAL_LOAD = 6;
const LOAD_MORE_COUNT = 3;

const ProjectsPage = () => {
  const [filter, setFilter] = useState<'All' | Project['category']>('All');
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);

  // Updated filters to be an array of objects with icons
  const filters = [
    { name: 'All' as const, icon: List },
    { name: 'Web App' as const, icon: AppWindow },
    { name: 'AI/ML' as const, icon: BrainCircuit },
    { name: 'DevOps' as const, icon: CloudCog },
    { name: 'CLI Tool' as const, icon: SquareTerminal },
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'All' || project.category === filter
  );

  const projectsToShow = filteredProjects.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + LOAD_MORE_COUNT);
  };

  return (
    <>
      <BodyClassName className="bg-projects" />
      <main className="px-4 md:px-8 max-w-7xl mx-auto">
        <section className="text-center my-16 md:my-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400"
          >
            Project Archive
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive list of my work. Use the filters to explore different types of projects.
          </motion.p>
        </section>

        <section>
          {/* --- NEW SEGMENTED CONTROL SWITCH --- */}
          <div className="relative flex w-full max-w-2xl mx-auto items-center justify-between rounded-full bg-white/5 border border-white/10 p-1 mb-12">
            {filters.map(f => (
              <button
                key={f.name}
                onClick={() => {
                  setFilter(f.name);
                  setVisibleCount(INITIAL_LOAD);
                }}
                className={`relative w-full rounded-full py-2.5 text-sm font-medium transition-colors ${
                  filter === f.name ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {filter === f.name && (
                  <motion.div
                    layoutId="active-project-filter"
                    className="absolute inset-0 bg-gradient-to-r from-[#3D7FF3] to-[#6F49F8]"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <f.icon size={16} />
                  <span>{f.name}</span>
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsToShow.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>

          {visibleCount < filteredProjects.length && (
            <div className="mt-16 text-center">
              <button
                onClick={loadMore}
                className="btn btn-secondary"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default ProjectsPage;