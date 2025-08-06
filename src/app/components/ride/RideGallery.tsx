"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type GalleryImage = {
  src: string;
  caption: string;
};

const MAX_VISIBLE_IMAGES = 6;

const RideGallery = ({
  images,
  rideTitle,
}: {
  images: GalleryImage[];
  rideTitle: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Images to display based on showAll toggle
  const visibleImages = showAll ? images : images.slice(0, MAX_VISIBLE_IMAGES);

  return (
    <>
      <div className="columns-2 md:columns-3 gap-4 not-prose">
        {visibleImages.map((img, index) => (
          <motion.div
            key={img.src}
            className="mb-4 relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(img.src)}
            layoutId={img.src}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={img.src}
              alt={`${rideTitle} gallery image ${index + 1}`}
              width={400}
              height={300}
              className="object-cover rounded-lg w-full"
              priority={index < 3}
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 text-white px-4 text-center rounded-lg"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm line-clamp-3">{img.caption}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less button if more images available */}
      {images.length > MAX_VISIBLE_IMAGES && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition"
          >
            {showAll ? "Show Less" : `Show All (${images.length})`}
          </button>
        </div>
      )}
<AnimatePresence>
  {selectedImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
      className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex flex-col items-center justify-center p-4"
    >
      <motion.div layoutId={selectedImage} className="relative max-w-4xl max-h-[80vh]">
        <Image
          src={selectedImage}
          alt="Selected ride image"
          width={1920}
          height={1080}
          className="object-contain w-auto h-auto max-w-full max-h-[80vh] rounded-lg"
        />
      </motion.div>
      
      {/* Caption below the image */}
      <p className="mt-4 max-w-4xl text-center text-white text-sm select-none">
        {
          // Find caption for selectedImage
          images.find(img => img.src === selectedImage)?.caption
        }
      </p>

      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-4 right-4 p-2 text-white bg-white/10 rounded-full"
      >
        <X size={24} />
      </button>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default RideGallery;
