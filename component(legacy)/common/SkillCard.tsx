import React from 'react'
import Default from '@/utils/interface'
import TailwindProperties from '@/utils/tailwindProperties'

interface Skill {
  title: string
  heading: string
  desc: string
}
interface SkillCard extends Default {
  data: Skill
}
function SkillCard({ className, data }: SkillCard): React.JSX.Element {
  const { title, heading, desc } = data
  const style: TailwindProperties = {
    sm: '',
    base: '',
  }
  return (
    <div className={`${style.sm} ${style.base} ${className}`}>
      <h1 className='text-base font-bold text-white'>{title}</h1>
      <p className='text-sm font-normal text-white'>{heading}</p>
      <p className='text-xs font-normal text-white'>{desc}</p>
    </div>
  )
}
export default SkillCard
