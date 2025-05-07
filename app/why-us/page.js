import AppDownloadSection from '@/components/AppDownloadSection'
import HeroSection from '@/components/WhyUsPageSections/HeroSection'
import ReadyToBePartSection from '@/components/WhyUsPageSections/ReadyToBePartSection'
import SmartInvestorsSection from '@/components/WhyUsPageSections/SmartInvestorsSection'
import React from 'react'

export default function page() {
  return (
    <main>
      <HeroSection />
      <SmartInvestorsSection />
      <ReadyToBePartSection />
      <AppDownloadSection />
    </main>
  )
}
