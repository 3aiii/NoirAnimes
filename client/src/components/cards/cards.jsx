import React, { useEffect, useState } from 'react'
import Card from '../Main/card'
import axios  from 'axios'
import { getPosts } from '../../utils/util.api'

const Cards = ({ category }) => {
  const [posts ,setPosts] = useState([])

  useEffect(()=>{
    const fetch_Post = async () =>{
      const { data } = await axios.get(getPosts)
      setPosts(data)
    }
    fetch_Post()
  },[])

  return (
    <div className='flex flex-wrap gap-[26.5px]'>
      {
        posts.map((post)=>(
          <Card 
            post = {post}
            key={post._id}
            category = {category}
          />
        )) 
      }
    </div>
  )
}

export default Cards