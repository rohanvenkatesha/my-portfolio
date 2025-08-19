'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashCursor from "./SplashCursor";

export default function ConditionalCursor() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Disabled for *all devices*
  const disabledExactPaths = [
    "/projects/resume-analyzer",
  ];

  // Disabled only on desktop
  const disabledDesktopPrefixes = [
    "/rides", "/about", "/projects", "/"
  ];

  // Disabled only on mobile
  const disabledMobilePrefixes = [
    "/rides", "/about", "/projects"
  ];

  // --- Logic ---
  const isExactDisabled = disabledExactPaths.includes(pathname);

  const isPrefixDisabled = isMobile
    ? disabledMobilePrefixes.some(prefix => pathname.startsWith(prefix))
    : disabledDesktopPrefixes.some(prefix => pathname.startsWith(prefix));

  const showSplashCursor = !isExactDisabled && !isPrefixDisabled;

  return showSplashCursor ? <SplashCursor /> : null;
}
