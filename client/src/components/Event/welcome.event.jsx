import React, { useEffect, useState } from 'react'
import { getPosts } from '../../utils/util.api'
import WidgetMotion from '../Game/widget.motion'
import Card from '../Main/card'
import axios from 'axios'

const WelcomeEvent = () => {
    const [posts ,setPosts] = useState([])
    const limit = 2
  
    useEffect(()=>{
      const fetch_Post = async () =>{
        const data  = await axios.get(`${getPosts}?limit=${limit}&category=65d9b26e1ec05f5be9bd4aa7`)
        setPosts(data.data)
      }
      fetch_Post()
    },[])
    
    return (
        <div className='md:flex block my-4 gap-4'>
            <div className='2xl:flex-auto 2xl:w-[70%] lg:w-[60%] w-[100%] md:mb-0 mb-4'>
                <WidgetMotion
                    height = '400px'
                />
            </div>
            <div className='lg:flex lg:items-center lg:justify-center 2xl:flex-auto 2xl:w-[20%] lg:w-[40%] w-[100%] bg-white p-2 rounded-md'>
                <Card 
                    post={posts?.mobileData}
                    category='All'
                    height = '200px'
                />
            </div>
        </div>
    )
}

export default WelcomeEvent