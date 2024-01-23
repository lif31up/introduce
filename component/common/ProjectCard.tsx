'use client'
import React from 'react'
import Tags from '@/component/common/Tags'
import Default from '@/util/interface'

interface Project {
  title: string
  heading: string
  desc: string
  tags: Array<string>
  href: string
  repo: string
}

interface ProjectCard extends Default {
  data: Project
}
export default function ProjectCard({ data }: ProjectCard) {
  const { title, heading, desc, tags, href, repo }: Project = data
  const clickHandler = (): void => {
    window.location.href = href
  }
  return (
    <div onClick={clickHandler} className='z-10'>
      <div style={{ borderTop: 'solid rgb(50, 50, 50) 1px' }} className='w-full p-6 sm:pb-6 pb-12 shadow'>
        <a href={repo} className='z-20 text-xs text-gray-600 font-bold'>
          {repo.replace('https://github.com/', '')}
        </a>
        <h1 className='text-2xl text-neutral-200 font-extrabold mt-4'>{title}</h1>
        <p className='text-base font-bold text-neutral-500 mt-2'>{heading}</p>
        <p className='text-sm text-neutral-300 font-normal mt-1'>{desc}</p>
        <Tags width='100%' height='fit-content' className='mt-8'>
          {tags}
        </Tags>
      </div>
    </div>
  )
}
