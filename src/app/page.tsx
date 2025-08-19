// src/app/page.tsx
'use client'; // Add this line!

import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
// import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import QuoteSection from "./components/QuoteSection";
import  LiveDemosSection  from "./components/LiveDemosSection";
import StatsSection from "./components/StatsSection";
import LightRays from "./components/LightRays";
// import StickyNoteRecommendation from "./components/StickyNoteRecommendation";

export default function Home() {
  return (
    <>
          <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#e1daee"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <main>
        <Hero />
        <QuoteSection/>
        <StatsSection/>
        <LiveDemosSection/>
        <ProjectsSection />
        <SkillsSection/>
        {/* <StickyNoteRecommendation/> */}
      </main>
    </>
  );
}