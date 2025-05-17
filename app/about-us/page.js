import HeroSection from "@/components/AboutUsSections/HeroSection";
import MeetTheTeamSection from "@/components/AboutUsSections/MeetTheTeamSection";
import OurValuesSection from "@/components/AboutUsSections/OurValuesSection";
import OurVisionSection from "@/components/AboutUsSections/OurVisionSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import ReadyToBePartSection from "@/components/ReadyToBePartSection";
import React from "react";

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
