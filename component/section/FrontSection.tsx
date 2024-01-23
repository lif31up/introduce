import React from 'react'
import ObservedText from '@/component/anime/ObservedText'
import TailwindProperties from '@/util/tailwindProperties'
import Default from '@/util/interface'

const style: TailwindProperties = {
  xl: '',
  lg: ``,
  md: '',
  sm: '',
  base: 'w-full h-screen grid items-center justify-items-center',
}

export default function FrontSection({ id, className }: Default): React.JSX.Element {
  return (
    <section className={`${style.base} ${style.xl} ${style.lg} ${style.md} ${style.sm} ${className}`} id={id}>
      <div className='text-yellow-500 text-1xl sm:text-2xl font-extrabold grid justify-items-center gap-4'>
        <ObservedText className='flex' animation='_anime-slp-vanish-in' id='skillboard-dt--0'>
          독서, 경험, 성찰을 통해
        </ObservedText>
        <ObservedText className='flex' animation='_anime-slp-vanish-in' id='skillboard-dt--1'>
          더 나은 사회의 일꾼이 되려합니다
        </ObservedText>
      </div>
    </section>
  )
}
