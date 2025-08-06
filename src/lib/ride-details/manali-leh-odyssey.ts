import { type RideDetails } from "@/lib/rides";

export const details: RideDetails = {
  galleryImages: [
    {
      src: "/rides/manali-leh/gallery-1.jpg",
      caption: "Navigating the treacherous roads of Rohtang Pass.",
    },
    {
      src: "/rides/manali-leh/gallery-2.jpg",
      caption: "A moment of peace at Pangong Tso Lake.",
    },
    {
      src: "/rides/manali-leh/gallery-3.jpg",
      caption: "Crossing the majestic Baralacha La at sunrise.",
    },
    {
      src: "/rides/manali-leh/gallery-4.jpg",
      caption: "Camping under the stars in the Himalayas.",
    },
    {
      src: "/rides/manali-leh/gallery-5.jpg",
      caption: "The rugged landscape near Leh town.",
    },
    {
      src: "/rides/manali-leh/gallery-6.jpg",
      caption: "Exploring ancient monasteries along the route.",
    },
  ],
  story:
    "The Manali to Leh highway is more than just a road — it's a breathtaking journey through some of the highest mountain passes on earth. This epic ride tests endurance and rewards riders with stunning views of rugged terrain, snow-capped peaks, and remote villages steeped in culture. Along the way, riders acclimatize to the altitude, embrace the challenges of unpredictable weather, and experience the freedom of the open road in one of the most spectacular landscapes imaginable.",
 itinerary: [
  {
    day: 1,
    route: "Manali to Jispa",
    distance: 140,
    description: "Crossed the Rohtang Pass, acclimatizing to the altitude with stunning valley views.",
    lat: 32.2570,
    lng: 77.1700,
    city: "Manali",
  },
  {
    day: 2,
    route: "Jispa to Sarchu",
    distance: 90,
    description: "Rode through winding mountain roads and camped at the high-altitude plains of Sarchu.",
    lat: 32.6239,
    lng: 77.3387,
    city: "Jispa",
  },
  {
    day: 3,
    route: "Sarchu to Pang",
    distance: 120,
    description: "Crossed the Baralacha La pass and reached the serene Pang campsite.",
    lat: 32.8805,
    lng: 78.2986,
    city: "Sarchu",
  },
  {
    day: 4,
    route: "Pang to Leh",
    distance: 225,
    description: "The longest day, crossing several passes including Lachulung La before arriving in Leh.",
    lat: 33.7066,
    lng: 78.9231,
    city: "Pang",
  },
  {
    day: 5,
    route: "Leh Rest Day",
    distance: 0,
    description: "Rest and explore Leh town, visiting local markets and monasteries to acclimatize further.",
    lat: 34.1526,
    lng: 77.5770,
    city: "Leh",
  },
  {
    day: 6,
    route: "Leh to Nubra Valley",
    distance: 150,
    description: "Crossed the Khardung La pass, the world's highest motorable road, into the picturesque Nubra Valley.",
    lat: 34.7103,
    lng: 77.5357,
    city: "Nubra Valley",
  },
  {
    day: 7,
    route: "Nubra Valley Exploration",
    distance: 80,
    description: "Explored sand dunes, monasteries, and remote villages in Nubra Valley.",
    lat: 34.7139,
    lng: 77.5614,
    city: "Nubra Valley",
  },
  {
    day: 8,
    route: "Nubra to Pangong Tso",
    distance: 170,
    description: "Rode to the stunning Pangong Tso lake, known for its ever-changing colors.",
    lat: 33.9850,
    lng: 78.4526,
    city: "Pangong Tso",
  },
  {
    day: 9,
    route: "Pangong to Leh",
    distance: 225,
    description: "Returned to Leh via the same route, soaking in the incredible views once more.",
    lat: 34.1526,
    lng: 77.5770,
    city: "Leh",
  },
  {
    day: 10,
    route: "Leh to Manali",
    distance: 475,
    description: "The return journey through rugged terrain, completing the epic circuit.",
    lat: 32.2570,
    lng: 77.1700,
    city: "Manali",
  },
],

  stats: {
    bike: "Royal Enfield Himalayan",
    topSpeed: "85 km/h",
    cost: "~$400 USD",
  },
  gear: [
    {
      category: "Motorcycle",
      items: ["Royal Enfield Himalayan", "Panniers", "Jerry Cans", "Crash Guards", "GPS Navigator"],
    },
    {
      category: "Photography",
      items: ["Sony A7 IV", "35mm f/1.8 Lens", "DJI Mavic 3 Drone", "Tripod", "Extra Batteries"],
    },
    {
      category: "Camping",
      items: ["Lightweight Tent", "Sleeping Bag (rated for cold)", "Portable Stove", "Water Filter"],
    },
    {
      category: "Rider Gear",
      items: ["Full-face Helmet", "Riding Jacket with Armor", "Gloves", "Riding Boots", "Thermal Innerwear"],
    },
  ],

  youtubeVideoId: "playlist?list=PLTIZrXNTUIWnxUYVSsITl_Op2RswO_ezi"
};
