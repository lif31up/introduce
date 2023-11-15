import React from 'react'
import '@/styles/Common.css'
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
        className={[
          'custom-rounded inline-block mr-4 my-2 w-fit custom-font-gothic-a1',
          color,
        ]
          .join(' ')
          .trim()}
      >
        {child}
      </h1>
    )
  })
  return <div className={'_trans_content block'}>{tags}</div>
}
