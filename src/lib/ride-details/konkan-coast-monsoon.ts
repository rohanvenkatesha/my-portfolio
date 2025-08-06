// lib/ride-details/konkan-coast-monsoon.ts

import { type RideDetails } from "@/lib/rides";

export const details: RideDetails = {
  galleryImages: [
    {
      src: "/rides/konkan-coast/gallery-1.jpg",
      caption: "Fishing boats bobbing in the early morning at Gokarna harbor.",
    },
    {
      src: "/rides/konkan-coast/gallery-2.jpg",
      caption: "Monsoon clouds gathering over the ancient fort at Ratnagiri.",
    },
    {
      src: "/rides/konkan-coast/gallery-3.jpg",
      caption: "Lush green coconut groves lining the coastal roads.",
    },
    {
      src: "/rides/konkan-coast/gallery-4.jpg",
      caption: "A vibrant street festival celebrating local culture and monsoon spirit.",
    },
    // Add more images if you want
  ],
  story:
    "The Konkan Coast monsoon ride is a sensory feast—lush greenery, roaring seas, and vibrant villages. Riding through the rain-drenched coastline, you’ll discover ancient forts, pristine beaches, and the warm hospitality of fishing communities. The Arabian Sea is your constant companion on this 7-day adventure filled with culture, nature, and epic monsoon magic.",
  itinerary: [
    {
      day: 1,
      route: "Mumbai to Gokarna",
      distance: 420,
      description: "Start the journey heading south along the coastline, feeling the monsoon breeze.",
    },
    {
      day: 2,
      route: "Gokarna to Ratnagiri",
      distance: 150,
      description: "Explore historic forts and sample fresh seafood in vibrant markets.",
    },
    {
      day: 3,
      route: "Ratnagiri to Malvan",
      distance: 150,
      description: "Ride through coconut groves to the serene beaches of Malvan.",
    },
    // Add more itinerary days here
  ],
  stats: {
    bike: "Bajaj Dominar 400",
    topSpeed: "110 km/h",
    cost: "~$350 USD",
  },
  gear: [
    {
      category: "Motorcycle",
      items: ["Bajaj Dominar 400", "Rainproof Jacket", "Waterproof Panniers"],
    },
    {
      category: "Photography",
      items: ["GoPro Hero 11", "Smartphone with waterproof case"],
    },
  ],
};
