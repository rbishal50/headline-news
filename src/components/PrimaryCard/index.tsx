import { FC } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

import { IProps } from './interface'
import './style.scss'

const DEFAULT_IMAGE = 'https://picsum.photos/500/300'

export const PrimaryCard: FC<IProps> = ({
  type = 'normal',
  size = 'lg',
  title,
  subtitle,
  content,
  imageUrl = DEFAULT_IMAGE,
  clicked,
}) => (
  <Card
    className={`primary-card mb-4 ${type === 'normal' ? 'flex-column' : 'flex-row-reverse'}`}
    onClick={() => clicked({ title, subtitle, content, imageUrl })}
    data-testid='card'
  >
    <div>
      <Card.Img className='cover' src={imageUrl} alt='Cover' />
    </div>
    <div>
      <Card.Body style={{ maxWidth: '500px' }}>
        <Card.Title className='card-title' style={{ fontSize: size === 'sm' ? '20px' : '30px' }}>
          {title}
        </Card.Title>
        {subtitle && <p className='text-muted subtitle'>{subtitle}</p>}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>
    </div>
  </Card>
)

PrimaryCard.propTypes = {
  type: PropTypes.oneOf(['normal', 'imageToTheRight']),
  size: PropTypes.oneOf(['sm', 'lg']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  clicked: PropTypes.func.isRequired,
}

export default PrimaryCard
