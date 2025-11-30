import AcrossAfricaSection from "@/components/LandingPageSections/AcrossAfricaSection";
import HeroSection from "@/components/LandingPageSections/HeroSection";
import ImpactGoalsSection from "@/components/LandingPageSections/ImpactGoalsSection";
import OurApproachSection from "@/components/LandingPageSections/OurApproachSection";
import OurImpactSection from "@/components/LandingPageSections/OurImpactSection";
import StoriesSection from "@/components/LandingPageSections/StoriesSection";
import WaitlistSection from "@/components/LandingPageSections/WaitlistSection";
import YourPathSection from "@/components/LandingPageSections/YourPathSection";

export default function page() {
  return (
    <main>
      <HeroSection />
      <AcrossAfricaSection />
      <OurApproachSection />
      <OurImpactSection />
      <ImpactGoalsSection />
      <YourPathSection />
      <StoriesSection />
      <WaitlistSection />
    </main>
  );
}
