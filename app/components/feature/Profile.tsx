import "@/styles/Common.css";
import Image from "next/image";
import Link from "next/link";
export default function Profile({}){
	return(
	<div className={"_gray_content custom-mobile-disable"}>
		<div className={"flex p-4 items-center"}>
			<div className={"w-36 h-36 relative custom-sphere overflow-hidden"}>
				<Image src={"/assets/images/profile.webp"} alt={""} layout={"fill"} objectFit={"cover"} objectPosition={"center"}/>
			</div>
			<div className={"pl-4"}>
				<div className={"flex items-end"}>
					<h1 className={"text-4xl"}>한명환</h1>
					<p className={"custom-text-08 custom-font-gothic-a1-thin pb-1 pl-1"}>현재 성남 거주 중</p>
				</div>
				<p className={"custom-text-08 custom-font-gothic-a1-thin"}>개방적, 탐구적, 객관적, 친화적</p>
				<p className={"custom-font-gothic-a1-thin pb-2"}>연세대학교 미래캠퍼스, 정보통신학과</p>
				<Link className={"custom-rounded shadow-black shadow-2xl bg-purple-700 text-center inline-block hover:bg-purple-800"} href={"https://github.com/lif31up"} target={"_blank"}>GITHUB</Link>
			</div>
		</div>
	</div>
	);
}