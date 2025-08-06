// src/app/rides/stay-tuned/page.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StayTunedPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black/20 text-white px-4 text-center">
      {/* Big Icon / Emoji */}
      <div className="text-6xl mb-6 animate-bounce">🏍️</div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        🚧 Ride Story Coming Soon!
      </h1>

      {/* Subtitle */}
      <p className="text-base md:text-lg text-slate-400 max-w-xl mb-8">
        This adventure isn’t ready just yet. We’re working hard to bring you an
        amazing ride story. Check back soon for all the details, pictures, and
        maps.
      </p>

      {/* Back Button */}
      <Link
        href="/rides"
        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
      >
        <ArrowLeft size={18} />
        Back to Rides
      </Link>
    </main>
  );
}
