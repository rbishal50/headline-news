export interface IProps {
  items: IItem[]
  clicked: (data: any) => void
}

export interface IItem {
  id: string
  title: string
  subtitle: string
  imageUrl: string
  content: string
}
