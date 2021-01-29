export interface IProps {
  clicked: (data: INews) => void
}

export interface INews {
  id?: string
  title: string
  subtitle: string
  content: string
  imageUrl: string
}
