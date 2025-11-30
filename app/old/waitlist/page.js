import NewWaitList from '@/components/WaitListPage'
import React from 'react'

export const metadata = {
  title: 'Join the Marginplus Waitlist – Be the First to Invest Smarter',
  description:
    'Secure early access to Marginplus and be among the first to experience smarter, simplified investment opportunities designed for Africa’s future.',
};

export default function page() {
  return (
    <main>
      <NewWaitList />
    </main>
  )
}
