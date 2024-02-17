import React from 'react'

const Label = ({ name }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='h-2 w-full bg-black'></div>
      <h1 className='text-[48px] text-center px-10'>{ name }</h1>
      <div className='h-2 w-full bg-black'></div>
    </div>  
  )
}

export default Label