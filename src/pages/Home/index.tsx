import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import PopupModal from '../../components/PopupModal'
import HeadlineNews from '../../components/HeadlineNews'
import FeaturedNews from '../../components/FeaturedNews'

const Home = () => {
  const [isModalShown, setIsModalShown] = useState(false)
  const [details, setDetails] = useState<any>({})

  return (
    <Row>
      <PopupModal
        isModalShown={isModalShown}
        handleClose={() => setIsModalShown(false)}
        title={details.title}
        subtitle={details.subtitle}
        content={<p>{details.content}</p>}
        imageUrl={details.imageUrl}
      />
      <Col md='9'>
        <HeadlineNews
          clicked={(data: any) => {
            setIsModalShown(true)
            setDetails(data)
          }}
        />
      </Col>
      <Col md='3'>
        <FeaturedNews
          clicked={(data: any) => {
            setIsModalShown(true)
            setDetails(data)
          }}
        />
      </Col>
    </Row>
  )
}
export default Home
