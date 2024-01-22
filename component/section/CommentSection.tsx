import React from 'react'
import ObservedContainer from '@/component/anime/ObservedContainer'
import Comment from '@/component/feature/Comment'
import TailwindProperties from '@/util/tailwindProperties'
import Default from '@/util/interface'

const style: TailwindProperties = {
  sm: '',
  base: 'w-full h-96 grid justify-items-center items-center',
}

interface CommentSection extends Default {
  children: string
}
function CommentSection({ children, className }: CommentSection): React.JSX.Element {
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <ObservedContainer id='comment-0' animation='_anime-slp-space-in-up' threshold={0.5}>
        <Comment>{children}</Comment>
      </ObservedContainer>
    </section>
  )
}
export default CommentSection
