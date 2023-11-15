import '@/styles/Common.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Profile({ desktop }: { desktop: boolean }) {
  return (
    <div
      className={[
        '_gray_content p-4 flex',
        desktop ? 'custom-mobile-disable' : 'custom-desktop-disable',
      ]
        .join(' ')
        .trim()}
    >
      <div className={'absolute'}>
        <Image
          src={'/assets/images/profile.webp'}
          alt={'profile.webp'}
          width={'118'}
          height={'118'}
          sizes={'118px'}
          className={'w-32 h-32 custom-sphere overflow-hidden object-cover'}
        />
      </div>
      <div className={'h-32 w-32'} />
      <div className={'pl-4 pt-1'}>
        <div className={'flex items-end'}>
          <h1 className={'text-2xl custom-font-gothic-a1'}>{'한명환'}</h1>
          <p className={'custom-font-gothic-a1-thin text-neutral-300 ml-2'}>
            {'연세대학교'}
            <abbr className={'text-white'}>{' 정보통신학과 '}</abbr>
          </p>
        </div>
        <p className={'custom-font-gothic-a1-thin text-neutral-300'}>
          {'성남에서 거주 중, 판교와 강남'}
          <br />
          {'nulranlcns9991@gmail.com'}
        </p>
        <div
          className={
            'flex gap-2 mt-1 text-purple-400 custom-font-gothic-a1-thin underline'
          }
        >
          <Link
            className={'block'}
            href={
              'https://www.wanted.co.kr/community/profile/37S8yhNPdWGwoLsqCu8uu7'
            }
            target={'_blank'}
          >
            {'원티드'}
          </Link>
          <Link
            className={'block'}
            href={'https://www.rocketpunch.com/@nulranlcns9991'}
            target={'_blank'}
          >
            {'로켓펀치'}
          </Link>
          <Link
            className={'block'}
            href={
              'https://join.slack.com/t/personalspace-hng4971/shared_invite/zt-25whyi2gn-4QPq8CLXi_GKD3qjNZSV0w'
            }
            target={'_blank'}
          >
            {'슬랙'}
          </Link>
        </div>
      </div>
    </div>
  )
}
