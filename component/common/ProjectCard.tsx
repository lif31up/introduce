import React from 'react'
import Tags from '@/component/common/Tags'
import Default from '@/util/interface'

interface Project {
  title: string
  heading: string
  desc: string
  tags: Array<string>
  href: string
}

interface ProjectCard extends Default {
  data: Project
}
export default function ProjectCard({ data }: ProjectCard) {
  const { title, heading, desc, tags, href }: Project = data
  return (
    <a href={href}>
      <div style={{ borderTop: 'solid rgb(50, 50, 50) 1px' }} className='w-full p-6 sm:pb-6 pb-12 shadow'>
        <h2 className='text-xs text-gray-600 font-bold'>{href.replace('https://github.com/', '')}</h2>
        <h1 className='text-2xl text-neutral-200 font-extrabold mt-4'>{title}</h1>
        <p className='text-base font-bold text-neutral-500 mt-2'>{heading}</p>
        <p className='text-sm text-neutral-300 font-normal mt-1'>{desc}</p>
        <Tags width='100%' height='fit-content' className='mt-8'>
          {tags}
        </Tags>
      </div>
    </a>
  )
}
