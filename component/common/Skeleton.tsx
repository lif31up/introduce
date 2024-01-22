import React from 'react'

export default function Skeleton({ img }: { img?: boolean }) {
  return (
    <div className={'_grid-content _bg-black-025 _rounded-1xl'}>
      <div title={'h1'} className={'_loading-bar h-16'} />
      {img ? <div className={'w-full h-40'} /> : <b></b>}
      <div title={'p'} className={'_loading-bar w-full h-8 my-2'} />
      <div title={'p'} className={'_loading-bar w-full h-8 my-2'} />
      <div title={'p'} className={'_loading-bar w-full h-8 my-2'} />
      <div title={'p'} className={'_loading-bar w-full h-8 my-2'} />
    </div>
  )
} // return this comp until fully loaded
