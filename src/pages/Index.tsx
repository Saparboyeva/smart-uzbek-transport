import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BusTracker from "@/components/BusTracker";
import RouteCalculator from "@/components/RouteCalculator";
import CarpoolSection from "@/components/CarpoolSection";
import TrafficMap from "@/components/TrafficMap";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen scroll-smooth">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <BusTracker />
    <RouteCalculator />
    <CarpoolSection />
    <TrafficMap />
    <Footer />
  </div>
);

export default Index;
