import React from 'react'
import Cardc from '../cards/Cardc'

const Properties = () => {
  return (
    <div className="py-16 lg:py-20 bg-third">
      <div>
        <h1 className='text-yellow-600 text-center text-2xl'>PROPERTIES</h1>
      </div>
      <div className="flex flex-wrap gap-10 lg:gap-20 justify-center py-5">
        <Cardc />
        <Cardc />
        <Cardc />
      </div>
    </div>
  )
}

export default Properties
