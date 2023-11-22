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
        topBar.style.height = `calc(${height} - 0.25rem)`
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
      <div className={"bg-black fixed flex items-center px-10 justify-between"} style={TopBarStyle} id={"top-bar--0"}>
        <h1 className={"text-white _heading_large"}>프론트엔드 & UI/UX 디자이너</h1>
        <div>
          <Link href={""} className={"_button bg-purple-700 text-white rounded-3xl _heading_regular shadow-black"}>HELLO</Link>
        </div>
      </div>
      <div style={TopBarStyle}/>
    </>
  );
}