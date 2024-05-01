export default interface DefaultProps<T> {
  className?: string
  id?: string
  title?: string
  children?: any
  src?: string
  data?: T
  onClick?: () => any
}
