import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars,FaXmark } from "react-icons/fa6";
import { menu_list, navbar_list } from '../../utils/util.data';

const ShowProFile = ({ user }) => {
    const [ShowProfile,setShowProfile] = useState(false)

    return (
        <>
            {
                user ? (
                    <div className='relative text-white flex gap-2 items-center'>
                        <div className='lg:block hidden'>
                            <img
                                src={user.img_user}
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
                                        <h4 className='2xl:text-2xl lg:text-xl text-lg '>{user.FirstName} {user.LastName}</h4>
                                        <p >Role : {user.Role}</p>
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
                            )}
                        </div>
                ) : (
                    <div className = 'border-2 px-4 py-[2px] rounded-md hover:bg-white group duration-300'>
                        <Link 
                            className = {`text-white text-2xl group-hover:text-black`}
                            to={`/login`}>Sign in</Link>
                    </div>
                )
            }  
        </>
    )
}

export default ShowProFile