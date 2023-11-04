'use client';
import * as THREE from "three";
import {useEffect, useRef} from "react";
import "@/styles/Scene.css";

export default function Scene({}){
	const refContainer = useRef(null);
	useEffect(()=>{
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		var renderer = new THREE.WebGLRenderer({alpha:true}); renderer.setClearColor(0x000000,0);
		renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.7 - (4 * 14));
		// document.body.appendChild( renderer.domElement );
		// use ref as a mount point of the Three.js scene instead of the document.body
		document.getElementById("scene").appendChild(renderer.domElement);
		var geometry = new THREE.BoxGeometry(2, 2, 2);
		var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		var cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
		camera.position.z = 4;
		var animate = function () {
			requestAnimationFrame(animate);
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render(scene, camera);
		};
		animate();
	},[false]);
	return(
		<div className={"_scene"} ref={refContainer} id={"scene"}/>
	);
}