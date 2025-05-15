import AppDownloadSection from '@/components/AppDownloadSection'
import ReadyToBePartSection from '@/components/ReadyToBePartSection'
import CarouselSection from '@/components/StoriesPageSections/CarouselSection'
import HeroSection from '@/components/StoriesPageSections/HeroSection'
import NumbersSection from '@/components/StoriesPageSections/NumbersSection'

export default function page() {
  return (
    <main>
      <HeroSection />
      <CarouselSection />
      <NumbersSection />
      <ReadyToBePartSection />
      <AppDownloadSection />
    </main>

  )
}
