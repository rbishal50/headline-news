import { ComponentType, ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../redux/store'

const testWrapper = (Component: any, props = {}): ReactElement => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </BrowserRouter>
  )
}

export default testWrapper
