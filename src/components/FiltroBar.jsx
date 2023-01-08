import React, { useContext } from 'react'
import PokemonContext from '../context/PokemonContext'

const FiltroBar = () => {
const {handleCheckbox} = useContext(PokemonContext)

  return (
    <div className='filtro'>
      <h1 className='filtro__title'>Tipo</h1>

      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='grass'
             id='grass'
             className='checkbox-type'
          />

          <label htmlFor="grass">Planta</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='fire'
             id='fire'
             className='checkbox-type'
          />

          <label htmlFor="fire">Fuego</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='bug'
             id='bug'
             className='checkbox-type'
          />

          <label htmlFor="bug">Bicho</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='fairy'
             id='fairy'
             className='checkbox-type'
          />

          <label htmlFor="fairy">Hada</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='dragon'
             id='dragon'
             className='checkbox-type'
          />

          <label htmlFor="dragon">Dragon</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='ghost'
             id='ghost'
             className='checkbox-type'
          />

          <label htmlFor="ghost">Fantasma</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='ground'
             id='ground'
             className='checkbox-type'
          />

          <label htmlFor="ground">Tierra</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='normal'
             id='normal'
             className='checkbox-type'
          />

          <label htmlFor="normal">Normal</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='psychic'
             id='psychic'
             className='checkbox-type'
          />

          <label htmlFor="psychic">Psiquico</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='steel'
             id='steel'
             className='checkbox-type'
          />

          <label htmlFor="steel">Acero</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='siniestro'
             id='siniestro'
             className='checkbox-type'
          />

          <label htmlFor="siniestro">Siniestro</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='electric'
             id='electric'
             className='checkbox-type'
          />

          <label htmlFor="electric">Electrico</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='fighting'
             id='fighting'
             className='checkbox-type'
          />

          <label htmlFor="fighting">Lucha</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='flying'
             id='flying'
             className='checkbox-type'
          />

          <label htmlFor="flying">Volador</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='ice'
             id='ice'
             className='checkbox-type'
          />

          <label htmlFor="ice">Hielo</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='poison'
             id='poison'
             className='checkbox-type'
          />

          <label htmlFor="poison">Veneno</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='rock'
             id='rock'
             className='checkbox-type'
          />

          <label htmlFor="rock">Roca</label>
      </div>
      <div className='group-type'> 
          <input 
             type="checkbox" 
             onChange={handleCheckbox}
             name='walter'
             id='walter'
             className='checkbox-type'
          />

          <label htmlFor="walter">Agua</label>
      </div>
    </div>
  )
}

export default FiltroBar