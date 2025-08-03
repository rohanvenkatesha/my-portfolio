'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import RideCard from '../components/RideCard';
import { rides, type Ride } from '@/lib/rides';
import BodyClassName from '../components/BodyClassName';
import { List, Mountain, Waves, Sun } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const RidesPage = () => {
  const [filter, setFilter] = useState<'All' | Ride['category']>('All');

  const filters = [
    { name: 'All' as const, icon: List },
    { name: 'Epic' as const, icon: Mountain },
    { name: 'Coastal' as const, icon: Waves },
    { name: 'Cultural' as const, icon: Sun },
  ];

  const filteredRides = filter === 'All' ? rides : rides.filter(ride => ride.category === filter);

  return (
    <>
      <BodyClassName className="bg-rides" />
      <main className="px-4 md:px-8 max-w-7xl mx-auto">
        {/* --- HERO SECTION --- */}
        <section className="text-center my-16 md:my-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400"
          >
            Stories from the Road
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Each journey is a collection of moments, challenges, and discoveries. Here are some of my favorites.
          </motion.p>
        </section>

        {/* --- FILTERS & RIDES GRID --- */}
        <section>
          {/* --- NEW SEGMENTED CONTROL SWITCH --- */}
          <div className="relative flex w-full max-w-md mx-auto items-center justify-between rounded-full bg-white/5 border border-white/10 p-1 mb-12">
            {filters.map(f => (
              <button
                key={f.name}
                onClick={() => setFilter(f.name)}
                className={`relative w-full rounded-full py-2.5 text-sm font-medium transition-colors ${
                  filter === f.name ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {/* This is the animated pill */}
                {filter === f.name && (
                  <motion.div
                    layoutId="active-ride-filter"
                    className="absolute inset-0 bg-gradient-to-r from-[#3D7FF3] to-[#6F49F8]"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* This is the content (icon and text) */}
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
            {filteredRides.map(ride => (
              <RideCard key={ride.slug} ride={ride} />
            ))}
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default RidesPage;