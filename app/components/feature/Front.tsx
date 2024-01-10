import React from 'react'
import Link from 'next/link'

const style: React.CSSProperties = {
  width: '100%',
  height: '55rem',
  padding: '0 15rem 0 15rem',
}
export default function Front({ src }: { src: string }) {
  const backgroundImage: React.CSSProperties = {
    backgroundImage: `url("${src}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }
  return (
    <section style={{ ...style, ...backgroundImage }} className='grid items-center gap-16'>
      <div className='w-fit p-16 bg-white rounded-3xl shadow'>
        <h1 className='w-fit _text-huger _text-black-bolder'>새로운 경험을 원하는 개발자</h1>
        <h2 style={{ width: '50rem' }} className='_text-middle _text-black-bold tracking-wide leading-8 mt-8'>
          컴퓨터로 할 수 있는 가장 흥미로운 것들을 연구하고 가져옵니다. 더 나은 사용자 경험을 위해 끊임없이 탐구합니다. 우리가
          성취할 수 있는 목표에 대해 끊임없이 상상합니다. 어쨌거나 반갑습니다.
        </h2>
        <Link
          href='https://github.com/lif31up'
          className='block w-fit h-fit px-12 pt-8 pb-9 mt-12 -ml-4 rounded-full _text-large bg-black text-white'>
          깃허브 프로필로 이동하기
        </Link>
        <Link
          href='https://github.com/lif31up/introduce'
          className='block w-fit mt-12 _text-middle _text-black-boldess underline'>
          이 웹페이지에 대한 리포지토리로 이동하기 ✈
        </Link>
      </div>
    </section>
  )
}
