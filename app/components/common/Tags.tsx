import React from 'react'
import defaultProps from '@/mods/props'

interface tagsProps extends defaultProps {
  width: string
  height: string
}
const tag: React.CSSProperties = {
  padding: '1rem 1.5rem 1.1rem 1.5rem',
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
      <desc style={tag} className='_text-small' key={index}>
        {element}
      </desc>
    )
  })
  return (
    <div style={style} className={['flex gap-4', className].join(' ')}>
      {container}
    </div>
  )
}
