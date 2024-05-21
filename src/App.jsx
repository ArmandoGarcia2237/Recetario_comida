import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import './App.css'


function App() {
const [character,setCharacter] = useState([])
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        return response.json()
      }).then((results) => {
        setCharacter(results.categories)
      }).catch((error) => {
        console.log(error)
      })
  },)

  return (
    <>
      <div>
        {character.map((cmd) => (
        <ImageCard key={cmd.idCategory} url={cmd.strCategoryThumb} title={cmd.strCategory} />
      ))}
      </div>
    </>
  )
}

export default App
