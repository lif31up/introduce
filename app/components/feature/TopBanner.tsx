import React from 'react'

const style: React.CSSProperties = {
  width: '100%',
  height: '6.5rem',
}
export default function TopBanner(): React.JSX.Element {
  return (
    <div style={style} className='flex items-center gap-8 px-20 border-b select-none'>
      <h1 className='_text-large mb-1'>🌐 🧪 🚀</h1>
      <span className='_text-small flex gap-4'>
        <desc className='px-6 py-3 rounded-2xl text-sky-500 bg-sky-100 border-sky-200 border'>
          디자인과 개발 능력을 모두 겸비하고 있어요
        </desc>
        <desc className='px-6 py-3 rounded-2xl text-sky-500 bg-sky-100 border-sky-200 border'>
          시원시원한 성격입니다! 의사소통이 원활해요
        </desc>
        <desc className='px-6 py-3 rounded-2xl text-sky-500 bg-sky-100 border-sky-200 border'>피드백을 두려워하지 않아요</desc>
        <desc className='px-6 py-3 rounded-2xl text-sky-500 bg-sky-100 border-sky-200 border'>
          안주하지 않습니다. 더 성장하기 위해 현재의 한계에 도전합니다
        </desc>
      </span>
    </div>
  )
}
