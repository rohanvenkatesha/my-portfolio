'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashCursor from "./SplashCursor";
import { GlowingBackground } from "./GlowingBackground";

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

  // Paths where splash or background should be disabled
  const disabledExactPaths = ["/projects/resume-analyzer"];

  const isExactDisabled = disabledExactPaths.includes(pathname);

  // Show splash cursor only on mobile, except disabled paths
  const showSplashCursor = isMobile && !isExactDisabled;

  // Show glowing background only on desktop, except disabled paths
  const showGlowingBackground = !isMobile && !isExactDisabled;

  return (
    <>
      {showSplashCursor && <SplashCursor />}
      {showGlowingBackground && <GlowingBackground />}
    </>
  );
}
