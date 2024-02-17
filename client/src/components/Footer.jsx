import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { navbar_list } from '../utils/util.data';
import { Link } from "react-router-dom";

const Footer = () => {
  const default_footer = `text-white md:text-2xl text-md hover:bg-white hover:text-black hover:scale-75 px-2 duration-150`

  return (
    <div className='flex flex-col justify-center items-center bg-black py-4'>
      <div className='flex items-center text-white py-6 px-10 justify-between border-b-2 border-white gap-10'>
        <p className=' tracking-wider md:text-xl text-md'>Follows Me</p> 
        <div className='flex gap-4'>
          <FaFacebook className='text-white text-[24px] cursor-pointer'/>
          <FaTwitterSquare className='text-white text-[24px] cursor-pointer'/>
          <IoLogoInstagram className='text-white text-[24px] cursor-pointer'/>
        </div>
      </div>
      <div>
        <ul className='flex md:gap-[30px] gap-2 my-6'>
          <li className={`${default_footer}`}>
            <Link 
              to={'/'}>Home</Link>
          </li>
          {
            navbar_list.map((data)=>(
                <li 
                    className={ `${default_footer} cursor-pointer` }
                    key={data.id}
                >
                  <Link 
                    to={`/${data.name}`}>
                      { data.name }
                  </Link>
                </li>
            ))
          }
        </ul>
      </div>
      <div className='md:flex text-center'>
        <p className='text-white tracking-widest md:text-lg text-sm'>All material copyright © NoirAnime News Create by Sirapat wongphatsawek @2024</p>
      </div>
    </div>
  )
}

export default Footer