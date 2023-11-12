import "@/styles/Section.css";
import TopBar from "@/app/components/common/TopBar";
import Profile from "@/app/components/feature/Profile";
import StackTable from "@/app/components/feature/StackTable";
import TagTable from "@/app/components/common/TagTable";
import Image from "next/image";
import Footer from "./components/common/Footer";
import Quote from "@/app/components/feature/Quote";
import AnimationContainerTable from "@/app/components/common/AnimationContainerTable";
import Scene from "@/app/components/feature/Scene";
import WorkingOnTable from "@/app/components/feature/WorkingOnTable";
import Firebase from "@/app/components/feature/Firebase";
import {lazy, Suspense} from "react";
// @ts-ignore
const Projects = lazy(() => import("@/app/components/feature/Projects"));
export default function Home() {
  return (
  <main>
    <Firebase/>
    <title>명환의 포트폴리오</title>
    <TopBar/>
    <Scene/>
    <div className={"_grid-2xl"} id={"s-a-p"}>
      <div className={"_grid-2xl-article"}>
        <div className={"_trans_content pt-3"}>
          <h1 className={"text-3xl"}>{"프론트엔드"}</h1>
        </div>
        <StackTable id={"st--0"}>{[
          {h1:"자바스크립트",p:"DOM 조작과 최신 자체 API, 약속체, 상속과 메소드에 대해 정확한 지식을 가지고 있습니다.",src:"/assets/images/javascript_icon.webp"},
          {h1:"타입스크립트",p:"엄격한 문법도 막힘없이 읽어 확장, 작성할 수 있습니다.",src:"/assets/images/typescript_icon.webp"},
          {h1:"SASS",p:"SASS를 통해 반응형 스타일시트를 만드는데 도가 텄습니다.",src:"/assets/images/sass_icon.webp"},
        ]}</StackTable>
        <TagTable color={"bg-teal-600"}>{["Tailwind CSS","CSS Master","REACT QUERY","RECOIL","DOM","HTML with HTML5","HOOK Master","Firebase"]}</TagTable>
        <StackTable id={"st--1"}>{[
          {h1:"넥스트",p:"CSR 및 SSR 패턴화, 라우팅, 이미지 최적화 등을 사용할 줄 압니다.",src:"/assets/images/next_icon.webp"},
          {h1:"리액트",p:"후크, 상태를 모두 이해하고 있습니다. 리액트 쿼리, 리코일에도 이미 익숙합니다.",src:"/assets/images/react_icon.webp"},
          {h1:"버셀",p:"이 페이지도 버셀을 통해 배포되는 중입니다. 이를 통해 프로토타입을 테스트할 수 있습니다.",src:"/assets/images/vercel_icon.webp"},
        ]}</StackTable>
        <div className={"_trans_content pt-2"}>
          <h1 className={"text-3xl"}>{"디자인"}</h1>
        </div>
        <div className={"_trans_content"}>
          <Image src={"/assets/images/break_1.gif"} alt={"break_1.gif"}
                 width={"0"} height={"0"} sizes={"100vw"}
                 className={"w-full h-96 object-cover"}/>
        </div>
        <TagTable color={"bg-blue-900"}>{["Illustrator","Photoshop","XD","Ableton Live","VVVV","Simple Video Editing","Three.js","Blender"]}</TagTable>
        <StackTable id={"st--2"}>{[
          {h1:"포토샵",p:"포토샵을 통해서 목업과 이미지에 대한 필터 효과를 적용할 수 있습니다.",src:"/assets/images/photoshop.webp"},
          {h1:"일러스트레이터",p:"가장 자신있게 다루는 디자인 도구입니다. 로고, 아이콘, 일러스트를 만들 수 있습니다.",src:"/assets/images/illustrator.webp"},
          {h1:"XD",p:"UI/UX를 디자인하기 위해 주로 사용하는 도구입니다.",src:"/assets/images/xd.webp"}
        ]}</StackTable>
        <div className={"_trans_content pt-2"}>
          <h1 className={"text-3xl"}>{"소프트 스킬"}</h1>
        </div>
        <StackTable id={"st--3"}>{[
          {h1:"학습",p:"새로운 지식을 습득할 때, 재미를 느낍니다. 최신 정보를 찾아보는데 주저함이 없습니다.",src:"/assets/images/coworking_informative.webp"},
          {h1:"의사소통",p:"사람들과 협업하는 것을 즐깁니다. 새로운 사람을 만나고 대화 나누는데 흥미가 많습니다.",src:"/assets/images/coworking_communicative.webp"},
          {h1:"문제해결",p:"문제를 해결하고 풀어나갈 때, 과업을 온전히 책임을 지고 있다고 느낍니다.",src:"/assets/images/coworking_problemsolver.webp"},
        ]}</StackTable>
        <TagTable color={"bg-neutral-600"}>{["WebStorm","EMACS","Visual Studio","Notion","Slack","Figma","GitHub","Git","ZeroHeight"]}</TagTable>
        <div className={"_trans_content"}>
          <h1 className={"text-3xl"}>{"진행 중"}</h1>
        </div>
        <WorkingOnTable/>
      </div>
      <div className={"_grid-2xl-article"}>
        <Profile desktop={true}/>
        <div className={"_trans_content pt-3 custom-desktop-disable"}>
          <h1 className={"text-3xl"}>{"프로젝트"}</h1>
        </div>
        <Suspense fallback={<div>Loading</div>}>
          <Projects/>
        </Suspense>
        <div className={"_trans_content pt-3"}>
          <h1 className={"text-3xl"}>{"실험실"}</h1>
        </div>
        <AnimationContainerTable id={"quotes--0"} animation={"custom-anime-swash-in"}>
          <Quote src={"/assets/images/neal_stephenson.jpg"} h1={"Snow Crash"}
                 p={"See, the world is full of things more powerful than us. But if you know how to catch a ride, you can go places,"}/>
          <Quote src={"/assets/images/william_gibson.webp"} h1={"Neuromancer"}
                 p={"When the past is always with you, it may as well be present; and if it is present, it will be future as well."}/>
          <Quote src={"/assets/images/j_g_ballard.jpg"} h1={"The Drowned World"}
                 p={"The brief span of an individual life is misleading. Each one of us is as old as the entire biological kingdom, and our bloodstreams are tributaries of the great sea of its total memory. The uterine odyssey of the growing foetus recapitulates the entire evolutionary past, and its central nervous system is a coded time scale, each nexus of neurones and each spinal level marking a symbolic station, a unit of neuronic time."}/>
        </AnimationContainerTable>
      </div>
    </div>
    <Footer/>
  </main>
  )
}