import { render, screen } from '@testing-library/react'
import * as reactRedux from 'react-redux'

import testWrapper from '../../hoc/testWrapper'
import HeadlineNews from './index'

const mockFunction = jest.fn()

describe('<HeadlineNews />', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

  beforeEach(() => {
    useSelectorMock.mockClear()
  })

  it('renders items', () => {
    useSelectorMock.mockReturnValue({
      headlines: [
        { id: '11', title: 'test title 1' },
        { id: '22', title: 'test title 2', subtitle: 'subtitle 2' },
      ],
    })
    const { container } = render(testWrapper(HeadlineNews, { clicked: mockFunction }))
    expect(container).toMatchSnapshot()
  })

  it('renders a spinner when loading', () => {
    useSelectorMock.mockReturnValue({
      isLoading: true,
    })
    render(testWrapper(HeadlineNews, { clicked: mockFunction }))
    screen.getByTestId('loader')
  })

  it('renders error message if present', () => {
    useSelectorMock.mockReturnValue({
      headlines: [],
      error: 'Error',
    })
    render(testWrapper(HeadlineNews, { clicked: mockFunction }))
    screen.getByTestId('error')
  })
})
