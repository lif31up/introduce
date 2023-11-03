import Link from "next/link";
import "@/styles/TopBar.css";
import "@/styles/Common.css";
import React from "react";

export default function TopBar({}){
	return(
	<>
		<div className={"top-bar"}>
			<div className={"flex items-center h-full"}>
				<h1 className={"pt-1 px-1 font-bold custom-mobile-disable"}>{"FRONTEND & UI/UX DESIGNER"}</h1>
				<p className={"px-2 pt-1 custom-font-gothic-a1-thin"}>{"NULRANLCNS9991@GMAIL.COM"}</p>
			</div>
			<div className={"flex items-center gap-12 font-bold"}>
				<Link className={"h-fit custom-mobile-disable"} href={"mailto:nulranlcns9991@gmail.com"}>연락하기</Link>
				<Link className={"h-fit custom-mobile-disable"} href={"#s-a-p"}>살펴보기</Link>
				<Link className={"custom-rounded shadow-black shadow-2xl bg-purple-700 hover:bg-purple-800"} href={"https://github.com/lif31up"} target={"_blank"}>GITHUB</Link>
			</div>
		</div>
		<div className={"h-16"}/>
	</>
	);
}