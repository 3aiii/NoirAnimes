import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageAnime from '../components/SinglePageComponent/PageAnime'

const SinglePageAnime = () => {
  return (
    <>
      <Navbar />
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col w-[1280px] h-full mb-4'>
              <PageAnime />
            </div>
        </div>
      <Footer />  
    </>
  )
}

export default SinglePageAnime