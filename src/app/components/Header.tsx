// "use client";

// import { useEffect, useState, useRef } from "react";
// // We are using standard anchor `<a>` tags for navigation.
// import { Home, AppWindow, Code, CircleUserRound, Bike, Mail, Film } from "lucide-react";

// // --- Configuration for Navigation Items ---
// // Centralized array for easy management of navigation links.
// // Icons have been updated for better representation.
// const navItems = [
//   { id: "home", label: "Home", href: "/", Icon: Home, color: "text-cyan-400" },
//   { id: "projects", label: "Projects", href: "/projects", Icon: AppWindow, color: "text-green-400" },
//   { id: "skills", label: "Skills", href: "/#skills", Icon: Code, color: "text-blue-400" },
//   { id: "about", label: "About", href: "/about", Icon: CircleUserRound, color: "text-yellow-400" },
//   { id: "rides", label: "Rides", href: "/rides", Icon: Bike, color: "text-pink-400" },
//   { id: "contact", label: "Contact", href: "/connect", Icon: Mail, color: "text-purple-400" },
//   { id: "film", label: "Film", href: "/film", Icon: Film, color: "text-red-400" },
// ];

// /**
//  * DockNav Component
//  * A responsive, auto-hiding navigation dock for websites.
//  * It appears at the top of the viewport and intelligently hides on scroll-down
//  * and reappears on scroll-up for an unobtrusive user experience.
//  */
// export default function DockNav() {
//   // State to control the visibility of the dock.
//   const [isHidden, setIsHidden] = useState(false);
//   // Ref to store the last scroll position to determine scroll direction.
//   const lastScrollY = useRef(0);

//   useEffect(() => {
//     /**
//      * Handles the window's scroll event to show or hide the navigation dock.
//      */
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Hide the dock if scrolling down past a certain threshold (100px)
//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setIsHidden(true);
//       } else {
//         // Show the dock if scrolling up
//         setIsHidden(false);
//       }
//       // Update the last scroll position
//       lastScrollY.current = currentScrollY;
//     };

//     // Add scroll event listener when the component mounts
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     // Cleanup: remove the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ease-in-out ${
//         isHidden ? "-translate-y-24" : "translate-y-0"
//       }`}
//       aria-label="Main navigation"
//     >
//       {/* Updated background for a more glassy effect */}
//       <div className="flex items-center gap-2 bg-black/20 backdrop-blur-xl px-0 py-3 rounded-full border border-white/10 shadow-2xl shadow-black/20">
//         {navItems.map((item) => (
//           <a key={item.id} href={item.href}>
//             <div className="group relative flex flex-col items-center cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-1">
//               {/* Tooltip showing the label, appears on hover */}
//               <span className="absolute -top-8 px-2 py-1 text-xs text-white bg-gray-800/80 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                 {item.label}
//               </span>
//               {/* Icon container with persistent color and background hover effect */}
//               <div className={`p-3 rounded-full transition-colors duration-300 group-hover:bg-white/10 ${item.color}`}>
//                 <item.Icon size={22} />
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// }



"use client";

import { useEffect, useState, useRef } from "react";
import { 
  Home, 
  AppWindow, 
  CircleUserRound, 
  Bike, 
  Mail, 
  Film, 
  LayoutGrid,
  Zap,
  Activity,
  Cpu,
  Wifi,
  Database
} from "lucide-react";

// Updated navItems to include a base color class that is always active
const navItems = [
  { id: "home", label: "Home", href: "/", Icon: Home, color: "text-cyan-400" },
  { id: "projects", label: "Archive", href: "/projects", Icon: AppWindow, color: "text-green-400" },
  { id: "rides", label: "Rides", href: "/rides", Icon: Bike, color: "text-pink-400" },
  { id: "film", label: "Film", href: "/film", Icon: Film, color: "text-red-400" },
  { id: "about", label: "About", href: "/about", Icon: CircleUserRound, color: "text-yellow-400" },
  { id: "contact", label: "Contact", href: "/connect", Icon: Mail, color: "text-purple-400" },
];

export default function DockNav() {
  const [isHidden, setIsHidden] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Auto-hide logic for top placement
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
        setIsExpanded(false);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isHidden ? "-translate-y-40 opacity-0" : "translate-y-0 opacity-100"
      }`}
      aria-label="Advanced Command Interface"
    >
      <div className="relative group">
        
        {/* 01. TACTICAL SUB-BAR */}
        <div className="mb-3 flex justify-between items-center px-6">
           <div className="flex gap-1.5">
              {[0, 1, 2].map(i => (
                <div key={i} className="flex gap-[2px]">
                   <div className={`w-1 h-1 rounded-full ${scrollProgress > (i * 33) ? 'bg-cyan-500' : 'bg-white/10'} transition-colors duration-500`} />
                </div>
              ))}
           </div>
           <div className="flex items-center gap-3">
              <span className="text-[7px] font-black tracking-[0.4em] text-zinc-600 uppercase">Session_0{Math.floor(scrollProgress / 10)}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
           </div>
        </div>

        {/* 02. MAIN COMMAND STRIP */}
        <div className="relative flex items-center bg-black/60 backdrop-blur-2xl border border-white/10 p-1.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Scroll Progress Bar */}
          <div 
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300" 
            style={{ width: `${scrollProgress}%` }}
          />
          
          {/* Left: Branding/Status */}
          <div className="flex items-center gap-1 px-3 border-r border-white/10 mr-1 py-1">
            <div className="relative">
              <Zap size={16} fill="currentColor" className="text-cyan-500 animate-pulse" />
              <div className="absolute inset-0 bg-cyan-500 blur-sm opacity-20" />
            </div>
            <div className="hidden sm:flex flex-col ml-1">
              <span className="text-[7px] font-black tracking-widest text-zinc-500 uppercase">RV</span>
              <span className="text-[10px] font-bold text-white tracking-tighter uppercase leading-none">Journal</span>
            </div>
          </div>

          {/* Center: Navigation Nodes */}
          <div className="flex items-center gap-0.5 sm:gap-1 px-1">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={item.href}
                className="group/item relative p-3 rounded-full hover:bg-white/5 transition-all duration-300"
              >
                {/* Tooltip */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-lg opacity-0 group-hover/item:opacity-100 transition-all duration-300 pointer-events-none transform -translate-y-2 group-hover/item:translate-y-0 shadow-xl">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
                
                {/* Icons now use persistent color classes with a subtle scale-up on hover */}
                <item.Icon 
                  size={19} 
                  className={`transition-all duration-300 group-hover/item:scale-125 ${item.color}`} 
                />
              </a>
            ))}
          </div>

          {/* Right: Expand Utility */}
          <div className="flex items-center pl-1 ml-1 border-l border-white/10 gap-2 pr-1">
             <button 
               onClick={() => setIsExpanded(!isExpanded)}
               className={`p-3 rounded-full transition-all duration-500 ${
                 isExpanded 
                 ? 'bg-cyan-500 text-black rotate-[225deg] shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                 : 'text-zinc-400 hover:text-white hover:bg-white/5'
               }`}
               aria-label="Expand Control Center"
             >
                <LayoutGrid size={18} />
             </button>
          </div>
        </div>

        {/* 03. EXPANDED CONTROL CENTER */}
        <div 
          className={`absolute top-[calc(100%+1rem)] left-0 w-full bg-black/80 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 origin-top ${
            isExpanded ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
               <span className="text-[10px] font-black text-cyan-500 tracking-[0.3em] uppercase flex items-center gap-2">
                 <Activity size={12} /> System_Diagnostics
               </span>
               <span className="text-[8px] font-mono text-zinc-500 tracking-tighter">BUILD_V5.4.1.REV_02</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
               {[
                 { label: 'Core', icon: Cpu, val: '24%', col: 'text-green-500' },
                 { label: 'Sync', icon: Wifi, val: 'Active', col: 'text-blue-500' },
                 { label: 'Cache', icon: Database, val: '0.4GB', col: 'text-purple-500' }
               ].map((stat, i) => (
                 <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col items-center">
                    <stat.icon size={14} className={`${stat.col} mb-2`} />
                    <span className="text-[7px] text-zinc-500 uppercase font-black">{stat.label}</span>
                    <span className="text-[10px] font-bold text-white tracking-tighter">{stat.val}</span>
                 </div>
               ))}
            </div>

            <div className="pt-2">
               <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 animate-[pulse_2s_infinite]" style={{ width: '65%' }} />
               </div>
               <div className="flex justify-between mt-2 text-[8px] font-black text-zinc-600 uppercase">
                  <span>Resource_Usage</span>
                  <span>Optimal</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}