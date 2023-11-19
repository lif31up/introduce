'use client'
import Image from 'next/image'
import "@/styles/Text.css"

interface StackProps{src:string, title:string, desc:string}
export default function Stack({src,title,desc}:StackProps){
  return(
    <div className={"_content flex p-4"}>
      <Image src={src} alt={title} sizes={"64px"}
             className={"h-16 w-16 rounded"}
             width={0} height={0}/>
      <div className={"pl-4"}>
        <h1 className={"_heading_regular"}>{title}</h1>
        <p className={"_text_small text-neutral-400"}>{desc}</p>
      </div>
    </div>
  );
}