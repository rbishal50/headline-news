export const mapper = (data: any) => {
  return data
    .map((el: any, index: number) => ({
      id: `${index + 1}-${el.title}`,
      title: el.title,
      subtitle: el.content,
      content: el.description,
      source: el.source?.id,
      imageUrl: el.urlToImage,
    }))
    .slice(0, 10)
}
