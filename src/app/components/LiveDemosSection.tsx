'use client';

import { useState } from 'react'; // Import useState
import { motion } from 'framer-motion';
import Link from 'next/link';
import { demos } from '@/lib/demos-data';

const INITIAL_SHOW = 3;

const LiveDemosSection = () => {
  // State to track the number of visible demos
  const [visibleCount, setVisibleCount] = useState(INITIAL_SHOW);

  // Slice the array to only show the visible demos
  const demosToShow = demos.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(demos.length); // Show all demos
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Interactive Demos
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Go beyond static descriptions. I build functional, full-stack applications that you can test and interact with right now.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {/* Map over the sliced array */}
          {demosToShow.map((demo) => (
            <Link 
              href={demo.href} 
              key={demo.title}
              className="group block p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 w-full sm:w-auto md:max-w-xs"
            >
              <div className="flex items-center gap-4">
                <demo.icon className="w-8 h-8 text-cyan-300" />
                <h3 className="text-xl font-bold text-white">{demo.title}</h3>
              </div>
              <p className="text-slate-400 mt-3 text-sm">{demo.description}</p>
            </Link>
          ))}
        </div>

        {/* Conditionally render the "Load More" button */}
        {visibleCount < demos.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="btn btn-secondary"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default LiveDemosSection;