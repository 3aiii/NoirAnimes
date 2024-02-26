import React, { useEffect, useState } from 'react'
import CardSidebar from './card.sidebar'
import axios from 'axios'
import { getRecoms } from '../../utils/util.api'

const SideBar = () => {
  const [recom , setRecom] = useState([])
  useEffect(()=>{
    const fetch_recom = async () =>{
      const { data } =  await axios.get(getRecoms)
      setRecom(data)
    }
    fetch_recom()
  },[])

  return (
    <div className='sticky top-0 rounded-md'>
      <h3 className='py-2 px-4 text-2xl  bg-black text-white rounded-tl-md rounded-tr-md'>Recommend news</h3>
      <div className='w-full'>
        {
          recom.map((data)=>(
            <CardSidebar 
              key={data.id}
              data={ data }
            />
          ))
        }
      </div>
    </div>
  )
}

export default SideBar