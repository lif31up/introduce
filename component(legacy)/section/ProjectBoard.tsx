import React from 'react'
import ProjectCard from '@/component/common/ProjectCard'
import { ObservedDistributor } from '@/component/anime/ObservedContainer'
import Default from '@/utils/interface'
import TailwindProperties from '@/utils/tailwindProperties'

export default function ProjectBoard({ className, id, title }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    xl: 'xl:grid-cols-2 xl:gap-8 xl:px-80 xl:my-8',
    lg: `lg:grid-cols-2 lg:gap-8 lg:px-60 lg:my-8`,
    md: 'md:grid-cols-2 md:gap-8 md:px-28 md:my-8',
    sm: 'sm:grid-cols-2 sm:grid-cols-1 sm:gap-8 sm:px-8 sm:my-8',
    base: 'grid grid-cols-1 gap-1 my-1',
  }
  return (
    <section
      title={title}
      className={`${style.base} ${style.xl} ${style.lg} ${style.md} ${style.sm} ${className} overflow-hidden`}
      id={id}>
      <div className='w-full h-fit grid gap-1 sm:gap-8'>
        <ObservedDistributor prefix='left--' animation={'_anime-slp-ltr-slide'} threshold={0.1}>
          <ProjectCard
            data={{
              title: '자료구조',
              heading: '프로그래밍의 기초 중에 기초',
              desc: 'C언어를 이용해 연결 리스트, 이중 탐색 트리, 그래프, 세트, AVL트리 등을 구현해보았습니다. 프로그래밍 언어에 대한 전반적인 지식과 감각을 잡는데 큰 도움을 준 프로젝트입니다.',
              tags: ['C 언어', '파이썬', '자바스크립트'],
              href: 'https://github.com/lif31up/Data-Structures-and-Algorithms',
              repo: 'https://github.com/lif31up/Data-Structures-and-Algorithms',
            }}
          />
          <ProjectCard
            data={{
              title: '무한 스크롤',
              heading: '쇼핑몰에 사용될 수 있는 무한 스크롤링',
              desc: '리액트 쿼리를 배우는 과정에서 만들게 된 기능입니다. Observer API와 리액트 후크를 통해 에러가 나지 않고 재사용 가능한 무한 스크롤러를 만들었습니다.',
              tags: ['리액트 쿼리', '리액트', '후크', '패칭'],
              href: 'https://shopping-mall-rust.vercel.app/',
              repo: 'https://github.com/lif31up/infinite-scroll',
            }}
          />
          <ProjectCard
            data={{
              title: '포트폴리오',
              heading: '구인구직을 위해 만든 개인 페이지',
              desc: '현재 보고계시는 페이지입니다. 제가 지금 것 해왔던 프로젝트를 종합하기 위해 만들었습니다. 화려한 에니메이션을 통해 더 인상깊은 사용자 경험을 만들 수 있었습니다.',
              tags: ['리액트', '넥스트', '베르셀', '파이어베이스', 'SCSS'],
              href: 'https://introduce-murex.vercel.app/',
              repo: 'https://github.com/lif31up/introduce',
            }}
          />
          <ProjectCard
            data={{
              title: '리액트 요소 라이브러리',
              heading: '프론트엔드의 가장 기본적인 요소를 전시',
              desc: '프론트엔드 개발자라면 당연히 구현할 줄 알아야 하는 몇 가지 요소들이 있습니다. 수평 스크롤러, 로그인 입력, 상단바 등을 한 군데애 모았습니다.',
              tags: ['Tailwind CSS', '리액트', '넥스트', '후크'],
              href: 'https://components-lilac.vercel.app/',
              repo: 'https://github.com/lif31up/components',
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
              desc: '현재 제가 수행하고 있는 팀 프로젝트입니다. 캠퍼스픽이라는 어플을 통해서 각 분야의 학생이 모여서 블로그 서비스를 제작 중입니다. 저는 UI/UX 기획 및 디자인과 프론트엔드 개발을 수행했습니다.',
              tags: ['피그마', '슬랙', '리액트', '테일윈드 CSS'],
              href: 'https://github.com/devBlogProject/front-end',
              repo: 'https://github.com/devBlogProject/front-end',
            }}
          />
          <ProjectCard
            data={{
              title: '에니메이션 실험소',
              heading: '웹 에니메이션을 능숙하게 다룹니다',
              desc: '더 나은 사용자 경험을 위해서 에니메이션이 사용될 수도 있습니다. 그래서 에니메이션 실험소를 만들어 CSS 에니메이션 또는 DOM API를 공부하고 기록하고 있습니다.',
              tags: ['Observer API', '넥스트', '리액트', 'CSS 에니메이션'],
              href: 'https://animation-nine-weld.vercel.app/',
              repo: 'https://github.com/lif31up/animation',
            }}
          />
          <ProjectCard
            data={{
              title: '파이어베이스',
              heading: '외부 API를 공부하고 사용해본 경험',
              desc: '구글 인증 로그인을 만들고 싶어서 파이어베이스를 배우던 중에 다른 것들도 공부해야겠다 싶어서 만들게 된 사이트입니다. 파이어베이스 대부분의 기능이 한 사이트에 정리되어 있습니다.',
              tags: ['파이어베이스', '리액트', '넥스트'],
              href: 'https://firebase-gamma-three.vercel.app/',
              repo: 'https://github.com/lif31up/firebase',
            }}
          />
        </ObservedDistributor>
      </div>
    </section>
  )
}
