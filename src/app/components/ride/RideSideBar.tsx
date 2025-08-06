"use client";
import { type Ride, type RideDetails } from '@/lib/rides';
import { MapPin, Timer, Bike, Gauge, Wallet, Wrench, Camera } from 'lucide-react';
import StatCard from '../StatCard';

type RideSidebarProps = {
  rideSummary: Ride;
  rideDetails: RideDetails;
};

const RideSidebar = ({ rideSummary, rideDetails }: RideSidebarProps) => {
  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-28 space-y-8">
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Key Statistics</h3>
          <div className="space-y-4">
<div className="space-y-4">
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
        </div>
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Gear & Equipment</h3>
          <div className="space-y-4">
            {rideDetails.gear.map(gearCat => (
              <div key={gearCat.category}>
                <h4 className="font-semibold text-slate-200 flex items-center gap-2 mb-2">
                  {gearCat.category === "Motorcycle" ? <Wrench size={16}/> : <Camera size={16}/>}
                  {gearCat.category}
                </h4>
                <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                  {gearCat.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Route Map</h3>
          <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center text-slate-500">
            <p>Interactive Map Coming Soon</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RideSidebar;