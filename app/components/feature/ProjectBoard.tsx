import React from 'react'
import Comment from '@/app/components/feature/Comment'
import ProjectCard from '@/app/components/common/ProjectCard'
import ObservedContainer, { ObservedContributor } from '@/app/components/common/ObservedContainer'

const style: React.CSSProperties = {
  width: '100%',
  height: '55rem',
  gap: '4rem',
}
const left: React.CSSProperties = {
  width: '55rem',
  height: 'fit-content',
}
const right: React.CSSProperties = {
  width: '55rem',
  height: 'fit-content',
  marginTop: '-20rem',
}

export default function ProjectBoard(): React.JSX.Element {
  return (
    <section style={style} className='flex justify-center items-center bg-slate-100' id='project-board'>
      <div style={left} className='grid justify-items-center items-center'>
        <Comment>{'지금까지 제가 해온 프로젝트입니다.<br />여러가지를 시도해보았어요!'}</Comment>
      </div>
      <div style={right} className='grid justify-items-center gap-12'>
        <ObservedContributor prefix='project-card' animation='_anime-slp-ltr-slide' threshold={0.1}>
          <ProjectCard
            title='웹 포트폴리오'
            desc='현재 보고계시는 페이지입니다. 제가 지금 것 해왔던 프로젝트를 종합하기 위해 만들었습니다. 화려한 에니메이션을 통해 더 인상깊은 사용자 경험을 만들 수 있었습니다.'
            tags={['리액트', '넥스트', '베르셀', '파이어베이스', 'SCSS']}
            goto=''
          />
          <ProjectCard
            title='뉴럴링크'
            desc='제가 좋아하는 엔터프라이즈 중 하나인 뉴럴링크의 페이지를 직접 다시 디자인해보았습니다. 이 과정에서 과감한 디자인 표현에 대해 배우고 이를 사용하려면 세삼한 주의가 필요하다는 몇 가지 교훈을 얻었습니다.'
            tags={['SCSS', '테일윈드 CSS', '넥스트', '어도브 XD']}
            goto=''
          />
          <ProjectCard
            title='자료구조'
            desc='C언어를 이용해 연결 리스트, 이중 탐색 트리, 그래프, 세트, AVL트리 등을 구현해보았습니다. 프로그래밍 언어에 대한 전반적인 지식과 감각을 잡는데 큰 도움을 준 프로젝트입니다.'
            tags={['C 언어', '파이썬', '자바스크립트']}
            goto=''
          />
          <ProjectCard
            title='멀티 블로그'
            desc='현재 제가 수행하고 있는 팀 프로젝트입니다. 캠퍼스픽이라는 어플을 통해서 각 분야의 학생이 모여서 블로그 서비스를 제작 중입니다. 현재까지 이는 아직 진행 중입니다. 클릭해서 UI/UX와 디자인 체계 설계 과정을 볼 수 있습니다.'
            tags={['피그마', '슬랙', '리액트', '테일윈드 CSS']}
            goto=''
          />
        </ObservedContributor>
      </div>
    </section>
  )
}
