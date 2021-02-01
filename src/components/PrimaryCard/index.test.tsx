import { render, fireEvent } from '@testing-library/react'
import PrimaryCard from './index'

const mockFunction = jest.fn()

describe('<PrimaryCard />', () => {
  it('renders witout crashing', () => {
    render(<PrimaryCard title='test title' clicked={mockFunction} />)
  })

  it('card is clickable', () => {
    const { getByTestId } = render(<PrimaryCard title='test title' clicked={mockFunction} />)
    fireEvent.click(getByTestId('card'))
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  it('renders props', () => {
    const { getAllByText } = render(
      <PrimaryCard
        title='test title'
        subtitle='test subtitle'
        content='test content'
        size='sm'
        clicked={mockFunction}
      />,
    )
    expect(getAllByText(/test/)).toHaveLength(3)
  })
})
