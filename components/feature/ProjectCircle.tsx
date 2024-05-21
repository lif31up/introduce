'use client'

import React, { useContext } from 'react'
import { ProjectData, ProjectDisplayContext, ProjectDisplayState } from '@/components/feature/ProjectDisplay'
import { useRecoilValue } from 'recoil'
import TailwindProperties from '@/utils/tailwindProperties'
import DefaultProps from '@/utils/DefaultProps'

function ProjectCircle() {
  const data = useContext(ProjectDisplayContext)
  const projectIndex = useRecoilValue(ProjectDisplayState)

  const circleId: string = 'circle-id-0'

  if (!data) return <></>
  const { badges, href, src, title, desc }: ProjectData = data[projectIndex]
  const badgeList: Array<React.ReactNode> = []
  if (badges) {
    badges.forEach((element: BadgeData, index: number) => badgeList.push(<Badge data={element} key={index} />))
  }

  const clickHandler = () =>
    setTimeout(() => {
      window.open(href)
    }, 0)

  const style: TailwindProperties = {
    md: 'fixed left-0 top-0 w-screen h-screen flex justify-center items-center',
    base: '',
  }
  return (
    <section className={`${style.md} ${style.base} -z-10 xl:flex hidden`}>
      <div className='relative w-fit h-fit'>
        <section title='badge' className='z-20 absolute right-0 top-0  w-fit h-fit  pt-8  grid gap-2 justify-items-end'>
          {badgeList}
        </section>
        <section title='lp' id={circleId}>
          <button
            className='relative  flex items-center justify-center  rounded-full overflow-hidden  _anime-outline-vibration'
            onClick={clickHandler}>
            <LPDesc title={title} desc={desc} src={src} />
          </button>
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
    base: `bg-white text-black  h-16  rounded-full  flex items-center justify-start overflow-hidden _hover-max-w-fit`,
  }
  return (
    <button className={`${style.md} ${style.base} ${className} shadow relative`}>
      <div className='flex items-center justify-start'>
        <div className='flex items-center justify-center w-16 h-16'>
          <img alt='svg' className='w-6 h-6' src={src} />
        </div>
        <h1 className='text-sm text-black w-fit pr-8'>{name}</h1>
      </div>
    </button>
  )
}

interface LPDescProps {
  src: string
  title: string
  desc: string
}
function LPDesc({ title, desc, src }: LPDescProps) {
  return (
    <div className={`w-96 h-96`} style={{ background: `url(${src})` }}>
      <div className='w-full h-full  px-4  grid items-center justify-center backdrop-blur-md'>
        <div>
          <h1 className='text-lg font-bold text-gray-100'>{title}</h1>
          <p className='w-64  text-xs font-normal text-neutral-300'>{desc}</p>
        </div>
      </div>
    </div>
  )
}
