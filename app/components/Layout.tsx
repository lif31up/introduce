import React from 'react'
import TopBar from '@/app/components/common/TopBar'
import Firebase from '@/app/components/common/Firebase'

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <main>
      <Firebase />
      <TopBar />
      {children}
    </main>
  )
}
