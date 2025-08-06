"use client";

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
  const statusColor =
    rideSummary.status === "Completed" ? "text-green-400" : "text-purple-400";

  return (
    <div className="text-white">
      <p className="text-cyan-300 font-semibold text-lg">
        {rideSummary.category} Journey
      </p>

      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1 drop-shadow-xl">
        {rideSummary.title}
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-3 text-slate-300">
        <span className="flex items-center gap-2">
          <MapPin size={16} /> {rideSummary.distance} km
        </span>
        <span className="flex items-center gap-2">
          <Timer size={16} /> {rideSummary.duration}
        </span>
        <span className={`flex items-center gap-2 font-semibold ${statusColor}`}>
          <StatusIcon size={16} /> {rideSummary.status}
        </span>
      </div>
    </div>
  );
}
