import React from 'react'
import '@/styles/Common.css'
import '@/styles/Text.css'

interface TagsProps extends TagProps {
  children: Array<string>
  width: string
  maxColum: number
  height: number
}
export default function Tags(
  {
    children,
    width,
    colorScheme,
    theme,
    maxColum,
    height
  }: TagsProps) {
  const tagsStyle: object = {
    display: 'inline-block',
    width: width,
    height: `calc(${(height * maxColum) + (maxColum - 1)}rem)`,
  }

  const tags: Array<React.ReactNode> = []
  children.forEach((tag: string, index: number): void => {
    tags.push(
      <Tag tagName={tag} colorScheme={colorScheme} theme={theme} key={index} />,
    )
  })
  return <div style={tagsStyle} className={"overflow-hidden"}>{tags}</div>
}

interface TagProps {
  tagName?: string
  colorScheme?: string
  theme?: string
}
const tagStyle: object = {
  display: 'inline-block',
  marginRight: '1rem',
  padding: '0.6rem 1.5rem 0.4rem 1.5rem',
  marginBottom: '1rem',
  height: 'fit-content',
}
function Tag({ colorScheme, theme, tagName }: TagProps) {
  return (
    <div className={[colorScheme, theme].join(' ').trim()} style={tagStyle}>
      {tagName}
    </div>
  )
}