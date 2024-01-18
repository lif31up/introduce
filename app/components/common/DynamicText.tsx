'use client'
import '@/styles/Animation.css'
import React, { useEffect, useRef } from 'react'

interface MovingTypographyProps {
  className: string
  children: string
  animation: string
  id: string
}
const whitespace: React.CSSProperties = {
  width: '1rem',
}
export default function DynamicText({ className, children, animation, id }: MovingTypographyProps) {
  const observerRef: any = useRef(null)
  useEffect(() => {
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
    const options = { root: null, rootMargin: '0px', threshold: 0.1 }
    observerRef.current = new IntersectionObserver(intersectionHandler, options)
    observerRef.current.observe(typography)
  }, [false])
  const typography: Array<React.ReactNode> = []
  for (let i = 0; children[i]; i++) {
    if (children[i] === ' ') {
      typography.push(<div key={i} style={whitespace} />)
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
