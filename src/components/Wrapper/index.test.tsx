import { render } from '@testing-library/react'
import { Wrapper } from './index'

describe('<Wrapper />', () => {
  it('renders the children', () => {
    const { getByText } = render(
      <Wrapper>
        <div>test wrapper</div>
      </Wrapper>,
    )
    expect(getByText('test wrapper')).toBeTruthy()
  })
})
