import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const style: React.CSSProperties = {
  width: '100%',
  height: '9rem',
}

export default function ProfileBanner(): React.JSX.Element {
  return (
    <div style={style} className='flex items-center justify-between px-24'>
      <div className='flex items-center'>
        <Image alt='profile' width={50} height={50} src='/assets/images/profile.jpg' className='rounded-full _outline-black' />
        <div className='ml-8'>
          <h1 className='_text-middle _text-black-bold mb-3'>한명환 (Han MyeongHwan)</h1>
          <h2 className='_text-small _text-black-boldess mb-3'>
            연세대학교 컴퓨터공학과, 중퇴 (Yonsei University Computer Science, Drop-out)
          </h2>
          <h2 className='_text-smaller _text-black-boldess'>
            현재 성남 쪽에서 거주 중입니다. 판교와 강남 모두 출퇴근 가능합니다.
          </h2>
        </div>
      </div>
      <Link href='mailto:nulranlcns9991@gmail.com'>
        <desc className='py-4 px-8 _text-middle text-neutral-500 bg-neutral-100 border-neutral-200 border'>
          E-MAIL: NULRANLCNS9991@GMAIL.COM
        </desc>
      </Link>
    </div>
  )
}
