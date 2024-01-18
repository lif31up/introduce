import React from 'react'
import Link from 'next/link'

export default function Front() {
  return (
    <section className={`flex justify-center items-center`}>
      <div className='w-3/5 p-8 bg-white rounded-2xl'>
        <h1 className='text-2xl font-bold'>새로운 경험을 원하는 개발자</h1>
        <h2 className='text-sm text-neutral-700 mt-2 w-3/4'>
          컴퓨터로 할 수 있는 가장 흥미로운 것들을 연구하고 가져옵니다. 더 나은 사용자 경험을 위해 끊임없이 탐구합니다. 우리가
          성취할 수 있는 목표에 대해 끊임없이 상상합니다. 어쨌거나 반갑습니다.
        </h2>
        <Link
          href='https://github.com/lif31up'
          className='block font-bold w-fit h-fit px-8 py-4 mt-12 -ml-2 rounded-full text-base bg-neutral-900 text-white'>
          깃허브 프로필로 이동하기
        </Link>
        <Link
          href='https://github.com/lif31up/introduce'
          className='block w-fit mt-5 text-xs font-medium text-neutral-500 underline'>
          이 웹페이지에 대한 리포지토리로 이동하기 ✈
        </Link>
      </div>
    </section>
  )
}
