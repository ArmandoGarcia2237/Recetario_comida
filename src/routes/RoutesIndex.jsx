import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Comida from '../pages/Comida'
import Categories from '../pages/Categories'

const RoutesIndex = () => {
  return (
    <div className='bg-dark text-white text-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Comida' element={<Comida />} />
        <Route path='/Categorias' element={<Categories />} />
      </Routes>
    </div>
  )
}

export default RoutesIndex
