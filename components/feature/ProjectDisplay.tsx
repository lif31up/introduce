'use client'

import { atom, RecoilRoot } from 'recoil'
import { createContext } from 'react'
import projects from '@/public/assets/json/projects.json'
import ProjectSelector from '@/components/feature/ProjectSelector'
import ProjectCircle from '@/components/feature/ProjectCircle'
import TailwindProperties from '@/utils/tailwindProperties'
import DefaultProps from '@/utils/DefaultProps'

export type BadgeData = {
  name: string
  src: string
}
export type ProjectData = {
  index: number
  title: string
  desc: string
  href: string
  src: string
  colors: Array<string>
  badges: Array<BadgeData>
}

export const ProjectDisplayContext = createContext<Array<ProjectData> | null>(null)
export const ProjectDisplayState = atom({ key: 'project-display-state', default: 0 })

function ProjectDisplay({ className }: DefaultProps<never>) {
  const size = { width: '320px', height: 'full-content' }
  const style: TailwindProperties = {
    md: '',
    base: '',
  }
  return (
    <section className={`${style.md} ${style.base} ${className}`} style={size}>
      <ProjectDisplayContext.Provider value={projects}>
        <RecoilRoot>
          <ProjectSelector />
          <ProjectCircle />
        </RecoilRoot>
      </ProjectDisplayContext.Provider>
    </section>
  )
}
export default ProjectDisplay
