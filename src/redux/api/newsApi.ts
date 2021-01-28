import axios from 'axios'

export async function getHeadlines(): Promise<[]> {
  const url = `${process.env.REACT_APP_API_BASE_URL}/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}`

  try {
    const { data } = await axios.get<any>(url)
    return data.articles
  } catch (err) {
    throw err
  }
}
