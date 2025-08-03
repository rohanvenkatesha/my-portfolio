'use client';

import { motion } from 'framer-motion';

const recommendations = [
  "Rohan is a brilliant problem solver and a joy to work with.",
  "His passion for both code and exploration is truly inspiring.",
  "Always delivers on time with great attention to detail.",
];

const StickyNoteRecommendation = () => {
  return (
    <section className="max-w-md mx-auto my-16 px-4 md:px-0">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        whileHover={{ rotate: [0, 2, -2, 1, 0], transition: { duration: 0.6 } }}
        className="relative bg-yellow-50 border border-yellow-300 rounded-lg p-8 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] font-[\'Patrick_Hand\',_cursive] text-yellow-900 text-base leading-relaxed"
        style={{
          // subtle paper grain texture using CSS noise pattern
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><circle cx="1" cy="1" r="0.5" fill="%23f2eecb"/></svg>')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '8px 8px',
          userSelect: 'none',
        }}
      >
        {/* Folded corner */}
        <div
          className="absolute top-0 right-0 w-8 h-8 bg-yellow-100 border-t border-l border-yellow-300 rounded-tl-md shadow-sm"
          style={{
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }}
        />

        <h3 className="text-xl font-bold mb-4 select-text">What People Say</h3>
        <ul className="list-disc list-inside space-y-3 italic">
          {recommendations.map((rec, i) => (
            <li key={i}>"{rec}"</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default StickyNoteRecommendation;
