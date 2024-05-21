import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' to='/'>Recetario</NavLink>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>

              <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                  Inicio
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/Categorias'>
                  Categorias
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/Comida'>
                  Comida
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
