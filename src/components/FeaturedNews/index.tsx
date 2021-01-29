import { FC, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { RootState } from '../../redux/rootReducer'
import { fetchFeatured } from '../../redux/slices/newsSlice'
import ListItems from '../ListItems'
import PrimaryCard from '../PrimaryCard'

interface IProps {
  clicked: (data: any) => void
}

export const HeadlineNews: FC<IProps> = ({ clicked }) => {
  const dispatch = useDispatch()

  const { featured } = useSelector((state: RootState) => {
    return {
      featured: state.news.featured,
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(fetchFeatured())
  }, [dispatch])

  return <>{<ListItems items={featured} clicked={clicked} />}</>
}

export default HeadlineNews
