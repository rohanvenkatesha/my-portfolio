"use client";

import { type Ride, type RideDetails } from "@/lib/rides";
import {
  MapPin,
  Timer,
  Bike,
  Gauge,
  Wallet,
  Wrench,
  Camera,
  Map,
} from "lucide-react";
import StatCard from "../StatCard";
import { motion } from "framer-motion";

type RideSidebarProps = {
  rideSummary: Ride;
  rideDetails: RideDetails;
};

const RideSidebar = ({ rideSummary, rideDetails }: RideSidebarProps) => {
  return (
    <aside className="lg:col-span-1">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-28 space-y-8"
      >
        {/* Key Statistics */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border border-white/10 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-cyan-400" size={18} />
            <h3 className="text-lg font-semibold text-white tracking-wide">
              Key Statistics
            </h3>
          </div>
          <div className="grid gap-4">
            <StatCard
              icon={MapPin}
              label="Total Distance"
              value={`${rideSummary.distance} km`}
            />
            <StatCard icon={Timer} label="Duration" value={rideSummary.duration} />

            {rideDetails.stats?.bike && (
              <StatCard
                icon={Bike}
                label="Bike Used"
                value={rideDetails.stats.bike}
              />
            )}

            {rideDetails.stats?.topSpeed && (
              <StatCard
                icon={Gauge}
                label="Top Speed"
                value={rideDetails.stats.topSpeed}
              />
            )}

            {rideDetails.stats?.cost && (
              <StatCard
                icon={Wallet}
                label="Estimated Cost"
                value={rideDetails.stats.cost}
              />
            )}
          </div>
        </div>

        {/* Gear & Equipment */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border border-white/10 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="text-cyan-400" size={18} />
            <h3 className="text-lg font-semibold text-white tracking-wide">
              Gear & Equipment
            </h3>
          </div>
          <div className="space-y-5">
            {rideDetails.gear.map((gearCat) => (
              <motion.div
                key={gearCat.category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-semibold text-slate-200 flex items-center gap-2 mb-2">
                  {gearCat.category === "Motorcycle" ? (
                    <Wrench size={14} />
                  ) : (
                    <Camera size={14} />
                  )}
                  {gearCat.category}
                </h4>
                <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                  {gearCat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Route Map */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border border-white/10 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Map className="text-cyan-400" size={18} />
            <h3 className="text-lg font-semibold text-white tracking-wide">
              Route Map
            </h3>
          </div>
          <div className="aspect-square rounded-xl overflow-hidden border border-cyan-400/30 bg-gray-900 flex items-center justify-center text-slate-500">
            <p className="text-center text-sm px-3">
              Interactive Map <br /> Coming Soon
            </p>
          </div>
        </div>
      </motion.div>
    </aside>
  );
};

export default RideSidebar;
