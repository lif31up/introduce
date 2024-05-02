'use client'

import React, { useContext } from 'react'
import DefaultProps from '@/utils/interface'
import TailwindProperties from '@/utils/tailwindProperties'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { ProjectData, ProjectDisplayContext, ProjectDisplayState } from '@/components/feature/ProjectDisplay'

function ProjectSelector({ className }: DefaultProps<never>) {
  const data: Array<ProjectData> | null = useContext(ProjectDisplayContext)
  const projectIndex = useRecoilValue(ProjectDisplayState)
  const setProjectIndex = useSetRecoilState(ProjectDisplayState)

  const [defaultHeight, activatedHeight]: Array<number> = [28, 76]
  const projectList: Array<React.ReactNode> = []
  if (data) {
    let topPoint: number = -28
    data.forEach((element: ProjectData, index: number) => {
      topPoint += projectIndex === index - 1 ? activatedHeight : defaultHeight
      const clickHandler = () => setProjectIndex(element.index)
      projectList.push(
        <ProjectCard key={index} data={element} onClick={clickHandler} activated={index === projectIndex} top={topPoint} />
      )
    })
  }
  const style: TailwindProperties = {
    md: '',
    base: 'w-full h-fit  py-4  grid items-left justify-items-left gap-2',
  }
  return (
    <div className={`${style.md} ${style.base} ${className}`}>
      <h1 className='text-xs font-bold text-neutral-600 pt-4'>프로젝트</h1>
      <div className='relative w-full h-fit'>{projectList}</div>
    </div>
  )
}
export default ProjectSelector

interface ProjectCardProps extends DefaultProps<ProjectData> {
  activated: boolean
  top: number
}
function ProjectCard({ data, className, onClick, activated, top }: ProjectCardProps) {
  if (!data) return <></>
  const { title, desc }: ProjectData = data
  const clickHandler = () => {
    if (onClick !== undefined) onClick()
  }
  const style: TailwindProperties = {
    md: '',
    base: 'absolute w-fit h-fit  flex-col items-left text-left _transition-position-y',
  }
  return (
    <button className={`${style.md} ${style.base} ${className}`} onClick={clickHandler} style={{ top: `${top}px` }}>
      <h1 className={`text-base font-bold tracking-widest line-clamp-1 ${activated ? 'text-neutral-300' : 'text-neutral-400'}`}>
        {title}
      </h1>
      <div className={`overflow-hidden w-full`}>
        <p className={`text-sm text-neutral-300 line-clamp-2 ${activated ? 'h-12 _anime-ttb-slide' : 'h-0'}`}>{desc}</p>
      </div>
    </button>
  )
}
