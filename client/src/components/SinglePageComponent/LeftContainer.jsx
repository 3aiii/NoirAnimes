import React from 'react'
import LeftInfo from './LeftContainer.info'

const LeftContainer = () => {
  return (
    <div>
      <div className='bg-white p-2 rounded-md'>
        <img
          src='https://cdn.myanimelist.net/images/anime/1926/140799.jpg'
          alt='leftContainer-img'
          className='w-[255px] h-[300px] object-cover'
        />
        <button className='w-full text-xl my-2 px-2 py-[5px] bg-black text-white rounded-md hover:bg-white hover:text-black duration-150'>Add to My List</button>
        <div>
          <LeftInfo />
        </div>
      </div>
    </div>
  )
}

export default LeftContainer