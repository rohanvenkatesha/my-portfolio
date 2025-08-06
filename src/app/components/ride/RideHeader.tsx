"use client";

import { motion } from "framer-motion";
import { MapPin, Timer, CheckCircle, CalendarClock } from "lucide-react";

interface RideSummary {
  category: string;
  title: string;
  distance: number | string;
  duration: string;
  status: "Completed" | string;
}

export default function RideHeader({ rideSummary }: { rideSummary: RideSummary }) {
  const StatusIcon = rideSummary.status === "Completed" ? CheckCircle : CalendarClock;
  const statusColor = rideSummary.status === "Completed" ? "text-green-400" : "text-purple-400";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
      className="text-white"
    >
      <motion.p
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="text-cyan-300 font-semibold text-lg"
      >
        {rideSummary.category} Journey
      </motion.p>
      <motion.h1
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1 drop-shadow-xl"
      >
        {rideSummary.title}
      </motion.h1>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-3 text-slate-300"
      >
        <span className="flex items-center gap-2">
          <MapPin size={16} /> {rideSummary.distance} km
        </span>
        <span className="flex items-center gap-2">
          <Timer size={16} /> {rideSummary.duration}
        </span>
        <span className={`flex items-center gap-2 font-semibold ${statusColor}`}>
          <StatusIcon size={16} /> {rideSummary.status}
        </span>
      </motion.div>
    </motion.div>
  );
}
