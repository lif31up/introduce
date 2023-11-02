import TopBar from "@/app/components/common/TopBar";
import Project from "@/app/components/feature/Project";
export default function Home() {
  return (
    <main>
      <TopBar/>
      <div className={"flex"}>
        <div className={"w-1/4 h-screen bg-black"}>
          <div className={"text-2xl font-bold text-neutral-500 p-4 m-2 bg-neutral-900 rounded-2xl"}>
            <h1 className={""}>환영합니다!</h1>
            <h1>프젝트를 구경하려 오셨군요.</h1>
          </div>
          <div className={"text-2xl font-bold text-neutral-500 p-4 m-2 bg-neutral-900 rounded-2xl h-full relative"}>
            <p className={"custom-text-075 absolute right-4 font-light"}>{"최신순"}</p>
            <h1 className={"mb-4"}>{"☸ 프로젝트들"}</h1>
            <div className={"flex gap-2"}>
              <p className={"custom-rounded custom-text-075"}>{"Next.js"}</p>
              <p className={"custom-rounded custom-text-075"}>{"Recoil"}</p>
              <p className={"custom-rounded custom-text-075"}>{"SCSS"}</p>
              <p className={"custom-rounded custom-text-075"}>{"Tailwind"}</p>
            </div>
            <Project h1={"Nueralink"} p={"Next.js, Tailwind CSS, SCSS, Recoil"} src={"/assets/images/topbar_img.png"}/>
            <Project h1={"Nueralink"} p={"Next.js, Tailwind CSS, SCSS, Recoil"} src={"/assets/images/topbar_img.png"}/>
            <Project h1={"Nueralink"} p={"Next.js, Tailwind CSS, SCSS, Recoil"} src={"/assets/images/topbar_img.png"}/>
            <Project h1={"Nueralink"} p={"Next.js, Tailwind CSS, SCSS, Recoil"} src={"/assets/images/topbar_img.png"}/>
          </div>
        </div>
        <div className={"w-2/4 h-screen bg-black"}>
          <div className={"text-white"}>{"hello"}</div>
        </div>
        <div className={"w-1/4 h-screen bg-amber-400"}>

        </div>
      </div>
    </main>
  )
}
