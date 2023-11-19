import '@/styles/WorkingOn.css'
interface WorkingOnProps {
  subject: string
  desc: string
}

export default function WorkingOn({ subject, desc }: WorkingOnProps) {
  return (
    <div className={'_content pt-4'}>
      <div className={'block px-4 pb-4'}>
        <h1 className={'_heading_regular'}>{subject}</h1>
        <p className={"_text_small text-neutral-400"}>{desc}</p>
      </div>
      <div className={'loading-bar'} />
    </div>
  )
}
