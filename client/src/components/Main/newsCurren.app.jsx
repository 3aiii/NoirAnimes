import React from 'react'
import SideBar from './Sidebar.app'
import Card from './card'

const NewsCurren = () => {
  return (
    <div>
        <h1 className='text-3xl border-b-2 my-4 border-[#8BBCCC]'>SATURDAY, AUGUST 5</h1>
        <div className='md:flex gap-4'>
            <div className='flex flex-wrap md:flex-auto 2xl:w-[80%] lg:w-[70%] justify-between gap-y-4'>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className='md:flex-auto 2xl:w-[20%] lg:w-[30%] bg-white md:my-0 my-4'>
              <SideBar />
            </div>
        </div>
    </div>
  )
}

export default NewsCurren