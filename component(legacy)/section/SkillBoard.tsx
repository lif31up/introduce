import React from 'react'
import Default from '@/utils/interface'
import TailwindProperties from '@/utils/tailwindProperties'
import SkillCard from '@/component/common/SkillCard'

function SkillBoard({ className, id }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    sm: 'sm:px-80 sm:grid sm:gap-8',
    base: 'px-6 grid gap-4',
  }
  return (
    <section className={`${style.sm} ${style.base} ${className}`} id={id}>
      <SkillCard
        data={{
          title: '반응형 웹 개발',
          heading: '모든 환경에 맞게 커스터마이징할 수 있습니다.',
          desc: 'Tailwind CSS와 SCSS를 통해 반응형 웹을 개발하는데 능숙합니다.',
        }}
      />
      <SkillCard
        data={{
          title: '디자인 시스템 기획',
          heading: '디자인 시스템 기획을 할 수 있습니다.',
          desc: '이를 통해 빠른 개발 주기를 가져갈 수 있습니다.',
        }}
      />
      <SkillCard
        data={{
          title: '웹 에니메이션',
          heading: '에니메이션을 능숙하게 다룰 줄 앏니다.',
          desc: '담백한 에니메이션을 추가함으로써 더 나은 사용자 경험을 가져갈 수 있습니다.',
        }}
      />
      <SkillCard
        data={{
          title: '정확한 의사소통',
          heading: '협업과 의사소통도 일의 일부입니다.',
          desc: '협업 프로젝트를 하면서 확실한 의사소통과 일정이 얼마나 중요한지 알게 되었습니다.',
        }}
      />
    </section>
  )
}
export default SkillBoard
