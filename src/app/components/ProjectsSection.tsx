'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/projects'; // Import from our new file

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const ProjectsSection = () => {
  // Filter for only featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl mb-4 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400">Featured Projects</h2>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto">A selection of my work that I am most proud of.</p>
      </div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

      {/* Add a link to the full project archive */}
      <div className="mt-16 text-center">
        <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-cyan-300 group">
          View All Projects
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;