import { FC, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { RootState } from '../../redux/rootReducer'
import { fetchHeadlines } from '../../redux/slices/newsSlice'
import ListItems from '../ListItems'
import PrimaryCard from '../PrimaryCard'

export const HeadlineNews: FC = () => {
  const dispatch = useDispatch()

  const { headlines } = useSelector((state: RootState) => {
    return {
      headlines: state.news.headlines,
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(fetchHeadlines())
  }, [dispatch])

  return <>{<ListItems items={headlines} />}</>
}

export default HeadlineNews
