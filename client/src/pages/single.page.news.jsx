import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageNews from '../components/SinglePageNewsCompo/PageNews'

const SinglePageNews = () => {
  return (
    <div>
        <Navbar/>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col 2xl:w-[1280px] lg:w-[900px] w-[300px] h-full mb-4'>
              <PageNews />
            </div>
          </div>
        <Footer />  
    </div>
  )
}

export default SinglePageNews