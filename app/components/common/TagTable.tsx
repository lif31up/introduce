import React from 'react'
import '@/styles/Common.css'
import '@/styles/Text.css'
export default function TagTable({
  children,
  color,
}: {
  children: Array<string>
  color: string
}) {
  const tags: Array<React.ReactNode> = []
  children.forEach((child, index) => {
    tags.push(
      <h1
        key={index}
        className={['_rounded inline-block mr-4 my-1 py-1 px-4 w-fit _heading_small', color,].join(' ').trim()}>
        {child}
      </h1>
    )
  })
  return <div className={'_trans_content block'}>{tags}</div>
}
