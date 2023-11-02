import "@/styles/Common.css";
import Image from "next/image";
import Link from "next/link";
export default function Profile({}){
	return(
	<div className={"_gray_content custom-mobile-disable"}>
		<div className={"flex p-4 items-center"}>
			<div className={"w-44 h-44 relative custom-sphere overflow-hidden"}>
				<Image src={"/assets/images/profile.jpg"} alt={""} layout={"fill"} objectFit={"cover"} objectPosition={"center"}/>
			</div>
			<div className={"pl-4"}>
				<h1 className={"text-4xl"}>한명환</h1>
				<p className={"custom-text-08 custom-font-gothic-a1-thin"}>개방적, 탐구적, 객관적, 친화적</p>
				<p className={"mb-2"}>연세대학교 정보통신학과</p>
				<Link className={"custom-rounded shadow-black shadow-2xl bg-purple-700 text-center inline-block"} href={"https://github.com/lif31up"} target={"_blank"}>GITHUB</Link>
			</div>
		</div>
	</div>
	);
}