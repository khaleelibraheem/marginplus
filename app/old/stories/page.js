import AppDownloadSection from '@/components/AppDownloadSection'
import ComingSoon from '@/components/ComingSoon'
import ReadyToBePartSection from '@/components/ReadyToBePartSection'
import CarouselSection from '@/components/StoriesPageSections/CarouselSection'
import HeroSection from '@/components/StoriesPageSections/HeroSection'
import NumbersSection from '@/components/StoriesPageSections/NumbersSection'

export const metadata = {
  title: ' Success Stories from Marginplus Investors and Farmers',
  description:
    ' Hear real stories from investors and agribusiness owners who’ve grown with Marginplus. Learn how we’re transforming agriculture together.',
}

export default function page() {
  return (
    <main>
      {/* <HeroSection />
      <CarouselSection />
      <NumbersSection />
      <ReadyToBePartSection />
      <AppDownloadSection /> */}
      <ComingSoon />    </main>

  )
}
