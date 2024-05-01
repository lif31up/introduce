import React from 'react'
import Default from '@/utils/interface'

interface Tags extends Default {
  width: string
  height: string
  children: Array<string>
}
const tag: React.CSSProperties = {
  padding: '0.25rem 0.75rem 0.35rem 0.75rem',
  background: 'gray',
  color: 'white',
  borderRadius: '2rem',
}
export default function Tags({ width, height, className, children }: Tags): React.JSX.Element {
  const style: React.CSSProperties = {
    width: width,
    height: height,
  }
  const container: Array<React.ReactNode> | null = []
  children.forEach((element: string, index: number): void => {
    container.push(
      <desc style={tag} className='inline-block text-xs mr-2 mt-2' key={index}>
        {element}
      </desc>
    )
  })
  return (
    <div style={style} className={['block -mt-2', className].join(' ')}>
      {container}
    </div>
  )
}
