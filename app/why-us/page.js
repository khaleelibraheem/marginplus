import AppDownloadSection from '@/components/AppDownloadSection'
import ComingSoonPage from '@/components/ComingSoonPage'
import ReadyToBePartSection from '@/components/ReadyToBePartSection'
import HeroSection from '@/components/WhyUsPageSections/HeroSection'
import SmartInvestorsSection from '@/components/WhyUsPageSections/SmartInvestorsSection'
import React from 'react'

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
