'use client';

import { usePathname } from "next/navigation";
import SplashCursor from "./SplashCursor";

export default function ConditionalCursor() {
  const pathname = usePathname();

  // List of exact page paths to disable the cursor on
  const disabledExactPaths = [
    "/projects/resume-analyzer",
  ];

  // List of folder prefixes to disable the cursor on
  // In the future, just add new paths here, e.g., '/blog'
  const disabledPrefixes = [
    "/rides",
  ];

  // New, scalable logic
  const isPathDisabled = disabledExactPaths.includes(pathname);
  const isPrefixDisabled = disabledPrefixes.some(prefix => pathname.startsWith(prefix));

  const showSplashCursor = !isPathDisabled && !isPrefixDisabled;

  return showSplashCursor ? <SplashCursor /> : null;
}