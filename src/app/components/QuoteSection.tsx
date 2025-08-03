'use client';

import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      // This section is now full-width, providing its own vertical padding
      className="py-16 md:py-24" 
    >
      {/* This inner div now controls the width and horizontal padding */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <blockquote className="text-2xl md:text-4xl font-medium text-slate-200 leading-tight md:leading-tight">
          “There are {" "}
          <span className="gradient-text">Other Ways</span> to see.”
        </blockquote>
        <cite className="block mt-4 text-slate-400 not-italic">
          – Matt Murdock (Daredevil)
        </cite>
      </div>
    </motion.section>
  );
};

export default QuoteSection;