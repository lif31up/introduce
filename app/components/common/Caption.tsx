export default function Caption({ children }: { children: string }) {
  return (
    <div
      className={
        '_grid-content _bg-black-045 _rounded-1xl p-4 custom-mobile-disable flex items-center'
      }
    >
      <div className={'bg-white _sphere h-2 w-2 mr-8'} />
      <p className={"_text_small text-neutral-400"}>{children}</p>
    </div>
  )
}
