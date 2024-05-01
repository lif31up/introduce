'use client'

import React, { useContext } from 'react'
import { ProjectData, ProjectDisplayContext, ProjectDisplayState } from '@/components/feature/ProjectDisplay'
import { useRecoilValue } from 'recoil'
import TailwindProperties from '@/utils/tailwindProperties'
import DefaultProps from '@/utils/interface'

function ProjectCircle() {
  const data = useContext(ProjectDisplayContext)
  const projectIndex = useRecoilValue(ProjectDisplayState)

  if (!data) return <></>
  const { badges, href, src }: ProjectData = data[projectIndex]
  const badgeList: Array<React.ReactNode> = []
  if (badges) {
    badges.forEach((element: BadgeData, index: number) => badgeList.push(<Badge data={element} key={index} />))
  }

  const clickHandler = () => {
    setTimeout(() => {
      document.location.href = href
    }, 1000)
  }

  const style: TailwindProperties = {
    md: 'fixed left-0 top-0 w-screen h-screen flex justify-center items-center',
    base: '',
  }
  return (
    <section className={`${style.md} ${style.base} -z-10`}>
      <div className='relative w-fit h-fit'>
        <section title='badge' className='z-20 absolute right-0 top-0  w-fit h-fit  pt-8  grid gap-2 justify-items-end'>
          {badgeList}
        </section>
        <section title='lp' className='z-10'>
          <div
            style={{ width: '432px', height: '432px' }}
            className='grid items-center justify-items-center rounded-full overflow-clip  _bg-lp shadow-inner'>
            <button className='rounded-full overflow-hidden shadow border-white border-2' onClick={clickHandler}>
              <img alt='img' src={src} className='w-40 h-40 hover:w-56 hover:h-56 _transition-wh-md bg-black object-cover' />
            </button>
          </div>
        </section>
      </div>
    </section>
  )
}
export default ProjectCircle

type BadgeData = {
  name: string
  src: string
}
function Badge({ data, className }: DefaultProps<BadgeData>) {
  if (!data) return <></>
  const { name, src }: BadgeData = data

  const style: TailwindProperties = {
    md: '',
    base: `bg-white text-black  w-16 h-16  rounded-full  flex items-center justify-center  overflow-clip hover:w-32`,
  }
  return (
    <button className={`${style.md} ${style.base} ${className} _hover-hider _transition-w-xs relative shadow`}>
      <div className='absolute left-5 flex items-center gap-6'>
        <img alt='svg' className='w-6 h-6' src={src} />
        <h1 className='text-sm text-black'>{name}</h1>
      </div>
    </button>
  )
}
