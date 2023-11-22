'use client'
import { useEffect } from "react";

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
    transition: "0.5s ease-in-out",
    zIndex: "10",
  }
  return(
    <>
      <div className={"bg-white fixed"} style={TopBarStyle} id={"top-bar--0"}>

      </div>
      <div style={TopBarStyle}/>
    </>
  );
}