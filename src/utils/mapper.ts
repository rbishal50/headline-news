export const mapper = (data: any) => {
  return data
    .map((el: any, index: number) => ({
      id: `${index + 1}-${el.title}`,
      title: el.title,
      subtitle: el.description,
      content: el.content,
      imageUrl: el.image,
    }))
    .slice(0, 10)
}
