import Layout from '@/app/components/Layout'
import ProjectBoard from '@/app/components/feature/ProjectBoard'
import Front from '@/app/components/feature/Front'
import StackBoard from '@/app/components/feature/StackBoard'
import Comment from '@/app/components/feature/Comment'
import SkillBoard from '@/app/components/feature/SkillBoard'
import ObservedContainer from '@/app/components/common/ObservedContainer'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className='_anime-space-zoom' />
      <section title='middle-section'>
        <SkillBoard />
        <Front />
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
    </Layout>
  )
}
