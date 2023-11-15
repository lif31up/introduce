'use client'
import Image from 'next/image'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
interface ProjectProps {
  h1: string
  p: string
  src: string
  href: string
}
export default function Project({ h1, p, src, href }: ProjectProps) {
  return (
    <a href={href}>
      <div className={'_content'}>
        <div className={'p-4 text-white custom-font-gothic-a1'}>
          <h1 className={'text-3xl mb-2 py-2'}>{h1}</h1>
          <Image
            src={src}
            alt={'project_img'}
            width={'1'}
            height={'1'}
            sizes={'230px'}
            loading={'lazy'}
            className={
              'w-full h-60 rounded-2xl overflow-hidden object-contain object-center'
            }
          />
          <p
            className={
              'custom-font-gothic-a1-thin mt-4 leading-7 tracking-wide'
            }
          >
            {p}
          </p>
        </div>
      </div>
    </a>
  )
}
