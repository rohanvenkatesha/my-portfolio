'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects, type Project } from '@/lib/projects';
import BodyClassName from '../components/BodyClassName';

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

  const filters: ('All' | Project['category'])[] = ['All', 'Web App', 'CLI Tool'];

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
      <Header />
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
          <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 mb-12 p-2 rounded-full max-w-2xl mx-auto">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f);
                  setVisibleCount(INITIAL_LOAD); // Reset count on filter change
                }}
                className={`text-sm md:text-base px-4 py-2 rounded-full transition-colors duration-300 ${
                  filter === f
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold shadow-md' 
                    : 'text-slate-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {f}
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
                className="bg-white/10 text-white font-semibold py-3 px-8 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;