import React from 'react'
import Image from 'next/image'

const style: React.CSSProperties = {
  width: '100%',
  height: '6.8rem',
  padding: '1rem',
}
const icon: React.CSSProperties = {
  width: '2rem',
  height: '2rem',
  marginRight: '1rem',
}
interface stackCardProps {
  src: string
  title: string
  desc: string
}
export default function StackCard({ src, title, desc }: stackCardProps) {
  return (
    <div style={style} className='_bg-grid flex items-start'>
      <Image src={src} width={40} height={40} alt='stack' className='rounded-full' style={icon} />
      <div>
        <h1 className='text-xs text-neutral-300 font-bold'>{title}</h1>
        <p className='text-xs text-neutral-500 mt-1'>{desc}</p>
      </div>
    </div>
  )
}
