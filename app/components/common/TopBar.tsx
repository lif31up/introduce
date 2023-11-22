'use client'
import { useEffect } from "react";
import Link from "next/link";

interface TopBarProps {
  height: string
}
export default function TopBar({height}:TopBarProps){
  useEffect(()=>{
    const topBar:HTMLElement|null = document.getElementById("top-bar--0")
    if (topBar === null) return
    window.addEventListener("scroll",():void=>{
      if (window.scrollY > 1) {
        topBar.style.height = `calc(${height} - 1rem)`
      }
      else {
        topBar.style.height = height
      }
    });
  },[false]);
  const TopBarStyle:object = {
    width: "100%",
    height: height,
    transition: "height 0.5s ease-in-out",
    zIndex: "10",
  }
  return(
    <>
      <div className={"bg-neutral-900 fixed flex items-center px-10 justify-between shadow"} style={TopBarStyle} id={"top-bar--0"}>
        <div className={"flex gap-4"}>
          <h1 className={"text-white _heading_regular _mobile_disable"}>프론트엔드 개발자</h1>
          <h1 className={"text-neutral-300 _text_small"}>NULRANLCNS9991@GMAIL.COM</h1>
        </div>
        <div>
          <Link href={""} className={"_button bg-purple-700 text-white _rounded-4xl _heading_regular shadow-black"}>GITHUB ACCOUNT</Link>
        </div>
      </div>
      <div style={TopBarStyle}/>
    </>
  );
}