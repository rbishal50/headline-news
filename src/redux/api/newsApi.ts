import axios from 'axios'

export async function getHeadlines(): Promise<[]> {
  const url = `${process.env.REACT_APP_API_BASE_URL}/news?access_key=${process.env.REACT_APP_API_KEY}&limit=4`

  try {
    const res = await axios.get<any>(url)
    return res.data.data
  } catch (err) {
    throw err
  }
}
