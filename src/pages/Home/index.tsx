import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import PopupModal from '../../components/PopupModal'
import HeadlineNews from '../../components/HeadlineNews'
import FeaturedNews from '../../components/FeaturedNews'
import { INews } from './interface'

const INITIAL_NEWS_DETAILS = {
  title: '',
  subtitle: '',
  content: '',
  imageUrl: '',
}

const Home = () => {
  const [isModalShown, setIsModalShown] = useState(false)
  const [details, setDetails] = useState<INews>(INITIAL_NEWS_DETAILS)

  return (
    <Row>
      <PopupModal
        isModalShown={isModalShown}
        handleClose={() => setIsModalShown(false)}
        title={details.title || ''}
        subtitle={details.subtitle || ''}
        content={<p>{details.content}</p>}
        imageUrl={details.imageUrl}
      />
      <Col md='9'>
        <HeadlineNews
          clicked={(data: INews) => {
            setIsModalShown(true)
            setDetails(data)
          }}
        />
      </Col>
      <Col md='3'>
        <FeaturedNews
          clicked={(data: INews) => {
            setIsModalShown(true)
            setDetails(data)
          }}
        />
      </Col>
    </Row>
  )
}
export default Home
