const tailiwinderConfig: Array<string> = [')', ',', ';']

// @ts-ignore
export default String.prototype.tailwind = function (): string {
  let buffer: string = this.slice()
  tailiwinderConfig.forEach((letter: string): void => {
    buffer = buffer.replace(letter, '')
  })
  let [desktop, mobile]: Array<string> = buffer.split('lg:(')
  return (
    desktop +
    ' ' +
    mobile
      .split(' ')
      .map((element: string): string => {
        return 'lg:' + element
      })
      .join(' ')
  )
}
