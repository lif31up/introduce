import Link from "next/link";
import "@/styles/TopBar.css";
import "@/styles/Common.css";
import React from "react";
import Image from "next/image";

export default function TopBar({}){
	return(
	<>
		<div className={"top-bar"}>
			<div className={"flex items-center"}>
				<div className={"h-12 w-12 relative border-b-gray-200 border-2 rounded-2xl"}>
					<Image src={"/assets/images/topbar_img.png"} layout={"fill"} alt={"img"}/>
				</div>
				<div className={"ml-4"}>
					<p>{"제발 나를 뽑아줘"}</p>
					<h1 className={"custom-text-075 text-neutral-500"}>{"Web Portfolio"}</h1>
				</div>
				<p className={"ml-4 text-2xl font-light text-neutral-500"}>{"♡"}</p>
			</div>
			<div className={"flex items-center gap-12 font-bold"}>
				<Link className={"h-fit"} href={"contact"}>연락</Link>
				<Link className={"h-fit"} href={"contact"}>스택</Link>
				<Link className={"custom-rounded shadow-black shadow-2xl hover:bg-neutral-800"} href={"contact"}>GITHUB</Link>
			</div>
		</div>
		<div className={"h-16"}/>
	</>
	);
}