"use client";
import { type LucideIcon } from 'lucide-react';

type StatCardProps = {
  icon: LucideIcon;
  label: string;
  value: string | number;
};

const StatCard = ({ icon: Icon, label, value }: StatCardProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="p-3 bg-white/10 rounded-full border border-white/10">
        <Icon className="w-5 h-5 text-cyan-300" />
      </div>
      <div>
        <p className="text-slate-400 text-sm">{label}</p>
        <p className="font-bold text-white">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;