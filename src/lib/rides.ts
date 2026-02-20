// lib/rides.ts

export type RideItinerary = {
  day: number;
  route: string;
  distance: number;
  description: string;
  lat?: number;
  lng?: number;
  city?: string;

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
  slug?: string;
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
    image: "/rides/manali-leh/gallery-6.jpg",
    distance: 1475,
    duration: "10 Days",
    category: "Epic",
    status: "Completed",
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
    // slug: "rajasthan-forts",
    description:
      "A cultural immersion into the land of kings, exploring majestic forts, vibrant markets, and desert roads.",
    image: "/rides/rajasthan.jpg",
    distance: 950,
    duration: "9 Days",
    category: "Cultural",
    status: "Upcoming",
  },
];


// export interface Ride {
//   slug: string;
//   title: string;
//   category: 'Epic' | 'Coastal' | 'Cultural';
//   date: string;
//   location: string;
//   country: string; // New field for international scaling
//   distance: number;
//   image: string;
//   excerpt: string;
//   duration: string;
//   status: 'Completed' | 'Upcoming' | 'In Progress';
// }

// export const rides: Ride[] = [
//   { 
//     slug: 'manali-leh-odyssey', 
//     title: 'THE ALPINE RIDGE', 
//     category: 'Epic', 
//     date: 'SEPT 23', 
//     location: 'Furka Pass',
//     country: 'Switzerland', 
//     distance: 450, 
//     image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800', 
//     excerpt: 'Deep peaks, thin air, and the silent rhythm of the climb.', 
//     duration: '12D', 
//     status: 'Completed' 
//   },
//   { 
//     slug: 'pacific-coast', 
//     title: 'COASTAL DRIFT', 
//     category: 'Coastal', 
//     date: 'JUNE 23', 
//     location: 'Big Sur',
//     country: 'USA', 
//     distance: 1200, 
//     image: 'https://images.unsplash.com/photo-1502675135487-e971002a6adb?auto=format&fit=crop&q=80&w=800', 
//     excerpt: 'Where the asphalt meets the edge of the world.', 
//     duration: '5D', 
//     status: 'Completed' 
//   },
//   { 
//     slug: 'kyoto-temples', 
//     title: 'SILENT KYOTO', 
//     category: 'Cultural', 
//     date: 'APRIL 23', 
//     location: 'Arashiyama',
//     country: 'Japan', 
//     distance: 85, 
//     image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800', 
//     excerpt: 'Finding zen in the spinning of the wheels through ancient gates.', 
//     duration: '8D', 
//     status: 'Completed' 
//   },
//   { 
//     slug: 'dolomites-expedition', 
//     title: 'DOLOMITE RED', 
//     category: 'Epic', 
//     date: 'AUG 23', 
//     location: 'Cortina',
//     country: 'Italy', 
//     distance: 320, 
//     image: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?auto=format&fit=crop&q=80&w=800', 
//     excerpt: 'Iron-rich spires glowing under a summer moon.', 
//     duration: '14D', 
//     status: 'Completed' 
//   },
//   { 
//     slug: 'amalfi-cruise', 
//     title: 'AMALFI PULSE', 
//     category: 'Coastal', 
//     date: 'JULY 23', 
//     location: 'Positano',
//     country: 'Italy', 
//     distance: 55, 
//     image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800', 
//     excerpt: 'Salt spray and the tightest corners in the Mediterranean.', 
//     duration: '4D', 
//     status: 'Completed' 
//   },
// ];