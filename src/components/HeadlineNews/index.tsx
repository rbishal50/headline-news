import { FC, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { RootState } from '../../redux/rootReducer'
import { fetchHeadlines } from '../../redux/slices/newsSlice'
import ListItems from '../ListItems'
import PrimaryCard from '../PrimaryCard'
import Loader from '../Spinner'
import { IProps } from './interface'

export const HeadlineNews: FC<IProps> = ({ clicked }) => {
  const dispatch = useDispatch()

  const { headlines, isLoading, error } = useSelector((state: RootState) => {
    return {
      headlines: state.news.headlines,
      isLoading: state.news.isLoading,
      error: state.news.error,
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(fetchHeadlines())
  }, [dispatch])

  const handleCardDisplay = (index: number, data: any) => {
    if (index === 0) {
      return (
        <Col md='12' key={data.id}>
          <PrimaryCard
            title={data.title}
            clicked={clicked}
            type='imageToTheRight'
            content={data.content}
            subtitle={data.subtitle}
            imageUrl={data.imageUrl}
          />
        </Col>
      )
    } else {
      return (
        <Col md={index === 1 ? '8' : '4'} key={index}>
          <PrimaryCard
            title={data.id}
            clicked={clicked}
            type='normal'
            content={index === 1 ? data.content : ''}
            subtitle={data.subtitle}
            size={index === 1 ? 'lg' : 'sm'}
            imageUrl={data.imageUrl}
          />
          {index > 1 && <ListItems items={headlines.slice(3, 6)} clicked={clicked} />}
        </Col>
      )
    }
  }

  return (
    <>
      {isLoading && (
        <div data-testid='loader'>
          <Loader />
        </div>
      )}
      {error && <p data-testid='error'>{error}</p>}
      <Row>
        {!isLoading &&
          (headlines.slice(0, 3) || []).map((headline: any, index: number) => handleCardDisplay(index, headline))}
      </Row>
    </>
  )
}

HeadlineNews.propTypes = {
  clicked: PropTypes.func.isRequired,
}

export default HeadlineNews
