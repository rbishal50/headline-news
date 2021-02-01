import { FC } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'

import { IProps } from './interface'

const DEFAULT_IMAGE = 'https://picsum.photos/500/300'

export const PopupModal: FC<IProps> = ({
  isModalShown,
  handleClose,
  title = 'Untitled Modal',
  subtitle = '',
  content = '',
  imageUrl = DEFAULT_IMAGE,
}) => {
  return (
    <>
      <Modal show={isModalShown} onHide={handleClose} size='lg' data-testid='modal'>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body data-testid='modal-body'>
          {subtitle && <p className='text-muted'>{subtitle}</p>}
          <img src={imageUrl} alt='Cover' style={{ width: '100%' }} />
          {content && <div className='mt-2'>{content}</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose} data-testid='close'>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

PopupModal.propTypes = {
  isModalShown: PropTypes.bool.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.node,
  imageUrl: PropTypes.string,
  handleClose: PropTypes.func,
}

export default PopupModal
