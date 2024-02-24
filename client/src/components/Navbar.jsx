import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { navbar_list } from '../utils/util.data';
import { Link } from "react-router-dom";
import { getUser } from '../utils/util.api';
import axios from 'axios'
import ShowProFile from './NavbarComponent/ShowProFile';

const Navbar = () => {
    const [Loading,setLoading] = useState(true)
    const default_navbar = `text-white md:text-3xl text-lg`
    const [user,setUser] = useState([])

    useEffect(()=>{
        const fetch_User = async () =>{
        const user = await axios.get(getUser)
        setUser(user.data)
        setLoading(false)
    }
        fetch_User()
    },[])

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
                    <ShowProFile
                        user = { user }
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar