import React from 'react'
import SideBar from '../Main/Sidebar.app'
import Card from '../Main/card'
import WidgetMotion from './widget.motion'

const WelcomeGame = () => {
  return (
    <div className='block md:flex gap-4'>
        <div className='flex-auto 2xl:w-[20%] lg:w-[30%] bg-white md:mb-0 mb-4'>
            <SideBar />
        </div>
        <div className='flex flex-col flex-auto 2xl:w-[80%] lg:w-[70%] gap-4'>
            <div >
                <WidgetMotion 
                    height = '300px'
                /> 
            </div>
            <div className='md:flex 2xl:justify-between lg:flex-wrap lg:gap-y-4 lg:justify-between block'>
                <Card/>
                <Card/>
                <Card/>
                <div className='lg:show 2xl:hidden'>
                    <Card/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomeGame