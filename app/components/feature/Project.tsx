'use client';
import Image from "next/image";
import {useEffect, useRef} from "react";
interface ProjectProps{h1:string,p:string,src:string,id:string}
export default function Project({h1,p,src,id}:ProjectProps){
	const observerRef:any|null = useRef(null);
	useEffect(():void=>{
		let target:HTMLElement|null = document.getElementById(id);
		if(target === null) return;
		const intersectionHandler = (entries:Array<any>)=>{
			entries.forEach((entry)=>{
				if(entry.isIntersecting){// @ts-ignore
					target.style.animationPlayState = "running";
				}
			});
		}
		const options = {
			root:null, rootMargin: "0px", threshold: 0.75
		}
		observerRef.current = new IntersectionObserver(intersectionHandler,options);
		observerRef.current.observe(target);
	},[false]);
	return(
	<div className={"_content custom-anime-rtl-slide"} id={id}>
		<div className={"p-4 text-white custom-font-gothic-a1"}>
			<h1 className={"text-3xl mb-2 py-2"}>{h1}</h1>
			<div className={"w-full h-80 relative overflow-hidden rounded-2xl gray"}>
				<Image src={src} alt={"img"} layout={"fill"} objectFit={"cover"} objectPosition={"center"}/>
			</div>
			<p className={"custom-font-gothic-a1-thin mt-4"}>{p}</p>
		</div>
	</div>
	);
}