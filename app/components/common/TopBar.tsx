'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Indicating from '@/app/components/common/indicating'

export default function TopBar({ height }: { height: string }) {
  useEffect(() => {
    const topBar: HTMLElement | null = document.getElementById('top-bar--0')
    if (topBar === null) {
      return
    }
    window.addEventListener('scroll', (): void => {
      if (window.scrollY > 1) {
        topBar.style.height = `calc(${height} - 1rem)`
        topBar.style.borderBottom = 'solid rgb(25,25,25) 1px'
        topBar.style.boxShadow = 'solid black 1px 1px 1px 1px'
        topBar.style.background = 'black'
      } else {
        topBar.style.height = height
        topBar.style.borderBottom = 'solid transparent 1px'
        topBar.style.boxShadow = 'none'
        topBar.style.background = 'none'
      }
    })
  }, [false])
  const TopBarStyle: React.CSSProperties = {
    width: '100%',
    height: height,
    transition: 'height 1s ease-in-out, border 0.5s ease-in-out, background 1.5s ease-in-out',
  }
  return (
    <>
      <div className={'_top-bar'} style={TopBarStyle} id={'top-bar--0'}>
        <div className={'flex items-center'}>
          <h1 className={'text-white _heading_regular _desktop_disable pt-2'}></h1>
        </div>
        <div className={'flex gap-8 items-center'}>
          <Link
            href={'#front-end'}
            scroll={true}
            replace={false}
            locale={false}
            className={'text-white -mb-1 _heading_regular'}
            onClick={(): void => {
              Indicating('front-end')
            }}>
            프론트엔드
          </Link>
          <Link
            href='#design'
            scroll={true}
            replace={false}
            locale={false}
            className='text-white -mb-1 _heading_regular'
            onClick={(): void => {
              Indicating('design')
            }}>
            디자인
          </Link>
          <Link
            href={'#project'}
            scroll={true}
            replace={false}
            locale={false}
            className='text-white -mb-1 _heading_regular'
            onClick={(): void => {
              Indicating('project')
            }}>
            프로젝트
          </Link>
          <Link
            href={'introduce/자기소개서 4e5883ae3c6a4f129760f77a935b9c1a.html'}
            className='text-white -mb-1 _heading_regular bg-red-800 pt-3 pb-2 px-6 _rounded-1xl _unactive'>
            자기소개서
          </Link>
        </div>
      </div>
      <div style={TopBarStyle} />
    </>
  )
}
