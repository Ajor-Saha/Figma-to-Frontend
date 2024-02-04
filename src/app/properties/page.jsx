import Cardd from '@/components/cards/Cardd'
import React from 'react'

const page = () => {
  return (
    <div className='bg-primary py-32 px-10'>
      <div className='flex flex-row gap-2 ml-20 py-2'>
        <img src="/polygon-1.svg" alt="pic" />
        <h1 className="text-yellow-600 text-xl">PROPERTIES</h1>
      </div>
      
      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center gap-10 lg:gap-20  px-20'>
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
      </div>
      
    </div>
  )
}

export default page
