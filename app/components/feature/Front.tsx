'use client'
import MovingTypography from "@/app/components/common/MovingTypography";
import Link from "next/link";
import VideoPlayer from "@/app/components/feature/VideoPlayer";

export default function Front({}){
  return(
    <div className={"_grid-content block h-fit _bg-black-045 _rounded-1xl _mobile_disable"}>
      <div className={"_rounded-1xl overflow-hidden mb-4"}>
        <VideoPlayer/>
      </div>
      <MovingTypography className={"text-white _heading_huger"} animation={"_vanish-in"} id={"movtyp--0"}>
        프론트엔드 개발자
      </MovingTypography>
      <MovingTypography className={"text-white _heading_huger"} animation={"_vanish-in"} id={"movtyp--1"}>
        인터페이스 디자이너
      </MovingTypography>
      <p className={"_text_regular text-neutral-400 mt-4"}>이 인연이 의미있는 결과로 이어질 수 있기를 희망합니다.</p>
      <p className={"_text_regular text-neutral-400"}>저는 무언가를 바라보고 있습니다.</p>
      <div className={"mt-16 mb-4 justify-end flex"}>
        <Link href={""} className={"_button bg-purple-700 text-white _heading_large _rounded-1xl"}>GITHUB ACCOUNT</Link>
      </div>
    </div>
  );
}