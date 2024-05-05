'use client'

import DefaultProps from '@/utils/DefaultProps'
import React, { useEffect, useRef } from 'react'

interface ObserverContainerProps extends DefaultProps<never> {
  children: React.ReactNode
  animation: string
  threshold?: number
  id: string
}
function ObserverContainer({ children, id, animation, threshold }: ObserverContainerProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const option = { root: null, rootMargin: '0px', threshold: threshold ? threshold : 0 }

  useEffect(() => {
    let element: HTMLElement | null = document.getElementById(id)
    if (!element) return
    const intersectionHandler = (entries: Array<IntersectionObserverEntry>) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          if (!element) return
          element.style.animationPlayState = 'running'
          return () => {
            if (!observerRef.current) return
            observerRef.current.disconnect()
          }
        }
      })
    }
    observerRef.current = new IntersectionObserver(intersectionHandler, option)
    observerRef.current?.observe(element)
  }, [])
  return (
    <div id={id} className={`${animation}`}>
      {children}
    </div>
  )
}
export default ObserverContainer
