'use client';
import Image from "next/image";
import {MutableRefObject, useEffect, useRef, useState} from "react";
function LazyImage({src,imageId}:{src:string,imageId:string}){
	const [srcing,setSrcing] = useState("/empty-image.jpg");
	const observerRef:any|null = useRef(null);
	useEffect(()=>{
		let target:HTMLElement|null = document.getElementById(imageId);
		if(target === null) {return;}
		const intersectionHandler = (entries:object):void=>{
			// @ts-ignore
			entries.forEach((entry,observer)=>{
				if(entry.isIntersecting){ // @ts-ignore
					setSrcing(src);
					return ()=>{observerRef.current.disconnect();};
				}
			});
		}
		let options = {
			root:null,
			rootMargin:"0px",
			threshold:0.5
		}
		observerRef.current = new IntersectionObserver(intersectionHandler,options);
		observerRef.current.observe(target);
	},[false]);
	return(
	<Image src={srcing} alt={"project_img"}
				 width={"320"} height={"320"} sizes={"320px"}
				 className={"w-full h-80 rounded-2xl overflow-hidden object-contain"} id={imageId}/>
	);
}
interface ProjectProps{h1:string,p:string,src:string,href:string,imageId:string}
export default function Project({h1,p,src,href,imageId}:ProjectProps){
	return(
	<a href={href}>
		<div className={"_content"}>
			<div className={"p-4 text-white custom-font-gothic-a1"}>
				<h1 className={"text-3xl mb-2 py-2"}>{h1}</h1>
				<LazyImage src={src} imageId={imageId}/>
				<p className={"custom-font-gothic-a1-regular mt-4 leading-7 tracking-tighter"}>{p}</p>
			</div>
		</div>
	</a>
	);
}