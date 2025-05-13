import AppDownloadSection from "@/components/AppDownloadSection";
import HeroSection from "@/components/InvestPageSections/HeroSection";
import RecentOpportunitiesSection from "@/components/InvestPageSections/RecentOpportunitiesSection";
import SmartInvestorsSection from "@/components/InvestPageSections/SmartInvestorsSection";
import React from "react";

export default function page() {
  return (
    <main>
      <HeroSection />
      <SmartInvestorsSection />
      <RecentOpportunitiesSection />
      <AppDownloadSection />
    </main>
  );
}
