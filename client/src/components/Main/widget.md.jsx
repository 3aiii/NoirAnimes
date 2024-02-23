import React from 'react'

const WidgetMD = ({ data }) => {
  return (
    <div className='relative w-full hover:opacity-80 cursor-pointer'>
      <img
        src={data.img}
        alt='img-widget-xl'
        className='object-cover w-full h-full rounded-md'
      />
      <p className='absolute bottom-0 text-white md:p-2 p-[4px] 2xl:text-xl lg:text-sm text-[12px]'>{ data.desc }</p>
    </div>
  )
}

export default WidgetMD