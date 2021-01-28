import { Row, Col } from 'react-bootstrap'

import HeadlineNews from '../../components/HeadlineNews'
import FeaturedNews from '../../components/FeaturedNews'

const Home = () => (
  <Row>
    <Col md='9'>
      <HeadlineNews />
    </Col>
    <Col md='3'>
      <FeaturedNews />
    </Col>
  </Row>
)
export default Home
