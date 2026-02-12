"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Camera, 
  Zap, 
  Eye,
  ArrowRight,
  Library,
  AlertCircle,
  Dna,
  Microscope,
  Cpu,
  Monitor,
  Clipboard,
  Users,
  MessageSquare,
  Compass,
  Key,
  Smartphone,
  BookOpen,
  PenTool,
  Target
} from 'lucide-react';

const App = () => {
  // Simulator States
  const [lighting, setLighting] = useState<'cinematic' | 'noir' | 'highkey' | 'cyber'>('cinematic');
  const [focalLength, setFocalLength] = useState(35);
  const [grade, setGrade] = useState<'natural' | 'teal' | 'vintage' | 'monochrome' | 'warm'>('natural');
  const [iso, setIso] = useState(400);
  const [activeMood, setActiveMood] = useState(0);
  
  // UI & Lab States
  const [isRecording, setIsRecording] = useState(false);
  const [labUnlocked, setLabUnlocked] = useState(false);

  // Scroll Animations
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const letterboxY = useTransform(scrollY, [0, 500], [0, -100]);
  const letterboxBottomY = useTransform(scrollY, [0, 500], [0, 100]);

  // Lighting Styles Config
  const lightingStyles = {
    cinematic: { bg: 'bg-zinc-800', shadow: 'shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]', label: 'Balanced Rembrandt' },
    noir: { bg: 'bg-black', shadow: 'shadow-[inset_-150px_0_150px_rgba(0,0,0,1)]', label: 'High Contrast Chiaroscuro' },
    highkey: { bg: 'bg-zinc-200', shadow: 'shadow-none', label: 'Flat Commercial Light' },
    cyber: { bg: 'bg-indigo-950', shadow: 'shadow-[inset_0_0_80px_rgba(79,70,229,0.4)]', label: 'Neon Saturation' }
  };

  // Color Grades Config
  const colorGrades = {
    natural: 'contrast-100 saturate-100 brightness-100',
    teal: 'sepia-[0.2] hue-rotate-[160deg] saturate-[1.2] contrast-[1.1]',
    vintage: 'sepia-[0.5] contrast-[0.9] brightness-[1.05] saturate-[0.8]',
    monochrome: 'grayscale-100 contrast-[1.2]',
    warm: 'sepia-[0.3] saturate-[1.5] brightness-[1.1]'
  };

  const moodBoard = [
    { title: "Neo-Noir", hex: "#0A0A1A", tag: "NIGHT_EXT", img: "https://images.unsplash.com/photo-1507034589631-9433c6bc453e?auto=format&fit=crop&q=80&w=800", description: "Hard shadows and cold blue highlights that emphasize isolation." },
    { title: "Golden Hour", hex: "#F2A65A", tag: "SUNSET_EXT", img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=800", description: "Warm, soft-directional light with high bloom for nostalgia." },
    { title: "Industrial", hex: "#4A4A4A", tag: "WAREHOUSE_INT", img: "https://images.unsplash.com/photo-1516339901600-2e1a62dc0c45?auto=format&fit=crop&q=80&w=800", description: "Desaturated tones with heavy metallic textures and cold grit." },
    { title: "Ethereal", hex: "#E0E7FF", tag: "DREAM_SEQ", img: "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=800", description: "High key, low contrast, and soft focus to mimic a dream state." }
  ];

  const shotList = [
    { type: "Wide Shot (WS)", desc: "Establishes context. Shows the character in their environment.", lens: "24mm" },
    { type: "Medium (MS)", desc: "The 'dialogue' shot. Capture body language and interaction.", lens: "50mm" },
    { type: "Close Up (CU)", desc: "Pure emotion. We see what the character is thinking.", lens: "85mm" },
    { type: "Insert", desc: "A detail shot (a watch, a gun, a text message) that drives plot.", lens: "100mm Macro" }
  ];

  const directorTools = [
    { icon: Smartphone, title: "Viewfinder App", cat: "Technical", desc: "Artemis Pro or C-Viewfinder to visualize focal lengths without a camera." },
    { icon: Clipboard, title: "Shot Lister", cat: "Logistics", desc: "Digital organization for blocking, lens choices, and schedule sync." },
    { icon: BookOpen, title: "The Lookbook", cat: "Creative", desc: "Visual references used to communicate tone to DP and Art Dept." },
    { icon: MessageSquare, title: "Director's Monitor", cat: "Control", desc: "A clean feed of the sensor output, separate from crew HUDs." },
    { icon: PenTool, title: "Script Markup", cat: "Process", desc: "Physical or digital (iPad) notes for performance beats." },
    { icon: Compass, title: "Sun Seeker", cat: "Scouting", desc: "Critical for exterior shoots to track light paths across the day." }
  ];

  const directionsDNA = [
    { title: "DECISIVENESS", desc: "A director is the lighthouse. Indecision costs thousands per minute. You must make 100 calls a day.", icon: Zap },
    { title: "EMPATHY", desc: "Understanding the actor's emotional state is the only way to get a raw, authentic performance.", icon: Users },
    { title: "VISION", desc: "Holding the entire movie in your head from start to finish while focused on a single shot.", icon: Eye }
  ];

  const roadmapSteps = [
    { step: "01", title: "Observe", desc: "Watch films without sound. Focus purely on visual storytelling.", icon: Eye },
    { step: "02", title: "Replicate", desc: "Recreate a famous scene shot-for-shot using your phone.", icon: Camera },
    { step: "03", title: "Collaborate", desc: "Find friends. One actor, one camera person. Make a 1-minute short.", icon: Users },
    { step: "04", title: "Adapt", desc: "Something will go wrong on set. Fix it. That is directing.", icon: Target }
  ];

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const revealRight = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-500 overflow-x-hidden">
      
      {/* HEADER HUD */}
      {/* <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[200] mix-blend-difference">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-red-600 flex items-center justify-center">
             <span className="font-black text-xs">RL</span>
          </div>
          <div>
            <h1 className="text-[10px] font-black tracking-[0.3em] uppercase">Film Lab v4.2</h1>
            <p className="text-[8px] font-mono opacity-50 uppercase tracking-widest">{labUnlocked ? 'Status: LAB_ACCESS_GRANTED' : 'Status: CORE_MODULES_ONLY'}</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => setIsRecording(!isRecording)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest transition-all ${isRecording ? 'bg-red-600 border-red-600 animate-pulse' : 'hover:bg-white/10'}`}
          >
            <div className={`w-2 h-2 rounded-full ${isRecording ? 'bg-white' : 'bg-red-600'}`} />
            {isRecording ? 'Recording' : 'Standby'}
          </button>
        </div>
      </header> */}

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden w-full">

        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#050505] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale opacity-30 scale-105"
            alt="Cinema Learning"
          />
        </motion.div>

        <div className="absolute inset-[15%] z-20 pointer-events-none border border-white/5">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-600/50" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600/50" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-600/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, letterSpacing: "1.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-30 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]" />
            <span className="text-[10px] font-mono tracking-[0.5em] text-red-500 uppercase">Interactive Archive</span>
          </div>
          <h1 className="text-[10vw] md:text-[7vw] font-black leading-none tracking-tighter uppercase mb-6">
            DIRECTOR <br />
            <span className="italic font-serif font-light text-[12vw] md:text-[8vw] text-zinc-500 lowercase block -mt-4">workshop.</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm text-zinc-400 tracking-widest leading-relaxed font-light px-8 uppercase">
            Master the art of visual subtext, light physics, and dramatic composition.
          </p>
          
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="group flex items-center gap-4 bg-white text-black px-10 py-4 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-red-600 hover:text-white transition-all">
              LEARN LIGHTING <Zap size={12} fill="currentColor" />
            </button>
            <button className="group flex items-center gap-4 border border-white/20 text-white px-10 py-4 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition-all">
              STORY ARCHIVE <Library size={12} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-[20vh] z-30 flex flex-col items-center gap-4 opacity-30"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
          <span className="text-[8px] font-mono uppercase tracking-[0.5em]">Scroll to Enter Lab</span>
        </motion.div>
      </section>

      {/* SCRIPT ROOM SECTION */}
      <section className="py-40 bg-[#070708] px-6 md:px-16 overflow-hidden relative border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-100 text-black p-10 shadow-2xl rounded-sm aspect-[3/4] font-mono text-sm leading-relaxed relative"
          >
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -top-4 -right-4 bg-red-600 text-white p-4 shadow-xl z-50 transform rotate-3 flex items-start gap-3 max-w-[200px]"
            >
              <AlertCircle size={18} className="shrink-0 mt-1" />
              <div>
                <p className="text-[9px] font-black uppercase tracking-tighter mb-1">DRAFT_ANNOTATION</p>
                <p className="text-[10px] leading-tight font-bold">Needs more subtext. Focus on the internal struggle. Use a Close Up here.</p>
              </div>
            </motion.div>

            <div className="mb-10 text-center uppercase tracking-widest font-bold border-b border-black/10 pb-4">Ext. Forest - Night</div>
            <p className="mb-6 uppercase text-[12px] text-zinc-600">The protagonist (ROHAN) stands at the edge of the unknown. Trees loom like jagged teeth.</p>
            
            <div className="pl-12 mb-8">
              <p className="font-bold">ROHAN</p>
              <p className="italic text-zinc-500 text-[12px] mb-1">(to himself)</p>
              <p>"I don't know the rules yet. But I'm going to learn every single one of them."</p>
            </div>

            <p className="mb-6 uppercase text-[12px] text-zinc-600 italic">He steps forward. The sound of a snapping twig echoes. CUT TO BLACK.</p>
            
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-100 to-transparent" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.div variants={revealRight} className="flex items-center gap-4 text-red-600 font-mono text-[10px] uppercase tracking-widest">
              <Library size={16} /> Script Analysis
            </motion.div>
            <motion.h3 variants={revealRight} className="text-6xl font-black uppercase tracking-tighter leading-none">
              THE STORY <br /> <span className="text-zinc-800">ENGINE.</span>
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              {[ 
                 { t: "The Hook", d: "The first 10 pages must establish the 'Normal World' and break it." },
                 { t: "Visual Subtext", d: "Saying one thing with words, another with the environment." },
                 { t: "Pacing", d: "Using sentence length to dictate the speed of the reader's pulse." },
                 { t: "Character Arc", d: "The internal wound that drives every external action." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-4 items-start group">
                  <span className="text-zinc-800 font-black text-2xl leading-none group-hover:text-red-600 transition-colors">0{i+1}</span>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-[11px] mb-1">{item.t}</h5>
                    <p className="text-[10px] text-zinc-500 font-mono leading-relaxed">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: VISUAL GRAMMAR (SHOT LIST) */}
      <section className="py-20 bg-zinc-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter">VISUAL <span className="text-red-600">GRAMMAR</span></h2>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden md:inline-block">Basic Vocabulary of Cinema</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {shotList.map((shot, i) => (
              <div key={i} className="group relative bg-black border border-white/10 p-6 h-64 flex flex-col justify-between overflow-hidden hover:border-red-600/50 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl group-hover:opacity-20 transition-opacity">{i+1}</div>
                <div>
                   <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{shot.type}</h4>
                   <span className="text-[9px] font-mono text-red-500 border border-red-500/30 px-2 py-1 rounded">{shot.lens}</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed z-10">{shot.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DNA / MOODBOARD SECTION */}
      <section className="py-40 bg-[#050505] px-8 md:px-16 w-full">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-zinc-900 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-zinc-600 font-bold tracking-[0.5em] uppercase text-[10px]">
                <Dna size={12} className="text-red-600" /> R&D // LOOKDEV
              </div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">THE <span className="text-red-600">DNA</span></h2>
            </div>
            <p className="max-w-xs text-[10px] font-mono text-zinc-500 uppercase leading-loose">
              Every masterpiece starts with a palette. We dissect the chromatic structure of legendary films to understand their emotional impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 flex flex-col gap-2">
              {moodBoard.map((item, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveMood(i)}
                  className={`w-full text-left p-8 transition-all duration-700 relative group overflow-hidden ${activeMood === i ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-900/50 text-zinc-600'}`}
                >
                  <div className="relative z-10 flex justify-between items-center">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest mb-1 block opacity-50">SAMPLE_ID: 0{i+1}</span>
                      <h4 className="text-lg font-black uppercase tracking-widest leading-none">{item.title}</h4>
                    </div>
                    {activeMood === i && <ArrowRight size={20} className="text-red-600" />}
                  </div>
                </button>
              ))}
              
              {!labUnlocked && (
                <button 
                  onClick={() => setLabUnlocked(true)}
                  className="mt-8 group relative w-full py-6 border-2 border-dashed border-zinc-800 hover:border-red-600 transition-all flex flex-col items-center justify-center gap-2"
                >
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 group-hover:text-red-600">Unlock Lab Module</span>
                  <div className="w-10 h-[1px] bg-zinc-800 group-hover:bg-red-600 group-hover:w-20 transition-all" />
                </button>
              )}
            </div>

            <div className="lg:col-span-8 relative aspect-video bg-zinc-900 overflow-hidden border border-white/5 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeMood}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <img src={moodBoard[activeMood].img} className="w-full h-full object-cover brightness-50" alt="Mood" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-end gap-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="flex gap-8">
                      <div className="w-16 h-16 border border-white/20 p-1">
                        <div className="w-full h-full" style={{ backgroundColor: moodBoard[activeMood].hex }} />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-xs font-mono tracking-widest text-red-500">HEX_VALUE: {moodBoard[activeMood].hex}</span>
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{moodBoard[activeMood].tag} | SENSOR: 35MM FULL FRAME</span>
                      </div>
                    </div>
                    <p className="text-xl md:text-3xl font-serif italic text-white/90 max-w-lg leading-relaxed">{moodBoard[activeMood].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* REVEALED LAB SECTION */}
      <AnimatePresence>
        {labUnlocked && (
          <motion.section 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-20 px-6 border-t border-red-600/20 bg-black relative z-50"
          >
            <div className="max-w-[1600px] mx-auto space-y-10">
              <div className="flex justify-between items-center border-b border-white/5 pb-8">
                <div>
                  <div className="flex items-center gap-3 text-red-500 mb-2">
                    <Microscope size={16} />
                    <span className="text-[10px] font-mono uppercase tracking-[0.5em]">Virtual Physics Simulator</span>
                  </div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter">LABORATORY <span className="text-zinc-800">V1.0</span></h2>
                </div>
                <div className="hidden md:flex gap-8 text-[9px] font-mono text-zinc-600">
                  <div className="flex flex-col"><span className="text-white">RENDER</span> EEVEE_X</div>
                  <div className="flex flex-col"><span className="text-white">SAMPLES</span> 1024_PX</div>
                  <div className="flex flex-col"><span className="text-white">LENS</span> ANAMORPHIC</div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 h-full lg:h-[700px]">
                {/* LAB LEFT: TECH SPECS */}
                <aside className="w-full lg:w-80 flex flex-col gap-4">
                  <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl backdrop-blur-xl flex-1 overflow-y-auto custom-scrollbar">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                      <Cpu size={14} className="text-red-500" /> Optical Control
                    </h2>

                    <div className="mb-10">
                      <label className="text-[9px] font-mono opacity-40 uppercase block mb-4">Lighting Array</label>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.keys(lightingStyles).map(key => (
                            <button 
                              key={key}
                              onClick={() => setLighting(key as 'cinematic' | 'noir' | 'highkey' | 'cyber')}
                              className={`text-center px-2 py-3 rounded text-[9px] font-bold uppercase tracking-widest transition-all border ${lighting === key ? 'bg-red-600 text-white border-red-600' : 'bg-white/5 border-transparent hover:border-white/20'}`}
                            >
                              {key}
                            </button>
                          ))}
                      </div>
                    </div>

                    <div className="mb-10">
                      <div className="flex justify-between items-center mb-4">
                        <label className="text-[9px] font-mono opacity-40 uppercase">Focal Length</label>
                        <span className="text-[10px] font-bold text-red-500">{focalLength}mm</span>
                      </div>
                      <input 
                        type="range" min="14" max="100" step="1" 
                        value={focalLength} 
                        onChange={(e) => setFocalLength(Number(e.target.value))}
                        className="w-full accent-red-600 bg-zinc-800 h-1 rounded-full appearance-none cursor-pointer"
                      />
                    </div>

                    <div className="mb-10">
                      <label className="text-[9px] font-mono opacity-40 uppercase block mb-4">Color Grading (LUT)</label>
                      <div className="flex flex-wrap gap-2">
                        {Object.keys(colorGrades).map(key => (
                          <button 
                            key={key}
                            onClick={() => setGrade(key as 'natural' | 'teal' | 'vintage' | 'monochrome' | 'warm')}
                            className={`px-3 py-2 rounded text-[8px] font-bold uppercase transition-all ${grade === key ? 'bg-white text-black' : 'bg-zinc-800 opacity-50 hover:opacity-100'}`}
                          >
                            {key}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="text-[9px] font-mono opacity-40 uppercase block mb-2">Sensor Sensitivity (ISO)</label>
                      <div className="flex items-center gap-4">
                        <input 
                          type="range" min="100" max="6400" step="100" 
                          value={iso} 
                          onChange={(e) => setIso(Number(e.target.value))}
                          className="flex-1 accent-red-600 h-1 bg-zinc-800 rounded-full appearance-none"
                        />
                        <span className="text-[10px] font-mono w-10">{iso}</span>
                      </div>
                    </div>
                  </div>
                </aside>

                {/* LAB CENTER: RENDER VIEWPORT */}
                <main className="flex-1 flex flex-col gap-4 relative min-h-[500px]">
                  <div className={`flex-1 rounded-3xl border border-white/10 overflow-hidden relative group bg-zinc-900 transition-all duration-1000 ${lightingStyles[lighting].bg}`}>
                    <div className={`absolute inset-0 transition-shadow duration-1000 ${lightingStyles[lighting].shadow}`} />
                    
                    <div className="absolute top-6 left-6 z-50 flex gap-4">
                      <div className="flex items-center gap-2 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                        <span className="text-[8px] font-mono uppercase tracking-widest">Live Preview</span>
                      </div>
                      <div className="flex items-center gap-2 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
                        <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-500">FPS: 24.00</span>
                      </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <motion.div 
                        animate={{ 
                          scale: 1 + (focalLength - 35) / 200,
                          filter: `blur(${Math.max(0, (focalLength - 50) / 20)}px) ${colorGrades[grade]}`
                        }}
                        className="relative z-10 w-48 h-48 md:w-96 md:h-96 transition-all duration-700"
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="relative">
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-10 bg-black/40 blur-3xl rounded-full scale-150" />
                            <div className="w-32 h-64 bg-zinc-800 rounded-[80px] relative overflow-hidden border border-white/10 shadow-2xl">
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-white/5" />
                              <motion.div 
                                animate={{ opacity: lighting === 'noir' ? 1 : 0.2 }}
                                className="absolute top-0 right-0 w-full h-full bg-white/20 blur-xl translate-x-1/2" 
                              />
                              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1 h-20 bg-white/5 blur-sm" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* HUD Overlay */}
                    <div className="absolute inset-0 p-10 pointer-events-none border-[12px] border-black/20">
                      <div className="h-full w-full border border-white/10 flex flex-col justify-between">
                        <div className="flex justify-between p-6">
                          <div className="text-[10px] font-mono text-white/50 bg-black/50 px-2">LEN: {focalLength}mm</div>
                          <div className="text-[10px] font-mono text-red-500 font-bold bg-black/50 px-2">LOG-C // REC.709</div>
                        </div>
                        <div className="flex justify-center mb-4">
                          <div className="w-12 h-1 border-t border-white/20" />
                        </div>
                        <div className="flex justify-between items-end p-6">
                          <div className="text-[9px] font-mono text-white/30">TC 04:22:12:04</div>
                          <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Shutter: 180°</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>

                {/* LAB RIGHT: RESEARCH */}
                <aside className="w-full lg:w-72 flex flex-col gap-4">
                  <div className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl flex-1 overflow-y-auto custom-scrollbar">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                      <Monitor size={14} className="text-red-500" /> Technical Theory
                    </h3>
                    <div className="space-y-4">
                      {[
                        { title: "Rembrandt Lighting", tag: "LIGHT", desc: "Classic 45-degree angle light that creates a triangle of light on the shadow side." },
                        { title: "Compression", tag: "OPTICS", desc: "Longer lenses flatten the distance between subject and background." },
                        { title: "The 180 Rule", tag: "PACING", desc: "Maintain cinematic motion blur by keeping shutter speed double the frame rate." },
                        { title: "Aspect Ratios", tag: "FORMAT", desc: "2.39:1 (Scope) for epic landscapes vs 1.33:1 (Academy) for intimacy." }
                      ].map((card, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all group">
                          <span className="text-[7px] font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded uppercase tracking-widest">{card.tag}</span>
                          <h4 className="text-[10px] font-black uppercase mt-3 mb-2 tracking-widest group-hover:text-red-500 transition-colors">{card.title}</h4>
                          <p className="text-[9px] leading-relaxed text-zinc-500 font-light">{card.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* NEW: TOOLS & NECESSITIES SECTION (RESTORED & FIXED) */}
      <section className="py-40 bg-[#070708] px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Tool Grid */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">THE <span className="text-red-600">TOOLKIT.</span></h2>
              <p className="text-zinc-500 text-sm mb-12 font-mono uppercase tracking-widest">Necessary instruments for the modern auteur.</p>
              <div className="grid grid-cols-2 gap-4">
                {directorTools.map((tool, i) => {
                  const ToolIcon = tool.icon;
                  return (
                    <div key={i} className="group p-6 bg-zinc-900/30 border border-white/5 rounded-2xl hover:border-red-600/50 transition-all">
                      <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-lg mb-4 text-zinc-500 group-hover:text-red-600 transition-colors">
                        <ToolIcon size={18} />
                      </div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest mb-1">{tool.title}</h4>
                      <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-tighter mb-3">{tool.cat}</p>
                      <p className="text-[10px] text-zinc-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">{tool.desc}</p>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Directing Philosophy */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="bg-zinc-900/20 p-12 rounded-[40px] border border-white/5">
              <div className="flex items-center gap-3 text-red-600 mb-8">
                <Key size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">The Core Philosophy</span>
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-10 leading-none">WHAT IS MOST <br /><span className="text-zinc-700 italic lowercase font-serif font-light">needed?</span></h3>
              
              <div className="space-y-12">
                {directionsDNA.map((dna, i) => {
                  const Icon = dna.icon;
                  return (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-12 h-12 shrink-0 bg-red-600/10 text-red-600 flex items-center justify-center rounded-full border border-red-600/20">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h5 className="font-black uppercase tracking-widest text-sm mb-2">{dna.title}</h5>
                        <p className="text-zinc-400 text-xs leading-relaxed font-light">{dna.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-16 pt-10 border-t border-white/5">
                <blockquote className="text-xl font-serif italic text-zinc-500 leading-relaxed">
                  "The director is simply the first audience member. If you don't feel it, they won't either."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: THE BEGINNER ROADMAP (STARTING FRESH) */}
      <section className="py-40 bg-[#050505] px-6 md:px-16 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-[10px] font-mono text-red-600 uppercase tracking-[1em] mb-4 block">Zero Budget</span>
             <h2 className="text-6xl font-black uppercase tracking-tighter">STARTING <span className="text-zinc-700">FRESH.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {roadmapSteps.map((step, i) => {
               const StepIcon = step.icon;
               return (
                 <div key={i} className="relative p-8 border-l border-white/10 hover:border-red-600 transition-colors group">
                    <div className="absolute top-0 left-[-16px] w-8 h-8 bg-[#050505] border border-white/10 rounded-full flex items-center justify-center text-[10px] font-mono text-zinc-500 group-hover:text-red-600 group-hover:border-red-600 transition-all z-10">
                      <StepIcon size={12} />
                    </div>
                    <span className="text-4xl font-black text-zinc-800 mb-4 block group-hover:text-red-600/20 transition-colors">{step.step}</span>
                    <h4 className="text-xl font-bold uppercase tracking-wide mb-3">{step.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
                 </div>
               )
             })}
          </div>
        </div>
      </section>

      {/* STATIC FOOTER (NO LONGER FIXED) */}
      {/* <footer className="py-20 bg-black flex flex-col items-center justify-center text-center px-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row gap-6 mb-12">
            <button className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-red-600 hover:text-white transition-all">Submit Portfolio</button>
            <button className="px-12 py-5 border border-white/10 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all text-white">Request Mentorship</button>
        </div>
        <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.3em]">
          ©2024 ROHAN_VIRTUAL_FILM_LAB | END OF MODULE 01
        </div>
      </footer> */}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        input[type=range]::-webkit-slider-thumb {
          appearance: none; height: 12px; width: 12px; border-radius: 50%;
          background: white; cursor: pointer; border: 2px solid #dc2626;
        }
        body { cursor: crosshair; }
      `}</style>
    </div>
  );
};

export default App;