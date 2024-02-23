import React from 'react'
import { FaHeart } from "react-icons/fa";
import ReviewCompo from './Review.component';

const RightReview = () => {
  return (
    <div className='mt-2'>
      <h2 className='lg:text-2xl text-3xl border-b-2 border-black mb-2'>Review</h2>
      <div className='flex flex-col gap-4'>
        <ReviewCompo />
        <ReviewCompo />
        <ReviewCompo />
      </div>
    </div>
  )
}

export default RightReview