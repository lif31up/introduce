'use client'
import '@/styles/Animation.css'
import React, { useEffect, useRef } from 'react'
import Default from '@/util/interface'

interface ObservedText extends Default {
  id: string
  children: string
  animation: string
  whitespace: string
}
export default function ObservedText({ className, children, animation, id, whitespace }: ObservedText) {
  const observerRef: any = useRef(null)
  useEffect((): void => {
    const typography: HTMLElement | null = document.getElementById(id)
    if (typography === null) {
      return
    }
    const intersectionHandler = (entries: Array<any>): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const letters: NodeListOf<HTMLElement> = typography.querySelectorAll('._letter')
          letters.forEach((element: HTMLElement, index: number) => {
            setTimeout(() => {
              element.style.animationPlayState = 'running'
            }, index * 100)
          })
          return () => {
            observerRef.current.disconnect()
          }
        }
      })
    }
    const options: object = { root: null, rootMargin: '0px', threshold: 0.1 }
    observerRef.current = new IntersectionObserver(intersectionHandler, options)
    observerRef.current.observe(typography)
  }, [])
  const typography: Array<React.ReactNode> = []
  for (let i = 0; children[i]; i++) {
    if (children[i] === ' ') {
      typography.push(<div key={i} className={whitespace} />)
    } else {
      typography.push(
        <div key={i} className={['_letter', animation].join(' ').trim()}>
          {children[i]}
        </div>
      )
    }
  }
  return (
    <div className={['block', className].join(' ').trim()} id={id}>
      {typography}
    </div>
  )
}
