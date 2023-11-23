import Image from 'next/image'
import "@/styles/Common.css"
import "@/styles/Text.css"

interface StackProps{
  src:string
  title:string
  desc:string
}
const stackStyle = {
  display: "flex",
}
export default function Stack({src,title,desc}:StackProps){
  return(
    <div className={"_bg-black-025 py-8 px-8"} style={stackStyle}>
      <Image src={src} alt={title}
             width={40} height={40} sizes={"40px"} className={"_rounded-1xl h-16"} />
      <div className={"pl-8"}>
        <h1 className={"_heading_regular text-white"}>{title}</h1>
        <desc className={"_text_small text-neutral-200"}>{desc}</desc>
      </div>
    </div>
  );
}