import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Label from '../components/Label'
import WelcomeGame from '../components/Game/welcome.game'
import ContentGame from '../components/Game/content.game'

const GamePage = () => {
  return (
    <>
      <Navbar/>
      <div className='flex justify-center'>
        <div className='flex flex-col 2xl:w-[1280px] lg:w-[900px] w-[300px] h-full mb-4'>
          <Label name = 'Game News'/>
          <div className='flex flex-col gap-4'>
            <WelcomeGame />
            <ContentGame />
          </div>
        </div>
      </div>
      <Footer />
    </>    
  )
}

export default GamePage