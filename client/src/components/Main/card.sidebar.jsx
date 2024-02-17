import React from 'react'

const CardSidebar = ({ data }) => {
  return (
    <div className='flex gap-2 md:p-4 p-2 w-full'>
      <img
          src={ data.img }
          alt='card-sidebar-img'
          className='object-cover md:w-[70px] w-[50px] md:h-[70px] h-[50px]'
      />
      <div className='flex flex-col'>
          <h3 className=' line-clamp-1 overflow-hidden max-w-[146px]'>{data.name}</h3>
          <p className=' line-clamp-2 overflow-hidden text-[#9D9D9D] md:text-md text-sm'>{data.desc}</p>
      </div>
    </div>
  )
}

export default CardSidebar