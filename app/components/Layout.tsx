import React from 'react'
import TopBar from '@/app/components/common/TopBar'
import Firebase from '@/app/components/common/Firebase'

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <main>
      <Firebase />
      <TopBar />
      {children}
      <div className='pb-2 pt-1 grid justify-items-center items-center fixed bottom-0 w-full overflow-hidden bg-black z-50'>
        <h1 className='text-white text-xs'>현재 구인구직 중이에요!</h1>
      </div>
    </main>
  )
}
