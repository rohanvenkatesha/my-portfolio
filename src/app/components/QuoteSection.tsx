'use client';

import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className="py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Gradient bar above */}
        <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#3D7FF3] to-[#6F49F8]" />

        <blockquote className="text-2xl md:text-4xl font-medium text-slate-200 leading-tight md:leading-tight">
          “There are <span className="gradient-text">Other Ways</span> to see.”
        </blockquote>
        <cite className="block mt-4 text-slate-400 not-italic">
          – Matt Murdock (Daredevil)
        </cite>

        {/* Gradient bar below */}
        <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#3D7FF3] to-[#6F49F8]" />
      </div>
    </motion.section>
  );
};

export default QuoteSection;
