export interface INews {
  id: string
  title: string
  subtitle: string
  content: string
  imageUrl: string
}
export interface IState {
  headlines: INews[]
  featured: INews[]
  isLoading: boolean
  error: string | null
}
