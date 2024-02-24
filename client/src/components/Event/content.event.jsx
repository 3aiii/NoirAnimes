import React from 'react'
import CardHori from '../Main/card.horizontal'
import Cardhos from '../cards/cardhos'

const ContentEvent = () => {
  return (
    <div>
      <h1 className='text-3xl border-b-2 my-4 border-[#8BBCCC]'>All Event news</h1>
      <Cardhos 
        category = 'Event'
      />
    </div>
  )
}

export default ContentEvent