import React from 'react'

const WidgetXL = () => {
  return (
    <div className='relative h-full hover:opacity-80 cursor-pointer'>
      <img
        src='https://assets.beartai.com/uploads/2023/04/FI_%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B8%AD%E0%B8%99%E0%B8%B4%E0%B9%80%E0%B8%A1%E0%B8%B0-Oshi-no-Ko-1.jpg'
        alt='img-widget-xl'
        className='object-cover h-full rounded-md'
      />
      <p className='absolute rounded-br-md rounded-bl-md bottom-0 text-white lg:p-4 md:p-2 p-[4px] lg:text-lg 2xl:text-2xl text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
    </div>
  )
}

export default WidgetXL