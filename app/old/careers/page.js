import AppDownloadSection from "@/components/AppDownloadSection";
import CantFindARole from "@/components/CareersPageSections/CantFindARole";
import HeroSection from "@/components/CareersPageSections/HeroSection";
import JoinOurTeam from "@/components/CareersPageSections/JoinOurTeam";
import OurValuesSection from "@/components/CareersPageSections/OurValuesSection";
import SoundLikeYouSection from "@/components/CareersPageSections/SoundLikeYouSection";

export const metadata = {
  title: ' Careers at Marginplus – Join Us to Transform Agriculture',
  description:
    ' Want to work at the forefront of agri-fintech in Africa? Explore open roles at Marginplus and help build a more prosperous agricultural future.',
}


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
