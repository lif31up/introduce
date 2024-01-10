import React from 'react'
import Image from 'next/image'

const style: React.CSSProperties = {
  width: '100%',
  height: '10rem',
  padding: '1rem 2rem 1rem 2rem',
}
const icon: React.CSSProperties = {
  width: '4rem',
  height: '4rem',
  marginRight: '2rem',
}
interface stackCardProps {
  src: string
  title: string
  desc: string
}
export default function StackCard({ src, title, desc }: stackCardProps) {
  return (
    <div style={style} className='bg-white shadow rounded-2xl flex items-center'>
      <Image src={src} width={40} height={40} alt='stack' className='rounded-full' style={icon} />
      <div>
        <h1 className='_text-middle _text-black-bolder'>{title}</h1>
        <p className='_text-small _text-black-bold mt-1'>{desc}</p>
      </div>
    </div>
  )
}
