'use client';
import {useEffect} from "react";
import {initializeApp} from "firebase/app";
import {logEvent, getAnalytics} from "firebase/analytics";
import firebaseConfig from "@/app/firebase";

export default function Firebase({}){
	useEffect(()=>{
		const app = initializeApp(firebaseConfig);
		const analytics = getAnalytics(app);
		logEvent(analytics,"page_view",{
			page_path:window.location.pathname,
			page_title:document.title,
		});
	},[false]);
	return(<div></div>);
}