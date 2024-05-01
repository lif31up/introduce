import React from 'react'
import Link from 'next/link'
import TailwindProperties from '@/utils/tailwindProperties'
import Image from 'next/image'
import Default from '@/utils/interface'

const style: TailwindProperties = {
  xl: 'xl:px-80 xl:my-8',
  lg: `lg:px-60 lg:my-8`,
  md: 'md:px-24 md:my-8',
  sm: 'sm:px-8 sm:my-8',
  base: 'flex justify-center',
}
export default function ProfileSection({ className, id }: Default): React.JSX.Element {
  return (
    <section className={`${style.base} ${style.xl} ${style.lg} ${style.md} ${style.sm} ${className} overflow-hidden`} id={id}>
      <div
        className='p-6 grid justify-items-center sm:block sm:px-8 sm:py-16'
        style={{ borderTop: 'solid rgb(50, 50, 50) 0px', borderBottom: 'solid rgb(50,50,50) 0px' }}>
        <div className='flex items-center mb-8'>
          <div className='relative h-40 w-40'>
            <Image src='/assets/images/profile.jpg' alt='profile' fill className='rounded-full _anime-vibration object-cover' />
          </div>
          <div className='ml-8 h-fit hidden sm:block'>
            <h1 className='text-3xl font-extrabold text-neutral-100'>한명환</h1>
            <h2 className='text-base font-extrabold text-neutral-300 mt-4'>연세대학교 컴퓨터공학과</h2>
            <h3 className='text-sm text-neutral-500'>프론트엔드 개발, 웹 퍼블리싱, UI/UX 디자인</h3>
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
