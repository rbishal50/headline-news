export interface INews {
  id: string
  title: string
  subtitle: string
  content: string
  imageUrl: string
}

export const mapper = (data: any, items: number = 10) => {
  return data
    .map((el: any, index: number) => ({
      id: `${index + 1}-${el.title}`,
      title: el.title,
      subtitle: el.description,
      content: el.content,
      imageUrl: el.image,
    }))
    .slice(0, items)
}
