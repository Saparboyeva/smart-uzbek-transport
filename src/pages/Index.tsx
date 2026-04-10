import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BusTracker from "@/components/BusTracker";
import RouteCalculator from "@/components/RouteCalculator";
import CarpoolSection from "@/components/CarpoolSection";
import TrafficMap from "@/components/TrafficMap";
import PredictiveAI from "@/components/PredictiveAI";
import PersonalAI from "@/components/PersonalAI";
import VoiceAssistant from "@/components/VoiceAssistant";
import SafetyAI from "@/components/SafetyAI";
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
    <PredictiveAI />
    <PersonalAI />
    <VoiceAssistant />
    <SafetyAI />
    <Footer />
  </div>
);

export default Index;
