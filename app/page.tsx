import ProfileCard from '@/components/feature/ProfileCard'
import ProjectDisplay from '@/components/feature/ProjectDisplay'

export default function Home() {
  return (
    <main id='root'>
      <div title='PanelContainer' className='fixed right-0  w-fit h-screen  flex-col content-center mr-32'>
        <ProfileCard />
        <ProjectDisplay />
      </div>
    </main>
  )
}
