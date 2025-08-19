import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import BodyClassName from "./components/BodyClassName";
import Header from "./components/Header";
import Particles from "./components/Particles";
import Footer from "./components/Footer";
import ConditionalCursor from "./components/ConditionalCursor"; // NEW
import LightRays from "./components/LightRays";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rohan Venkatesha | Code & Open Roads",
  description: "Engineer by Trade, Explorer by Heart. Capturing Both.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} bg-black`}>
      {/* <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#c9b1f6"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div> */}
        <Particles
          particleColors={["#6905ec", "#efe5e5"]}
          particleCount={400}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={30}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <BodyClassName className="bg-black" />
        <ConditionalCursor /> {/* Cursor logic moved here */}
        <Header />
        <main className="px-4 md:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
