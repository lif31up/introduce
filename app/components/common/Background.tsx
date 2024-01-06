import Image from 'next/image'
import React from 'react'

const BackgroundStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
}

export default function Background({}): JSX.Element {
  return (
    <Image
      src={'/assets/images/background.webp'}
      alt={'background'}
      width={0}
      height={0}
      sizes={'100vw'}
      style={BackgroundStyle}
      className={'fixed left-0 top-0 -z-50 object-center object-cover'}
    />
  )
}
