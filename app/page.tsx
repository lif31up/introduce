import Layout from '@/app/components/Layout'
import TopBanner from '@/app/components/feature/TopBanner'
import ProfileBanner from '@/app/components/feature/ProfileBanner'
import ProjectBoard from '@/app/components/feature/ProjectBoard'
import Front from '@/app/components/feature/Front'
import StackBoard from '@/app/components/feature/StackBoard'
import Comment from '@/app/components/feature/Comment'
import SkillBoard from '@/app/components/feature/SkillBoard'
import ObservedContainer from '@/app/components/common/ObservedContainer'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <section title='top-section' className='bg-white _border-b-white-boldess'>
        <div className='pb-2 pt-1 grid justify-items-center items-center relative overflow-hidden bg-black'>
          <h1 className='text-white text-xs'>현재 구인구직 중이에요!</h1>
        </div>
        <ProfileBanner />
        <TopBanner />
      </section>
      <section title='middle-section'>
        <Front src='https://wonderfulengineering.com/wp-content/uploads/2014/06/earth-wallpapers-18.jpg' />
        <ProjectBoard />
        <StackBoard />
        <div className='w-full h-0 flex justify-center items-center relative'>
          <div className='absolute z-10'>
            <ObservedContainer id='comment-0' animation='_anime-slp-space-in-up' threshold={0.1}>
              <Comment>여기까지 스크롤해주셔서 감사합니다. 이제부터 별 거 없습니다.</Comment>
            </ObservedContainer>
          </div>
        </div>
        <SkillBoard />
      </section>
    </Layout>
  )
}
