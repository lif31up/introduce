import '@/styles/Section.css'
import TopBar from '@/app/components/common/TopBar'
import Profile from '@/app/components/common/Profile'
import TagTable from '@/app/components/common/TagTable'
import Scene from '@/app/components/feature/Scene'
import WorkingOnTable from '@/app/components/feature/WorkingOnTable'
import Firebase from '@/app/components/common/Firebase'
import { lazy, Suspense } from 'react'
import VideoPlayer from '@/app/components/feature/VideoPlayer'
import Caption from '@/app/components/common/Caption'
import AnimateSetter from "@/app/components/common/AnimateSetter";
import Stack from "@/app/components/common/Stack";
import Project from "@/app/components/common/Project";
const Footer = lazy(() => import('@/app/components/common/Footer'))
export default function Home() {
  return (
    <main>
      <title>{'명환의 포트폴리오'}</title>
      <Firebase />
      <TopBar />
      <Scene />
      <div className={'_grid-2xl'} id={'s-a-p'}>
        <div className={'_grid-2xl-article'}>
          <div className={'_trans_content pt-3'}>
            <h1 className={'text-3xl _heading_huge'}>{'프론트엔드'}</h1>
          </div>
          <AnimateSetter id={"stack-table--1"} animation={"_slide-rtl"}>
            <Stack src={"/assets/images/javascript_icon.webp"}
                   title={"자바스크립트"} desc={"DOM 조작과 자체 API, 약속체, 상속과 메소드에 대해 정확한 지식을 가지고 있습니다."}/>
            <Stack src={"/assets/images/typescript_icon.webp"}
                   title={"타입스크립트"} desc={"엄격한 문법도 막힘없이 읽어 확장, 작성할 수 있습니다."}/>
            <Stack src={"/assets/images/sass_icon.webp"}
                   title={"SASS"} desc={"SASS를 통해 반응형 스타일시트를 만드는데 도가 텄습니다."}/>
          </AnimateSetter>
          <TagTable color={'bg-teal-600'}>
            {[
              'Tailwind CSS',
              'CSS Master',
              'REACT QUERY',
              'RECOIL',
              'DOM',
              'HTML with HTML5',
              'HOOK Master',
              'Firebase',
            ]}
          </TagTable>
          <AnimateSetter id={"stack-table--2"} animation={"_slide-rtl"}>
            <Stack src={"/assets/images/javascript_icon.webp"}
                   title={"넥스트"} desc={"CSR 및 SSR 패턴화, 라우팅, 이미지 최적화 등을 사용할 줄 압니다."}/>
            <Stack src={"/assets/images/react_icon.webp"}
                   title={"리액트"} desc={"후크, 상태를 이해하고 적용할 줄 압니다. 리액트 쿼리, 리코일에도 익숙합니다."}/>
            <Stack src={"/assets/images/vercel_icon.webp"}
                   title={"버셀"} desc={"이 페이지도 버셀을 통해 배포되는 중입니다. 이를 통해 프로토타입을 테스트할 수 있습니다."}/>
          </AnimateSetter>
          <div className={'_trans_content pt-2'}>
            <h1 className={'_heading_huge'}>{'디자인'}</h1>
          </div>
          <div className={'_trans_content'}>
            <VideoPlayer />
          </div>
          <TagTable color={'bg-blue-900'}>
            {[
              'Illustrator',
              'Photoshop',
              'XD',
              'Ableton Live',
              'VVVV',
              'Simple Video Editing',
              'Three.js',
              'Blender',
            ]}
          </TagTable>
          <AnimateSetter id={"stack-table--3"} animation={"_slide-rtl"}>
            <Stack src={"/assets/images/javascript_icon.webp"}
                   title={"포토샵"} desc={"포토샵을 통해서 목업과 이미지에 대한 필터 효과를 적용할 수 있습니다."}/>
            <Stack src={"/assets/images/illustrator.webp"}
                   title={"일러스트레이터"} desc={"가장 자신있게 다루는 디자인 도구입니다. 로고, 아이콘, 일러스트를 만들 수 있습니다."}/>
            <Stack src={"/assets/images/xd.webp"}
                   title={"XD"} desc={"UI/UX를 디자인하기 위해 주로 사용하는 도구입니다."}/>
          </AnimateSetter>
          <div className={'_trans_content pt-2'}>
            <h1 className={'_heading_huge'}>
              {'소프트 스킬'}
            </h1>
          </div>
          <AnimateSetter id={"stack-table--4"} animation={"_slide-rtl"}>
            <Stack src={"/assets/images/coworking_informative.webp"}
                   title={"학습"} desc={"새로운 지식을 습득할 때, 재미를 느낍니다. 최신 정보를 찾아보는데 주저함이 없습니다."}/>
            <Stack src={"/assets/images/coworking_communicative.webp"}
                   title={"의사소통"} desc={"사람들과 협업하는 것을 즐깁니다. 새로운 사람을 만나고 대화 나누는데 흥미가 많습니다."}/>
            <Stack src={"/assets/images/coworking_problemsolver.webp"}
                   title={"문제해결"} desc={"문제를 해결하고 풀어나갈 때, 과업을 온전히 책임을 지고 있다고 느낍니다."}/>
          </AnimateSetter>
          <TagTable color={'bg-neutral-600'}>
            {[
              'WebStorm',
              'EMACS',
              'Visual Studio',
              'Notion',
              'Slack',
              'Figma',
              'GitHub',
              'Git',
              'ZeroHeight',
            ]}
          </TagTable>
          <div className={'_trans_content'}>
            <h1 className={'text-3xl custom-font-gothic-a1'}>{'진행 중'}</h1>
          </div>
          <WorkingOnTable />
        </div>
        <div className={'_grid-2xl-article'}>
          <Profile desktop={true} />
          <Caption>현재, 팀 프로젝트 과정에 있습니다.</Caption>
          <div className={'_trans_content pt-3 custom-desktop-disable'}>
            <h1 className={'_heading_huge'}>{'프로젝트'}</h1>
          </div>
          <AnimateSetter id={'project--0'} animation={'_swash-in'}>
            <Project
              h1={'무한 스크롤링'}
              p={
                '무한 스크롤을 구현하기 위해 가상의 온라인 쇼핑몰 페이지를 만들어 보았습니다. 이 과정에서 리액트 쿼리를 통한 패칭의 통제와 인터섹션 인터페이스의 사용을 숙달했습니다.'
              }
              src={'/assets/images/shoppingmall.webp'}
              href={'https://shopping-mall-rust.vercel.app/'}
            />
            <Project
              h1={'포트폴리오'}
              p={
                '현재 보고계시는 페이지입니다. 제가 지금 것 해왔던 프로젝트를 종합하기 위해 만들었습니다. 화려한 에니메이션과 3D 오브젝트 렌더링을 통해 더 인상깊은 사용자 경험을 만들 수 있었습니다.'
              }
              src={'/assets/images/portfolio.webp'}
              href={'https://github.com/lif31up/introduce'}
            />
            <Project
              h1={'뉴럴링크'}
              p={
                '제가 좋아하는 엔터프라이즈 중 하나인 뉴럴링크의 페이지를 직접 다시 디자인해보았습니다. 이 과정에서 과감한 디자인 표현에 대해 배우고 이를 사용하려면 세삼한 주의가 필요하다는 몇 가지 교훈을 얻었습니다.'
              }
              src={'/assets/images/neuralink.webp'}
              href={'https://neuralink-redesign.vercel.app/'}
            />
            <Project
              h1={'자료구조'}
              p={
                'C언어를 이용해 연결 리스트, 이중 탐색 트리, 그래프, 세트, AVL트리 등을 구현해보았습니다. 프로그래밍 언어에 대한 전반적인 지식과 감각을 잡는데 큰 도움을 준 프로젝트입니다.'
              }
              src={'/assets/images/data_structure.webp'}
              href={'https://github.com/lif31up/Data-Structures-and-Algorithms'}
            />
            <Project
              h1={'웹 디자인 블로그'}
              p={
                '웹 디자인에 관해선 한글 자료가 많이 없어 사적인 데이터베이스에 저장하기엔 아깝다고 생각했습니다. 그래서 따로 웹 디자인 블로그를 운영하고 있습니다.'
              }
              src={'/assets/images/web_design_blog.webp'}
              href={'https://renoki1s-blog.gitbook.io/undefined/'}
            />
            <Project
              h1={'로고 디자인'}
              p={
                '제가 직접 만든 로고 디자인입니다. 이를 통해서 여러 이론이 적용된 수준급의 로고를 만들 수 있게 되었습니다. 직접 드로윙해서 일러스트레이터로 SVG화 한 것입니다.'
              }
              src={'/assets/images/logo_design.webp'}
              href={
                'https://assets.adobe.com/id/urn:aaid:sc:AP:e6c99772-1317-4f1d-a966-0225181f20b1?view=difile'
              }
            />
          </AnimateSetter>
        </div>
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <Footer />
      </Suspense>
    </main>
  )
}
