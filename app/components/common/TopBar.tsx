'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const top: any = {
  xl: 'xl:py-8 xl:px-8 flex justify-between items-start',
  lg: 'block',
  md: 'block',
}
const bottom: any = {
  xl: 'xl:px-32',
  lg: '',
  md: '',
}
const id: string = 'top-bar'
export default function TopBar(): React.JSX.Element {
  useEffect((): void => {
    const topBar: HTMLElement | null = document.getElementById(id)
    if (topBar === null) return
    topBar.style.transition = '1s ease-in-out'
    window.addEventListener('scroll', (): void => {
      if (topBar === null) return
      if (window.scrollY > 1) {
        topBar.style.transform = 'translateY(calc(-1 * 100% + 4rem))'
      } else {
        topBar.style.transform = 'translateY(0)'
      }
    })
  }, [])
  return (
    <section>
      <div className={`w-full fixed top-0 left-0 z-50 bg-black text-white`} id={id}>
        <section title='top' className={`relative ${top.xl}`}>
          <div className='w-1/3 flex items-center gap-4'>
            <Link href='#'>
              <Image className='invert' width={18} height={18} src='assets/svg/linkedin-logo.svg' alt='github' />
            </Link>
            <Link href='#'>
              <Image className='invert' width={18} height={18} src='assets/svg/medium-logo.svg' alt='github' />
            </Link>
            <Link href='#'>
              <Image className='invert' width={18} height={18} src='assets/svg/notion-logo.svg' alt='github' />
            </Link>
            <Link href='#'>
              <Image className='invert' width={18} height={18} src='assets/svg/slack-logo.svg' alt='github' />
            </Link>
            <div className='h-full mb-1'>|</div>
            <desc className='font-extrabold text-xs text-black bg-white rounded-2xl px-2'>v.02.00.01</desc>
          </div>
          <div className='w-1/3 flex justify-center relative'>
            <Link href='#'>
              <Image width={54} height={54} className='invert' src='/assets/svg/github-logo.svg' alt='logo' />
            </Link>
          </div>
          <div className='w-1/3 flex justify-end'>
            <Link href='#' className='font-bold text-xs'>
              GITHUB ACCOUNT
            </Link>
          </div>
        </section>
        <section title='bottom' className={`h-16 flex items-center ${bottom.xl}`}>
          <div className='flex items-center gap-8 text-neutral-500 text-sm font-bold'>
            <Link href='#'>프로젝트</Link>
            <Link href='#'>기술 및 스택</Link>
            <Link href='#'>소프트 스킬</Link>
            <Link href='#'>자기소개서</Link>
          </div>
        </section>
      </div>
      <div className='h-16' />
    </section>
  )
}
