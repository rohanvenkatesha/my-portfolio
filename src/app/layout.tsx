import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import BodyClassName from "./components/BodyClassName";
import Header from "./components/Header"; // Import Header
import Particles from './components/Particles';

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
      <body className={`${jakarta.className} bg-default`}>
    <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
        <BodyClassName className="bg-default" />
 
        {/* Fixed Navbar */}
        <Header />

        {/* Main content with padding so navbar doesn't overlap */}
        <main className="pt-24 px-4 md:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
