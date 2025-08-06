/* eslint-disable @typescript-eslint/no-explicit-any */

import { rides, type RideDetails, type Ride } from "@/lib/rides";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BodyClassName from "@/app/components/BodyClassName";
import RideGallery from "@/app/components/ride/RideGallery";
import RideSidebar from "@/app/components/ride/RideSideBar";
import RideHeader from "@/app/components/ride/RideHeader";
import AnimatedSection from "@/app/components/ride/AnimatedSection";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return rides
    .filter((ride) => !!ride.slug) // only rides with a slug
    .map((ride) => ({ slug: ride.slug! }));
}


export default async function RidePage({ params }: any) {
  const rideSummary = rides.find((ride) => ride.slug === params.slug);
  if (!rideSummary) notFound();

  if (!rideSummary) {
    redirect("/rides/stay-tuned");
  }

  let rideDetailsModule;
  try {
    rideDetailsModule = await import(`@/lib/ride-details/${params.slug}`);
  } catch {
    notFound();
  }
  const rideDetails: RideDetails = rideDetailsModule.details;
  if (!rideDetails) notFound();

  // Select other rides (prev, next, random)
  const currentIndex = rides.findIndex((r) => r.slug === rideSummary.slug);
  const beforeRide = currentIndex > 0 ? rides[currentIndex - 1] : null;
  const afterRide = currentIndex < rides.length - 1 ? rides[currentIndex + 1] : null;
  const excludeSlugs = new Set([rideSummary.slug, beforeRide?.slug, afterRide?.slug]);
  const remainingRides = rides.filter((r) => !excludeSlugs.has(r.slug));
  const randomRide = remainingRides.length
    ? remainingRides[Math.floor(Math.random() * remainingRides.length)]
    : null;
  const ridesToShow: Ride[] = [beforeRide, afterRide, randomRide].filter(
    (r): r is Ride => r !== null
  );

  return (
    <>
      <BodyClassName className="bg-default" />
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-16">
        {/* Main content + sidebar grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* --- Main Content (Left 2 cols) --- */}
          <div className="lg:col-span-2 prose prose-invert prose-lg max-w-none text-slate-300">
            {/* Banner with image + overlay + header */}
            <AnimatedSection className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 not-prose mb-12">
              <Image
                src={rideSummary.image}
                alt={rideSummary.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
                <RideHeader rideSummary={rideSummary} />
              </div>
            </AnimatedSection>

            {/* Story */}
            <AnimatedSection>
              <h2 className="gradient-text py-2">The Story</h2>
              <p>{rideDetails.story}</p>
            </AnimatedSection>

            {/* Itinerary */}
            <AnimatedSection className="!mt-16">
              <h2 className="gradient-text py-5">Day-by-Day Itinerary</h2>
              <div className="space-y-8 not-prose border-l-2 border-white/10 ml-2">
                {rideDetails.itinerary.map((item, i) => (
                  <AnimatedSection key={item.day} delayIndex={i} className="relative pl-8">
                    <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-800 border-2 border-cyan-400 rounded-full" />
                    <p className="font-bold text-white">
                      Day {item.day}: {item.route}
                    </p>
                    <p className="text-sm text-slate-400">
                      {item.distance} km - {item.description}
                    </p>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* Gallery */}
            <AnimatedSection className="!mt-16">
              <h2 className="gradient-text py-5">Photo Gallery</h2>
              <RideGallery images={rideDetails.galleryImages} rideTitle={rideSummary.title} />
            </AnimatedSection>
          </div>

          {/* --- Right Column: Video (if any) + Sidebar --- */}
          <div className="flex flex-col gap-8">
            {rideDetails.youtubeVideoId && (
              <AnimatedSection>
                <h2 className="gradient-text mb-4">Ride Video</h2>
                <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    src={`https://www.youtube.com/embed/${rideDetails.youtubeVideoId}`}
                    title="Ride Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </AnimatedSection>
            )}

            <AnimatedSection delayIndex={1}>
              <RideSidebar rideSummary={rideSummary} rideDetails={rideDetails} />
            </AnimatedSection>
          </div>
        </div>

        {/* --- Explore Other Rides BELOW the grid --- */}
        <AnimatedSection className="mt-20">
          <h2 className="gradient-text mb-6">Explore Other Rides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ridesToShow.map((r, i) => (
              <AnimatedSection key={r.slug} delayIndex={i}>
                <Link
                  href={`/rides/${r.slug}`}
                  className="group block rounded-lg overflow-hidden border border-white/10 hover:border-cyan-400 transition"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 bg-slate-900">
                    <h3 className="text-white font-semibold text-lg truncate">{r.title}</h3>
                    <p className="text-slate-400 mt-1 line-clamp-2">{r.description}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </main>
    </>
  );
}
