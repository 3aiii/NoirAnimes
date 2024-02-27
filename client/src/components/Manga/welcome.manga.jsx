import WidgetMotion from '../Game/widget.motion'
import Card from '../Main/card'
import SideBar from '../Main/Sidebar.app'
import React, { useEffect, useState } from 'react'
import { getPosts } from '../../utils/util.api'
import axios from 'axios'

const WelcomeManga = () => {
    const [posts ,setPosts] = useState([])
    const limit = 4
  
    useEffect(()=>{
      const fetch_Post = async () =>{
        const data  = await axios.get(`${getPosts}?limit=${limit}&category=65d9b26e1ec05f5be9bd4aa8`)
        setPosts(data.data)
      }
      fetch_Post()
    },[])
    
    return (
            <div className='md:flex block gap-4'>
                <div className='flex flex-col flex-auto 2xl:w-[80%] lg:w-[70%] w-[100%] gap-4'>
                    <div >
                        <WidgetMotion 
                            height = '300px'
                        /> 
                    </div>
                    <div className='md:flex block 2xl:justify-between lg:flex-wrap lg:justify-between lg:gap-y-4'>
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
                <div className='flex-auto 2xl:w-[20%] lg:w-[30%] bg-white'>
                    <SideBar />
                </div>
            </div>  
        )
}

export default WelcomeManga