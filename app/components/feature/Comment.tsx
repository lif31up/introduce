import React from 'react'
import Image from 'next/image'
import { child } from '@firebase/database'
import defaultProps from '@/mods/props'

const style: React.CSSProperties = {
  width: '40rem',
  height: 'fit-content',
  padding: '6rem 3rem 4rem 3rem',
}
export default function Comment({ children, className }: defaultProps): React.JSX.Element {
  return (
    <div style={style} className={['bg-white shadow grid justify-items-center rounded-3xl z-10', className].join(' ').trim()}>
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
