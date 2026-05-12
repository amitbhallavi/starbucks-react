import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Disclaimers from "../components/Disclaimers";
import Footer from "../components/Footer";
import { heroSections } from "../data/starbucksData";

export default function StarbucksHome() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Credit banner */}
      <div className="flex justify-center items-center py-3 text-sm text-gray-600 border-b border-gray-100">
        Visit&nbsp;
        <a href="https://amitbhallvi.github.io/Profile-Card/" target="_blank" rel="noreferrer" className="text-[#006242] underline font-medium">
          Coding By Amit Thakur
        </a>
        &nbsp;and&nbsp;
        <a href="https://about.starbucks.com/backtostarbucks/" target="_blank" rel="noreferrer" className="text-[#006242] underline font-medium">
          starbucks.com/refills
        </a>
        &nbsp;to learn more.
      </div>

      {/* All 4 Hero Sections */}
      {heroSections.map((section) => (
        <HeroSection key={section.id} section={section} />
      ))}

      <Disclaimers />
      <Footer />
    </div>
  );
}
