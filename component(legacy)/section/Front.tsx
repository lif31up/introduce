import React from 'react'
import ObservedText from '@/component/anime/ObservedText'
import TailwindProperties from '@/utils/tailwindProperties'
import Default from '@/utils/interface'

export default function Front({ id, className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    base: 'w-full h-screen grid items-center justify-items-center',
  }
  return (
    <section className={`${style.base} ${style.xl} ${style.lg} ${style.md} ${style.sm} ${className} overflow-hidden`} id={id}>
      <div className='text-yellow-500 text-1xl sm:text-2xl font-extrabold grid justify-items-center gap-4'>
        <ObservedText className='flex' animation='_anime-slp-vanish-in' id='skillboard-dt--0' whitespace='w-1 sm:w-2'>
          독서, 경험, 성찰을 통해
        </ObservedText>
        <ObservedText className='flex' animation='_anime-slp-vanish-in' id='skillboard-dt--1' whitespace='w-1 sm:w-2'>
          더 나은 사회의 일꾼이 되려합니다
        </ObservedText>
      </div>
    </section>
  )
}
