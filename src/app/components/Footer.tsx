"use client";

import Link from 'next/link';
import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Rides', href: '/rides' },
    { name: 'About', href: '/about' },
    { name: 'Connect', href: '/connect' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/rohanvenkatesha' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/rohan-venkatesha/' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/rohan.v10' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 py-12 px-4 md:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-gray-800 border border-white/10 hover:bg-gradient-to-br from-purple-500 to-cyan-400 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
        </button>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold gradient-text">Rohan Venkatesha</h3>
          <p className="mt-2 text-slate-400 text-sm">
            Engineer by Trade, Explorer by Heart.
          </p>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-slate-200 mb-4">Navigate</h4>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-slate-400 hover:text-white transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Closing Message */}
        <div className="flex flex-col items-center md:items-end">
           <h4 className="font-semibold text-slate-200 mb-4">Get In Touch</h4>
           <p className="text-slate-400 text-sm max-w-xs text-center md:text-right">
             Have a project in mind or want to talk about travel? Let&apos;s connect.
           </p>
           <Link href="/connect" className="btn btn-primary mt-4">
              Contact Me
           </Link>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Rohan Venkatesha. All Journeys Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;