import React from 'react'
import StackCard from '@/component/common/StackCard'
import { ObservedDistributor } from '@/component/anime/ObservedContainer'
import TailwindProperties from '@/util/tailwindProperties'
import Default from '@/util/interface'

export default function StackBoard({ className, id }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    sm: 'sm:grid sm:px-16 sm:my-16',
    base: 'grid pt-8',
  }
  return (
    <section title='stack-board' className={`${style.sm} ${style.base} ${className} overflow-hidden`} id={id}>
      <div title='heading' className='grid justify-items-center mb-8 sm:mt-8 sm:mb-16 px-6'>
        <h1 className='text-2xl font-extrabold text-white sm:text-3xl'>제가 다루는 스택이에요!</h1>
        <h2 className='text-sm text-gray-400 sm:text-base mt-4'>
          모두 자유롭게 사용할 수 있습니다. 회사에 들어가도 바로 적용시킬 수 있어요.
        </h2>
      </div>
      <Distributor>
        <StackCard
          src='/assets/images/javascript_icon.webp'
          name='자바스크립트'
          desc='DOM 조작과 자체 API, 약속체, 상속에 대해 정확한 지식을 가지고 있습니다. ES6 문법을 주로 사용했고 이에 익숙합니다.'
        />
        <StackCard
          src='/assets/images/typescript_icon.webp'
          name='타입스크립트'
          desc='엄격한 문법도 막힘없이 읽어 확장, 작성할 수 있습니다. 리액트와 같이 사용한 경험이 많아 디버깅에 유리합니다.'
        />
        <StackCard
          src='/assets/images/sass_icon.webp'
          name='SASS'
          desc='SASS를 통해 반응형 스타일시트를 만들 수 있습니다. 그 외에도 컴파일 방식이나 코드 캡슐화를 읽고 쓸 줄 압니다.'
        />
        <StackCard
          src='/assets/images/next_icon.webp'
          name='넥스트'
          desc='CSR 및 SSR 패턴화, 동적 라우팅, 이미지 최적화 등을 사용할 줄 압니다. 최신 이해를 가지고 있다고 믿으셔도 됩니다.'
        />
        <StackCard
          src='/assets/images/react_icon.webp'
          name='리액트'
          desc='후크, 상태를 이해하고 적용할 줄 압니다. 리액트 쿼리, 리코일에도 익숙합니다. 이 부분은 제가 자신하는 제 강점입니다.'
        />
        <StackCard
          src='/assets/images/vercel_icon.webp'
          name='버셀'
          desc='이 페이지도 버셀을 통해 배포되는 중입니다. 간단한 배포에 대핸 숙련된 경험이 있습니다.'
        />
        <StackCard
          src='/assets/images/figma_icon.webp'
          name='피그마'
          desc='UI/UX를 디자인하기 위해 주로 사용하는 도구입니다. 공식 사이트의 문서를 통해 디자인 체계의 기획과 작성을 배웠습니다.'
        />
        <StackCard
          src='/assets/images/photoshop.webp'
          name='포토샵'
          desc='포토샵을 통해서 목업과 이미지에 대한 필터 효과를 적용할 수 있습니다. 전반적인 보정 작업에 대한 틀을 잡을 줄 앎니다.'
        />
        <StackCard
          src='/assets/images/illustrator.webp'
          name='일러스트레이터'
          desc='시각 디자인을 사용하는데 주로 이용하는 프로그램입니다. 기대 이상으로 잘 다룹니다! 로고 프로젝트에서 이를 확인할 수 있습니다.'
        />
      </Distributor>
    </section>
  )
}

const anime: string = '_anime-slp-rtl-slide'
const threshold: number = 0.1
function Distributor({ children }: { children: React.ReactNode }): React.JSX.Element {
  let flag: number
  let channels: Array<Array<React.ReactNode>> = [[], [], [], []]

  React.Children.forEach(children, (child: React.ReactNode, index: number): void => {
    flag = index % 4
    channels[flag].push(child)
  })

  const style: TailwindProperties = {
    sm: 'sm:flex sm:items-start sm:gap-4',
    base: 'grid gap-2',
  }
  const grid: string = 'grid gap-2 sm:gap-4'
  return (
    <div className={`${style.sm} ${style.base}`}>
      <div className={grid}>{channels[0]}</div>
      <div className={grid}>{channels[1]}</div>
      <div className={grid}>{channels[2]}</div>
      <div className={grid}>{channels[3]}</div>
    </div>
  )
}
