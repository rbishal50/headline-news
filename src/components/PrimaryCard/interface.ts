export interface IProps {
  type?: 'normal' | 'imageToTheRight'
  size?: 'sm' | 'lg'
  title: string
  subtitle?: string
  content?: string
  imageUrl?: string
  clicked: (data: any) => void
}
