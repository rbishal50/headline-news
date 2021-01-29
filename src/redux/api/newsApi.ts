import { mapper } from '../../utils/mapper'
import { request } from '../../utils/request'

export async function getHeadlines(): Promise<[]> {
  const url = `/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}`

  try {
    const { articles } = await request(url, {
      method: 'GET',
    })
    const data = mapper(articles)
    return data
  } catch (err) {
    throw err
  }
}

export async function getFeatured(): Promise<[]> {
  const url = `/top-headlines?q=trump&apiKey=${process.env.REACT_APP_API_KEY}`

  try {
    const { articles } = await request(url, {
      method: 'GET',
    })
    const data = mapper(articles)
    return data
  } catch (err) {
    throw err
  }
}
