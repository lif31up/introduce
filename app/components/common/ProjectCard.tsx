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
  padding: '2rem',
}
export default function ProjectCard({ title, desc, tags, goto }: projectCardProps) {
  return (
    <div style={style} className='bg-white shadow rounded-3xl'>
      <h1 className='_text-black-bolder _text-large'>{title}</h1>
      <p className='_text-black-bold _text-middle leading-7 mt-4'>{desc}</p>
      <Tags width='100%' height='fit-content' className='mt-12'>
        {tags}
      </Tags>
    </div>
  )
}
