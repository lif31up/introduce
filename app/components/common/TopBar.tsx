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
    transition: "0.5s ease-in-out",
  }
  return(
    <>
      <div className={"_bg-black-045 flex items-center px-10 justify-between"} style={TopBarStyle} id={"top-bar--0"}>
        <div className={"flex gap-4"}>
          <h1 className={"text-white _heading_regular _mobile_disable"}>프론트엔드 개발자</h1>
          <h1 className={"text-neutral-300 _text_small"}>NULRANLCNS9991@GMAIL.COM</h1>
        </div>
        <div>
          <Link onClick={():void=>{logHandler("github_account")}} href={"https://github.com/lif31up"} className={"_button bg-purple-700 text-white _rounded-4xl _heading_regular shadow-black"}>GITHUB ACCOUNT</Link>
        </div>
      </div>
    </>
  );
}