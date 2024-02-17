import React from 'react'

const ReviewCompo = () => {
  return (
    <div className='flex gap-4 bg-white  rounded-md px-2 py-[4px]'>
        <img
            src='https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg'
            alt='img-user-review'
            className='w-[100px] h-[100px] object-cover'
        />
        <div className='flex flex-col'>
            <h4 className='text-3xl mb-[4px]'>Sirapat</h4>
            <p className='line-clamp-4 overflow-hidden'>
                As a big fan of the Solo Leveling manhwa, I would like to thank the studio A-1 Pictures and its entire team for 
                bringing ''life'' to this work that I love so much. The anime's animation is beautiful, the direction is incredible,
                the narrative is also different from the manhwa (in a good way). The anime's osts are also something worth praising, 
                Sawano masterfully used the soundtracks in the scenes and provided the impact that each one of them should have very 
                well, so much so that I can indisputably say that he left his mark on this work . The story progresses very well
                are also something worth praising, Sawano masterfully used the soundtracks in the scenes and provided the impact that 
                each one of them should have very well, so much so that I can indisputably say that he left his mark on this work . 
                story progresses very well
            </p>
            <div className='flex gap-2 mt-2'>
                <button className='px-2 text-xl py-[4px] bg-black text-white rounded-md hover:bg-white hover:text-black'>Like : 154</button>
                <button className='px-2 text-xl py-[4px] bg-black text-white rounded-md hover:bg-white hover:text-black'>Report</button>
            </div>
        </div>
    </div>
  )
}

export default ReviewCompo