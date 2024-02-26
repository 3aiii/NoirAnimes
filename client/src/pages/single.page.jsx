import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageAnime from '../components/SinglePageComponent/PageAnime'
import axios from 'axios'
import { getPost } from '../utils/util.api.js'
import { useParams } from 'react-router-dom';

const SinglePageAnime = () => {
  const [data,setData] = useState([])
  const animeId  = useParams();

  useEffect(()=>{
    const fetch_siglePost = async () =>{
      const { data } = await axios.get(`${getPost}/${animeId.id}`)
      setData(data)
    }
    fetch_siglePost()
  },[])
  
  return (
    <>
      <Navbar />
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col 2xl:w-[1280px] lg:w-[900px] w-[300px] h-full mb-4'>
            <PageAnime
              singlePost= {data}
            />
          </div>
        </div>
      <Footer />  
    </>
  )
}

export default SinglePageAnime