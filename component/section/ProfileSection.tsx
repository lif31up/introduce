import React from 'react'
import Link from 'next/link'
import TailwindProperties from '@/util/tailwindProperties'
import Image from 'next/image'

const style: TailwindProperties = {
  xl: 'xl:px-40 xl:my-8',
  lg: `lg:px-20 lg:my-8`,
  md: 'md:px-12 md:my-8',
  sm: 'sm:px-8 sm:my-8',
  base: 'flex justify-center',
}
export default function ProfileSection(): React.JSX.Element {
  return (
    <section className={`${style.base} ${style.xl} ${style.lg} ${style.md} ${style.sm}`}>
      <div
        className='p-6 grid justify-items-center sm:block sm:rounded-2xl sm:px-8 sm:py-16'
        style={{ borderTop: 'solid rgb(50, 50, 50) 1px', borderBottom: 'solid rgb(50,50,50) 1px' }}>
        <div className='flex items-center mb-8'>
          <div className='relative h-40 w-40 overflow-hidden rounded-full _anime-vibration'>
            <Image src='/assets/images/profile.jpg' alt='profile' fill className='object-cover' />
          </div>
          <div className='ml-8 h-fit'>
            <h1 className='text-3xl font-extrabold text-neutral-100'>한명환</h1>
            <h2 className='text-xl font-extrabold text-neutral-300 mt-2'>연세대학교 컴퓨터공학과</h2>
            <h1 className='text-xl font-extrabold text-neutral-200'>인텔 수료생</h1>
          </div>
        </div>
        <h1 className='text-2xl font-bold text-white'>새로운 경험을 원하는 개발자</h1>
        <h2 className='text-sm text-neutral-300 mt-2'>
          컴퓨터로 할 수 있는 가장 흥미로운 것들을 연구하고 가져옵니다. 더 나은 사용자 경험을 위해 끊임없이 탐구합니다. 우리가
          성취할 수 있는 목표에 대해 끊임없이 상상합니다. 그리고 그걸 구현하는 연구에도 게을리지 하지 않습니다. 완성될 제품의 품질
          향상을 위해 절대 쉬지않습니다. 제가 모자란 부분이 있다면 겸허히 받아 들이고 배우겠습니다. 그렇지 않으면 성장할 수 없고
          한계에 구속되게 되기 때문입니다. 어떤 사람이 필요하신지는 아직 몰라도 전 그렇게 될 준비가 되었습니다.
        </h2>
        <Link
          href='https://github.com/lif31up'
          className='font-bold w-fit h-fit px-8 py-4 mt-12 -ml-2 rounded-full text-base bg-neutral-900 text-white hidden sm:block'>
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
