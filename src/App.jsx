import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'

function App () {
  return (
    <div>
      <BrowserRouter>
        <RoutesIndex />
      </BrowserRouter>
    </div>
  )
}

export default App
