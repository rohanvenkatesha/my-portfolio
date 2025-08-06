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
    {
      src: "/rides/konkan-coast/gallery-5.jpg",
      caption: "Sunset hues reflecting off the Arabian Sea at Malvan beach.",
    },
    {
      src: "/rides/konkan-coast/gallery-6.jpg",
      caption: "Traditional Konkani boats anchored near a quaint village pier.",
    },
  ],
  story:
    "The Konkan Coast monsoon ride is a sensory feast—lush greenery, roaring seas, and vibrant villages. Riding through the rain-drenched coastline, you’ll discover ancient forts, pristine beaches, and the warm hospitality of fishing communities. The Arabian Sea is your constant companion on this 7-day adventure filled with culture, nature, and epic monsoon magic.",
  itinerary: [
    {
      day: 1,
      route: "Mumbai to Gokarna",
      distance: 420,
      description: "Start the journey heading south along the coastline, feeling the monsoon breeze.",
      lat: 14.5479,
      lng: 74.3188,
      city: "Gokarna",
    },
    {
      day: 2,
      route: "Gokarna to Ratnagiri",
      distance: 150,
      description: "Explore historic forts and sample fresh seafood in vibrant markets.",
      lat: 16.9902,
      lng: 73.3120,
      city: "Ratnagiri",
    },
    {
      day: 3,
      route: "Ratnagiri to Malvan",
      distance: 150,
      description: "Ride through coconut groves to the serene beaches of Malvan.",
      lat: 16.0914,
      lng: 73.4977,
      city: "Malvan",
    },
    {
      day: 4,
      route: "Malvan to Tarkarli",
      distance: 15,
      description: "Short ride to Tarkarli beach known for its clear waters and marine life.",
      lat: 16.1090,
      lng: 73.4854,
      city: "Tarkarli",
    },
    {
      day: 5,
      route: "Tarkarli to Ganpatipule",
      distance: 120,
      description: "Travel through lush landscapes to the temple town Ganpatipule.",
      lat: 16.6021,
      lng: 73.3440,
      city: "Ganpatipule",
    },
    {
      day: 6,
      route: "Ganpatipule to Alibaug",
      distance: 180,
      description: "Ride back north with a stop at the scenic coastal town Alibaug.",
      lat: 18.6424,
      lng: 72.8750,
      city: "Alibaug",
    },
    {
      day: 7,
      route: "Alibaug to Mumbai",
      distance: 100,
      description: "Final leg returning to Mumbai along the picturesque coast.",
      lat: 19.0760,
      lng: 72.8777,
      city: "Mumbai",
    },
  ],
  stats: {
    bike: "Bajaj Avenger",
    topSpeed: "60 km/h",
    cost: "~$350 USD",
  },
  gear: [
    {
      category: "Motorcycle",
      items: ["Bajaj Avenger", "Rainproof Jacket", "Waterproof Panniers"],
    },
    {
      category: "Photography",
      items: ["GoPro Hero 11", "Smartphone with waterproof case"],
    },
  ],
  // youtubeVideoId: "playlist?list=PLYourPlaylistIDHere", // Add your playlist or video ID here
};
