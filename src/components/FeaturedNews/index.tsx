import { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { RootState } from '../../redux/rootReducer'
import { fetchFeatured } from '../../redux/slices/newsSlice'
import ListItems from '../ListItems'
import PrimaryCard from '../PrimaryCard'

interface IProps {
  clicked: (data: any) => void
}

export const HeadlineNews: FC<IProps> = ({ clicked }) => {
  const [highLightedNews, setHighLightedNews] = useState({})
  const dispatch = useDispatch()

  const { featured } = useSelector((state: RootState) => {
    return {
      featured: state.news.featured,
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(fetchFeatured())
  }, [dispatch])

  useEffect(() => {
    if (featured.length) {
      setHighLightedNews(featured[0])
    }
  }, [featured])

  return <>{<ListItems items={featured} clicked={clicked} />}</>
}

export default HeadlineNews
