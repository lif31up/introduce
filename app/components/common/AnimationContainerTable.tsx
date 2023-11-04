'use client';
import React, {useEffect, useRef} from "react";

interface AnimationContainerTableProps{children:React.ReactNode,id:string,animation:string}
export default function AnimationContainerTable({children,id,animation}:AnimationContainerTableProps){
	const childrenInContainer:Array<React.ReactNode> = [];
	React.Children.forEach(children,(child,index)=>{
		if(React.isValidElement(child)){
			childrenInContainer.push(<AnimationContainer key={index} className={animation} id={[id,index].join("--").trim()}>{child}</AnimationContainer>);
		}
	});
	return(
	<div id={id}>
		{childrenInContainer}
	</div>
	);
}
interface AnimationContainerProps{children:React.ReactNode,className:string,id:string}
function AnimationContainer({children,className,id}:AnimationContainerProps){
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
			threshold:0.5
		}
		observerRef.current = new IntersectionObserver(intersectionHandler,options);
		observerRef.current.observe(target);
	},[false]);
	return(
	<div className={className} id={id}>{children}</div>
	);
}