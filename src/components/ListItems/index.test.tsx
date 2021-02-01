import { render, screen } from '@testing-library/react'
import ListItems from './index'

const mockFunction = jest.fn()
const items = [
  { id: '1', title: 'test title', subtitle: 'test subtitle', imageUrl: 'test url', content: 'test content' },
]

describe('<ListItems', () => {
  it('renders witout crashing', () => {
    render(<ListItems />)
  })

  it('displays list items', () => {
    const display = render(<ListItems clicked={mockFunction} items={items} />)
    items.forEach((item) => {
      display.getAllByText(item.title)
    })
  })

  it('displays no data message when items is empty', () => {
    render(<ListItems clicked={mockFunction} items={[]} />)
    screen.getByTestId('empty-message')
  })

  it('displays no data message when no props is passed', () => {
    render(<ListItems />)
    screen.getByTestId('empty-message')
  })
})
