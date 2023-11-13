'use client';
import ReactPlayer from "react-player";
import {useEffect, useState} from "react";

export default function VideoPlayer({}){
	const [loading,setLoading] = useState(false);
	useEffect(()=>{
		setLoading(true);
	},[]);
	if(!loading){return(<div className={"h-full"}>Load</div>);}
	return(
	<div>
		<ReactPlayer url={"/assets/images/break_1.mp4"} width={"101%"} height={"auto"}
								 playing loop muted/>
	</div>
	);
}