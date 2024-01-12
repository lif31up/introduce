import React from 'react'
import Tags from '@/app/components/common/Tags'
import defaultProps from '@/mods/props'

interface projectCardProps extends defaultProps {
  title: string
  desc: string
  tags: Array<string>
  goto: string
}
const style: React.CSSProperties = {
  width: '100%',
  height: 'fit-content',
  padding: '1rem',
}
export default function ProjectCard({ title, desc, tags, goto }: projectCardProps) {
  return (
    <div style={style} className='bg-white shadow rounded-2xl'>
      <h1 className='text-base text-neutral-900 font-bold'>{title}</h1>
      <p className='text-xs text-neutral-700 font-normal mt-2'>{desc}</p>
      <Tags width='100%' height='fit-content' className='mt-8'>
        {tags}
      </Tags>
    </div>
  )
}
