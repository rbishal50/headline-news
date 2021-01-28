import { FC } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'

import { IProps } from './interface'

const DEFAULT_IMAGE = 'https://picsum.photos/500/300'

export const PopupModal: FC<IProps> = ({
  isModalShown,
  handleClose,
  title,
  subtitle,
  content,
  imageUrl = DEFAULT_IMAGE,
}) => {
  return (
    <>
      <Modal show={isModalShown} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
          <p className='text-muted'>{subtitle}</p>
        </Modal.Header>
        <Modal.Body>
          <img src={imageUrl} alt='Cover' />
          {content}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

PopupModal.propTypes = {
  isModalShown: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
}

export default PopupModal
