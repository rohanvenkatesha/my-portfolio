'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Code, FileText } from 'lucide-react';

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
          {/* This responsive <br> tag creates a line break only on mobile */}
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
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12"
        >
          I build high-performance digital experiences and explore the world on two wheels, one frame at a time.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-3"
        >
          <a
            href="/projects"
            className="btn btn-primary text-sm md:text-base px-5 md:px-8"
          >
            <Code size={18} />
            Explore Projects
          </a>
          <a
            href="/rides"
            className="btn btn-secondary text-sm md:text-base px-5 md:px-8"
          >
            <MapPin size={18} />
            Ride Stories
          </a>
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
<span className="inline-flex items-center justify-center gap-2 
  text-slate-300 font-semibold px-6 py-2.5 rounded-full 
  transition-all duration-300 w-full text-sm md:text-base">
  <FileText size={18} className="text-slate-300 group-hover:text-purple-400" />
  <span className="group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300
    group-hover:bg-clip-text group-hover:text-transparent">
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