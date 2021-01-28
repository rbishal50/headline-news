import { FC } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'

import { IProps } from './interface'
import './style.scss'

export const Loader: FC<IProps> = ({ variant = 'danger' }) => (
  <div className='loader'>
    <Spinner animation='grow' variant={variant} />
  </div>
)

Loader.propTypes = {
  variant: PropTypes.string,
}

export default Loader
