export interface IProps {
  isModalShown: boolean
  handleClose: () => void
  title: string
  subtitle: string
  content: string
  imageUrl?: string
}
