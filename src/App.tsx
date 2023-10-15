import { Cash } from './components/Cash'
import { Customer } from './components/Customer'

const App: React.FC = () => {
  return (
    <div className="Wrapper">
      <div className="App">
        <Cash />
        <Customer />
      </div>
    </div>
  )
}

export default App
