import AppDownloadSection from "@/components/AppDownloadSection";
import CantFindARole from "@/components/CareersPageSections/CantFindARole";
import HeroSection from "@/components/CareersPageSections/HeroSection";
import JoinOurTeam from "@/components/CareersPageSections/JoinOurTeam";
import OurValuesSection from "@/components/CareersPageSections/OurValuesSection";
import SoundLikeYouSection from "@/components/CareersPageSections/SoundLikeYouSection";

export default function page() {
  return (
    <main>
      <HeroSection />
      <OurValuesSection />
      <SoundLikeYouSection />
      <JoinOurTeam />
      <CantFindARole />
      <AppDownloadSection />
    </main>
  );
}
