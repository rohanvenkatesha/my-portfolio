"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i?: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i ?? 0) * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function AnimatedSection({
  children,
  delayIndex = 0,
  className = "",
}: {
  children: ReactNode;
  delayIndex?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delayIndex}
      className={className}
    >
      {children}
    </motion.div>
  );
}
