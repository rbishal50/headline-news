import './App.scss'
import PrimaryCard from './components/PrimaryCard'

function App() {
  return (
    <div className='App'>
      <PrimaryCard
        clicked={() => {
          // do sth
        }}
        title='aaa'
        subtitle='bbb'
        content='Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.'
      />
    </div>
  )
}

export default App
