import React from 'react'
import Navbar from '../components/Navbar'
import WelcomeEvent from '../components/Event/welcome.event'
import ContentEvent from '../components/Event/content.event'
import Footer from '../components/Footer'

const EventPage = () => {
  return (
    <>
      <Navbar/>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col 2xl:w-[1280px] lg:w-[900px] w-[300px] h-full mb-4'>
          <WelcomeEvent />
          <ContentEvent />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EventPage