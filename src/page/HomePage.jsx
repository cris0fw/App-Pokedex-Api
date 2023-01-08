import React, { useContext } from 'react'
import FiltroBar from '../components/FiltroBar'
import ListPokemon from '../components/ListPokemon'
import PokemonContext from '../context/PokemonContext'

const HomePage = () => {
const {cargaMasPokemones} = useContext(PokemonContext)

  return <main className='main'>
    <section className='filtro'>
        <FiltroBar />
    </section>

    <section className='listaPoke'>
          <ListPokemon />

        <div className='cargaMas'> 
          <button onClick={cargaMasPokemones} className='carga'>Carga mas</button>
        </div>
    </section>
  </main>
}

export default HomePage