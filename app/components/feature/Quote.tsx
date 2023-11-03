import React from "react";
import Image from "next/image";

interface QuoteProps{src:string,h1:string,p:string}
export default function Quote({src,h1,p}:QuoteProps){
	return(
	<div className={"_content p-4 flex"}>
		<div className={"h-16"}/>
		<div className={"absolute"}>
			<div className={"relative h-16 w-16 custom-sphere overflow-hidden"}>
				<Image src={src} alt={""} layout={"fill"} objectFit={"cover"} objectPosition={"center"}/>
			</div>
		</div>
		<div className={"ml-20 w-"}>
			<h1>{h1}</h1>
			<p className={"custom-font-gothic-a1-thin custom-text-08"}>{p}</p>
		</div>
	</div>
	);
}