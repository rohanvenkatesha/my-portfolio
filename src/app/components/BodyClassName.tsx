'use client';

import { useEffect } from 'react';

const BodyClassName = ({ className }: { className: string }) => {
  useEffect(() => {
    // Clear any existing background classes first
    document.body.classList.remove('bg-black','bg-default', 'bg-rides', 'bg-projects', 'bg-about');
    
    // Add the new class when the component mounts
    document.body.classList.add(className);

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]); // Rerun effect if className changes

  return null; // This component doesn't render anything
};

export default BodyClassName;