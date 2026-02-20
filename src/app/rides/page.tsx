'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import RideCard from '../components/RideCard';
import { rides, type Ride } from '@/lib/rides';
import BodyClassName from '../components/BodyClassName';
import { List, Mountain, Waves, Sun } from 'lucide-react';
import QuoteSection from '../components/QuoteSection';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const RidesPage = () => {
  const [filter, setFilter] = useState<'All' | Ride['category']>('All');

  const filters = [
    { name: 'All' as const, icon: List },
    { name: 'Epic' as const, icon: Mountain },
    { name: 'Coastal' as const, icon: Waves },
    { name: 'Cultural' as const, icon: Sun },
  ];

  const filteredRides =
    filter === 'All' ? rides : rides.filter((ride) => ride.category === filter);

  return (
    <>
      <BodyClassName className="bg-black" />
      <main className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Filters */}
<section>

  <QuoteSection/>
  <div className="relative flex w-full max-w-xs sm:max-w-md mx-auto items-center justify-between rounded-full bg-white/5 border border-white/10 p-1 mb-12">
    {filters.map((f) => (
      <button
        key={f.name}
        onClick={() => setFilter(f.name)}
        className={`relative w-full rounded-full py-2.5 text-sm font-medium transition-colors ${
          filter === f.name ? 'text-white' : 'text-slate-300 hover:text-white'
        }`}
      >
        {filter === f.name && (
          <motion.div
            key={`filter-bg-${f.name}`} // ✅ unique key
            layoutId="active-ride-filter"
            className="absolute inset-0 bg-gradient-to-r from-[#3D7FF3] to-[#6F49F8]"
            style={{ borderRadius: 9999 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center justify-center gap-2">
          <f.icon size={16} />
          <span className="hidden sm:inline">{f.name}</span>
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
    {filteredRides.map((ride) => (
      <motion.div
        key={`ride-${ride.slug}`} // ✅ unique key
        variants={cardVariants}
      >
        <RideCard ride={ride} />
      </motion.div>
    ))}
  </motion.div>
</section>

      </main>
    </>
  );
};

export default RidesPage;


// import React, { useState, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   List, 
//   Mountain, 
//   Waves, 
//   Sun, 
//   ArrowUpRight, 
//   Navigation,
//   Activity,
//   Compass,
//   ArrowRight,
//   Search,
//   Plus,
//   Globe
// } from 'lucide-react';
// import { rides, type Ride } from '@/lib/rides';

// const filters = [
//   { name: 'All' as const, icon: List },
//   { name: 'Epic' as const, icon: Mountain },
//   { name: 'Coastal' as const, icon: Waves },
//   { name: 'Cultural' as const, icon: Sun },
// ];

// const App: React.FC = () => {
//   const [activeFilter, setActiveFilter] = useState<'All' | Ride['category']>('All');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [hoveredId, setHoveredId] = useState<string | null>(null);
//   const [visibleCount, setVisibleCount] = useState(6);

//   const filteredRides = useMemo(() => {
//     return rides
//       .filter((r) => activeFilter === 'All' || r.category === activeFilter)
//       .filter((r) => 
//         r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//         r.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         r.country.toLowerCase().includes(searchQuery.toLowerCase()) // Added country search
//       );
//   }, [activeFilter, searchQuery]);

//   const displayedRides = filteredRides.slice(0, visibleCount);

//   return (
//     <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans leading-relaxed">
//       {/* Background Layer */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,30,30,1)_0%,rgba(5,5,5,1)_100%)]" />
//         <motion.div 
//           animate={{ 
//             opacity: hoveredId ? 0.12 : 0.04,
//             scale: hoveredId ? 1.1 : 1 
//           }}
//           className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 blur-[200px] rounded-full"
//         />
//       </div>

//       <div className="relative flex flex-col lg:flex-row min-h-screen z-10">
        
//         {/* LEFT COLUMN: Fixed Editorial Header */}
//         <aside className="lg:w-[30%] lg:h-screen lg:sticky lg:top-0 p-8 lg:p-16 flex flex-col justify-between border-r border-white/5 bg-black/20 backdrop-blur-3xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="flex items-center gap-3 mb-16">
//               <Compass className="text-blue-500 animate-spin-slow" size={20} />
//               <span className="text-[9px] font-black tracking-[0.5em] uppercase opacity-60">Archive Collection</span>
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.8] mb-10 italic">
//               WAY<br/><span className="text-zinc-800">POINTS</span>
//             </h1>
            
//             <div className="space-y-6 mb-12">
//               <p className="text-zinc-500 text-xs uppercase tracking-widest leading-loose max-w-xs">
//                 A curated digital journal documenting mechanical endurance across global topographies.
//               </p>
//               <div className="h-[1px] w-12 bg-blue-500/50" />
//             </div>

//             {/* Search Input */}
//             <div className="relative mb-10 group">
//               <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-blue-500 transition-colors" size={14} />
//               <input 
//                 type="text" 
//                 placeholder="SEARCH COUNTRY OR ROUTE..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full bg-transparent border-b border-white/10 py-2 pl-6 text-[10px] font-bold tracking-widest uppercase focus:outline-none focus:border-blue-500 transition-all placeholder:text-zinc-700"
//               />
//             </div>

//             <nav className="flex flex-col gap-5">
//               {filters.map((f) => (
//                 <button
//                   key={f.name}
//                   onClick={() => setActiveFilter(f.name)}
//                   className="group flex items-center gap-4 text-left w-fit"
//                 >
//                   <div className={`h-[1px] transition-all duration-700 ${activeFilter === f.name ? 'w-10 bg-blue-500' : 'w-3 bg-zinc-800 group-hover:w-6'}`} />
//                   <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all ${activeFilter === f.name ? 'text-white translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
//                     {f.name}
//                   </span>
//                 </button>
//               ))}
//             </nav>
//           </motion.div>

//           <div className="pt-12 border-t border-white/5">
//             <div className="flex flex-wrap gap-x-6 gap-y-2 text-[9px] font-bold text-zinc-500 tracking-widest uppercase">
//               <span className="text-blue-500">Vol. 2024</span>
//               <a href="#" className="hover:text-white transition-colors">Strava</a>
//               <a href="#" className="hover:text-white transition-colors">Contact</a>
//             </div>
//           </div>
//         </aside>

//         {/* RIGHT COLUMN: Dense Grid Flow */}
//         <main className="lg:w-[70%] p-6 lg:p-12">
//           <div className="hidden lg:flex justify-between items-end mb-12 pb-6 border-b border-white/5">
//             <div className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
//               Expeditions: {filteredRides.length} / {rides.length}
//             </div>
//             <div className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase flex items-center gap-2">
//               <Globe size={12} className="text-blue-500" /> Global Archive
//             </div>
//           </div>

//           {filteredRides.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
//               <AnimatePresence mode="popLayout">
//                 {displayedRides.map((ride, idx) => (
//                   <motion.div
//                     key={ride.slug}
//                     layout
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.98 }}
//                     transition={{ 
//                       duration: 0.6, 
//                       delay: idx * 0.05, 
//                       ease: [0.19, 1, 0.22, 1] 
//                     }}
//                     onMouseEnter={() => setHoveredId(ride.slug)}
//                     onMouseLeave={() => setHoveredId(null)}
//                     className="relative group h-full"
//                   >
//                     <a href={`/rides/${ride.slug}`} className="flex flex-col h-full bg-zinc-900/20 rounded-xl border border-white/5 hover:border-white/10 transition-colors p-4">
//                       <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-950 mb-5">
//                         <motion.img 
//                           src={ride.image} 
//                           alt={ride.title}
//                           className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000"
//                           whileHover={{ scale: 1.08 }}
//                         />
//                         <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                        
//                         <div className="absolute inset-x-0 top-0 p-3 flex justify-between items-start pointer-events-none">
//                           <span className="bg-black/60 backdrop-blur-md text-[8px] font-black px-2 py-1 border border-white/10 text-white/90">
//                             {ride.country} {/* Highlight country on card */}
//                           </span>
//                           <div className="bg-white text-black text-[8px] font-black px-2 py-1 shadow-lg">
//                             {ride.distance} KM
//                           </div>
//                         </div>

//                         <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                            <div className="flex items-center gap-3 text-[9px] font-bold tracking-widest uppercase">
//                               <span className="flex items-center gap-1 text-white"><Navigation size={10} className="text-blue-500"/> {ride.location}</span>
//                               <span className="text-white/40 border-l border-white/10 pl-3">{ride.duration}</span>
//                            </div>
//                         </div>
//                       </div>

//                       <div className="flex flex-col flex-grow">
//                         <div className="flex items-center justify-between mb-2">
//                           <span className="text-[9px] font-bold text-blue-500/80 tracking-widest uppercase">{ride.category}</span>
//                           <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">{ride.date}</span>
//                         </div>
//                         <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-white transition-colors leading-snug uppercase">
//                           {ride.title}
//                         </h3>
//                         <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">
//                           {ride.excerpt}
//                         </p>
//                       </div>
//                     </a>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           ) : (
//             <div className="h-64 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-3xl">
//               <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">No expeditions found for this region</span>
//             </div>
//           )}

//           {filteredRides.length > visibleCount && (
//             <div className="mt-20 flex justify-center">
//               <button 
//                 onClick={() => setVisibleCount(prev => prev + 6)}
//                 className="group flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-500"
//               >
//                 <Plus size={16} />
//                 <span className="text-[10px] font-black tracking-[0.3em] uppercase">Load Older Expeditions</span>
//               </button>
//             </div>
//           )}

//           <div className="hidden 2xl:block fixed right-4 bottom-1/2 translate-y-1/2 rotate-90 origin-right text-[140px] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
//             Exploration
//           </div>
//         </main>
//       </div>

//       <footer className="fixed bottom-0 left-0 w-full p-3 border-t border-white/5 bg-black/60 backdrop-blur-xl flex justify-between items-center z-50 px-8">
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
//             <span className="text-[8px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Archive Online</span>
//           </div>
//         </div>
//         <div className="flex items-center gap-10">
//            <div className="hidden sm:flex flex-col items-end">
//               <span className="text-[7px] text-zinc-600 uppercase font-black tracking-widest">Total Regions</span>
//               <span className="text-[10px] font-mono text-zinc-400">{Array.from(new Set(rides.map(r => r.country))).length.toString().padStart(2, '0')}</span>
//            </div>
//            <div className="flex flex-col items-end">
//               <span className="text-[7px] text-zinc-600 uppercase font-black tracking-widest">Total Distance</span>
//               <span className="text-[10px] font-mono text-zinc-400">2,010 KM</span>
//            </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;