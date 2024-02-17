import React from 'react'
import SideBar from '../Main/Sidebar.app'
import WidgetMotion from '../Game/widget.motion'
import Card from '../Main/card'

const WelcomeManga = () => {
  return (
        <div className='md:flex block gap-4'>
            <div className='flex flex-col flex-auto 2xl:w-[80%] lg:w-[70%] w-[100%] gap-4'>
                <div >
                    <WidgetMotion 
                        height = '300px'
                    /> 
                </div>
                <div className='md:flex block 2xl:justify-between lg:flex-wrap lg:justify-between lg:gap-y-4'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <div className='lg:show 2xl:hidden'>
                        <Card/>
                    </div>
                </div>
            </div>
            <div className='flex-auto 2xl:w-[20%] lg:w-[30%] bg-white'>
                <SideBar />
            </div>
        </div>  
    )
}

export default WelcomeManga