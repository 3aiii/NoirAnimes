import React from 'react'
import { navbar_list } from '../../utils/util.data'
import { Link } from "react-router-dom";
import { convertTZ } from '../../utils/util.tz';

const CardHori = ({ category , post }) => {
    const category_post = post?.AnimeCategory
    const { date,options } = convertTZ(post?.createdAt)

  return (
    <>
        {
            category_post?.CategoryTitle == category ? (
                <div className='md:flex h-auto gap-4 border-b-2 py-4 border-[#8BBCCC]'>
                    <img
                        src={post?.AnimeImg}
                        alt='card-img'
                        className=' object-cover md:w-[250px] w-[100%] h-[160px] rounded-md'
                    />
                    <div className='md:mt-0 mt-2'>
                        <Link to={`/news/1`} className='text-2xl line-clamp-2 overflow-hidden'>Hello EveryOne today l'm gonna take bath oh my god go wild </Link>
                        <div className='flex justify-between my-2 '>
                            <h6 className='text-lg'>{ date.toLocaleString('en-EN',options) }</h6>
                            <div className='flex gap-2 items-center'>
                                {
                                    navbar_list.map((data)=>(
                                        <Link 
                                            key={data.id}
                                            className={`2xl:text-lg lg:text-sm border-2 px-[3px] rounded-md border-black 
                                                hover:text-white hover:bg-black bg-${category_post?.CategoryTitle == data.name && `black text-white`}`}
                                            to={ `/${data.name}` }>{ data.name }</Link>
                                    ))
                                }
                            </div>
                        </div>
                        <p className=' line-clamp-3 overflow-hidden text-[#9D9D9D] 2xl:text-xl lg:text-md'>
                            { post?.AnimeDesc }
                        </p>
                    </div>
                </div>

            ) : (
                <></>
            )

        }
    </>
  )
}

export default CardHori