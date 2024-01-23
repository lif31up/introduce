'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TailwindProperties from '@/util/tailwindProperties'
import Default from '@/util/interface'

const id: string = 'top-bar'
export default function TopBar(): React.JSX.Element {
  useEffect((): void => {
    const topBar: HTMLElement | null = document.getElementById(id)
    if (topBar === null) return
    topBar.style.transition = '1s ease-in-out'
    window.addEventListener('scroll', (): void => {
      if (topBar === null) return
      if (window.scrollY > 1) {
        topBar.style.background = 'black'
        topBar.style.transform = 'translateY(calc(-100% + 4rem))'
        topBar.style.borderBottom = 'solid rgb(45, 45, 45) 1px'
      } else {
        topBar.style.background = 'transparent'
        topBar.style.transform = 'translateY(0)'
        topBar.style.borderBottom = 'none'
      }
    })
  }, [])
  return (
    <section className='w-screen fixed z-50 top-0' id={id}>
      <Top />
      <Bot />
    </section>
  )
}

function Top({ className }: Default) {
  const style: TailwindProperties = {
    sm: 'sm:w-full sm:justify-between sm:px-12 sm:py-4',
    base: 'w-full flex items-center justify-center py-2',
  }
  return (
    <section className={`${style.xl} ${style.lg} ${style.md} ${style.sm} ${style.base} ${className}`}>
      <div className='w-1/3 items-center gap-4 hidden sm:flex'>
        <Link href='https://www.linkedin.com/in/lif31up'>
          <Image className='invert' width={18} height={18} src='assets/svg/linkedin-logo.svg' alt='linkedin' />
        </Link>
        <Link href='https://medium.com/@nulranlcns9991'>
          <Image className='invert' width={18} height={18} src='assets/svg/medium-logo.svg' alt='medium' />
        </Link>
        <Link href='#'>
          <Image className='invert' width={18} height={18} src='assets/svg/slack-logo.svg' alt='slack' />
        </Link>
        <Link href='https://www.wanted.co.kr/community/profile/37S8yhNPdWGwoLsqCu8uu7'>
          <Image className='invert' width={20} height={20} src='assets/svg/wanted-logo.svg' alt='wanted' />
        </Link>
        <div className='h-full mb-1'>|</div>
        <desc className='font-extrabold text-xs text-black bg-white rounded-2xl px-2'>v.02.00.01</desc>
      </div>
      <div className='w-1/3 flex justify-center relative'>
        <Link href='https://github.com/lif31up'>
          <Image width={54} height={54} className='invert' src='/assets/svg/github-logo.svg' alt='github' />
        </Link>
      </div>
      <div className='w-1/3 flex-wrap sm:flex hidden items-center justify-end'>
        <Link href='mailto:nulranlcns9991@gmail.com' className='font-bold text-xs text-white'>
          E-MAIL
        </Link>
      </div>
    </section>
  )
}

function Bot({ className }: Default) {
  const style: TailwindProperties = {
    sm: 'sm:gap-4 sm:justify-center',
    base: 'w-screen h-16 flex items-center justify-between px-6 text-neutral-300 text-sm',
  }
  return (
    <section title='bottom' className={`${style.xl} ${style.lg} ${style.md} ${style.sm} ${style.base} ${className}`}>
      <Link href='#profile-section'>자기소개서</Link>
      <Link href='#project-board'>프로젝트</Link>
      <Link href='#stack-board'>스킬 및 스택</Link>
      <Link href='#'>처음으로</Link>
    </section>
  )
}
