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
				<Image src={src} alt={"project_img"}
							 width={"320"} height={"320"} sizes={"100vw"}
							 className={"w-full h-80 rounded-2xl overflow-hidden object-contain"}/>
				<p className={"custom-font-gothic-a1-regular mt-4 leading-7 tracking-tighter"}>{p}</p>
			</div>
		</div>
	</a>
	);
}