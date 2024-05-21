import { useState, useEffect } from 'react'
import ImageCard from '../components/ImageCard'

const Categories = () => {
  const [character, setCharacter] = useState([])
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        return response.json()
      }).then((results) => {
        setCharacter(results.categories)
      }).catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <div className='display-3 center bg-white text-dark p-6'>Categorias de comida</div>
      <div className='shadow row'>
        {character.map((cmd) => (
          <ImageCard key={cmd.idCategory} url={cmd.strCategoryThumb} title={cmd.strCategory} />
        ))}
      </div>
    </>
  )
}

export default Categories
