import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { RootState } from './redux/rootReducer'
import { fetchHeadlines } from './redux/slices/newsSlice'

function App() {
  const dispatch = useDispatch()

  const { headlines } = useSelector((state: RootState) => {
    return {
      headlines: state.news.headlines,
      isLoading: state.news.isLoading,
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(fetchHeadlines())
  }, [dispatch])

  return <div className='App'>{(headlines || []).map((headline: any) => headline.title)}</div>
}

export default App
