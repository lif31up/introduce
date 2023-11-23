'use client'
import Image from 'next/image'
import "@/styles/Common.css"
import Tags from "@/app/components/common/Tags";
import { logHandler } from "@/app/components/common/Firebase";
interface ProjectProps {
  h1: string
  p: string
  src: string
  href: string
  tags: Array<string>
}
export default function Project({ h1, p, src, href, tags }: ProjectProps) {
  return (
    <a href={href} onClick={():void=>{logHandler(href)}}>
      <div className={'_grid-content _bg-black-045 _rounded-1xl text-white hover:bg-black'}>
        <h1 className={'_heading_larger -mt-2'}>{h1}</h1>
        <p className={'_text_small text-neutral-300 mb-12 line-clamp-4'}>{p}</p>
        <Tags width={"100%"} height={3} maxColum={1} theme={"_heading_small rounded-3xl"} colorScheme={"bg-neutral-500 text-neutral-200"}>
          {tags}
        </Tags>
      </div>
    </a>
  )
}