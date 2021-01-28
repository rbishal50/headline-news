import { Switch, Route } from 'react-router-dom'

import Wrapper from './components/Wrapper'
import Home from './pages/Home'

function App() {
  return (
    <Wrapper>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Wrapper>
  )
}

export default App
