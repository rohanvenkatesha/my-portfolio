'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TimelineEntry from '../components/TimelineEntry';
import { workExperience, education } from '@/lib/about-data';
import { Code, Camera, Milestone, MapPin } from 'lucide-react';
import BodyClassName from '../components/BodyClassName';
import ProfileCard from '../components/ProfileCard';

// --- ANIMATION VARIANTS ---
const timelineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: 'easeOut' }
  };
  
  const [experienceFilter, setExperienceFilter] = useState('All');
  const experienceFilters = ['All', 'Full-time', 'Part-time', 'Internship'];

  const filteredExperience = workExperience.filter(item => 
    experienceFilter === 'All' || item.workType === experienceFilter
  );

  return (
    <>
      <BodyClassName className="bg-default" />
      <Header />
      <main className="px-4 md:px-8 max-w-7xl mx-auto mt-12">

        {/* --- UNIFIED HERO SECTION --- */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="my-16"
        >
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="flex justify-center md:justify-end">
              <ProfileCard
                avatarUrl="/logos/profile-picture.jpg"
                handle="rohan.v10"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400">
                My Three Worlds
              </h1>
              <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto md:mx-0">
               I’m a developer crafting seamless digital experiences, a photographer capturing moments that speak, and an explorer chasing freedom across open roads. 
               Coding sharpens my eye for detail, photography fuels my creativity, and travel keeps my curiosity alive—each journey shaping the other in unexpected ways.
              </p>
            </div>
          </div>
        </motion.section>

        {/* --- CORE IDENTITIES SECTION --- */}
        <motion.section 
          variants={fadeIn} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }} 
          className="grid md:grid-cols-3 gap-10 my-24 text-center"
        >
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <Code className="w-12 h-12 mx-auto mb-4 text-cyan-300" />
            <h2 className="text-2xl font-bold text-white mb-2">The Developer</h2>
            <p className="text-slate-400 text-sm">
              Crafting clean, performant, and intuitive digital experiences.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <Camera className="w-12 h-12 mx-auto mb-4 text-purple-300" />
            <h2 className="text-2xl font-bold text-white mb-2">The Photographer</h2>
            <p className="text-slate-400 text-sm">
              Seeking to capture the fleeting moments that tell a larger story.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <Milestone className="w-12 h-12 mx-auto mb-4 text-green-300" />
            <h2 className="text-2xl font-bold text-white mb-2">The Explorer</h2>
            <p className="text-slate-400 text-sm">
              Motorcycle travel is my meditation. Embracing the journey and the unknown path.
            </p>
          </div>
        </motion.section>
        
        {/* --- WORK EXPERIENCE SECTION --- */}
        <section className="my-24">
          <h2 className="text-center text-4xl font-bold mb-8 gradient-text">Work Experience</h2>
          <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 mb-12">
            {experienceFilters.map(f => (
              <button 
                key={f} 
                onClick={() => setExperienceFilter(f)} 
                className={`text-sm md:text-base px-4 py-2 rounded-full transition-colors duration-300 ${
                  experienceFilter === f 
                    ? 'bg-gradient-to-r from-[#3D7FF3] to-[#6F49F8] text-white font-semibold shadow-md' 
                    : 'text-slate-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <motion.div 
            variants={timelineContainerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }} 
            className="relative max-w-5xl mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div key={experienceFilter}>
                {filteredExperience.map((item, index) => (
                  <TimelineEntry key={item.title + index} {...item} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- EDUCATION SECTION --- */}
        <motion.section 
          variants={fadeIn} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true, amount: 0.1 }} 
          className="my-24 max-w-5xl mx-auto"
        >
          <h2 className="text-center text-4xl font-bold mb-16 gradient-text">Education</h2>
          <div className="relative">
            {education.map((item, index) => (
              <TimelineEntry key={index} {...item} />
            ))}
          </div>
        </motion.section>

        {/* --- TRAVEL BIO SECTION --- */}
        <motion.section 
          variants={fadeIn} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }} 
          className="my-24"
        >
          <h2 className="text-center text-4xl font-bold mb-12 gradient-text">From Code to Kilometers</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-slate-400 space-y-4 leading-relaxed text-center md:text-left">
              <p>
                While my days are spent architecting digital solutions, my spirit comes alive on the open road. 
                For me, motorcycling isn&apos;t just a hobby; it&apos;s a parallel form of problem-solving.
                Navigating a winding mountain pass requires the same focus and foresight as debugging a complex piece of code.
              </p>
              <p>
                Each journey is a story—a collection of challenges, triumphs, and unexpected connections. 
                The lessons learned from a long-distance ride often find their way back into my work, reinforcing principles of resilience, adaptability, and the importance of a well-planned route.
              </p>
              <Link href="/rides" className="btn btn-secondary mt-6">
                <MapPin size={20} />
                Read My Ride Stories
              </Link>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden border border-white/10">
              <Image src="/rides/scenic.jpg" alt="Motorcycle on a scenic road" fill className="object-cover" />
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};
export default AboutPage;
