import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from "react-icons/io";

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center h-screen' 
        style={{ background: 'radial-gradient(circle at 24.1% 68.8%, rgba(50, 50, 50, 1) 0%, rgba(0, 0, 0, 1) 99.4%)' 
    }}>
      <div className='flex flex-col bg-[#EDEDED] 2xl:w-[25%] lg:w-[30%] rounded-md p-8'>
        <h1 className='text-[52px] text-center my-4'>Sign In</h1>
        <form className='flex flex-col gap-4'>
          <input
            type='text'
            className='p-2 text-xl placeholder:text-xl rounded-md '
            name='username'
            placeholder='username'
          />
          <input
            type='password'
            className='p-2 text-xl placeholder:text-xl rounded-md '
            name='password'
            placeholder='password'
          />
          <button className='bg-black py-2 text-white text-2xl'>Sign in</button>
        </form>
        <p className='text-xl text-center mt-4'>you doesn't have account ? <Link to={'/register'} className='underline'>Sign Up</Link></p>
        <div className='flex justify-center items-center mt-4'>
          <Link to={'/'} className='flex justify-center items-center 
              gap-2 text-2xl hover:bg-black hover:text-white w-max 
              duration-150 rounded-md px-4 py-[4px]'>
            <p className='text-center'>Back to Main Page</p>
            <IoMdArrowForward/>
          </Link>
        </div>
      </div>
    </div>  
  )
}

export default LoginPage