'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { demos } from '@/lib/demos-data';

const INITIAL_SHOW = 3;

const LiveDemosSection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_SHOW);
  const demosToShow = demos.slice(0, visibleCount);

  const handleLoadMore = () => setVisibleCount(demos.length);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="py-24"
      id="live-demos"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Interactive Demos
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Go beyond static descriptions. I build functional, full-stack applications that you can test and interact with right now.
          </p>
        </div>

        {/* Animated stagger for cards */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {demosToShow.map((demo) => (
            <motion.div
              key={demo.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto md:max-w-xs"
            >
              <Link
                href={demo.href}
                className="group block p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:border-cyan-400/50"
              >
                <div className="flex items-center gap-4">
                  <demo.icon className="w-8 h-8 text-cyan-300 group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                </div>
                <p className="text-slate-400 mt-3 text-sm">{demo.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {visibleCount < demos.length && (
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default LiveDemosSection;
