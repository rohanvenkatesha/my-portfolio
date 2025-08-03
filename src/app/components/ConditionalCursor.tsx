'use client';

import { usePathname } from "next/navigation";
import SplashCursor from "./SplashCursor";

export default function ConditionalCursor() {
  const pathname = usePathname();
  const noCursorPages = ["/projects/resume-analyzer"];
  const showSplashCursor = !noCursorPages.includes(pathname);

  return showSplashCursor ? <SplashCursor /> : null;
}
