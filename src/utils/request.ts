export class ResponseError extends Error {
  public response: Response

  constructor(response: Response) {
    super(response.statusText)
    this.response = response
  }
}

function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  return response.json()
}

function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new ResponseError(response)
  error.response = response
  throw error
}

export async function request(url: string, options?: RequestInit): Promise<any | { err: ResponseError }> {
  const fetchResponse = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}${url}?token=${process.env.REACT_APP_API_KEY}`,
    options,
  )
  const response = checkStatus(fetchResponse)
  return parseJSON(response)
}
