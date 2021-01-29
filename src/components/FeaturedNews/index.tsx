import { FC, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { RootState } from '../../redux/rootReducer'
import { fetchFeatured } from '../../redux/slices/newsSlice'
import ListItems from '../ListItems'
import PrimaryCard from '../PrimaryCard'
import { IProps, INews } from './interface'

export const FeaturedNews: FC<IProps> = ({ clicked }) => {
  const [highLightedNews, setHighLightedNews] = useState<INews>()
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

  return (
    <>
      {highLightedNews && (
        <PrimaryCard
          title={highLightedNews.title}
          clicked={clicked}
          subtitle={highLightedNews.subtitle}
          imageUrl={highLightedNews.imageUrl}
          size='sm'
        />
      )}
      <ListItems items={featured} clicked={clicked} />
    </>
  )
}

FeaturedNews.propTypes = {
  clicked: PropTypes.func.isRequired,
}

export default FeaturedNews
