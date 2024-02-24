import React from 'react'
import Card from './card'
import Cards from '../cards/cards'

const News = () => {
  return (
    <div>
      <h1 h1 className='text-3xl border-b-2 my-4 border-[#8BBCCC]'>All NEWS</h1>
      <div className='flex flex-wrap 2xl:gap-[26.5px] lg:gap-[30px] gap-y-4'>
        <Cards
          category='All'
        />
      </div>
    </div>
  )
}

export default News