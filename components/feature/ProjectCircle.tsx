'use client'

import React, { useContext, useEffect, useState } from 'react'
import { ProjectData, ProjectDisplayContext, ProjectDisplayState } from '@/components/feature/ProjectDisplay'
import { useRecoilValue } from 'recoil'
import TailwindProperties from '@/utils/tailwindProperties'
import DefaultProps from '@/utils/DefaultProps'

function ProjectCircle() {
  const data = useContext(ProjectDisplayContext)
  const projectIndex = useRecoilValue(ProjectDisplayState)
  const [activated, setActivated] = useState<boolean>(false)

  useEffect(() => {
    setActivated(false)
  }, [projectIndex])

  if (!data) return <></>
  const { badges, href, src, title, desc }: ProjectData = data[projectIndex]
  const badgeList: Array<React.ReactNode> = []
  if (badges) {
    badges.forEach((element: BadgeData, index: number) => badgeList.push(<Badge data={element} key={index} />))
  }

  let clickHandler: () => void
  if (!activated) {
    clickHandler = () => {
      setActivated(true)
    }
  } else {
    clickHandler = () =>
      setTimeout(() => {
        window.open(href)
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
            className='grid items-center justify-items-center rounded-full overflow-clip _bg-lp _bg-dynamic-lp shadow-inner'>
            <button
              className='relative flex items-center justify-center rounded-full overflow-hidden shadow border-white border-2 bg-black'
              onClick={clickHandler}>
              <div className='w-56 h-56 hover:w-72 hover:h-72  grid justify-center items-center  rounded-full overflow-hidden  _transition-wh-sm'>
                {!activated ? (
                  <div className='w-72 h-72  flex justify-center items-center' style={{ background: `url(${src})` }} />
                ) : (
                  <LPDesc title={title} desc={desc} />
                )}
              </div>
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
  title: string
  desc: string
}
function LPDesc({ title, desc }: LPDescProps) {
  return (
    <div className='w-72 h-fit px-4'>
      <h1 className='text-lg text-neutral-50'>{title}</h1>
      <p className='text-xs text-neutral-400'>{desc}</p>
    </div>
  )
}
