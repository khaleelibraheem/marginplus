import AppDownloadSection from "@/components/AppDownloadSection";
import BackedBySection from "@/components/LandingPageSections/BackedBySection";
import FeaturedSection from "@/components/LandingPageSections/FeaturedSection";
import FundingSection from "@/components/LandingPageSections/FundingSection";
import HeroSection from "@/components/LandingPageSections/HeroSection";
import HowitWorksSection from "@/components/LandingPageSections/HowitWorksSection";
import InvestingSection from "@/components/LandingPageSections/InvestingSection";
import OpportunitiesSection from "@/components/LandingPageSections/OpportunitiesSection";
import SmartFarmers from "@/components/LandingPageSections/SmartFarmers";
import UniqueProfitSection from "@/components/LandingPageSections/UniqueProfitSection";

export default function page() {
  return (
    <main>
      <HeroSection />
      <HowitWorksSection />
      <UniqueProfitSection />
      <FeaturedSection />
      <OpportunitiesSection />
      <SmartFarmers />
      {/* <InvestingSection /> */}
      <FundingSection />
      <BackedBySection />
      <AppDownloadSection />
    </main>
  );
}
