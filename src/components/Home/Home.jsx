import HeroSection from "./HeroSection";
import FeaturesSection from "./FeatureSection";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <FeaturesSection />

      <FAQ />
      <Testimonials />
    </div>
  );
}
