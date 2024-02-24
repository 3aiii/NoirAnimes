import React, { useEffect, useState } from 'react'
import CardHori from '../Main/card.horizontal'
import axios from 'axios'
import { getPosts } from '../../utils/util.api'

const Cardhos = ({ category }) => {
  const [posts ,setPosts] = useState([])

  useEffect(()=>{
    const fetch_Post = async () =>{
      const { data } = await axios.get(getPosts)
      setPosts(data)
    }
    fetch_Post()
  },[])

  return (
    <div className='flex flex-col gap-4'>
      {
        posts.map((post)=>(
          <CardHori
            post={post}
            category={category}
            key={post._id}
          />
        ))
      }
    </div>
  )
}

export default Cardhos