import { FC } from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'

import { IProps } from './interface'
import './style.scss'

export const ListItems: FC<IProps> = ({ items = [], clicked }) => {
  return items?.length ? (
    <ListGroup variant='flush' className='list-items'>
      {items.map(({ id, title, subtitle, content, imageUrl }) => (
        <ListGroup.Item key={id} onClick={() => clicked && clicked({ id, title, subtitle, content, imageUrl })}>
          <span className='title'>{title}</span> <p className='text-muted mb-0 subtitle'>{subtitle}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  ) : (
    <p data-testid='empty-message'>No data at the moment</p>
  )
}

ListItems.propTypes = {
  items: PropTypes.array,
}

export default ListItems
