import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import PokemonContext from '../context/PokemonContext'

const PokemonPage = () => {
const {getPokemonById} = useContext(PokemonContext)

const [loading, setLoading] = useState(true)
const [pokemon, setPokemon] = useState({})

const {id} = useParams()

const fetchPokemon = async (id) => {
  const data = await getPokemonById(id)
  setPokemon(data)
  setLoading(false)
}
console.log(pokemon)

useEffect(() => {
  fetchPokemon(id)
},[])

  return (
    <div className='pokemon__info'>
        {
          loading ? ( <Loader /> ) : (
            <>
              <div className='info__pokemon'> 
                 <div className='pokemon__info'>
                    <h1 className='poke__id'>#{pokemon.id}</h1>
                 
                     <div className='poke__typesname'>
                        <div className='tipos'>
                          {
                            pokemon.types.map((type) => {
                              return <p 
                                    key={type.type.name} 
                                    className={`tipo ${type.type.name}`}
                                    >{type.type.name}</p>
                            })
                          }
                        </div>
                        <h1 className='poke__title'>{pokemon.name}</h1>
                     </div>
                     <div className='pesoAltura'>
                         <p className='peso'>Peso: {pokemon.weight}</p>

                         <p className='altura'>Altura: {pokemon.height}</p>
                     </div>
                     <div className='estadisticas'>
                          <h1 className='estado'>Estadisticas</h1>

                          <div className='otrasmas'>
                              <p>HP: {pokemon.stats[0].base_stat}</p>
                              <p>Attack: {pokemon.stats[1].base_stat}</p>
                              <p>Defense:{pokemon.stats[2].base_stat} </p>
                              <p>Special-Attack: {pokemon.stats[3].base_stat}</p>
                              <p>Special-Defense:{pokemon.stats[4].base_stat} </p>
                              <p>Speed: {pokemon.stats[5].base_stat}</p>
                          </div>
                     </div>
                 </div> 
                 <div className='pokemon__img'>
                    <img 
                      className='poke__img'
                      src={pokemon.sprites.front_default} 
                      alt={`pokemon ${pokemon.name}`} />
                 </div>
              </div>
            </>
          )
        }
    </div>
  )
}

export default PokemonPage