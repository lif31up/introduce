'use client';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
	apiKey: "AIzaSyBO81lI2Q1Jm0p-mO28UP9rq-c36gY8o6g",
	authDomain: "webp-1628f.firebaseapp.com",
	projectId: "webp-1628f",
	storageBucket: "webp-1628f.appspot.com",
	messagingSenderId: "238819752790",
	appId: "1:238819752790:web:198cf02c7431151b72b4f7",
	measurementId: "G-K73MJ55VCH"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default function Firebase({}){
	return(<></>);
}