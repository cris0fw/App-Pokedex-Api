import React from 'react'
import { Link } from 'react-router-dom'

const CardPokemon = ({pokemon}) => {
  return (
    <div className='card'>
        <figure className='card__figure'> 
          <img 
            src={pokemon.sprites.front_default} 
            alt="imagen de pokemon" 
            className='card__img'
          />
        </figure>
        <p className='card__id'># {pokemon.id}</p>
        <Link to={`/pokemon/${pokemon.id}`}>
        <h1 className='card__title'>{pokemon.name}</h1>
        </Link>
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
    </div>
  )
}

export default CardPokemon