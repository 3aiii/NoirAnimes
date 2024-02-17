import React from 'react'
import Card from '../Main/card'
import WidgetMotion from '../Game/widget.motion'

const WelcomeEvent = () => {
  return (
    <div className='md:flex block my-4 gap-4'>
        <div className='2xl:flex-auto 2xl:w-[70%] lg:w-[60%] w-[100%] md:mb-0 mb-4'>
            <WidgetMotion
                height = '400px'
            />
        </div>
        <div className='lg:flex lg:items-center lg:justify-center 2xl:flex-auto 2xl:w-[20%] lg:w-[40%] w-[100%] bg-white p-2 rounded-md'>
            <Card 
                height = '200px'
            />
        </div>
    </div>
  )
}

export default WelcomeEvent