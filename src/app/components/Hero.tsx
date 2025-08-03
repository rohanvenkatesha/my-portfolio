'use client';

import { motion } from 'framer-motion';
import { MapPin, Code, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="text-center py-24 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400">
          Where <span className="gradient-text">Code</span> Meets
          <br />
          The <span className="gradient-text">Open Road.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12">
          I build high-performance digital experiences and explore the world on two wheels, one frame at a time.
        </p>
        
        <div className="flex justify-center gap-3">
          {/* We are adding responsive text sizes and reducing padding + icon size */}
          <a href="/projects" className="btn btn-primary text-sm md:text-base px-5 md:px-8">
            <Code size={18} />
            Explore Projects
          </a>
          <a href="/rides" className="btn btn-secondary text-sm md:text-base px-5 md:px-8">
            <MapPin size={18} />
            Ride Stories
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 inline-block"
        >
          <a
            href="https://drive.google.com/file/d/1zf7aHGIk7Qymr7dP7ilbvY25KHc0bVIb/view"
            download="RohanVenkatesha-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glowing-border group inline-block rounded-full"
          >
            <span className="inline-flex items-center justify-center gap-2 text-slate-300 font-semibold px-6 py-2.5 rounded-full group-hover:bg-[#00000] group-hover:text-white transition-all duration-300 w-full text-sm md:text-base">
              <FileText size={18} />
              Download My Resume
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;