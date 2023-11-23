import '@/styles/Section.css'
import "@/styles/Animation.css"
import "@/styles/Common.css"
import TopBar from '@/app/components/common/TopBar'
import WorkingOnTable from '@/app/components/feature/WorkingOnTable'
import Firebase from '@/app/components/common/Firebase'
import { lazy, Suspense } from 'react'
import AnimateSetter from "@/app/components/common/AnimateSetter";
import Stack from "@/app/components/common/Stack";
import Project from "@/app/components/common/Project";
import Heading from './components/common/Heading'
import Tags from "@/app/components/common/Tags";
import Profile from './components/common/Profile'
import Front from "@/app/components/feature/Front";
const Footer = lazy(() => import('@/app/components/common/Footer'))
export default function Home() {
  return (
    <main>
      <title>{'명환의 포트폴리오'}</title>
      <Firebase />
      <TopBar height={"5rem"}/>
      <div className={'_grid-2xn'} id={'content--0'}>
        <div className={"_grid-n"}>
          <Front/>
          <Profile isMobile={false}/>
          <div className={"_grid-content-complex _bg-black-045 _rounded-1xl overflow-hidden"}>
            <Heading desc={"개발자로써의 본주제라고 생각합니다. 디자인도 중요하지만 프론트엔드 기술도 탁월합니다."}>프론트엔드</Heading>
            <AnimateSetter id={"stack-table--1"} animation={"_slide-rtl"} gap={"gap-1"}>
              <Stack src={"/assets/images/javascript_icon.webp"} title={"자바스크립트"} desc={"DOM 조작과 자체 API, 약속체, 상속에 대해 정확한 지식을 가지고 있습니다. ES6 문법을 주로 사용했고 이에 익숙합니다."}/>
              <Stack src={"/assets/images/typescript_icon.webp"} title={"타입스크립트"} desc={"엄격한 문법도 막힘없이 읽어 확장, 작성할 수 있습니다. 리액트와 같이 사용한 경험이 많아 디버깅에 유리합니다."}/>
              <Stack src={"/assets/images/sass_icon.webp"} title={"SASS"} desc={"SASS를 통해 반응형 스타일시트를 만들 수 있습니다. 그 외에도 컴파일 방식이나 코드 캡슐화를 읽고 쓸 줄 압니다."}/>
              <Stack src={"/assets/images/next_icon.webp"} title={"넥스트"} desc={"CSR 및 SSR 패턴화, 라우팅, 이미지 최적화 등을 사용할 줄 압니다. 전반적인 이해를 가지고 있다고 믿으셔도 됩니다."}/>
              <Stack src={"/assets/images/react_icon.webp"} title={"리액트"} desc={"후크, 상태를 이해하고 적용할 줄 압니다. 리액트 쿼리, 리코일에도 익숙합니다. 이 부분은 제가 자신하는 제 강점입니다."}/>
              <Stack src={"/assets/images/vercel_icon.webp"} title={"버셀"} desc={"이 페이지도 버셀을 통해 배포되는 중입니다. 간단한 배포는 혼자서 많이 해본 경험이 있습니다."}/>
            </AnimateSetter>
            <div className={"mx-8 mt-10"}>
              <Tags maxColum={2} width={"100%"} height={3} theme={"rounded-3xl"} colorScheme={"bg-neutral-600 text-white _heading_small"}>
                {['Tailwind CSS', 'CSS Master', 'REACT QUERY', 'RECOIL', 'DOM', 'HTML with HTML5', 'HOOK Master', 'Firebase',]}
              </Tags>
            </div>
          </div>

          <div className={"_grid-content-complex _bg-black-045 _rounded-1xl overflow-hidden"}>
            <Heading desc={"기술도 중요하지만 사용자 경험이 형편없으면 안 된다고 늘 생각합니다. 저는 다자인 능력도 겸비하고 있습니다."}>디자인</Heading>
            <AnimateSetter id={"stack-table--3"} animation={"_slide-rtl"} gap={"gap-1"}>
              <Stack src={"/assets/images/photoshop.webp"} title={"포토샵"} desc={"포토샵을 통해서 목업과 이미지에 대한 필터 효과를 적용할 수 있습니다. 전반적인 보정 작업에 대한 틀을 잡을 줄 앎니다."}/>
              <Stack src={"/assets/images/illustrator.webp"} title={"일러스트레이터"} desc={"가장 자신있게 다루는 디자인 도구입니다. 기대 이상으로 잘 다룹니다! 로고 프로젝트에서 이를 확인할 수 있습니다."}/>
              <Stack src={"/assets/images/figma_icon.webp"} title={"Figma"} desc={"UI/UX를 디자인하기 위해 주로 사용하는 도구입니다. 디자인 체계를 기획하는데 자주 사용하는 프로그램입니다."}/>
            </AnimateSetter>
            <div className={"mx-8 mt-10"}>
              <Tags maxColum={2} width={"100%"} height={3} theme={"rounded-3xl"} colorScheme={"bg-teal-600 text-white _heading_small"}>
                {['Illustrator', 'Photoshop', 'XD', 'Ableton Live', 'VVVV', 'Simple Video Editing', 'Three.js', 'Blender',]}
              </Tags>
            </div>
          </div>
          <div className={"_grid-content-complex _bg-black-045 _rounded-1xl overflow-hidden"}>
            <Heading desc={"협업이 없다면 의미있는 결과를 만들기 힘듭니다. 저를 이해하기 쉬운 키워드를 잠깐 소개하겠습니다."}>소프트스킬</Heading>
            <AnimateSetter id={"stack-table--4"} animation={"_slide-rtl"} gap={"gap-1"}>
              <Stack src={"/assets/images/coworking_informative.webp"} title={"호기심"} desc={"새로운 지식 또는 이야기를 습득할 때, 재미와 열정을 느낍니다. 그만큼 저도 많은 걸 알고 있습니다."}/>
              <Stack src={"/assets/images/coworking_communicative.webp"} title={"의사소통"} desc={"사람들과 협업하는 것을 즐깁니다. 새로운 사람을 만나서 그들의 이야기를 듣는 걸 재밌어합니다 ^^"}/>
              <Stack src={"/assets/images/coworking_problemsolver.webp"} title={"문제해결"} desc={"문제를 해결하고 풀어나갈 때, 과업을 온전히 책임을 지고 있다고 느낍니다. 장애물이 생겼을 때, 열정이 더 생깁니다."}/>
            </AnimateSetter>
            <div className={"mx-8 mt-10"}>
              <Tags maxColum={2} width={"100%"} height={3} theme={"rounded-3xl"} colorScheme={"bg-purple-600 text-white _heading_small"}>
                {['WebStorm', 'EMACS', 'Visual Studio', 'Notion', 'Slack', 'Figma', 'GitHub', 'Git', 'ZeroHeight',]}
              </Tags>
            </div>
          </div>
        </div>
        <div className={"_grid-n"}>
          <Profile isMobile={true}/>
          <Heading desc={"지금까지 제가 진행해온 개인 또는 팀 프로젝트입니다. 하나하나 의미있는 경험이었습니다."} noPadding={true}>프로젝트</Heading>
          <AnimateSetter id={'project--0'} animation={'_swash-in'} gap={"_dynamic-gap"}>
            <Project h1={'무한 스크롤링'} p={'무한 스크롤을 구현하기 위해 가상의 온라인 쇼핑몰 페이지를 만들어 보았습니다. 이 과정에서 리액트 쿼리를 통한 패칭의 통제와 인터섹션 인터페이스의 사용을 숙달했습니다.'} src={'/assets/images/shoppingmall.webp'} href={'https://shopping-mall-rust.vercel.app/'} tags={["REACT QUERY","OBSERVER API","FETCHING"]}/>
            <Project h1={'포트폴리오'} p={'현재 보고계시는 페이지입니다. 제가 지금 것 해왔던 프로젝트를 종합하기 위해 만들었습니다. 화려한 에니메이션과 3D 오브젝트 렌더링을 통해 더 인상깊은 사용자 경험을 만들 수 있었습니다.'} src={'/assets/images/portfolio.webp'} href={'https://github.com/lif31up/introduce'} tags={["REACT","NEXT","VERCEL","FIREBASE API","SCSS","TAILWIND CSS"]}/>
            <Project h1={'뉴럴링크'} p={'제가 좋아하는 엔터프라이즈 중 하나인 뉴럴링크의 페이지를 직접 다시 디자인해보았습니다. 이 과정에서 과감한 디자인 표현에 대해 배우고 이를 사용하려면 세삼한 주의가 필요하다는 몇 가지 교훈을 얻었습니다.'} src={'/assets/images/neuralink.webp'} href={'https://neuralink-redesign.vercel.app/'} tags={["SCSS","TAILWIND CSS","NEXT","XD"]}/>
            <Project h1={'자료구조'} p={'C언어를 이용해 연결 리스트, 이중 탐색 트리, 그래프, 세트, AVL트리 등을 구현해보았습니다. 프로그래밍 언어에 대한 전반적인 지식과 감각을 잡는데 큰 도움을 준 프로젝트입니다.'} src={'/assets/images/data_structure.webp'} href={'https://github.com/lif31up/Data-Structures-and-Algorithms'} tags={["C LANGUAGE","BASIC","COMPUTER SCIENCE"]}/>
            <Project h1={'웹 디자인 블로그'} p={'웹 디자인에 관해선 한글 자료가 많이 없어 사적인 데이터베이스에 저장하기엔 아깝다고 생각했습니다. 그래서 따로 웹 디자인 블로그를 운영하고 있습니다.'} src={'/assets/images/web_design_blog.webp'} href={'https://renoki1s-blog.gitbook.io/undefined/'} tags={["GITBOOT","UI/UX DESIGN","DESIGN THEORY"]}/>
            <Project h1={'로고 디자인'} p={'제가 직접 만든 로고 디자인입니다. 이를 통해서 여러 이론이 적용된 수준급의 로고를 만들 수 있게 되었습니다. 직접 드로윙해서 일러스트레이터로 SVG화 한 것입니다.'} src={'/assets/images/logo_design.webp'} href={'https://assets.adobe.com/id/urn:aaid:sc:AP:e6c99772-1317-4f1d-a966-0225181f20b1?view=difile'} tags={["ILLUSTRATOR","PHOTOSHOP"]}/>
          </AnimateSetter>
          <WorkingOnTable/>
        </div>
      </div>
      <Suspense fallback={<></>}>
        <Footer/>
      </Suspense>
    </main>
  )
}
