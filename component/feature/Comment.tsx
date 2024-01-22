import React from 'react'
import Image from 'next/image'
import Default from '@/util/interface'

const style: React.CSSProperties = {
  width: '24rem',
  height: 'fit-content',
  padding: '3rem 1rem 3rem 1rem',
}
export default function Comment({ children, className }: Default): React.JSX.Element {
  return (
    <div style={style} className={['bg-white shadow grid justify-items-center rounded-3xl z-10', className].join(' ').trim()}>
      <Image
        alt='profile'
        width={100}
        height={100}
        src='/assets/images/profile.jpg'
        className='bg-black rounded-full mb-4 _anime-vibration'
      />
      <h1 className='text-xl text-neutral-900 font-bold mb-2'>한 명환</h1>
      <h1 className='text-sm text-neutral-500 mb-2'>지원자의 말</h1>
      <p className='text-xl text-neutral-700 text-center' dangerouslySetInnerHTML={{ __html: '"' + children + '"' }} />
    </div>
  )
}
