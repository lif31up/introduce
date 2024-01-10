'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const style: React.CSSProperties = {
  width: '100%',
  height: '6rem',
  transition: 'height 0.5s ease-in-out',
}
const id: string = 'top-bar'
export default function TopBar(): React.JSX.Element {
  useEffect((): void => {
    const topBar: HTMLElement | null = document.getElementById(id)
    addEventListener('scroll', () => {
      if (topBar === null) return
      if (window.scrollY > 0) {
        topBar.style.height = '5rem'
      } else {
        topBar.style.height = '6rem'
      }
    })
  }, [false])
  return (
    <section title='topbar'>
      <div
        id={id}
        style={style}
        className='flex items-center justify-between fixed top-0 left-0 z-50 _bg-top-bar px-28 _border-b-white-boldess'>
        <div title='left' className='flex items-center justify-center'>
          <h1 className='_text-black-bolder text-4xl font-extrabold mb-1 mr-2'>MYEONGHWAN</h1>
          <h1 className='_text-black-boldess _text-middle'>의 웹포트폴리오</h1>
          <h2 className='ml-6 mt-1 pb-3 pt-2 px-6 _text-small text-purple-500 bg-purple-100 tracking-wider rounded-2xl'>
            v02.00.01
          </h2>
        </div>
        <div title='right' className='flex items-center justify-center gap-12 _text-middle _text-black-bold'>
          <Link href={'#project-board'}>프로젝트</Link>
          <Link href={'#stack-board'}>기술 및 스택</Link>
          <Link href=''>소프트 스킬</Link>
          <div style={{ width: '1px', height: '2.5rem' }} className='_bg-white-bold' />
          <div className='flex gap-8 opacity-50'>
            <Link href='https://github.com/lif31up'>
              <Image alt='github' width={20} height={20} src='/assets/svg/github-logo.svg' />
            </Link>
            <Link href='https://join.slack.com/t/slack-ueh7907/shared_invite/zt-2a45pxoo7-b7sL_dZ9BHJjpaLLrcTM3Q'>
              <Image alt='slack' width={20} height={20} src='/assets/svg/slack-logo.svg' />
            </Link>
            <Link href='https://www.notion.so/lif31u/invite/6d02acf83024d7f08fe0b9b089e019f886994d0f'>
              <Image alt='notion' width={19} height={19} src='/assets/svg/notion-logo.svg' />
            </Link>
            <Link href='https://www.linkedin.com/in/myeonghwan-han-9823202a2/'>
              <Image alt='linkedin' width={19} height={19} src='/assets/svg/linkedin-logo.svg' />
            </Link>
          </div>
        </div>
      </div>
      <div style={style} />
    </section>
  )
}
