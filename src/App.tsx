import { Switch, Route } from 'react-router-dom'

import Wrapper from './components/Wrapper'
import Home from './pages/Home'

function App() {
  return (
    <Wrapper>
      <h1 className='mt-2 mb-2'>THE HEADLINERS</h1>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Wrapper>
  )
}

export default App
