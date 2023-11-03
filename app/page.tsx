import "@/styles/Section.css";
import TopBar from "@/app/components/common/TopBar";
import Profile from "@/app/components/feature/Profile";
import StackTable from "@/app/components/feature/StackTable";
import Project from "@/app/components/feature/Project";
import TagTable from "@/app/components/common/TagTable";
import Image from "next/image";
import Footer from "./components/common/Footer";
export default function Home() {
  return (
  <main>
    <title>명환의 포트폴리오</title>
    <TopBar/>
    <div className={"h-96 flex justify-center items-center"}>
      <h1 className={"text-white"}>{"대문은 아직 제작 중입니다."}</h1>
    </div>
    <div className={"_grid-2xl"} id={"s-a-p"}>
      <div className={"_grid-2xl-article"}>
        <div className={"_trans_content pt-3"}>
          <h1 className={"text-3xl"}>{"프론트엔드"}</h1>
        </div>
        <StackTable id={"st--0"}>{[
          {h1:"자바스크립트",p:"DOM 조작과 최신 자체 API, 약속체, 상속과 메소드에 대해 정확한 지식을 가지고 있습니다.",src:"/assets/images/javascript.png"},
          {h1:"타입스크립트",p:"엄격한 문법도 막힘없이 읽어 확장, 작성할 수 있습니다.",src:"/assets/images/typescript.png"},
          {h1:"SASS",p:"SASS를 통해 반응형 스타일시트를 만드는데 도가 텄습니다.",src:"/assets/images/sassy.png"},
        ]}</StackTable>
        <TagTable color={"bg-teal-600"}>{["Tailwind CSS","REACT QUERY","RECOIL","HOOK FROM","DOM","HTML with HTML5","CSS Master"]}</TagTable>
        <StackTable id={"st--1"}>{[
          {h1:"넥스트",p:"CSR, SSR, 앱 라우팅, 이미지 최적화 등을 사용할 줄 압니다.",src:"/assets/images/next.jpg"},
          {h1:"리액트",p:"후크, 상태를 모두 이해하고 있습니다. 리액트 쿼리, 리코일에도 이미 익숙합니다.",src:"/assets/images/react.png"},
          {h1:"버셀",p:"이 페이지도 버셀을 통해 배포되는 중입니다. 이를 통해 프로토타입을 테스트할 수 있습니다.",src:"/assets/images/Vercel.jpeg"},
        ]}</StackTable>
        <div className={"_trans_content pt-3"}>
          <h1 className={"text-3xl"}>{"협업"}</h1>
        </div>
        <TagTable color={"bg-neutral-600"}>{["WebStorm","EMACS","Visual Studio","Notion","Slack","Figma","GitHub","Git"]}</TagTable>
        <StackTable id={"st--2"}>{[
          {h1:"학습",p:"새로운 지식을 습득할 때, 재미를 느낍니다. 최신 정보를 찾아보는데 주저함이 없습니다.",src:"/assets/images/information.png"},
          {h1:"의사소통",p:"사람들과 협업하는 것을 즐깁니다. 새로운 사람을 만나고 대화 나누는 걸 즐깁니다.",src:"/assets/images/commu.png"},
          {h1:"문제해결",p:"문제를 해결하고 풀어나갈 때, 과업을 온전히 책임을 지고 있다고 느낍니다.",src:"/assets/images/project.png"},
        ]}</StackTable>
        <div className={"_trans_content pt-3"}>
          <h1 className={"text-3xl"}>{"디자인"}</h1>
        </div>
        <div className={"_trans_content flex justify-center"}>
          <div className={"w-full h-96 relative"}>
            <Image src={"/assets/images/meow.gif"} alt={""} layout={"fill"} objectPosition={"center"} objectFit={"cover"}/>
          </div>
        </div>
        <TagTable color={"bg-blue-900"}>{["Illustrator","Photoshop","XD","Ableton Live","VVVV","Simple Video Editing","Three.js","Blender"]}</TagTable>
      </div>
      <div className={"_grid-2xl-article"}>
        <Profile/>
        <div className={"_trans_content pt-3 custom-desktop-disable"}>
          <h1 className={"text-3xl"}>{"프로젝트"}</h1>
        </div>
        <Project h1={"무한 스크롤링"}
                 p={"무한 스크롤을 구현하기 위해, FakeStoreAPI를 빌려 가상의 온라인 쇼핑몰 페이지를 만들어 보았습니다. 이 과정에서 React Query와 리액트에서의 Intersection API 사용을 숙달했습니다."}
                 src={"/assets/images/shoppingmall.webp"} id={"pj-0"} className={"custom-anime-rtl-slide"}
                 href={"https://shopping-mall-rust.vercel.app/"}/>
        <Project h1={"포트폴리오"}
                 p={"현재 보고계시는 페이지입니다. 제가 지금 것 해왔던 프로젝트를 종합하기 위해 만들었습니다. 화려한 에니메이션과 3D 오브젝트 렌더링을 통해 더 인상깊은 사용자 경험을 만들 수 있었습니다."}
                 src={"/assets/images/protfolio.png"} id={"pj-1"} className={"custom-anime-rtl-slide"}
                 href={"https://github.com/lif31up/introduce"}/>
        <Project h1={"뉴럴링크"}
                 p={"현재 보고계시는 페이지입니다. 제가 지금 것 해왔던 프로젝트를 종합하기 위해 만들었습니다. 화려한 에니메이션과 3D 오브젝트 렌더링을 통해 더 인상깊은 사용자 경험을 만들 수 있었습니다."}
                 src={"/assets/images/nuel.png"} id={"pj-2"} className={"custom-anime-rtl-slide"}
                 href={"https://neuralink-redesign.vercel.app/"}/>
        <Project h1={"자료구조"}
                 p={"C 언어를 이용해서 AVL, B-Tree, Linked List, Queue, Stack, Graph, Set 등을 구현해보았습니다. 프로그래밍 언어에 대한 전반적인 지식과 감각을 잡는데 큰 도움을 준 프로젝트입니다."}
                 src={"/assets/images/dt.png"} id={"pj-3"} className={"custom-anime-rtl-slide"}
                 href={"https://github.com/lif31up/Data-Structures-and-Algorithms"}/>
      </div>
    </div>
    <Footer/>
  </main>
  )
}