"use client";

import { type Ride, type RideDetails } from "@/lib/rides";
import dynamic from "next/dynamic";
import {
  MapPin,
  Timer,
  Bike,
  Gauge,
  Wallet,
  Wrench,
  Camera,
  Map as MapIcon,
} from "lucide-react";
import StatCard from "../StatCard";

// Lazy load the map only when needed
const RideMap = dynamic(() => import("./RideMap"), { ssr: false });

type RideSidebarProps = {
  rideSummary: Ride;
  rideDetails: RideDetails;
};

const RideSidebar = ({ rideSummary, rideDetails }: RideSidebarProps) => {

  const routeCoordinates = rideDetails.itinerary
  .filter(stop => typeof stop.lat === "number" && typeof stop.lng === "number")
  .map(stop => ({
    lat: stop.lat!,
    lng: stop.lng!,
    name: stop.city ? stop.city : "Unknown city",
  }));


  return (
    <aside className="lg:col-span-1 sticky top-24 space-y-8">
      {/* Key Statistics */}
      <div
        className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 
          backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="text-cyan-400" size={18} />
          <h3 className="text-lg font-semibold text-white tracking-wide">
            Key Statistics
          </h3>
        </div>
        <div className="grid gap-4">
          <StatCard icon={MapPin} label="Total Distance" value={`${rideSummary.distance} km`} />
          <StatCard icon={Timer} label="Duration" value={rideSummary.duration} />
          {rideDetails.stats?.bike && (
            <StatCard icon={Bike} label="Bike Used" value={rideDetails.stats.bike} />
          )}
          {rideDetails.stats?.topSpeed && (
            <StatCard icon={Gauge} label="Top Speed" value={rideDetails.stats.topSpeed} />
          )}
          {rideDetails.stats?.cost && (
            <StatCard icon={Wallet} label="Estimated Cost" value={rideDetails.stats.cost} />
          )}
        </div>
      </div>

      {/* Gear & Equipment */}
      <div
        className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 
          backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <div className="flex items-center gap-2 mb-4">
          <Wrench className="text-cyan-400" size={18} />
          <h3 className="text-lg font-semibold text-white tracking-wide">
            Gear & Equipment
          </h3>
        </div>
        <div className="space-y-5">
          {rideDetails.gear.map((gearCat) => (
            <div key={gearCat.category}>
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
            </div>
          ))}
        </div>
      </div>

      {/* Route Map */}
      <div
        className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 
          backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <div className="flex items-center gap-2 mb-4">
          <MapIcon className="text-cyan-400" size={18} />
          <h3 className="text-lg font-semibold text-white tracking-wide">Route Map</h3>
        </div>
        <div className="aspect-square rounded-xl overflow-hidden border border-cyan-400/30 bg-gray-900">
          {routeCoordinates.length > 0 ? (
            <RideMap route={routeCoordinates} />
          ) : (
            <p className="text-center text-sm px-3 py-6 text-slate-500">
              No route data available
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default RideSidebar;
