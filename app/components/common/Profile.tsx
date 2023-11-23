import Image from "next/image";
import Link from "next/link";
import Caption from "@/app/components/common/Caption";

const profileStyle ={
  height: "fit-content",
}
export default function Profile({isMobile}:{isMobile:boolean}){
  return(
    <div className={isMobile ? "_mobile_disable":"_desktop_disable"}>
      <div className={"_grid-content _bg-black-045 _rounded-1xl flex text-white mb-4"} style={profileStyle}>
        <Image src={"/assets/images/profile.webp"} alt={"profile"} width={0} height={0} sizes={"60px"} className={"w-24 h-24 _sphere"}/>
        <div className={"pl-8"}>
          <h1 className={"_heading_large"}>한명환</h1>
          <p className={"_text_regular text-neutral-400"}>연세대학교 미래캠퍼스 컴퓨터공학과</p>
          <p className={"_text_regular text-neutral-400"}>NULRANLCNS9991@GMAIL.COM</p>
          <p className={"_text_regular text-neutral-400"}>현재 성남에서 거주 중입니다</p>
          <ul className={"pt-4 _text_regular text-emerald-300 flex gap-4"}>
            <Link href={""}>로켓펀치</Link>
            <Link href={""}>원티드</Link>
            <Link href={""}>잡플래닛</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}