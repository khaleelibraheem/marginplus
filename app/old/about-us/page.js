import HeroSection from "@/components/AboutUsSections/HeroSection";
import MeetTheTeamSection from "@/components/AboutUsSections/MeetTheTeamSection";
import OurValuesSection from "@/components/AboutUsSections/OurValuesSection";
import OurVisionSection from "@/components/AboutUsSections/OurVisionSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import ReadyToBePartSection from "@/components/ReadyToBePartSection";
import React from "react";

export const metadata = {
  title: ' About Marginplus – Building Africa’s Agri-Investment Future',
  description:
    'Marginplus is a fintech platform revolutionizing agricultural investment in Africa. Learn about our mission, team, and the change we’re driving.',
}

export default function page() {
  return (
    <main>
      <HeroSection />
      <OurVisionSection />
      <OurValuesSection />
      <MeetTheTeamSection />
      <ReadyToBePartSection />
      <AppDownloadSection />
    </main>
  );
}
