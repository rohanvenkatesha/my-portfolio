'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// --- ICONS ARE IMPORTED HERE ---
import { MapPin, Code, FileText, PersonStanding} from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="text-center py-10 md:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/10 shadow-lg"
        >
          <Image
            src="/logos/prof.jpg"
            alt="Rohan Venkatesha"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <motion.p
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base text-slate-400 mb-3 tracking-wide uppercase"
        >
          Crafted by <span className="text-slate-200 font-semibold">Rohan Venkatesha</span>
          <span className="hidden sm:inline"> • </span>
          <br className="sm:hidden" /> Software Engineer & Explorer
        </motion.p>
        
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400"
        >
          Where <span className="gradient-text">Code</span> Meets
          <br />
          The <span className="gradient-text">Open Road.</span>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-8"
        >
          I am a Full Stack Engineer and motorcycle explorer, crafting high-performance digital experiences and capturing the world one frame at a time.
        </motion.p>
        
        <motion.div
  variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
  className="flex justify-center items-center gap-4 md:gap-6 mb-8 flex-wrap"
>
  {/* About Me (Blue Glow) */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href="/about"
      className="px-4 py-2 text-sm md:text-base rounded-full 
                 border border-blue-400 text-slate-200 font-medium
                 transition-all duration-300 flex items-center gap-2
                 hover:shadow-[0_0_12px_rgba(59,130,246,0.7)]"
    >
      <PersonStanding className="w-5 h-5 text-blue-400" />
      About Me
    </Link>
  </motion.div>

  {/* Explore Projects (Purple Glow) */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href="/projects"
      className="px-4 py-2 text-sm md:text-base rounded-full 
                 border border-purple-400 text-slate-200 font-medium
                 transition-all duration-300 flex items-center gap-2
                 hover:shadow-[0_0_12px_rgba(168,85,247,0.7)]"
    >
      <Code className="w-5 h-5 text-purple-400" />
      Explore Projects
    </Link>
  </motion.div>

  {/* Ride Stories (Red Glow) */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href="/rides"
      className="px-4 py-2 text-sm md:text-base rounded-full 
                 border border-red-400 text-slate-200 font-medium
                 transition-all duration-300 flex items-center gap-2
                 hover:shadow-[0_0_12px_rgba(239,68,68,0.7)]"
    >
      <MapPin className="w-5 h-5 text-red-400" />
      Ride Stories
    </Link>
  </motion.div>

  {/* Download Resume (Green Glow) */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <a
    href="https://drive.google.com/file/d/1zf7aHGIk7Qymr7dP7ilbvY25KHc0bVIb/view"
    target="_blank"
    rel="noopener noreferrer"
      className="px-4 py-2 text-sm md:text-base rounded-full 
                 border border-green-400 text-slate-200 font-medium
                 transition-all duration-300 flex items-center gap-2
                 hover:shadow-[0_0_12px_rgba(34,197,94,0.7)]"
    >
      <FileText className="w-5 h-5 text-green-400" />
      Download Resume
    </a>
    </motion.div>
    </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;