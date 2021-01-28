import { FC } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'

export const Wrapper: FC = ({ children }) => {
  return <Container>{children}</Container>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
