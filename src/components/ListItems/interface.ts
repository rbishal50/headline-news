export interface IProps {
  items: IItem[]
}

export interface IItem {
  id: string
  title: string
  subtitle: string
  clicked: () => void
}
