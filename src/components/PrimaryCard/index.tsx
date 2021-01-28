import { FC } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

import { IProps } from './interface'
import './style.scss'

const DEFAULT_IMAGE = 'https://picsum.photos/500/300'

export const PrimaryCard: FC<IProps> = ({
  type = 'normal',
  title,
  subtitle,
  content,
  imageUrl = DEFAULT_IMAGE,
  clicked,
}) => (
  <Card className={`primary-card ${type === 'normal' ? 'column' : 'row-reverse'}`} onClick={clicked}>
    <div>
      <Card.Img src={imageUrl} alt='Cover image' />
    </div>
    <div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {subtitle && <p className='text-muted'>{subtitle}</p>}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>
    </div>
  </Card>
)

PrimaryCard.propTypes = {
  type: PropTypes.oneOf(['normal', 'imageToTheRight']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  clicked: PropTypes.func.isRequired,
}

export default PrimaryCard
