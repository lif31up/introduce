'use client'
import React, { useEffect, useRef } from 'react'
import Default from '@/utils/interface'

interface ObservedContainer extends Default {
  children: React.ReactNode
  animation: string
  threshold?: number
}
export default function ObservedContainer({ id, children, animation, threshold }: ObservedContainer): React.JSX.Element {
  const observerRef: any = useRef(null)
  useEffect((): void => {
    if (!id) return
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
  }, [])
  return (
    <div id={id} className={animation}>
      {children}
    </div>
  )
}

interface observedDistributorProps {
  prefix: string
  children: React.ReactNode
  animation: string
  threshold?: number
}
export function ObservedDistributor({ prefix, children, animation, threshold }: observedDistributorProps): React.JSX.Element {
  const distributor: Array<React.ReactNode> = []
  React.Children.forEach(children, (child: React.ReactNode, index: number): void => {
    if (React.isValidElement(child)) {
      distributor.push(
        <ObservedContainer id={prefix + `--${index}`} animation={animation} threshold={threshold} key={index}>
          {child}
        </ObservedContainer>
      )
    }
  })
  return <>{distributor}</>
}
