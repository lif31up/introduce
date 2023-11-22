'use client'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import '@/styles/Scene.css'
import '@/styles/Text.css'
import Link from 'next/link'
import MovingTypography from '@/app/components/common/MovingTypography'

export default function Scene({}) {
  const refContainer = useRef(null)
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(window.innerWidth, window.innerHeight)
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    document.getElementById('scene').appendChild(renderer.domElement)
    //DEFINE CUBE
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshBasicMaterial({ color: 8266446 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    //DEFINE CUBE
    const cube_1 = new THREE.Mesh(geometry, material)
    cube_1.position.x = 2
    cube_1.position.z = 3
    cube_1.position.y = 1
    scene.add(cube_1)
    //DEFINE CUBE
    const cube_2 = new THREE.Mesh(geometry, material)
    cube_2.position.x = -2
    cube_2.position.z = 3
    cube_2.position.y = -1
    scene.add(cube_2)
    //DEFINE CAMERA
    camera.position.z = 5
    const animate = function () {
      requestAnimationFrame(animate)
      cube.rotation.y += 0.01
      cube.rotation.x += 0.01
      cube_1.rotation.y += 0.01
      cube_1.rotation.x += 0.01
      renderer.render(scene, camera)
    }
    animate()
  }, [false])
  return (
    <>
      <div className={'fixed top-16 -z-10'}>
        <div className={'_scene'} ref={refContainer} id={'scene'} />
      </div>
    </>
  )
}
