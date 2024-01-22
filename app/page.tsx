import ProjectBoard from '@/component/section/ProjectBoard'
import ProfileSection from '@/component/section/ProfileSection'
import StackBoard from '@/component/section/StackBoard'
import Comment from '@/component/feature/Comment'
import FrontSection from '@/component/section/FrontSection'
import ObservedContainer from '@/component/anime/ObservedContainer'
import React from 'react'

export default function Home(): React.JSX.Element {
  return (
    <main>
      <div className='_anime-space-zoom' />
      <section title='middle-section'>
        <FrontSection />
        <ProfileSection />
        <ProjectBoard />
        <StackBoard />
        <div className='w-full h-0 flex justify-center items-center relative'>
          <div className='absolute z-10'>
            <ObservedContainer id='comment-0' animation='_anime-slp-space-in-up' threshold={0.1}>
              <Comment>여기까지 스크롤해주셔서 감사합니다. 이제부터 별 거 없습니다.</Comment>
            </ObservedContainer>
          </div>
        </div>
      </section>
    </main>
  )
}
