import React from 'react'
import Image from 'next/image'
import Default from '@/utils/interface'
import TailwindProperties from '@/utils/tailwindProperties'

export default function Comment({ children, className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    sm: 'sm:w-96 sm:h-fit sm:px-12 sm:py-8',
    base: 'w-full h-fit grid justify-items-center px-12 py-4 bg-neutral-950 rounded-2xl',
  }
  return (
    <div className={`${style.sm} ${style.base} ${className}`} style={{ border: 'solid rgb(25,25,25) 1px' }}>
      <Image
        alt='profile'
        width={100}
        height={100}
        src='/assets/images/profile.jpg'
        className='bg-black rounded-full mb-4 _anime-vibration'
      />
      <h1 className='text-xl text-neutral-100 font-bold mb-2'>한 명환</h1>
      <h1 className='text-sm text-neutral-500 mb-2'>지원자의 말</h1>
      <p className='text-xl text-neutral-300 text-center' dangerouslySetInnerHTML={{ __html: '"' + children + '"' }} />
    </div>
  )
}
