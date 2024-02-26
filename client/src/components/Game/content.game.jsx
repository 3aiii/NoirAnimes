import React, { useEffect, useState } from 'react'
import Card from '../Main/card'
import Cards from '../cards/cards'
import { getPosts } from '../../utils/util.api'

const ContentGame = () => {
 

  return (
    <div>
        <h1 className='text-3xl border-b-2 my-4 border-[#8BBCCC]'>All Game news</h1>
        <div className='flex flex-wrap gap-[26.5px]'>
          <Cards
            category= 'Game'
          />
        </div>
    </div>
  )
}

export default ContentGame