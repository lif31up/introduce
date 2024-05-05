// 해당 요소는 사용법만 숙지한다면 모든 상황에 있어서 사용될 수 있어야 합니다.

import DefaultProps from '@/utils/DefaultProps'
import React from 'react'
import TailwindProperties from '@/utils/tailwindProperties'

interface StackProps<T> extends DefaultProps<Array<T>> {
  grid: string
  maxCol?: number
  maxRow?: number
  item: (data: T) => React.ReactNode
}
function Stack<T>({ className, data, item, grid, maxCol, maxRow }: StackProps<T>) {
  if (!data) console.assert('Stack: no data to display.')
  const itemList: Array<React.ReactNode> = []
  data?.every((element, index: number): boolean => {
    if (maxRow !== undefined && maxCol !== undefined && index > maxRow * maxCol) return false
    itemList.push(item(element))
    return true
  })
  const style: TailwindProperties = {
    md: '', // mobile
    base: ` ${grid}`,
  }
  return <div className={`${style.md} ${style.base} ${className}`}>{itemList}</div>
}
export default Stack
