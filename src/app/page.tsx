// src/app/page.tsx
'use client'; // Add this line!

import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
// import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import QuoteSection from "./components/QuoteSection";
import  LiveDemosSection  from "./components/LiveDemosSection";
// import StickyNoteRecommendation from "./components/StickyNoteRecommendation";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <QuoteSection/>
        <LiveDemosSection/>
        
        <ProjectsSection />
        <SkillsSection/>
        {/* <StickyNoteRecommendation/> */}
      </main>
    </>
  );
}