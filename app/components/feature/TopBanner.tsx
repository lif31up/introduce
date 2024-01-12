import React from 'react'

const style: React.CSSProperties = {
  width: '100%',
  height: 'fit-content',
}
export default function TopBanner(): React.JSX.Element {
  return (
    <div style={style} className='flex items-center gap-8 px-4 lg:px-12 border-b select-none lg:py-4 py-8'>
      <h1 className='text-base mb-1 hidden lg:block'>🌐 🧪 🚀</h1>
      <ul className='text-xs lg:flex lg:gap-4 grid gap-2'>
        <desc className='py-1 px-3 rounded-2xl text-neutral-500 bg-neutral-100 border-neutral-200 border'>
          디자인과 개발 능력을 모두 겸비하고 있어요
        </desc>
        <desc className='py-1 px-3 rounded-2xl text-neutral-500 bg-neutral-100 border-neutral-200 border'>
          시원시원한 성격입니다! 의사소통이 원활해요
        </desc>
        <desc className='py-1 px-3 rounded-2xl text-neutral-500 bg-neutral-100 border-neutral-200 border'>
          피드백을 두려워하지 않아요
        </desc>
        <desc className='py-1 px-3 rounded-2xl text-neutral-500 bg-neutral-100 border-neutral-200 border'>
          안주하지 않습니다. 더 성장하기 위해 현재의 한계에 도전합니다
        </desc>
      </ul>
    </div>
  )
}
