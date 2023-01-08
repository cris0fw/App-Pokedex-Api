import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import CardPokemon from '../components/CardPokemon'
import PokemonContext from '../context/PokemonContext'

const SearchPage = () => {
const location = useLocation()

const {globalPokemons} = useContext(PokemonContext)

const filteredPokemon = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))

  return (
    <div className='contenedor-search'>
      <p className='count'>Se encontraron {filteredPokemon.length} resultados</p>

      <div className='grid'>
          {
            filteredPokemon.map((pokemon) => {
              return <CardPokemon key={pokemon.id} pokemon={pokemon} />
            })
          }
      </div>
    </div>
  )
}

export default SearchPage