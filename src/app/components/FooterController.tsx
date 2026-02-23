"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterController() {
  const pathname = usePathname();

  const hideFooterOn = ["/film"];

  if (hideFooterOn.includes(pathname)) return null;

  return <Footer />;
}