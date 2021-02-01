import { render, fireEvent } from '@testing-library/react'
import { PopupModal } from './index'

describe('<ListItems', () => {
  it('is not available if isShwon is false', () => {
    const { queryByTestId } = render(<PopupModal isModalShown={false} />)
    expect(queryByTestId('modal')).not.toBeInTheDocument()
  })

  it('renders props as passed in', () => {
    const mockFunction = jest.fn()
    const { getAllByText } = render(
      <PopupModal
        isModalShown={true}
        title='test title'
        subtitle='test subtitle'
        content='test content'
        handleClose={mockFunction}
      />,
    )
    expect(getAllByText(/test/)).toHaveLength(3)
  })

  it('calls the close function once on button click', () => {
    const mockFunction = jest.fn()
    const { getByTestId } = render(<PopupModal isModalShown={true} handleClose={mockFunction} />)
    fireEvent.click(getByTestId('close'))
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })
})
