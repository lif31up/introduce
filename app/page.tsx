import ProjectBoard from '@/component/section/ProjectBoard'
import ProfileSection from '@/component/section/ProfileSection'
import StackBoard from '@/component/section/StackBoard'
import Comment from '@/component/feature/Comment'
import FrontSection from '@/component/section/FrontSection'
import ObservedContainer from '@/component/anime/ObservedContainer'
import React from 'react'
import CommentSection from '@/component/section/CommentSection'

export default function Home(): React.JSX.Element {
  return (
    <main>
      <div className='_anime-space-zoom' />
      <section title='middle-section'>
        <FrontSection />
        <ProfileSection />
        <CommentSection id='comment-0--'>지금부터 제가 진행했던 프로젝트를 살펴보시게 될 겁니다.</CommentSection>
        <ProjectBoard />
        <StackBoard />
        <CommentSection id='comment-1--'>당신은 이걸 좋아합니다.</CommentSection>
      </section>
    </main>
  )
}
