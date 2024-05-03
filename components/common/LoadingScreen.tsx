'use client'

import { useEffect, useState } from 'react'
import TailwindProperties from '@/utils/tailwindProperties'

function LoadingScreen({}) {
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const imgs: NodeListOf<HTMLImageElement> | null = document.querySelectorAll('img')
    if (!imgs) return
    const nodeList: Array<HTMLImageElement> = []
    imgs.forEach((element: HTMLImageElement) => nodeList.push(element))
    const onLoad = (img: HTMLImageElement) => {
      return new Promise((resolve, reject) => {
        if (img.complete) resolve(null)
        img.onload = resolve
      })
    }
    Promise.all(nodeList.map((element: HTMLImageElement) => onLoad(element)))
      .then(() => setLoading(false))
      .catch((e) => {
        console.log(e)
        setLoading(false)
      })
  }, [loading])
  const style: TailwindProperties = {
    sm: '',
    base: 'z-50 fixed left-0 top-0  h-screen w-screen  bg-black flex justify-center items-center  font-bold',
  }
  if (!loading) return <></>
  return <div className={`${style.sm} ${style.base}`}>Loading...</div>
}
export default LoadingScreen
