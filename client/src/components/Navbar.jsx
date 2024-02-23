import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { menu_list, navbar_list } from '../utils/util.data';
import { FaBars,FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [ShowProfile,setShowProfile] = useState(false)
    const default_navbar = `text-white md:text-3xl text-lg`
    const user = false

    return (
        <div className='sticky top-0 bg-black py-2 z-30 w-full'>
            <div className='flex justify-between gap-10 items-center lg:py-4 md:py-2 lg:px-24 md:px-2 py-[8px] px-[16px]'>
                <Link 
                    to={'/'} 
                    className={ `${default_navbar} 
                        tracking-widest md:text-[44px] text-[32px] cursor-pointer
                        hover:scale-75 duration-150`}>NoirAnime News</Link>
                <ul className='lg:flex gap-[30px] hidden'>
                    {
                        navbar_list.map((data)=>(
                            <li 
                                className={ `${default_navbar} relative cursor-pointer` }
                                key={ data.id }
                            >
                                <Link 
                                    to={`/${data.name}`}
                                    className="relative group">
                                        { data.name }
                                        <span className="absolute bg-white h-1 w-0 left-0 bottom-[-10px] transition-all duration-200 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
              
                <div className='flex gap-6'>
                    <div className='bg-white lg:flex rounded-md hidden '>
                        <input
                            type='text'
                            name='search'
                            className='px-2 rounded-md w-56 text-lg placeholder:text-lg'
                            placeholder='Search Some Anime.....'
                        />
                        <button className='rounded-md'>
                            <IoIosSearch  className=' text-black text-[26px] mr-2'/>
                        </button>                    
                    </div>                    
                    {
                        user ? (
                            <div className='relative text-white flex gap-2 items-center'>
                                <div className='lg:block hidden'>
                                    <img
                                        src='https://play-lh.googleusercontent.com/proxy/g5IsG77ph54Ra-5Ylbd17uPZxc79Bhz0N25OADkLIsIbjiQv5TcDHLR9t4Bbt1nfZPYaEGhus88xQVY0h4quXeUzfA4ngOtagrmslWx_1yVdQegofpZN3KUd=s3840-w3840-h2160'
                                        alt='avatar-user-img'
                                        className=' object-cover xl:w-[40px] w-full xl:h-[40px] h-[39px] rounded-md cursor-pointer hover:scale-125 duration-150 '
                                        onClick={()=> setShowProfile(!ShowProfile)}
                                    />
                                </div>
                                <div className='lg:hidden block '>
                                    {
                                        ShowProfile 
                                            ? <FaXmark 
                                                onClick={()=> setShowProfile(!ShowProfile)}
                                                className='text-white text-3xl'/>
                                            : <FaBars 
                                                className='text-white text-3xl'
                                                onClick={()=>setShowProfile(!ShowProfile)}/>
                                    }
                                </div>
                                {
                                    ShowProfile && (
                                        <div className='shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]
                                                bg-white text-black md:w-[250px] absolute md:top-14 top-12 right-0 md:rounded-md z-30 duration-150 '>
                                            <div className='2xl:px-6 lg:px-4  py-2boder-white border-b-2 px-2'>
                                                <h4 className='2xl:text-2xl lg:text-xl text-lg '>Sirapat Wongphatsawek</h4>
                                                <p >Role : User</p>
                                            </div>
                                            <ul className='flex flex-col '>
                                                {
                                                    navbar_list.map((data)=>(
                                                        <li 
                                                            className={ `relative cursor-pointer lg:hidden show text-md py-[4px]` }
                                                            key={ data.id }
                                                        >
                                                            <Link 
                                                                to={`/${data.name}`}
                                                                className="relative group px-2 text-black">
                                                                    { data.name }
                                                                    <span className="absolute bg-white h-1 w-0 left-0 bottom-[-10px] transition-all duration-200 group-hover:w-full"></span>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                                {
                                                    menu_list.map((data)=>(
                                                        <Link to={`${data.url}/1`} key={data.id} className='2xl:text-2xl lg:text-xl hover:bg-[#EDEDED]
                                                             2xl:px-6 lg:px-4 px-2 py-[4px] hover:text-black cursor-pointer' >
                                                            { data.name }                                                    
                                                        </Link>
                                                    ))
                                                }
                                                <li className=' bg-red-500 text-white md:rounded-br-md md:rounded-bl-md 2xl:text-2xl lg:text-xl 2xl:px-6 lg:px-4 px-2 py-[4px] cursor-pointer'>
                                                    Logout
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>
                        ) : (
                            <div className = 'border-2 px-4 py-[2px] rounded-md hover:bg-white group duration-300'>
                                <Link 
                                    className = {`text-white text-2xl group-hover:text-black`}
                                    to={`/login`}>Sign in</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar