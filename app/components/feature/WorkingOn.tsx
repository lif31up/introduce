import '@/styles/WorkingOn.css'
interface WorkingOnProps {
  subject: string
  desc: string
}

export default function WorkingOn({ subject, desc }: WorkingOnProps) {
  return (
    <div className={'_grid-content _bg-black-045 text-white _rounded-1xl'}>
      <div className={'block pb-4'}>
        <h1 className={'_heading_large -mt-2'}>{subject}</h1>
        <p className={"_text-regular text-neutral-400"}>{desc}</p>
      </div>
      <div className={'_rainbow-bar'} />
    </div>
  )
}
