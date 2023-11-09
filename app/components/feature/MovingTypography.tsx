'use client';
import React, {useEffect, useRef} from "react";
interface MovingTypographyProps{className:string,children:string,animation:string,id:string}
export default function MovingTypography({className,children,animation,id}:MovingTypographyProps){
	const observerRef:any = useRef(null);
	useEffect(()=>{
		const typography:HTMLElement|null = document.getElementById(id);
		if(typography === null){return;}
		// @ts-ignore
		const intersectionHandler = (entries)=>{
			// @ts-ignore
			entries.forEach((entry,observer)=>{
				if(entry.isIntersecting){
					const letters = typography.querySelectorAll(".letter");
					letters.forEach((element,index)=>{
						setTimeout(()=>{
							// @ts-ignore
							element.style.animationPlayState = "running";
						},index * 100);
					});
					return()=>{observerRef.current.disconnect();};
				}//if
			});//forEach
		}//intersectionHandler
		const options = {root:null,rootMargin:"0px",threshold:0.1}
		observerRef.current = new IntersectionObserver(intersectionHandler,options);
		observerRef.current.observe(typography);
	},[false]);
	const typography:Array<React.ReactNode> = [];
	for(let i = 0; children[i]; i++){
		if(children[i] === " "){typography.push(<div key={i} className={"space"}/>);}
		else{typography.push(<div key={i} className={["letter",animation].join(" ").trim()}>{children[i]}</div>)}
	}
	return(
	<div className={["typography block w-full", className].join(" ").trim()} id={id}>
		{typography}
	</div>
	);
}