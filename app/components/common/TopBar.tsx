'use client'
import Link from 'next/link'
import '@/styles/TopBar.css'
import '@/styles/Common.css'
import React, { useEffect } from "react";
import { logHandler } from '@/app/components/common/Firebase'

export default function TopBar({}) {
  useEffect(():void=>{
    const topBar:HTMLElement|null = document.getElementById("top-bar");
    if(topBar === null) return;
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 1){topBar.style.height = "3rem";}
      else{topBar.style.height = "3.5rem";}
    });
  });
  const clickHandler = () => {
    logHandler('github_link')
  }
  return (
    <>
      <div className={'top-bar'} id={"top-bar"}>
        <div className={'flex items-center h-full'}>
          <h1
            className={
              'pt-1 px-1 _text_large custom-mobile-disable'
            }
          >
            {'FRONTEND & UI/UX DESIGNER'}
          </h1>
          <p className={'px-2 pt-1 _text_regular'}>
            {'NULRANLCNS9991@GMAIL.COM'}
          </p>
        </div>
        <div
          className={
            'flex items-center gap-12 font-bold _heading_regular'
          }
        >
          <Link
            className={'h-fit custom-mobile-disable'}
            href={'mailto:nulranlcns9991@gmail.com'}
          >
            연락하기
          </Link>
          <Link className={'h-fit custom-mobile-disable'} href={'#s-a-p'}>
            살펴보기
          </Link>
          <Link
            className={
              'py-2 px-6 bg-purple-700 rounded-3xl'
            }
            href={'https://github.com/lif31up'}
            target={'_blank'}
            onClick={clickHandler}
          >
            GITHUB
          </Link>
        </div>
      </div>
      <div className={'h-16'} />
    </>
  )
}
