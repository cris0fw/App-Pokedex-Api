import React from 'react'
import { DotSpinner } from '@uiball/loaders'

const Loader = () => {
  return (
    <div className='loader__center'>
      <DotSpinner 
      size={40}
      speed={0.9} 
      color="black" 
      />
    </div>
  )
}

export default Loader