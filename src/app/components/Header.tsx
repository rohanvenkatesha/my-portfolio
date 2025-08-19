"use client";

import { useEffect, useState, useRef } from "react";
// We are using standard anchor `<a>` tags for navigation.
import { Home, AppWindow, Code, CircleUserRound, Bike, Mail } from "lucide-react";

// --- Configuration for Navigation Items ---
// Centralized array for easy management of navigation links.
// Icons have been updated for better representation.
const navItems = [
  { id: "home", label: "Home", href: "/", Icon: Home, color: "text-red-400" },
  { id: "projects", label: "Projects", href: "/projects", Icon: AppWindow, color: "text-green-400" },
  { id: "skills", label: "Skills", href: "/#skills", Icon: Code, color: "text-blue-400" },
  { id: "about", label: "About", href: "/about", Icon: CircleUserRound, color: "text-yellow-400" },
  { id: "rides", label: "Rides", href: "/rides", Icon: Bike, color: "text-pink-400" },
  { id: "contact", label: "Contact", href: "/connect", Icon: Mail, color: "text-purple-400" },
];

/**
 * DockNav Component
 * A responsive, auto-hiding navigation dock for websites.
 * It appears at the top of the viewport and intelligently hides on scroll-down
 * and reappears on scroll-up for an unobtrusive user experience.
 */
export default function DockNav() {
  // State to control the visibility of the dock.
  const [isHidden, setIsHidden] = useState(false);
  // Ref to store the last scroll position to determine scroll direction.
  const lastScrollY = useRef(0);

  useEffect(() => {
    /**
     * Handles the window's scroll event to show or hide the navigation dock.
     */
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide the dock if scrolling down past a certain threshold (100px)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        // Show the dock if scrolling up
        setIsHidden(false);
      }
      // Update the last scroll position
      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ease-in-out ${
        isHidden ? "-translate-y-24" : "translate-y-0"
      }`}
      aria-label="Main navigation"
    >
      {/* Updated background for a more glassy effect */}
      <div className="flex items-center gap-2 bg-black/20 backdrop-blur-xl px-4 py-3 rounded-full border border-white/10 shadow-2xl shadow-black/20">
        {navItems.map((item) => (
          <a key={item.id} href={item.href}>
            <div className="group relative flex flex-col items-center cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-1">
              {/* Tooltip showing the label, appears on hover */}
              <span className="absolute -top-8 px-2 py-1 text-xs text-white bg-gray-800/80 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {item.label}
              </span>
              {/* Icon container with persistent color and background hover effect */}
              <div className={`p-3 rounded-full transition-colors duration-300 group-hover:bg-white/10 ${item.color}`}>
                <item.Icon size={22} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
}
