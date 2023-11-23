'use client'
import MovingTypography from "@/app/components/common/MovingTypography";
import Link from "next/link";
import VideoPlayer from "@/app/components/feature/VideoPlayer";
import { logHandler } from "@/app/components/common/Firebase";

export default function Front({}){
  return(
    <div className={"_grid-content block h-fit _bg-black-045 _rounded-1xl _mobile_disable"}>
      <div className={"_rounded-1xl overflow-hidden mb-4"}>
        <VideoPlayer/>
      </div>

      <div className={"flex justify-between mt-8"}>
        <div className={"w-fit"}>
          <MovingTypography className={"text-white _heading_larger"} animation={"_boing-up"} id={"movtyp--0"}>
            더 나은 미래를 꿈꾸는 개발자
          </MovingTypography>
          <p className={"text-neutral-300 _text_regular"}>나와 내 컴퓨터는 항상 발전하는 중입니다.</p>
        </div>
        <h1 className={"text-neutral-300 _text_regular"}>
          23/11/23
        </h1>
      </div>
      <div className={"flex justify-between mt-8"}>
        <div className={"w-fit"}>
          <MovingTypography className={"text-white _heading_larger"} animation={"_boing-up"} id={"movtyp--1"}>
            새로운 경험을 원하는 디자이너
          </MovingTypography>
          <p className={"text-neutral-300 _text_regular"}>컴퓨터로 할 수 있는 가장 흥미로운 것들을 가져옵니다.</p>
        </div>
        <h1 className={"text-neutral-300 _text_regular"}>
          23/11/23
        </h1>
      </div>
      <div className={"mt-16 mb-4 justify-end flex"}>
        <Link onClick={():void=>{logHandler("github_account")}} href={"https://github.com/lif31up"} className={"_button bg-purple-700 text-white _heading_large _rounded-4xl"}>GITHUB ACCOUNT</Link>
      </div>
    </div>
  );
}