import { FC } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'

import { IProps } from './interface'

export const Loader: FC<IProps> = ({ variant = 'info' }) => <Spinner animation='grow' variant={variant} />

Loader.propTypes = {
  variant: PropTypes.string,
}

export default Loader
