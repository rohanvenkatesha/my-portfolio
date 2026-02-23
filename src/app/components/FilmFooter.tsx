'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  ArrowUp, 
  ArrowRight, 
  Plus, 
  Shield, 
  Target,
  Star,
  Loader2
} from 'lucide-react';

const FilmFooter = () => {
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 15 });
  
  const bgScale = useTransform(smoothProgress, [0, 1], [0.85, 1.1]);
  const contentY = useTransform(smoothProgress, [0, 1], [60, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error("Transmission Error:", err);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <footer 
      ref={containerRef}
      className="relative w-full bg-[#000000] text-white pt-24 md:pt-40 pb-12 md:pb-16 overflow-hidden font-['Plus_Jakarta_Sans',_sans-serif]"
    >
      {/* --- KINETIC BACKGROUND MONOLITH --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h2 
          className="text-[80vw] md:text-[60vw] font-black leading-none select-none text-transparent opacity-[0.03]"
          style={{ 
            scale: bgScale,
            WebkitTextStroke: '1px rgba(255,255,255,0.4)',
          }}
        >
          RV
        </motion.h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- TOP SECTION --- */}
        <motion.div 
          style={{ y: contentY, opacity }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24 md:mb-40"
        >
          <div className="lg:col-span-5 pt-4">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="w-8 md:w-10 h-[2px] md:h-[3px] bg-red-600" />
              <span className="text-[8px] md:text-[9px] font-black tracking-[0.4em] md:tracking-[0.5em] uppercase text-red-600">Priority // Transmission</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl xl:text-8xl font-[900] tracking-tighter leading-[0.9] uppercase mb-8 md:mb-12">
              Let's Connect<br/>
              {/* <span className="text-white italic">With Me</span> */}
            </h2>

            <p className="text-zinc-500 max-w-sm text-xs md:text-sm font-medium leading-relaxed mb-8 md:mb-12 uppercase tracking-wide">
              Engineering high-performance digital experiences through calculated design and technical precision.
            </p>

            <div className="flex gap-5 md:gap-6">
              {[
                { icon: Github, label: 'GH' },
                { icon: Linkedin, label: 'LI' },
                { icon: Instagram, label: 'IG' }
              ].map((social, i) => (
                <a key={i} href="#" className="flex items-center gap-3 group/soc">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-zinc-900 flex items-center justify-center transition-all duration-500 group-hover/soc:bg-red-600 group-hover/soc:border-red-600">
                    <social.icon size={12} className="md:w-[14px] md:h-[14px]" />
                  </div>
                  <span className="text-[7px] md:text-[8px] font-black tracking-widest text-zinc-700 group-hover/soc:text-white transition-colors">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-950/30 p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 backdrop-blur-sm relative">
            <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12">
              <div className="relative group/input">
                <label className="absolute -top-5 left-0 text-[7px] md:text-[8px] font-black tracking-[0.3em] text-zinc-600 uppercase group-focus-within/input:text-red-600 transition-colors">Identification</label>
                <input 
                  type="text" name="name" required placeholder="Full Name"
                  value={formData.name} onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-800 py-3 md:py-4 outline-none focus:border-red-600 transition-all font-bold text-xl md:text-2xl placeholder:text-zinc-900 focus:placeholder:opacity-0"
                />
              </div>

              <div className="relative group/input">
                <label className="absolute -top-5 left-0 text-[7px] md:text-[8px] font-black tracking-[0.3em] text-zinc-600 uppercase group-focus-within/input:text-red-600 transition-colors">Channel</label>
                <input 
                  type="email" name="email" required placeholder="Email Address"
                  value={formData.email} onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-800 py-3 md:py-4 outline-none focus:border-red-600 transition-all font-bold text-xl md:text-2xl placeholder:text-zinc-900 focus:placeholder:opacity-0"
                />
              </div>
              
              <div className="relative group/input">
                <label className="absolute -top-5 left-0 text-[7px] md:text-[8px] font-black tracking-[0.3em] text-zinc-600 uppercase group-focus-within/input:text-red-600 transition-colors">Vision</label>
                <textarea 
                  name="message" required rows={1} placeholder="Project Brief"
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-800 py-3 md:py-4 outline-none focus:border-red-600 transition-all font-bold text-xl md:text-2xl resize-none placeholder:text-zinc-900 focus:placeholder:opacity-0"
                />
              </div>

              <div className="space-y-4 pt-4">
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="group flex items-center gap-4 md:gap-6 text-base md:text-lg font-black uppercase tracking-tighter disabled:opacity-50"
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 
                    ${status === 'success' ? 'bg-green-600 text-white' : 
                      status === 'error' ? 'bg-red-800 text-white' : 
                      'bg-white text-black group-hover:bg-red-600 group-hover:text-white'}`}
                  >
                    {status === 'sending' ? <Loader2 size={18} className="animate-spin" /> : 
                     status === 'success' ? <Target size={18} className="animate-pulse" /> : 
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </div>
                  <span className={`transition-colors duration-500 
                    ${status === 'success' ? "text-green-500" : 
                      status === 'error' ? "text-red-800" : 
                      "text-white group-hover:text-red-600"}`}
                  >
                    {status === 'sending' ? "CONNECTING..." : 
                     status === 'success' ? "TRANSMITTED" : 
                     status === 'error' ? "RETRY SIGNAL" : 
                     "LAUNCH PROJECT"}
                  </span>
                </button>
                {status === 'error' && <p className="text-[9px] font-bold text-red-600 uppercase tracking-widest">Connection failed. Check API endpoint.</p>}
              </div>
            </form>
          </div>
        </motion.div>

        {/* --- MIDDLE SECTION: GLOWING STAR BENTO GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: 'About', tag: '01' },
            { name: 'Projects', tag: '02' },
            { name: 'Film', tag: '03' },
            { name: 'Rides', tag: '04' }
          ].map((item, i) => (
            <a 
              key={item.name} href={`/${item.name.toLowerCase()}`}
              className="group relative h-48 md:h-56 bg-zinc-950/80 p-[1px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all duration-500"
            >
              {/* Dynamic Multi-Color Conic Gradient Trail */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_30%,#dc2626_45%,#ffffff_50%,#dc2626_55%,transparent_70%,transparent_100%)]" />
              </div>

              <div className="relative z-10 w-full h-full bg-[#000000] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-between transition-colors group-hover:bg-zinc-950/90 border border-zinc-900 group-hover:border-transparent">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <Star size={10} className="text-red-600 fill-red-600 group-hover:animate-pulse" />
                    <span className="text-[8px] md:text-[9px] font-black text-zinc-800 group-hover:text-red-600 transition-colors uppercase tracking-widest">Node_{item.tag}</span>
                  </div>
                  <Plus size={14} className="text-zinc-800 group-hover:text-white group-hover:rotate-90 transition-all" />
                </div>
                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:italic group-hover:translate-x-1 transition-all">
                  {item.name}
                </h4>
              </div>
            </a>
          ))}
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="mt-24 md:mt-32 flex flex-col md:flex-row items-center md:items-end justify-between gap-12 md:gap-10">
          <div className="space-y-6 text-center md:text-left">
             <div className="flex flex-row justify-center md:justify-start gap-10">
               <div>
                 <p className="text-[7px] md:text-[8px] font-black tracking-[0.4em] text-zinc-700 uppercase mb-2">Location</p>
                 <p className="text-[10px] md:text-xs font-bold uppercase text-zinc-400">Bengaluru // IN</p>
               </div>
               <div>
                 <p className="text-[7px] md:text-[8px] font-black tracking-[0.4em] text-zinc-700 uppercase mb-2">System Time</p>
                 <p className="text-[10px] md:text-xs font-bold uppercase tabular-nums text-red-600">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} IST</p>
               </div>
             </div>
             <p className="text-[8px] md:text-[9px] font-black text-zinc-900 uppercase tracking-[0.4em] md:tracking-[0.8em]">
                &copy; {new Date().getFullYear()} ROHAN_VENKATESHA
             </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-4 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700 hover:text-white transition-colors"
            >
              RETURNING_UP
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-zinc-900 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                <ArrowUp size={14} />
              </div>
            </button>
            <div className="flex items-center gap-2">
              <Shield size={10} className="text-red-600" />
              <span className="text-[6px] md:text-[7px] font-black tracking-widest text-zinc-900 uppercase">Secure_Access_V5.1</span>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,800;1,800&display=swap');
        
        ::selection {
          background: #dc2626;
          color: white;
        }

        input:focus {
            box-shadow: 0 1px 0 0 #dc2626;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </footer>
  );
};

export default FilmFooter;