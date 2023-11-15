export default function Caption({ children }: { children: string }) {
  return (
    <div
      className={
        '_content p-4 custom-font-gothic-a1-thin custom-mobile-disable flex items-center'
      }
    >
      <div className={'bg-white custom-sphere h-2 w-2 mr-2'} />
      <p>{children}</p>
    </div>
  )
}
