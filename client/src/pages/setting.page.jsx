import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SettingUser = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col w-[1280px] h-full mb-4'>
            setting            
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default SettingUser