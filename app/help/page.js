import AppDownloadSection from '@/components/AppDownloadSection'
import ComingSoonPage from '@/components/ComingSoonPage'
import FAQSection from '@/components/HelpPageSections/FAQSection'
import HeroSection from '@/components/HelpPageSections/HeroSection'
import React from 'react'

export default function page() {
  return (
    <main>
      <HeroSection />
      <FAQSection />
      <AppDownloadSection />
    </main>
  )
}
