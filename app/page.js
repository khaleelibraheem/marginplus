import AppDownloadSection from "@/components/sections/AppDownloadSection";
import BackedBySection from "@/components/sections/BackedBySection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import FundingSection from "@/components/sections/FundingSection";
import HeroSection from "@/components/sections/HeroSection";
import InvestingSection from "@/components/sections/InvestingSection";
import OpportunitiesSection from "@/components/sections/OpportunitiesSection";

export default function page() {
  return (
    <main>
      <HeroSection />
      <FeaturedSection />
      <OpportunitiesSection />
      <InvestingSection />
      <FundingSection />
      <BackedBySection />
      <AppDownloadSection />
    </main>
  );
}
