import React from 'react'

const WidgetMotion = ({ height }) => {
  return (
    <div className='w-full h-350px'>
        <div className={`relative overflow-hidden`}>
            <img
                src='https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4V4sqEBhHHXNtX0ub7PnsOTzA7LIgOUQIXdn90rPJps7h1XfB5r.jpg'
                alt='game-img-motion'
                className={`md:w-full w-[100%] h-[${height}] rounded-md object-cover`}
            />
            <div className={`absolute top-0 right-0 w-full h-[${height}] bg-opacity-60 
                backdrop-blur-sm rounded-10 transition duration-200 ease-in-out opacity-0 
                hover:opacity-100 flex flex-col justify-end bottom-0 text-white p-4 
                md:text-lg text-sm rounded-md`}
            >
                <p className='md:text-xl md:leading-7 text-sm md:line-clamp-4 line-clamp-3'>
                    rem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    , when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in    
                </p>        
                <button className='bg-white mt-2 px-2 py-[4px] w-max 
                        text-black rounded-md hover:bg-black hover:text-white duration-150'>
                    READ MORE
                </button>
            </div>
        </div>
    </div>
  )
}

export default WidgetMotion