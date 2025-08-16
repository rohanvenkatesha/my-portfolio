'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// --- ICONS ARE IMPORTED HERE ---
import { MapPin, Code, FileText, Compass, Camera } from 'lucide-react';
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
          className="flex justify-center items-center gap-6 md:gap-8 mb-8 text-md"
        >
          <div className="flex items-center gap-2 text-slate-300">
            <Code className="w-5 h-5 text-cyan-400" />
            <span>Developer</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Camera className="w-5 h-5 text-purple-400" />
            <span>Photographer</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Compass className="w-5 h-5 text-green-400" />
            <span>Explorer</span>
          </div>
        </motion.div>

<motion.div
  variants={{
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.6 }}
  className="flex justify-center gap-3"
>
  <Link href="/projects" passHref legacyBehavior>
    <a className="btn btn-primary text-sm md:text-base px-5 md:px-8 inline-flex items-center gap-2">
      <Code size={18} />
      Explore Projects
    </a>
  </Link>

  <Link href="/rides" passHref legacyBehavior>
    <a className="btn btn-secondary text-sm md:text-base px-5 md:px-8 inline-flex items-center gap-2">
      <MapPin size={18} />
      Ride Stories
    </a>
  </Link>
</motion.div>

<motion.div
  variants={{
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.5 }}
  className="mt-8 inline-block"
>
  <a
    href="https://drive.google.com/file/d/1zf7aHGIk7Qymr7dP7ilbvY25KHc0bVIb/view"
    download="RohanVenkatesha-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="glowing-border group inline-block rounded-full"
  >
    <span className="inline-flex items-center justify-center gap-2 bg-[#090a0f] text-slate-300 font-semibold px-6 py-2.5 rounded-full group-hover:bg-[#111827] transition-all duration-300 w-full text-sm md:text-base">
      <FileText
        size={18}
        className="text-slate-300 transition-colors group-hover:text-cyan-400"
      />
      <span className="transition-colors group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent">
        Download My Resume
      </span>
    </span>
  </a>
</motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;