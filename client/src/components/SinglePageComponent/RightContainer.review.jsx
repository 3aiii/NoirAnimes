import React, { useState } from 'react'
import ReviewCompo from './Review.component';
import { Link } from "react-router-dom";

const RightReview = () => {
  const [user,setUser] = useState(true)

  return (
    <div className='mt-2'>
      <h2 className='lg:text-2xl text-3xl border-b-2 border-black mb-2'>Review</h2>
      {
        user ? (
          <form>
            <textarea
              type='text'
              className=' h-[200px] w-full p-4 text-xl'
              placeholder='write your comment'
            />
            <button className='w-full bg-black text-white p-2 text-2xl my-2 rounded-md 
                hover:bg-white hover:text-black duration-150'>comment</button>
            <div className='flex flex-col gap-4'>
              <ReviewCompo />
              <ReviewCompo />
              <ReviewCompo />
            </div>
          </form>
        ) : (
          <div className='flex flex-col justify-center text-center'>
            <p className='text-[4rem]'>You need to Login First !</p>
            <Link to={`/login`} className='bg-black text-white text-4xl
              py-2 rounded-md hover:bg-white hover:text-black duration-150'>Sign In right now!</Link>
          </div>
        )
      }
    </div>
  )
}

export default RightReview