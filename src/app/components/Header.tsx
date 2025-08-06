'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'About', href: '/about' },
    { name: 'Rides', href: '/rides' },
  ];
  const aboutSubLinks = [
    { name: 'Work Experience', href: '/about#experience' },
    { name: 'Education', href: '/about#education' },
    { name: 'Awards', href: '/about#awards' },
    { name: 'Code → Kilometers', href: '/about#travelbio' },
  ];

  // --- Projects Page Sublinks ---
  const projectSubLinks = [
    { name: 'Featured Projects', href: '/#projects' },
    { name: 'Live Demos', href: '/#live-demos' },
  ];
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,
      transition: { duration: 0.2, ease: 'easeInOut' },
      transitionEnd: { display: 'none' }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      display: 'block',
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
  } as const; // Add 'as const' here to fix the type error

  return (
    <>
<motion.header
  variants={{ visible: { y: 0 }, hidden: { y: '-120%' } }}
  animate={hidden ? 'hidden' : 'visible'}
  transition={{ duration: 0.35, ease: 'easeInOut' }}
className="
    fixed top-4 inset-x-8 max-w-[90vw] md:inset-x-0 md:max-w-4xl mx-auto z-50
    flex items-center justify-between py-1.5 md:py-2 px-3
    bg-black/20 backdrop-blur-lg border border-white/10 rounded-full gradient-shadow
  "
  >

<Link href="/" onClick={() => setIsMenuOpen(false)}>
<Image
  src="/logos/8.png"
  alt="Logo"
  width={70}
  height={80}
  priority
  className="cursor-pointer w-12 md:w-16 h-auto"  // w-8 on mobile (smaller than w-10)
/>
</Link>


        <ul className="hidden md:flex items-center space-x-9 text-slate-300">
          {navItems.map((item) => (
            <motion.li 
              key={item.name} 
              className="relative"
              whileHover="visible"
              initial="hidden"
              animate="hidden"
            >
              <Link href={item.href} className="text-sm hover:text-white transition-colors duration-300 flex items-center gap-1">
                {item.name}
                {(item.name === 'About' || item.name === 'Projects') && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
              </Link>
              
              {(item.name === 'About' || item.name === 'Projects') && (
                <motion.ul
                  variants={dropdownVariants}
                  className="absolute left-0 top-full mt-2 bg-black backdrop-blur-lg border border-white/10 rounded-lg shadow-lg min-w-[200px]"
                >
                  {(item.name === 'About' ? aboutSubLinks : projectSubLinks).map((sub) => (
                    <li key={sub.name}>
                      <Link href={sub.href} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10">{sub.name}</Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center">
          <Link href="/connect" className="btn btn-primary py-2 px-5 text-sm">Let&apos;s Connect</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full text-slate-300 hover:text-white bg-white/5" aria-label="Toggle menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 top-[88px] z-40 bg-black/80 backdrop-blur-xl"
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-4">
              {navItems.map((item) => (
                <li key={item.name} className="text-center w-full">
                  <div
                    onClick={() => {
                      if (item.name === 'About' || item.name === 'Projects') {
                        setOpenAccordion(openAccordion === item.name ? null : item.name);
                      } else {
                        setIsMenuOpen(false);
                        window.location.href = item.href;
                      }
                    }}
                    className="flex items-center justify-center gap-2 text-2xl text-slate-200 hover:gradient-text transition-colors duration-300 py-2"
                  >
                    <span>{item.name}</span>
                    {(item.name === 'About' || item.name === 'Projects') && <ChevronDown size={20} className={`transition-transform ${openAccordion === item.name ? 'rotate-180' : ''}`} />}
                  </div>

                  <AnimatePresence>
                    {openAccordion === item.name && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: '8px' }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden space-y-2"
                      >
                        {(item.name === 'About' ? aboutSubLinks : projectSubLinks).map((sub) => (
                          <li key={sub.name}>
                            <Link href={sub.href} className="block text-base text-slate-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>{sub.name}</Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
              <li><Link href="/connect" className="btn btn-primary mt-6" onClick={() => setIsMenuOpen(false)}>Let&apos;s Connect</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;