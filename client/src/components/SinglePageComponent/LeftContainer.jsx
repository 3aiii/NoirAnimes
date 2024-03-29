import React from 'react'
import LeftInfo from './LeftContainer.info'

const LeftContainer = ({ singlePost }) => {
  return (
    <div className='md:block flex flex-col bg-white p-2 rounded-md'>
      <img
        src={singlePost.AnimeImg}
        alt='leftContainer-img'
        className='lg:w-[255px] w-full lg:h-[300px] h-full lg:object-cover object-cover'
      />
      <button className='w-full text-xl my-2 px-2 py-[5px] bg-black text-white rounded-md hover:bg-white hover:text-black duration-150'>Add to My List</button>
      <LeftInfo 
        singlePost = {singlePost}
      />
    </div>
  )
}

export default LeftContainer