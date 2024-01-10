'use client'
import React, { useEffect, useRef } from 'react'

interface observedContainerProps {
  id: string
  children: React.ReactNode
  animation: string
  threshold?: number
}
export default function ObservedContainer({ id, children, animation, threshold }: observedContainerProps): React.JSX.Element {
  const observerRef: any = useRef(null)
  useEffect((): void => {
    let element: HTMLElement | null = document.getElementById(id)
    const intersectionHandler = (entries: Array<any>): void => {
      entries.forEach((entry): void | (() => void) => {
        if (entry.isIntersecting) {
          if (element === null) return
          element.style.animationPlayState = 'running'
          return (): void => {
            observerRef.current.disconnect()
          }
        }
      })
    }
    let options: object = {
      root: null,
      rootMargin: '0px',
      threshold: threshold !== null ? threshold : 0.5,
    }
    observerRef.current = new IntersectionObserver(intersectionHandler, options)
    observerRef.current.observe(element)
  }, [false])
  return (
    <div id={id} className={animation}>
      {children}
    </div>
  )
}

interface observedContributorProps {
  prefix: string
  children: React.ReactNode
  animation: string
  threshold?: number
}
export function ObservedContributor({ prefix, children, animation, threshold }: observedContributorProps): React.JSX.Element {
  const contributor: Array<React.ReactNode> = []
  React.Children.forEach(children, (child: React.ReactNode, index: number): void => {
    if (React.isValidElement(child)) {
      contributor.push(
        <ObservedContainer id={prefix + `--${index}`} animation={animation} threshold={threshold}>
          {child}
        </ObservedContainer>
      )
    }
  })
  return <>{contributor}</>
}
