import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import BodyClassName from "./components/BodyClassName";
import Header from "./components/Header";
import Particles from "./components/Particles";
import Footer from "./components/Footer";
import ConditionalCursor from "./components/ConditionalCursor"; // NEW
import  {GlowingBackground}  from "./components/GlowingBackground";

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
        <Particles
          particleColors={["#550fcfd7", "#efe5e5ff"]}
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
        <GlowingBackground/>
        <Header />
        <main className="pt-24 px-4 md:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
