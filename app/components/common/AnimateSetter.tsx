'use client'
import React, { useEffect, useRef } from 'react'
import "@/styles/Animation.css";

interface AnimationContainerTableProps {
  children: React.ReactNode
  id: string
  animation: string
  gap: string
}
export default function AnimateSetter({
  children,
  id,
  animation,
  gap
}: AnimationContainerTableProps) {
  const childrenInContainer: Array<React.ReactNode> = []
  React.Children.forEach(children, (child, index) => {
    if (React.isValidElement(child)) {
      childrenInContainer.push(
        <AnimationContainer
          key={index}
          className={animation}
          id={[id, index].join('--').trim()}
        >
          {child}
        </AnimationContainer>
      )
    }
  })
  return <div id={id} className={["grid",gap].join(" ").trim()}>{childrenInContainer}</div>
}
interface AnimationContainerProps {
  children: React.ReactNode
  className: string
  id: string
}
function AnimationContainer({
  children,
  className,
  id,
}: AnimationContainerProps) {
  const observerRef: any | null = useRef(null)
  useEffect(() => {
    let target: HTMLElement | null = document.getElementById(id)
    const intersectionHandler = (entries: Array<any>): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (target === null) {return}
          target.style.animationPlayState = 'running'
          return () => {
            observerRef.current.disconnect()
          }
        }
      })
    }
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }
    observerRef.current = new IntersectionObserver(intersectionHandler, options)
    observerRef.current.observe(target)
  }, [false])
  return (
    <div className={className} id={id}>
      {children}
    </div>
  )
}
