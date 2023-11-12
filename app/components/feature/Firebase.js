'use client';
import {useEffect} from "react";
import {logEvent} from "firebase/analytics";
import analytics from "@/app/firebase";

export default function Firebase({}){
	useEffect(()=>{
		logEvent(analytics,"page_view",{
			page_path:window.location.pathname,
			page_title:document.title,
		});
	},[false]);
	return(<div></div>);
}