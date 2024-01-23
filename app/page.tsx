import ProjectBoard from '@/component/section/ProjectBoard'
import ProfileSection from '@/component/section/ProfileSection'
import StackBoard from '@/component/section/StackBoard'
import FrontSection from '@/component/section/FrontSection'
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
        <CommentSection id='comment-1--'>제가 지금까지 딴 자격증에 대해 알아보세요!</CommentSection>
      </section>
    </main>
  )
}
