'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

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
    { name: 'Rides', href: '/rides' },
    { name: 'About', href: '/about' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  } as const;

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-120%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed top-4 left-4 right-4 md:left-0 md:right-0 max-w-3xl mx-auto z-50 flex items-center justify-between py-2 px-3 bg-black/50 backdrop-blur-lg border border-white/10 rounded-full shadow-lg"
      >
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/9.png"
            alt="Logo"
            width={70}
            height={80}
            priority
            className="cursor-pointer w-10 md:w-16 h-auto"
          />
        </Link>

        <ul className="hidden md:flex items-center space-x-6 text-slate-300">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm hover:text-white transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center">
          <Link href="/connect" className="btn btn-primary py-2 px-5 text-sm">
            Let's Connect
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full text-slate-300 hover:text-white focus:outline-none bg-white/5"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden fixed inset-0 top-[76px] z-40 bg-black/80 backdrop-blur-xl"
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-2xl text-slate-200 hover:gradient-text transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/connect"
                  className="btn btn-primary mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let's Connect
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
