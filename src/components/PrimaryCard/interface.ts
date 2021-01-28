export interface IProps {
  type?: 'normal' | 'imageToTheRight'
  title: string
  subtitle?: string
  content?: string
  imageUrl?: string
  clicked: () => void
}
