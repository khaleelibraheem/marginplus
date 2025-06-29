import AppDownloadSection from '@/components/AppDownloadSection'
import ComingSoonPage from '@/components/ComingSoonPage'
import ReadyToBePartSection from '@/components/ReadyToBePartSection'
import HeroSection from '@/components/WhyUsPageSections/HeroSection'
import SmartInvestorsSection from '@/components/WhyUsPageSections/SmartInvestorsSection'
import React from 'react'

export const metadata = {
  title: ' Why Choose Marginplus :  Secure, Transparent Agricultural Investments',
  description:
    'Discover why investors and agribusinesses trust Marginplus. We offer secure, transparent, and high-return agriculture investment opportunities in Nigeria.',
}

export default function page() {
  return (
    <main>
      {/* <HeroSection />
      <SmartInvestorsSection />
      <ReadyToBePartSection />
      <AppDownloadSection /> */}
      <ComingSoonPage />
    </main>
  )
}
