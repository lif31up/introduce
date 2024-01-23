import React from 'react'
import Image from 'next/image'
import Default from '@/util/interface'

interface StackCard extends Default {
  name: string
  src: string
  desc: string
}
export default function StackCard({ name, src, desc }: StackCard) {
  return (
    <div className='w-full grid bg-neutral-950 p-4 pb-8 sm:p-4'>
      <div className='flex items-center'>
        <div className='w-8 h-8 relative'>
          <Image src={src} sizes={'2rem'} width={0} height={0} className='rounded-full' fill alt='stack' />
        </div>
        <h1 className='text-sm font-bold text-neutral-300 ml-4 mb-1'>{name}</h1>
      </div>
      <div>
        <p className='text-xs text-neutral-500 mt-3'>{desc}</p>
      </div>
    </div>
  )
}
