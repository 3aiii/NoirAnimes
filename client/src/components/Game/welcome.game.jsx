import SideBar from '../Main/Sidebar.app'
import Card from '../Main/card'
import WidgetMotion from './widget.motion'
import React, { useEffect, useState } from 'react'
import { getPosts } from '../../utils/util.api'
import axios from 'axios'

const WelcomeGame = () => {
    const [posts ,setPosts] = useState([])
    const limit = 4
  
    useEffect(()=>{
      const fetch_Post = async () =>{
        const data  = await axios.get(`${getPosts}?limit=${limit}&category=65d9b26e1ec05f5be9bd4aa6`)
        setPosts(data.data)
      }
      fetch_Post()
    },[])
    
    return (
        <div className='block md:flex gap-4'>
            <div className='flex-auto 2xl:w-[20%] lg:w-[30%] bg-white md:mb-0 mb-4'>
                <SideBar />
            </div>
            <div className='flex flex-col flex-auto 2xl:w-[80%] lg:w-[70%] gap-4'>
                <div >
                    <WidgetMotion 
                        height = '300px'
                    /> 
                </div>
                <div className='md:flex 2xl:justify-between lg:flex-wrap lg:gap-y-4 lg:justify-between block'>
                    {
                        posts?.normalData?.map((post)=>(
                            <Card 
                                post = {post}
                                key={post._id}
                                category='All'
                            />
                        ))
                    }
                    <div className='md:show 2xl:hidden'>
                        <Card
                            post={ posts?.mobileData }
                            key={posts?.mobileData?._id}
                            category='All'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeGame