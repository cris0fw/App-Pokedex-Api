import React, { useContext } from 'react'
import PokemonContext from '../context/PokemonContext'
import CardPokemon from './CardPokemon'
import Loader from './Loader'

const ListPokemon = () => {
const {allPokemons, loader, filteredPokemon} = useContext(PokemonContext)
  return (
    <div className='grid'>
       {
         loader ? (
            <Loader />
         ) : (
          filteredPokemon.length ? (
            <>
              {
                filteredPokemon.map((pokemon) => {
                  return <CardPokemon 
                              key={pokemon.id}
                              pokemon={pokemon}
                          />
               })
              }
            </>
          ) : (
            <>
              {
                allPokemons.map((pokemon) => {
                  return <CardPokemon 
                              key={pokemon.id}
                              pokemon={pokemon}
                          />
               })
              }
            </>
          )
         )
       }
    </div>
  )
}

export default ListPokemon