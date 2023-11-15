import React from 'react'
import Image from 'next/image'

interface QuoteProps {
  src: string
  h1: string
  p: string
}
export default function Quote({ src, h1, p }: QuoteProps) {
  return (
    <div className={'_content p-4 flex'}>
      <div className={'h-16'} />
      <div className={'absolute'}>
        <Image
          src={src}
          alt={'quote_img.webp'}
          width={'54'}
          height={'54'}
          sizes={'54px'}
          className={'w-16 h-16 custom-sphere overflow-hidden object-cover'}
        />
      </div>
      <div className={'ml-20 w-'}>
        <h1>{h1}</h1>
        <p className={'custom-font-gothic-a1-thin custom-text-08'}>{p}</p>
      </div>
    </div>
  )
}
