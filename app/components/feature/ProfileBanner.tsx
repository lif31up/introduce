import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '@/mods/tailwinder'

const style: React.CSSProperties = {
  width: '100%',
  height: 'fit-content',
}

export default function ProfileBanner(): React.JSX.Element {
  return (
    <div style={style} className={'flex items-center justify-between px-4 py-4 lg:px-12'}>
      <div className='flex items-center'>
        <Image alt='profile' width={50} height={50} src='/assets/images/profile.jpg' className='rounded-full _outline-black' />
        <div className='ml-4'>
          <h1 className='text-sm font-medium text-neutral-900'>한명환</h1>
          <h2 className='text-xs text-neutral-700'>연세대학교 컴퓨터공학과, 중퇴</h2>
          <h2 className='text-xs text-neutral-500'>현재 성남 쪽에서 거주 중입니다. 판교와 강남 모두 출퇴근 가능합니다.</h2>
        </div>
      </div>
      <Link href='mailto:nulranlcns9991@gmail.com' className='lg:visible hidden'>
        <desc className='p-2 text-sm text-neutral-500 bg-neutral-100 border-neutral-200 border'>
          E-MAIL: NULRANLCNS9991@GMAIL.COM
        </desc>
      </Link>
    </div>
  )
}
