import React from 'react'
import DynamicText from '@/app/components/common/DynamicText'

const style: React.CSSProperties = {
  width: '100%',
  height: 'fit-content',
  minHeight: 'calc(100vh - 5rem)',
  padding: '20rem 10rem 20rem 10rem',
}

export default function SkillBoard({}): React.JSX.Element {
  return (
    <section style={style} className='grid justify-items-center items-center relative overflow-hidden bg-black'>
      <div className='_anime-space-zoom' />
      <div className='text-yellow-500 _text-huger grid justify-items-center gap-4'>
        <DynamicText className='flex' animation='_anime-slp-vanish-in' id='skillboard-dt--0'>
          독서, 경험, 성찰을 통해
        </DynamicText>
        <DynamicText className='flex' animation='_anime-slp-vanish-in' id='skillboard-dt--1'>
          더 나은 사회의 일꾼이 되려합니다
        </DynamicText>
      </div>
    </section>
  )
}
