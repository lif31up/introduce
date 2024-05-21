import ProfileCard from '@/components/feature/ProfileCard'
import ProjectDisplay from '@/components/feature/ProjectDisplay'
import TailwindProperties from '@/utils/tailwindProperties'

export default function Home() {
  const style: TailwindProperties = {
    xl: 'xl:fixed xl:right-0  xl:p-0 xl:mr-32  xl:w-fit xl:h-screen  xl:content-center',
    md: 'md:w-full md:h-screen  md:content-start',
    base: 'fixed  flex-col p-4',
  }
  return (
    <main id='root'>
      <div className='_space' />
      <div title='PanelContainer' className={`${style.base} ${style.xl} ${style.md}`}>
        <ProfileCard />
        <ProjectDisplay />
      </div>
    </main>
  )
}
