import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import Firebase from '@/component/common/Firebase'
import TopBar from '@/component/common/TopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'wep portfolio',
  description: "han's web portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Firebase />
        <TopBar />
        {children}
        <div className='pb-2 pt-1 grid justify-items-center items-center fixed bottom-0 w-full overflow-hidden bg-black z-50'>
          <h1 className='text-white text-xs'>현재 구인구직 중이에요!</h1>
        </div>
      </body>
    </html>
  )
}
