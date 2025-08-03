'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RideCard from '../components/RideCard';
import { rides, type Ride } from '@/lib/rides';
import BodyClassName from '../components/BodyClassName';

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

  const filteredRides = filter === 'All' ? rides : rides.filter(ride => ride.category === filter);

  const filters: ('All' | Ride['category'])[] = ['All', 'Epic', 'Coastal', 'Cultural'];

  return (
    <>
    <BodyClassName className="bg-rides" />
      <Header />
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
          <div className="flex justify-center items-center gap-2 md:gap-4 mb-12 p-2 rounded-full max-w-md mx-auto">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`w-full text-sm md:text-base px-4 py-2 rounded-full transition-colors duration-300 ${
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
            key={filter} // Re-trigger animation on filter change
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
      <Footer />
    </>
  );
};

export default RidesPage;