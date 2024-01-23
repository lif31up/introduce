import React from 'react'
import ObservedText from '@/component/anime/ObservedText'
import TailwindProperties from '@/util/tailwindProperties'
import Default from '@/util/interface'

export default function FrontSection({ id, className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    base: 'w-full h-screen grid items-center justify-items-center',
  }
  return (
    <section className={`${style.base} ${style.xl} ${style.lg} ${style.md} ${style.sm} ${className} overflow-hidden`} id={id}>
      <div className='text-yellow-500 text-1xl sm:text-2xl font-extrabold grid justify-items-center gap-4'>
        <ObservedText className='flex' animation='_anime-slp-vanish-in' id='footer-dt--0' whitespace='w-1 sm:w-2'>
          지금까지 읽어주셔서
        </ObservedText>
        <ObservedText className='flex' animation='_anime-slp-vanish-in' id='footer-dt--1' whitespace='w-1 sm:w-2'>
          감사합니다.
        </ObservedText>
      </div>
    </section>
  )
}
