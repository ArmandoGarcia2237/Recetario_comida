import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'
import Navbar from './components/Navbar'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </div>
  )
}

export default App
