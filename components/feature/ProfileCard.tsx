import TailwindProperties from '@/utils/tailwindProperties'
import DefaultProps from '@/utils/interface'
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
        <img src='/assets/images/profile.jpg' style={imgStyle} alt='img' className='object-cover' />
        <div title='desc' className='w-full h-fit flex-col -mt-0.5'>
          <h1 className='text-base font-bold text-neutral-300 line-clamp-1'>한 명환</h1>
          <h2 className='text-sm text-neutral-400 line-clamp-1'>UI/UX Designer / Web Publisher</h2>
        </div>
      </div>
      <div title='Education' className='px-1 text-sm text-neutral-300  select-none'>
        YONSEI University Computer Science <br /> SAFFE 2024
      </div>
      <Stack<SkillCardData> className='w-fit h-fit pt-4' data={skills} grid='grid grid-cols-2 gap-2' item={SkillCard} />
      <Stack<ShortcutData> className='w-fit h-fit pt-6' data={shortcuts} grid='grid grid-cols-2 gap-2' item={Shortcut} />
    </div>
  )
}
export default ProfileCard
