'use client'
import ReactPlayer from 'react-player'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export default function VideoPlayer({}) {
  const [loading, setLoading]: [
    loading: boolean,
    setLaoding: Dispatch<SetStateAction<boolean>>
  ] = useState(false)
  useEffect((): void => {
    setLoading(true)
  }, [false])
  if (!loading) {
    return <div className={"h-96 _loading-bar"}></div>
  }
  return (
    <ReactPlayer
      url={'/assets/images/break_1.mp4'}
      width={'101%'}
      height={'auto'}
      playing
      loop
      muted
      style={{objectFit:"cover"}}
    />
  )
}
