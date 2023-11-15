import Stack from '@/app/components/feature/Stack'
import React from 'react'
export interface StackTableChild {
  h1: string
  p: string
  src: string
}
export default function StackTable({
  children,
  id,
}: {
  children: Array<StackTableChild>
  id: string
}) {
  const stacks: Array<React.ReactNode> = []
  children.forEach((node, index) => {
    stacks.push(
      <Stack
        h1={node.h1}
        p={node.p}
        src={node.src}
        key={index}
        id={id + index.toString()}
      />
    )
  })
  return <>{stacks}</>
}
