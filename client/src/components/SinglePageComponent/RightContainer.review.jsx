import React, { useEffect, useState } from 'react'
import ReviewCompo from './Review.component';
import { Link } from "react-router-dom";
import axios from 'axios'
import { getcomments, insertComment } from '../../utils/util.api';
import { useParams } from 'react-router-dom';

const RightReview = () => {
  const AnimeId = useParams()
  const [user,setUser] = useState(true)
  const [dataPost,setDataPost] = useState([])
  const [Comment,setComment] = useState('')

  const handleComment = async() =>{
    // Does't success yet, need to alert to user when input is '' 
    if(Comment === ''){
      return false
    }
    const data = {
      CommentTitle : Comment,
      User_commenter : '65d99c2682801961578d1f74',
      AnimeId : AnimeId?.id
    }
    await axios.post(insertComment,data) 
  }

  useEffect(()=>{
    const comment_post = async () =>{
      const { data } = await axios.get(getcomments) 
      setDataPost(data)
    }
    comment_post()
  },[])

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
              onChange={(e)=>setComment(e.target.value)}
            />
            <button className='w-full bg-black text-white p-2 text-2xl my-2 rounded-md 
                hover:bg-white hover:text-black duration-150'
                onClick={handleComment}>comment</button>
            <div className='flex flex-col gap-4'>
              {
                dataPost.map((comment)=>(
                  <ReviewCompo
                    comments = {comment}
                    key={comment._id}
                  />
                ))
              }
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