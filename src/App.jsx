import './App.css'
import Counter from './components/counter/counter';

function App() {

  return (
    <>
      <Counter />
      <hr />
      <Counter step={5} />
    </>
  )
}

export default App
