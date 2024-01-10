import Layout from '@/app/components/Layout'
import TopBanner from '@/app/components/feature/TopBanner'
import ProfileBanner from '@/app/components/feature/ProfileBanner'
import ProjectBoard from '@/app/components/feature/ProjectBoard'
import Front from '@/app/components/feature/Front'
import StackBoard from '@/app/components/feature/StackBoard'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <section title='top-section' className='bg-white _border-b-white-boldess'>
        <div className='pt-4 pb-4 grid justify-items-center items-center bg-black relative overflow-hidden'>
          <div className='_space absolute' />
          <h1 className='text-white'>현재 구인구직 중이에요!</h1>
        </div>
        <ProfileBanner />
        <TopBanner />
      </section>
      <section title='middle-section'>
        <Front src='https://wonderfulengineering.com/wp-content/uploads/2014/06/earth-wallpapers-18.jpg' />
        <ProjectBoard />
        <StackBoard />
      </section>
    </Layout>
  )
}
