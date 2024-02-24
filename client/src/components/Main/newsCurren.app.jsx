import React, { useEffect, useState } from 'react'
import SideBar from './Sidebar.app'
import Card from './card'
import News from './news.app'
import axios  from 'axios'
import { getPosts } from '../../utils/util.api'

const NewsCurren = () => {
  const [posts ,setPosts] = useState([])
  const limit = 6

  useEffect(()=>{
    const fetch_Post = async () =>{
      const { data } = await axios.get(`${getPosts}?limit=${limit}`)
      setPosts(data)
    }
    fetch_Post()
  },[])
  
  return (
    <div>
      <h1 className='text-3xl border-b-2 my-4 border-[#8BBCCC]'>SATURDAY, AUGUST 5</h1>
      <div className='md:flex gap-4'>
        <div className='flex flex-wrap md:flex-auto 2xl:w-[80%] lg:w-[70%] justify-between gap-y-4'>
          {
            posts.map((post)=>(
              <Card 
                post = {post}
                key={post._id}
                category='All'
              />
            ))
          }
        </div>
        <div className='md:flex-auto 2xl:w-[20%] lg:w-[30%] bg-white md:my-0 my-4'>
          <SideBar /> 
        </div>
      </div>
      <News />
    </div>
  )
}

export default NewsCurren