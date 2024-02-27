import axios  from 'axios'
import React, { useState } from 'react'
import { updateLike } from '../../utils/util.api'
import { FaHeart } from "react-icons/fa6";

const ReviewCompo = ({ comments }) => {
    const [like,setLike] = useState(comments.commentLike)
    const comment = comments?.User_commenter
    const handleLike = async (e) =>{
        e.preventDefault()
        try {
            await axios.put(updateLike,{
                id : comments._id
            })
            setLike(like + 1)
        } catch (error) {
            console.error('Error updating like:', error);
        }
    }

    return (
        <div className='flex gap-4 bg-white  rounded-md p-2'>
            <img
                src={comment.img_user}
                alt='img-user-review'
                className='w-[100px] h-[100px] object-cover'
            />
            <div className='flex flex-col'>
                <h4 className='text-3xl mb-[4px]'>{ comment.FirstName } { comment.LastName }</h4>
                <p className='line-clamp-4 overflow-hidden'>
                   { comments.CommentTitle }
                </p>
                <div className='flex justify-end gap-2 mt-[4px]'>
                    <button className='flex items-center gap-[5px] px-2 text-md py-[4px] bg-black 
                        text-white rounded-md hover:bg-white hover:text-black'
                        onClick={ handleLike }><FaHeart /> : { like }</button>
                    <button className='px-2 text-md py-[4px] bg-black 
                        text-white rounded-md hover:bg-white hover:text-black'>Report</button>
                </div>
            </div>
        </div>
    )
}

export default ReviewCompo