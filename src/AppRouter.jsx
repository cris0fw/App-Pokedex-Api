import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './page/HomePage'
import PokemonPage from './page/PokemonPage'
import SearchPage from './page/SearchPage'

const AppRouter = () => {

  // CONFIGURANDO LAS RUTAS 
  return <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={ <HomePage /> } />
        <Route path='pokemon/:id' element={ <PokemonPage /> } />
        <Route path='search' element={ <SearchPage /> } />
      </Route>

      <Route path='*' element={ <Navigate to="/" /> } />
  </Routes>
}

export default AppRouter