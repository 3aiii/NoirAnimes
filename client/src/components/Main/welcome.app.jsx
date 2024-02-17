import React from 'react'
import WidgetXL from './widget.lg'
import WidgetMD from './widget.md'
import { img_test } from '../../utils/util.data'

const WelcomeComponent = () => {
  
  return (
    <div className='md:my-6 my-[2px]'>
      <div className='border-b-2 my-4 border-[#8BBCCC]'>
        <h1 className='md:text-[36px] tracking-wider'>- Welcome to <span className='text-[#8BBCCC]'>NoirAnime</span> news -</h1>
      </div>
      <div className='md:flex w-full gap-4 2xl:h-[400px] lg:h-[300px]'>
        <div className='flex-auto md:w-[50%] w-[100%] my-4'>
          <WidgetXL />
        </div>
        <div className='flex flex-auto md:w-[50%] w-[100%]'>
          <div className='md:grid md:grid-cols-2 md:gap-4 flex gap-y-4  flex-wrap'>
            {
              img_test.length === 4 &&
                img_test.map((data)=>(
                  <WidgetMD 
                    key={data.id}
                    data={data}
                  />                
                ))                
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeComponent