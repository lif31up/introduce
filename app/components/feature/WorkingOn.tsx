import '@/styles/WorkingOn.css'
interface WorkingOnProps {
  subject: string
  desc: string
}

export default function WorkingOn({ subject, desc }: WorkingOnProps) {
  return (
    <div className={'_content pt-4'}>
      <div className={'block'}>
        <h1 className={'custom-font-gothic-a1 pl-4'}>{subject}</h1>
        <p
          className={
            'custom-text-08 text-neutral-400 pt-1 px-4 pb-4 custom-font-gothic-a1-thin'
          }
        >
          {desc}
        </p>
      </div>
      <div className={'loading-bar'} />
    </div>
  )
}
