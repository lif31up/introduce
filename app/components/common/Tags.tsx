import React from 'react'
import defaultProps from '@/mods/props'

interface tagsProps extends defaultProps {
  width: string
  height: string
}
const tag: React.CSSProperties = {
  padding: '0.25rem 0.75rem 0.35rem 0.75rem',
  background: 'gray',
  color: 'white',
  borderRadius: '2rem',
}
export default function Tags({ width, height, className, children }: tagsProps): React.JSX.Element {
  const style: React.CSSProperties = {
    width: width,
    height: height,
  }
  const container: Array<React.ReactNode> | null = []
  children.forEach((element: string, index: number): void => {
    container.push(
      <desc style={tag} className='text-xs' key={index}>
        {element}
      </desc>
    )
  })
  return (
    <div style={style} className={['flex gap-2', className].join(' ')}>
      {container}
    </div>
  )
}
