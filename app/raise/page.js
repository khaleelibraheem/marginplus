import AppDownloadSection from '@/components/AppDownloadSection'
import FarmersSection from '@/components/RaisePageSections/FarmersSection'
import HeroSection from '@/components/RaisePageSections/HeroSection'
import TimeLineSection from '@/components/RaisePageSections/TimeLineSection'
import ReadyToBePartSection from '@/components/ReadyToBePartSection'
import React from 'react'

export default function page() {
  return (
   <main>
     <HeroSection />
     <FarmersSection />
     <TimeLineSection />
     <ReadyToBePartSection />
     <AppDownloadSection />
   </main>

  )
}
