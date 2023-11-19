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
      <div className={'_content p-4'}>
        <h1 className={'_heading_large'}>{h1}</h1>
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
            '_text_regular text-neutral-400'
          }
        >
          {p}
        </p>
      </div>
    </a>
  )
}
