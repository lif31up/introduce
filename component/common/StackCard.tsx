import React from 'react'
import Image from 'next/image'
import Default from '@/util/interface'
import TailwindProperties from '@/util/tailwindProperties'

interface StackCard extends Default {
  name: string
  src: string
  desc: string
}
export default function StackCard({ name, src, desc }: StackCard) {
  const style: TailwindProperties = {
    sm: 'sm:p-4',
    base: 'w-full grid p-6 pb-4',
  }
  return (
    <div className={`${style.sm} ${style.base}`} style={{ borderTop: 'solid rgb(50,50,50) 1px' }}>
      <div className='flex items-center'>
        <div className='w-6 h-6 relative'>
          <Image src={src} sizes={'2rem'} width={0} height={0} className='rounded-full' fill alt='stack' />
        </div>
        <h1 className='text-sm font-bold text-neutral-300 ml-4'>{name}</h1>
      </div>
      <div className='hidden sm:block'>
        <p className='text-xs text-neutral-500 mt-3'>{desc}</p>
      </div>
    </div>
  )
}
