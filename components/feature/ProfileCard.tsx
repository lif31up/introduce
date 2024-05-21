import TailwindProperties from '@/utils/tailwindProperties'
import DefaultProps from '@/utils/DefaultProps'
import React from 'react'
import Stack from '@/components/common/Stack'
import skills from '@/public/assets/json/skills.json'
import shortcuts from '@/public/assets/json/shortcuts.json'

type SkillCardData = {
  src: string
  name: string
}
type ShortcutData = {
  src: string
  name: string
  href: string
}

function ProfileCard({ className }: DefaultProps<never>) {
  const SkillCard = (data: SkillCardData) => {
    if (!data) return <></>
    return (
      <div className={`w-fit h-4  px-1  flex items-center gap-2 select-none text-neutral-400 hover:text-neutral-300`}>
        <img src={data.src} alt='img' style={{ width: '16px', height: '16px' }} />
        <h1 className='text-md text-inherit  pb-1  line-clamp-1'>{data.name}</h1>
      </div>
    )
  }
  const Shortcut = (data: ShortcutData) => {
    if (data === undefined) return <></>
    return (
      <a href={data.href}>
        <SkillCard src={data.src} name={data.name} />
      </a>
    )
  }

  const imgStyle = { width: '40px', height: '40px' }
  const style: TailwindProperties = {
    md: '',
    base: 'w-full h-fit  flex-col gap-2  relative',
  }
  return (
    <div className={`${style.md} ${style.base} ${className}`}>
      <div className='absolute right-0 top-0  w-fit h-fit m-1'>
        <div className='w-2 h-2  bg-green-500  rounded-full' />
      </div>
      <div title='Profile' className='w-full h-fit flex gap-2  select-none mb-2'>
        <div className='relative'>
          <img src='/assets/images/profile.jpg' style={imgStyle} alt='img' className='object-cover' />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='12'
            height='12'
            className='text-neutral-300 fill-white absolute -top-1 -left-1'>
            <path
              d='M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z'
              stroke='currentColor'
            />
          </svg>
        </div>
        <div title='desc' className='w-full h-fit flex-col -mt-0.5'>
          <h1 className='text-base font-bold text-neutral-300 line-clamp-1'>한 명환</h1>
          <h2 className='text-sm text-neutral-400 line-clamp-1'>UIUX Design / FE Dev / Web Publish</h2>
        </div>
      </div>
      <div className='flex items-center gap-2 pb-1 text-xs text-neutral-200'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='14' height='14' fill='none'>
          <path
            d='M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V16.3333C19 17.8847 19 18.6604 18.7877 19.2858C18.388 20.4633 17.4633 21.388 16.2858 21.7877C15.6604 22 14.8847 22 13.3333 22H10.6667C9.11529 22 8.3396 22 7.71424 21.7877C6.53668 21.388 5.61201 20.4633 5.21228 19.2858C5 18.6604 5 17.8847 5 16.3333V12Z'
            stroke='currentColor'
          />
          <path d='M5 17C6.64996 15.17 9.17273 14 12 14C14.8273 14 17.35 15.17 19 17' stroke='currentColor' />
          <path d='M11 10H13' />
          <path
            d='M9 6V5C9 4.06812 9 3.60218 9.15224 3.23463C9.35523 2.74458 9.74458 2.35523 10.2346 2.15224C10.6022 2 11.0681 2 12 2C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5V6'
            stroke='currentColor'
          />
          <path d='M5 19H3.71429C2.76751 19 2 18.2325 2 17.2857L2 16C2 14.3431 3.34315 13 5 13' stroke='currentColor' />
          <path d='M19 19H20.2857C21.2325 19 22 18.2325 22 17.2857L22 16C22 14.3431 20.6569 13 19 13' stroke='currentColor' />
        </svg>
        <div title='Education' className='px-1 text-sm text-neutral-300  select-none'>
          YONSEI University Computer Science <br /> SAMSUNG SSAFY 2024
        </div>
      </div>
      <div className='pt-6 pb-2   flex items-center gap-2  text-neutral-600'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='14' height='14' fill='none'>
          <path
            d='M2 12C2 13.0519 2.18046 14.0617 2.51212 15M13.0137 9H21.5015M11 15H2.51212M21.5015 9C20.266 5.50442 16.9323 3 13.0137 3C14.6146 3 15.9226 6.76201 16.0091 11.5M21.5015 9C21.7803 9.78867 21.9522 10.6278 22 11.5M2.51212 15C3.74763 18.4956 7.08134 21 11 21C9.45582 21 8.18412 17.5 8.01831 13'
            stroke='currentColor'
          />
          <path
            d='M2 5.29734C2 4.19897 2 3.64979 2.18738 3.22389C2.3861 2.77223 2.72861 2.40921 3.15476 2.1986C3.55661 2 4.07478 2 5.11111 2H6C7.88562 2 8.82843 2 9.41421 2.62085C10 3.2417 10 4.24095 10 6.23944V8.49851C10 9.37026 10 9.80613 9.73593 9.95592C9.47186 10.1057 9.12967 9.86392 8.4453 9.38036L8.34103 9.30669C7.84086 8.95329 7.59078 8.77658 7.30735 8.68563C7.02392 8.59468 6.72336 8.59468 6.12223 8.59468H5.11111C4.07478 8.59468 3.55661 8.59468 3.15476 8.39608C2.72861 8.18547 2.3861 7.82245 2.18738 7.37079C2 6.94489 2 6.39571 2 5.29734Z'
            stroke='currentColor'
          />
          <path
            d='M22 17.2973C22 16.199 22 15.6498 21.8126 15.2239C21.6139 14.7722 21.2714 14.4092 20.8452 14.1986C20.4434 14 19.9252 14 18.8889 14H18C16.1144 14 15.1716 14 14.5858 14.6209C14 15.2417 14 16.2409 14 18.2394V20.4985C14 21.3703 14 21.8061 14.2641 21.9559C14.5281 22.1057 14.8703 21.8639 15.5547 21.3804L15.659 21.3067C16.1591 20.9533 16.4092 20.7766 16.6926 20.6856C16.9761 20.5947 17.2766 20.5947 17.8778 20.5947H18.8889C19.9252 20.5947 20.4434 20.5947 20.8452 20.3961C21.2714 20.1855 21.6139 19.8225 21.8126 19.3708C22 18.9449 22 18.3957 22 17.2973Z'
            stroke='currentColor'
          />
        </svg>
        <h1 className='text-xs font-bold'>기술 스택</h1>
      </div>
      <Stack<SkillCardData> className='w-fit h-fit' data={skills} grid='grid grid-cols-2 gap-3 w-4/5' item={SkillCard} />
      <div className='pt-6 pb-2   flex items-center gap-2  text-neutral-500'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='14' height='14' fill='none'>
          <path
            d='M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z'
            stroke='currentColor'
          />
          <path
            d='M14.1746 12.6482C14.8469 13.4381 16.2132 14.4165 15.97 14.881M15.97 14.881C16.1055 15.3547 14.7827 16.291 14.1716 17.0052M15.97 14.881C13.2147 14.9378 11.5289 14.622 9.90163 13.0869C8.20681 11.4881 7.89136 9.76265 8.02853 6.99463'
            stroke='currentColor'
          />
        </svg>
        <h1 className='text-xs text-neutral-600 font-bold'>바로가기</h1>
      </div>
      <Stack<ShortcutData> className='w-fit h-fit' data={shortcuts} grid='grid grid-cols-2 gap-3 w-4/5' item={Shortcut} />
    </div>
  )
}
export default ProfileCard
