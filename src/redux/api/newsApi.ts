import { request } from '../../utils/request'

export async function getHeadlines(): Promise<[]> {
  const url = `${process.env.REACT_APP_API_BASE_URL}/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}`

  try {
    const { articles } = await request(url, {
      method: 'GET',
    })
    return articles
  } catch (err) {
    throw err
  }
}
