import React from 'react'
import Image from 'next/image'
import { child } from '@firebase/database'

const style: React.CSSProperties = {
  width: '40rem',
  height: 'fit-content',
}
export default function Comment({ children }: { children: string }): React.JSX.Element {
  return (
    <div style={style} className='bg-white shadow grid justify-items-center pt-24 px-12 pb-16 rounded-3xl'>
      <Image
        alt='profile'
        width={100}
        height={100}
        src='/assets/images/profile.jpg'
        className='bg-black rounded-full mb-12 _anime-vibration'
      />
      <h1 className='_text-middle _text-black-boldess'>지원자의 말</h1>
      <h1 className='_text-large _text-black-bolder'>Han MyeongHwan</h1>
      <p className='_text-large _text-black-bold text-center mt-12' dangerouslySetInnerHTML={{ __html: '"' + children + '"' }} />
    </div>
  )
}
