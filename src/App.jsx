import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'
import Navbar from './components/Navbar'
import ImageCard from './components/ImageCard'

function App () {
  const [character, setCharacter] = useState([])
  const [buscar, setBuscar] = useState('')

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${buscar}`)
      .then((response) => {
        return response.json()
      }).then((data) => {
        setCharacter(data.meals)
      }).catch((error) => {
        console.log(error)
      })
  }, [buscar])

  return (
    <div className='center text-center'>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
        <div className='position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill'>
          <input
            className='item'
            type='text'
            value={buscar}
            onChange={() => setBuscar(event.target.value)}
          />
        </div>
        <div className='shadow row'>
          {character.map((cmd) => (
            <ImageCard key={cmd.idMeal} url={cmd.strMealThumb} title={cmd.strMeal} />
          ))}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
