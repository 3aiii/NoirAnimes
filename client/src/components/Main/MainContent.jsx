import React from 'react'
import WelcomeComponent from './welcome.app'
import NewsCurren from './newsCurren.app'

const MainContent = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col 2xl:w-[1280px] lg:w-[900px] md:w-[600px] w-[300px] h-full mb-4'>
        <WelcomeComponent />
        <NewsCurren />
      </div>
    </div>
  )
}

export default MainContent