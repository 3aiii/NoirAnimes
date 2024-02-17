import React from 'react'
import Navbar from '../components/Navbar'
import WelcomePeople from '../components/People/welcome.people'
import Footer from '../components/Footer'
import CardHori from '../components/Main/card.horizontal'

const PeoplePage = () => {
  return (
    <>
      <Navbar/>
      <div className='flex justify-center'>
      <div className='flex flex-col 2xl:w-[1280px] lg:w-[900px] w-[300px] h-full mb-4'>
          <WelcomePeople />
          <h1 className='text-3xl border-b-2 my-4 border-[#8BBCCC]'>All People news</h1>
          <div className='flex flex-col gap-4'>
            <CardHori />
            <CardHori />
            <CardHori />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PeoplePage