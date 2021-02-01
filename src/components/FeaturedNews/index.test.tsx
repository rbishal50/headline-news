import { render } from '@testing-library/react'
import * as reactRedux from 'react-redux'

import testWrapper from '../../hoc/testWrapper'
import FeaturedNews from './index'

const mockFunction = jest.fn()

describe('<FeaturedNews />', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

  beforeEach(() => {
    useSelectorMock.mockClear()
  })

  it('renders items', () => {
    useSelectorMock.mockReturnValue({
      featured: [
        { id: '1', title: 'test title 1' },
        { id: '2', title: 'test title 2', subtitle: 'subtitle 2' },
      ],
    })
    const { container } = render(testWrapper(FeaturedNews, { clicked: mockFunction }))
    expect(container).toMatchSnapshot()
  })
})
