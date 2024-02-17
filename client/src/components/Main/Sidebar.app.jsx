import React from 'react'
import CardSidebar from './card.sidebar'
import { img_test } from '../../utils/util.data'

const SideBar = () => {
  return (
    <div className='sticky top-0 rounded-md'>
      <h3 className='py-2 px-4 text-2xl  bg-black text-white rounded-tl-md rounded-tr-md'>Recommend news</h3>
      <div className='w-full'>
        {
          img_test.map((data)=>(
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