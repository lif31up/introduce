import React from 'react'
import ProjectCard from '@/component/common/ProjectCard'
import { ObservedDistributor } from '@/component/anime/ObservedContainer'
import Default from '@/util/interface'
import TailwindProperties from '@/util/tailwindProperties'

const style: TailwindProperties = {
  xl: 'xl:grid-cols-2 xl:gap-8 xl:px-80 xl:my-8',
  lg: `lg:grid-cols-2 lg:gap-8 lg:px-60 lg:my-8`,
  md: 'md:grid-cols-2 md:gap-8 md:px-28 md:my-8',
  sm: 'sm:grid-cols-2 sm:grid-cols-1 sm:gap-8 sm:px-8 sm:my-8',
  base: 'grid grid-cols-1 gap-1 my-1',
}
export default function ProjectBoard({ className, id, title }: Default): React.JSX.Element {
  return (
    <section title={title} className={`${style.base} ${style.xl} ${style.lg} ${style.md} ${style.sm} ${className}`} id={id}>
      <div className='w-full h-fit grid gap-1 sm:gap-8'>
        <ObservedDistributor prefix='left--' animation={'_anime-slp-ltr-slide'} threshold={0.1}>
          <ProjectCard
            data={{
              title: '포트폴리오',
              heading: '구인구직을 위해 만든 개인 페이지',
              desc: '현재 보고계시는 페이지입니다. 제가 지금 것 해왔던 프로젝트를 종합하기 위해 만들었습니다. 화려한 에니메이션을 통해 더 인상깊은 사용자 경험을 만들 수 있었습니다.',
              tags: ['리액트', '넥스트', '베르셀', '파이어베이스', 'SCSS'],
              href: 'https://github.com/lif31up/introduce',
            }}
          />
          <ProjectCard
            data={{
              title: '자료구조',
              heading: '프로그래밍의 기초 중에 기초',
              desc: 'C언어를 이용해 연결 리스트, 이중 탐색 트리, 그래프, 세트, AVL트리 등을 구현해보았습니다. 프로그래밍 언어에 대한 전반적인 지식과 감각을 잡는데 큰 도움을 준 프로젝트입니다.',
              tags: ['C 언어', '파이썬', '자바스크립트'],
              href: 'https://github.com/lif31up/Data-Structures-and-Algorithms',
            }}
          />
          <ProjectCard
            data={{
              title: '멀티 블로그',
              heading: '다사다난 했던 협업 경험...',
              desc: '현재 제가 수행하고 있는 팀 프로젝트입니다. 캠퍼스픽이라는 어플을 통해서 각 분야의 학생이 모여서 블로그 서비스를 제작 중입니다. 현재까지 이는 아직 진행 중입니다. 클릭해서 UI/UX와 디자인 체계 설계 과정을 볼 수 있습니다.',
              tags: ['피그마', '슬랙', '리액트', '테일윈드 CSS'],
              href: 'https://github.com/devBlogProject/front-end',
            }}
          />
        </ObservedDistributor>
      </div>
      <div className='w-full h-fit grid gap-1 sm:gap-8'>
        <ObservedDistributor prefix='right--' animation={'_anime-slp-rtl-slide'} threshold={0.1}>
          <ProjectCard
            data={{
              title: '멀티 블로그',
              heading: '다사다난 했던 협업 경험...',
              desc: '현재 제가 수행하고 있는 팀 프로젝트입니다. 캠퍼스픽이라는 어플을 통해서 각 분야의 학생이 모여서 블로그 서비스를 제작 중입니다. 현재까지 이는 아직 진행 중입니다. 클릭해서 UI/UX와 디자인 체계 설계 과정을 볼 수 있습니다.',
              tags: ['피그마', '슬랙', '리액트', '테일윈드 CSS'],
              href: 'https://github.com/devBlogProject/front-end',
            }}
          />
          <ProjectCard
            data={{
              title: '멀티 블로그',
              heading: '다사다난 했던 협업 경험...',
              desc: '현재 제가 수행하고 있는 팀 프로젝트입니다. 캠퍼스픽이라는 어플을 통해서 각 분야의 학생이 모여서 블로그 서비스를 제작 중입니다. 현재까지 이는 아직 진행 중입니다. 클릭해서 UI/UX와 디자인 체계 설계 과정을 볼 수 있습니다.',
              tags: ['피그마', '슬랙', '리액트', '테일윈드 CSS'],
              href: 'https://github.com/devBlogProject/front-end',
            }}
          />
          <ProjectCard
            data={{
              title: '멀티 블로그',
              heading: '다사다난 했던 협업 경험...',
              desc: '현재 제가 수행하고 있는 팀 프로젝트입니다. 캠퍼스픽이라는 어플을 통해서 각 분야의 학생이 모여서 블로그 서비스를 제작 중입니다. 현재까지 이는 아직 진행 중입니다. 클릭해서 UI/UX와 디자인 체계 설계 과정을 볼 수 있습니다.',
              tags: ['피그마', '슬랙', '리액트', '테일윈드 CSS'],
              href: 'https://github.com/devBlogProject/front-end',
            }}
          />
        </ObservedDistributor>
      </div>
    </section>
  )
}
