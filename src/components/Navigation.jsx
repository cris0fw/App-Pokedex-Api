import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import PokemonContext from '../context/PokemonContext'

const Navigation = () => {
 const {valueSearch, onInputChange, onResetForm} = useContext(PokemonContext)

const navigate = useNavigate()

const inputOnSubmit = (e) => {
  e.preventDefault()
  navigate("/search", {
    state: valueSearch
  })

  onResetForm()
}

  return (
    <header>
      <nav className='nav'>
        <Link to="/">
          <figure className='nav__figure'>
            <img className='nav__logo' src={require("../img/logo.png")} alt="" />
          </figure>
        </Link>

        <form onSubmit={inputOnSubmit} className='form'>
            <input 
              type="text" 
              name='valueSearch'
              placeholder='Pokemon a buscar'
              className='nav__search'
              onChange={onInputChange}
              value={valueSearch}
            />
            <button
              type='submit'
              className='nav__submit'
            >
                Buscar
            </button>
        </form>
        
      </nav>

   {/* CONFIGURACION PARA QUE EL MENU SE QUEDE EN TODAS LAS VENTANAS */}
   <Outlet />
    </header>
  )
}

export default Navigation