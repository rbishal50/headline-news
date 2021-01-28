import { FC } from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'

import { IProps } from './interface'
import './style.scss'

export const ListItems: FC<IProps> = ({ items = [] }) => {
  return (
    <ListGroup variant='flush' className='list-items'>
      {items.map(({ id, title, subtitle }) => (
        <ListGroup.Item key={id}>
          {title} <p className='text-muted mb-0'>{subtitle}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

ListItems.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ListItems
