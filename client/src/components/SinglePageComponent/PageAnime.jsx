import React from 'react'
import LeftContainer from './LeftContainer'
import RightInfo from './RightContainer.info'

const PageAnime = () => {
  return (
    <div className='my-[1rem]'>
      <h1 className='text-5xl border-b-2 border-black mb-4 p-2'>Mashle: Shinkakusha Kouho Senbatsu Shiken-hen</h1>
      <div className='flex md:flex-row flex-col gap-4'>
        <div className='lg:flex-auto lg:w-[20%] w-full'>
          <LeftContainer />
        </div>
        <div className='lg:flex-auto lg:w-[80%] w-full '>
          <RightInfo />
        </div>
      </div>  
    </div>
  )
}

export default PageAnime