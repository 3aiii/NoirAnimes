import React from 'react'
import CardHori from '../Main/card.horizontal'

const ContentEvent = () => {
  return (
    <div>
        <h1 className='text-3xl border-b-2 my-4 border-[#8BBCCC]'>All Event news</h1>
        <div className='flex flex-col gap-4'>
          <CardHori />
          <CardHori />
          <CardHori />
        </div>
    </div>
  )
}

export default ContentEvent