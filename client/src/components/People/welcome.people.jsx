import React from 'react'

const WelcomePeople = () => {
  return (
    <div className='md:flex block my-6 gap-4'>
        <div className='flex-auto md:w-[50%] w-[100%] md:mb-0 mb-4'>
            <img
                src='https://i0.wp.com/omnigeekempire.com/wp-content/uploads/2021/04/ZSzswjMb-1.jpg?resize=1140%2C641&ssl=1'
                alt='welcome-people-img'
                className='w-full h-[250px] object-cover rounded-md'
            />
        </div>
        <div className='bg-white flex-auto md:w-[50%] w-[100%] rounded-md'>
            <h1 className='bg-black md:text-4xl text-2xl text-white p-2 rounded-tr-md rounded-tl-md'>PEOPLE NEWS</h1>
            <p className='p-4 text-lg'>
                rem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
            </p>
        </div>
    </div>
  )
}

export default WelcomePeople