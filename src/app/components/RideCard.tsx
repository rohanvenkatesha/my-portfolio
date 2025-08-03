import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { type Ride } from '@/lib/rides';
import { Timer, Map } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const RideCard = ({ ride }: { ride: Ride }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group"
    >
      <Link href={`/rides/${ride.slug}`}>
        <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 border border-white/10 shadow-md group-hover:shadow-lg transition-shadow duration-300">
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Image
              src={ride.image}
              alt={ride.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Status badge */}
          <div className="absolute top-3 right-3 bg-black/60 px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm">
            {ride.status}
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 transition-colors duration-300"></div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white">{ride.title}</h3>
          </div>
        </div>

        {/* Details */}
        <div className="flex justify-between items-center text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <Map size={14} /> {ride.distance} km
          </span>
          <span className="flex items-center gap-2">
            <Timer size={14} /> {ride.duration}
          </span>
          <span className="font-semibold text-cyan-300">{ride.category}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default RideCard;
