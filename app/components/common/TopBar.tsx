'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@/mods/tailwinder'

const style: React.CSSProperties = {
  width: '100%',
  height: '3.5rem',
  transition: 'height 0.5s ease-in-out',
}
const id: string = 'top-bar'
export default function TopBar(): React.JSX.Element {
  useEffect((): void => {
    const topBar: HTMLElement | null = document.getElementById(id)
    addEventListener('scroll', () => {
      if (topBar === null) return
      if (window.scrollY > 0) {
        topBar.style.height = '3rem'
      } else {
        topBar.style.height = '3.5rem'
      }
    })
  }, [false])
  return (
    <section title='topbar'>
      <nav id={id} style={style} className='top-bar flex items-center flex-wrap px-4 lg:px-8'>
        <a title='left' className='inline-flex items-center' href='#'>
          <span className='text-base font-extrabold text-neutral-700 ml-4 -mt-1'>포트폴리오</span>
          <desc className='text-xs ml-2 px-2 pb-1 text-neutral-500 bg-neutral-100 border-neutral-200 border rounded-2xl'>
            v02.00.01
          </desc>
        </a>
        <div title='right' className='hidden lg:inline-flex lg:flex-grow lg:justify-end lg:w-auto'>
          <ul className='flex gap-8 text-sm text-neutral-500 -mt-1'>
            <Link href={'#project-board'}>프로젝트</Link>
            <Link href={'#stack-board'}>기술 및 스택</Link>
            <Link href=''>소프트 스킬</Link>
          </ul>
          <div style={{ width: '1px', height: '1rem' }} className='_bg-white-bold mx-8' />
          <ul className='flex gap-8 opacity-50'>
            <Link href='https://github.com/lif31up'>
              <Image alt='github' width={18} height={18} src='/assets/svg/github-logo.svg' />
            </Link>
            <Link href='https://join.slack.com/t/slack-ueh7907/shared_invite/zt-2a45pxoo7-b7sL_dZ9BHJjpaLLrcTM3Q'>
              <Image alt='slack' width={18} height={18} src='/assets/svg/slack-logo.svg' />
            </Link>
            <Link href='https://medium.com/@nulranlcns9991'>
              <Image alt='notion' width={18} height={18} src='/assets/svg/medium-logo.svg' />
            </Link>
            <Link href='https://www.linkedin.com/in/myeonghwan-han-9823202a2/'>
              <Image alt='linkedin' width={18} height={18} src='/assets/svg/linkedin-logo.svg' />
            </Link>
          </ul>
        </div>
      </nav>
      <div style={style} />
    </section>
  )
}
