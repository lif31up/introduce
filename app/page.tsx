import React from 'react'
import ProjectBoard from '@/component/section/ProjectBoard'
import ProfileSection from '@/component/section/ProfileSection'
import StackBoard from '@/component/section/StackBoard'
import Front from '@/component/section/Front'
import CommentSection from '@/component/section/CommentSection'
import SkillBoard from '@/component/section/SkillBoard'
import Footer from '@/component/section/Footer'

export default function Home(): React.JSX.Element {
  return (
    <main>
      <div className='_anime-space-zoom' />
      <section title='middle-section'>
        <Front id='front-section' />
        <ProfileSection id='profile-section' />
        <CommentSection id='comment--0'>지금부터 제가 진행했던 프로젝트를 살펴보시게 될 겁니다.</CommentSection>
        <ProjectBoard id='project-board' />
        <StackBoard id='stack-board' />
        <CommentSection id='comment--1'>제가 가장 자신있어 하는 것들입니다!</CommentSection>
        <SkillBoard id='skill-board' />
      </section>
      <Footer id='footer' />
    </main>
  )
}
