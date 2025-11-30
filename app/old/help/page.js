import AppDownloadSection from '@/components/AppDownloadSection'
import FAQSection from '@/components/HelpPageSections/FAQSection'
import HeroSection from '@/components/HelpPageSections/HeroSection'
import React from 'react'

export const metadata = {
  title: 'Marginplus Help Center – FAQs, Support & Investor Guidance',
  description:
    'Need assistance? Explore our help center for FAQs, support articles, and guides for investors and agribusiness partners on Marginplus.',
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <FAQSection />
      <AppDownloadSection />
    </main>
  )
}
