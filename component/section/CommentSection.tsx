import React from 'react'
import ObservedContainer from '@/component/anime/ObservedContainer'
import Comment from '@/component/feature/Comment'
import TailwindProperties from '@/util/tailwindProperties'
import Default from '@/util/interface'

interface CommentSection extends Default {
  children: string
}
function CommentSection({ children, className, id }: CommentSection): React.JSX.Element {
  const style: TailwindProperties = {
    sm: 'sm:mt-24 sm:mb-16',
    base: 'w-full h-fit grid justify-items-center items-center px-4 py-8',
  }
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <ObservedContainer id={id} animation='_anime-slp-space-in-up' threshold={0.5}>
        <Comment>{children}</Comment>
      </ObservedContainer>
    </section>
  )
}
export default CommentSection
