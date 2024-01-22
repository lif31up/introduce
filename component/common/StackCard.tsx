import React from 'react'
import Image from 'next/image'

const style: React.CSSProperties = {
  width: '100%',
  height: 'fit-content',
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
    <div style={style} className='bg-white shadow rounded-2xl flex items-start'>
      <Image src={src} width={40} height={40} alt='stack' className='rounded-full' style={icon} />
      <div>
        <h1 className='text-xs text-neutral-700 font-bold'>{title}</h1>
        <p className='text-xs text-neutral-700 mt-1'>{desc}</p>
      </div>
    </div>
  )
}
