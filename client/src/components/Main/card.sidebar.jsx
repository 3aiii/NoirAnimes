import React from 'react'
import { Link } from "react-router-dom";

const CardSidebar = ({ data }) => {
  return (
    <div className='flex flex-col w-full md:p-[16px] p-2'>
      <Link to={`/anime/${data._id}`} 
          className='flex gap-2 hover:scale-90 duration-150'
      >
        <img
          src={ data.AnimeImg }
          alt='card-sidebar-img'
          className='object-cover md:w-[70px] w-[50px] md:h-[70px] h-[50px]'
        />
        <div className='flex flex-col'>
          <h3 className=' line-clamp-1 overflow-hidden max-w-[146px]'>{data.AnimeName}</h3>
          <p className=' line-clamp-2 overflow-hidden text-[#9D9D9D] lg:text-lg md:text-md text-sm'>{data.AnimeDesc}</p>
        </div>
      </Link>
      <p className='bg-black text-white 
        rounded-md px-2 py-[2px]'>view : <span>{data?.viewCount?.toLocaleString()}</span></p>
    </div>
  )
}

export default CardSidebar