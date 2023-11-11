'use client';
import Image from "next/image";
import {useEffect, useRef} from "react";
interface ProjectProps{h1:string,p:string,src:string,href:string}
export default function Project({h1,p,src,href}:ProjectProps){
	return(
	<a href={href}>
		<div className={"_content"}>
			<div className={"p-4 text-white custom-font-gothic-a1"}>
				<h1 className={"text-3xl mb-2 py-2"}>{h1}</h1>
				<div className={"w-full h-80 relative overflow-hidden rounded-2xl gray"}>
					<Image src={src} alt={"img"} layout={"fill"} objectFit={"contain"} objectPosition={"center"}/>
				</div>
				<p className={"custom-font-gothic-a1-regular mt-4 leading-7 tracking-tighter"}>{p}</p>
			</div>
		</div>
	</a>
	);
}