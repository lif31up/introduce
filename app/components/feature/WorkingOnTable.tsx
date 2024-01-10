'use client'

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import WorkingOn from '@/app/components/feature/WorkingOn'
import React, { useRef, useState } from 'react'
import Skeleton from '@/app/components/common/Skeleton'

const queryClient = new QueryClient()
export default function WorkingOnTable({}) {
  return (
    <QueryClientProvider client={queryClient}>
      <_WorkingOnTable />
    </QueryClientProvider>
  )
}
async function fetcher() {
  const res = await fetch('https://raw.githubusercontent.com/lif31up/introduce/main/public/assets/json/working_on.json') //working on data address
  if (!res.ok) {
    return null
  }
  const data = await res.json()
  return data.items
} //fetcher for workingontable
function _WorkingOnTable({}) {
  const [loading, setLoading] = useState(true)
  const { isLoading, error, data } = useQuery('workingOn.json', fetcher, {
    staleTime: 0,
    onSuccess: () => {
      setLoading(false)
    },
  })
  if (loading) {
    return <Skeleton img={false} />
  }
  const workingOns: Array<React.ReactNode> = []
  // @ts-ignore
  data.forEach((node, index) => {
    if (typeof node === 'object') {
      workingOns.push(<WorkingOn subject={node.h1} desc={node.p} key={index} />)
    } //don't add none object instance
  })
  return <>{workingOns}</>
}
