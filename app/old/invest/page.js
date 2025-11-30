import AppDownloadSection from "@/components/AppDownloadSection";
import HeroSection from "@/components/InvestPageSections/HeroSection";
import RecentOpportunitiesSection from "@/components/InvestPageSections/RecentOpportunitiesSection";
import SmartInvestorsSection from "@/components/InvestPageSections/SmartInvestorsSection";
import React from "react";

export const metadata = {
  title: " Invest in Agriculture with Confidence – Earn from Vetted Projects",
  description:
    " Start investing in profitable agriculture projects vetted by experts. Earn transparently with our profit-sharing model – no interest, just real returns.",
};

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
