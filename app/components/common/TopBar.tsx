'use client'
import { useEffect } from "react";
import Link from "next/link";
import { logHandler } from "@/app/components/common/Firebase";

interface TopBarProps {
  height: string
}
export default function TopBar({height}:TopBarProps){
  useEffect(()=>{
    const topBar:HTMLElement|null = document.getElementById("top-bar--0")
    if (topBar === null) return
    window.addEventListener("scroll",():void=>{
      if (window.scrollY > 1) {
        topBar.style.transform = `translateY(-${height})`
      }
      else {
        topBar.style.transform = 'translateY(0)'
      }
    });
  },[false]);
  const TopBarStyle:object = {
    width: "100%",
    height: height,
    transition: "transform 1s ease-in-out",
  }
  return(
    <>
      <div className={"_bg-black-045 flex items-center pl-4 pr-8 justify-between select-none"} style={TopBarStyle} id={"top-bar--0"}>
        <div className={"flex gap-4 items-center"}>
          <div className={"w-12 h-12 _sphere bg-white"}/>
          <Link onClick={():void=>{logHandler("github_account")}} href={"https://github.com/lif31up"} className={"rounded-3xl px-6 _py-05 bg-purple-600 _heading_regular shadow-black _desktop_disable text-neutral-200"}>깃허브 이동</Link>
          <Link onClick={():void=>{logHandler("github_account")}} href={"#grid-n-1"} className={"rounded-3xl px-6 _py-05 bg-neutral-500 _heading_regular shadow-black _desktop_disable text-neutral-200"}>프로젝트 보기</Link>
          <h1 className={"text-white -mb-1 _heading_regular _mobile_disable"}>명환의 포트폴리오에 오신 걸 환영합니다.</h1>
        </div>
      </div>
    </>
  );
}