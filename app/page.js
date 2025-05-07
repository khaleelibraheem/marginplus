
import AppDownloadSection from "@/components/AppDownloadSection";
import BackedBySection from "@/components/LandingPageSections/BackedBySection";
import FeaturedSection from "@/components/LandingPageSections/FeaturedSection";
import FundingSection from "@/components/LandingPageSections/FundingSection";
import HeroSection from "@/components/LandingPageSections/HeroSection";
import InvestingSection from "@/components/LandingPageSections/InvestingSection";
import OpportunitiesSection from "@/components/LandingPageSections/OpportunitiesSection";
import UniqueProfitSection from "@/components/LandingPageSections/UniqueProfitSection";

export default function page() {
  return (
    <main>
      <HeroSection />
      <FeaturedSection />
      <UniqueProfitSection />
      <OpportunitiesSection />
      <InvestingSection />
      <FundingSection />
      <BackedBySection />
      <AppDownloadSection />
    </main>
  );
}
