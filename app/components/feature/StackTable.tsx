'use client';
import React, {useEffect, useRef} from "react";
import Image from "next/image";
interface StackTableChild {h1:string,p:string,src:string}
export default function StackTable({children,id}:{children:Array<StackTableChild>,id:string}){
	const stacks:Array<React.ReactNode> = [];
	children.forEach((node,index)=>{
		stacks.push(<Stack h1={node.h1} p={node.p} src={node.src} key={index} id={id + index.toString()}/>);
	});
	return(<>{stacks}</>);
}
interface StackProps extends StackTableChild{id:string}
function Stack({h1,p,src,id}:StackProps){
	const observerRef:any|null = useRef(null);
	useEffect(()=>{
		let target:HTMLElement|null = document.getElementById(id);
		if(target === null) {return;}
		const intersectionHandler = (entries:object):void=>{
			// @ts-ignore
			entries.forEach((entry,observer)=>{
				if(entry.isIntersecting){ // @ts-ignore
					target.style.animationPlayState = "running";
					return ()=>{observerRef.current.disconnect();};
				}
			});
		}
		let options = {
			root:null,
			rootMargin:"0px",
			threshold:0.75
		}
		observerRef.current = new IntersectionObserver(intersectionHandler,options);
		observerRef.current.observe(target);
	},[false]);
	return(
	<div className={"_content flex p-4 custom-anime-ltr-slide"} id={id}>
		<div className={"h-16"}/>
		<div className={"absolute"}>
			<Image src={src} alt={"img"}
						 width={"0"} height={"0"} sizes={"100vw"}
						 className={"w-16 h-16 rounded overflow-hidden object-cover"}/>
		</div>
		<div className={"ml-20"}>
			<h1 className={"custom-font-gothic-a1"}>{h1}</h1>
			<p className={"custom-font-gothic-a1-thin custom-text-08"}>{p}</p>
		</div>
	</div>
	);
}