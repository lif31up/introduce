export default function Caption({ children }: { children: string }) {
  return (
    <div
      className={
        '_content p-4 custom-mobile-disable flex items-center'
      }
    >
      <div className={'bg-white custom-sphere h-2 w-2 mr-2'} />
      <p className={"_text_small text-neutral-400"}>{children}</p>
    </div>
  )
}
