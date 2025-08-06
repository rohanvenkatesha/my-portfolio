// lib/rides.ts

export type RideItinerary = {
  day: number;
  route: string;
  distance: number;
  description: string;
};
export type RideGear = {
  category: string;
  items: string[];
};
export type RideDetails = {
  galleryImages: { src: string; caption: string }[];
  story: string;
  itinerary: RideItinerary[];
  stats: {
    bike?: string;
    topSpeed?: string;
    cost?: string;
  };
  gear: RideGear[];
  youtubeVideoId?: string;
};
export type Ride = {
  title: string;
  slug: string;
  description: string;
  image: string;
  distance: number;
  duration: string;
  category: "Epic" | "Coastal" | "Cultural";
  status: "Upcoming" | "Completed";
};

export const rides: Ride[] = [
  {
    title: "The Manali-Leh Odyssey",
    slug: "manali-leh-odyssey",
    description:
      "Conquering the high passes of the Himalayas, from lush green valleys to barren, beautiful landscapes.",
    image: "/rides/manali-leh.jpg",
    distance: 1475,
    duration: "10 Days",
    category: "Epic",
    status: "Upcoming",
  },
  {
    title: "Chasing Monsoons Down the Konkan Coast",
    slug: "konkan-coast-monsoon",
    description:
      "A vibrant journey through fishing villages and ancient forts with the Arabian Sea as a constant companion.",
    image: "/rides/Gokarna.jpg",
    distance: 720,
    duration: "7 Days",
    category: "Coastal",
    status: "Completed",
  },
  {
    title: "Weaving Through Rajasthan's Forts",
    slug: "rajasthan-forts",
    description:
      "A cultural immersion into the land of kings, exploring majestic forts, vibrant markets, and desert roads.",
    image: "/rides/rajasthan.jpg",
    distance: 950,
    duration: "9 Days",
    category: "Cultural",
    status: "Upcoming",
  },
];
