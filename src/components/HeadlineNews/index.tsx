import { FC, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { RootState } from '../../redux/rootReducer'
import { fetchHeadlines } from '../../redux/slices/newsSlice'
import ListItems from '../ListItems'
import PrimaryCard from '../PrimaryCard'
import Loader from '../Spinner'

export const HeadlineNews: FC = () => {
  const dispatch = useDispatch()

  const { headlines, isLoading } = useSelector((state: RootState) => {
    return {
      headlines: state.news.headlines,
      isLoading: state.news.isLoading,
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(fetchHeadlines())
  }, [dispatch])

  const handleCardDisplay = (index: number, data: any) => {
    if (index === 0) {
      return (
        <Col md='12'>
          <PrimaryCard
            title={data.title}
            clicked={() => {
              // do sth
            }}
            type='imageToTheRight'
            content={data.description}
            subtitle={data.content}
            imageUrl={data.urlToImage}
          />
        </Col>
      )
    } else {
      return (
        <Col md={index === 1 ? '8' : '4'}>
          <PrimaryCard
            title={data.title}
            clicked={() => {
              // do sth
            }}
            type='normal'
            content={index === 1 ? data.description : ''}
            subtitle={data.content}
            size={index === 1 ? 'lg' : 'sm'}
            imageUrl={data.urlToImage}
          />
          {index > 1 && <ListItems items={headlines.slice(0, 3)} />}
        </Col>
      )
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      <Row>
        {!isLoading && (headlines.slice(0, 3) || []).map((headline: any, index) => handleCardDisplay(index, headline))}
      </Row>
    </>
  )
}

export default HeadlineNews
