import { JSXPragmaInfo } from "sucrase/dist/types/util/getJSXPragmaInfo";

interface SkeletonProps{
  img: boolean
}
export default function Skeleton({img}:SkeletonProps){
  let imgSkeleton:JSX.Element = <></>
  if(img){
    imgSkeleton = <div className={"w-full h-40"}/>
  }
  return(
    <div className={"_grid-content _bg-black-02 _rounded-1xl"}>
      <div title={"h1"} className={"_loading-bar h-16"}/>
      {imgSkeleton}
      <div title={"p"} className={"_loading-bar w-full h-8 my-2"}/>
      <div title={"p"} className={"_loading-bar w-full h-8 my-2"}/>
      <div title={"p"} className={"_loading-bar w-full h-8 my-2"}/>
      <div title={"p"} className={"_loading-bar w-full h-8 my-2"}/>
    </div>
  );
}