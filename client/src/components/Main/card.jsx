import React from 'react'
import { Link } from "react-router-dom";
import { convertTZ } from '../../utils/util.tz';
import { navbar_list } from '../../utils/util.data';


const Card = ({ height,post,category }) => {
    const { date,options } = convertTZ(post?.createdAt)
    const category_post = post?.AnimeCategory
    
    return (
        <>
            {
                category_post?.CategoryTitle == category  ? (
                    <div className='flex flex-col 2xl:w-[300px] lg:w-[280px] h-auto md:my-0 my-4'>
                        <img
                            src={post?.AnimeImg}
                            alt='card-img'
                            className={`object-cover w-[300px] ${height ? `h-[${height}]` : `: 2xl:h-[250px] lg:h-[180px]`} rounded-md`}
                        />
                        <div>
                            <Link to={`/anime/1`} className='2xl:text-2xl lg:text-xl my-2 line-clamp-2 overflow-hidden max-w-[300px]'>{ post?.AnimeName }</Link>
                            <div className='flex justify-between my-2 '>
                                <h6 className='text-lg'>{ date.toLocaleString('en-EN',options) }</h6>
                                <div className='flex gap-2 items-center'>
                                    {
                                        navbar_list.map((data)=>(
                                            <Link 
                                                key={data.id}
                                                className={`2xl:text-md lg:text-sm border-2 px-[3px] 
                                                    rounded-md border-black hover:text-white hover:bg-black
                                                    bg-${category_post?.CategoryTitle == data.name && `black text-white`}
                                                    `}
                                                to={ `/${data.name}` }>{ data.name }</Link>
                                        ))
                                    }
                                </div>
                            </div>
                            <p className=' line-clamp-3 overflow-hidden text-[#9D9D9D] 2xl:text-lg lg:text-md'>
                                { post?.AnimeDesc }
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        {   
                            category == 'All' 
                            ? ( <div className='flex flex-col 2xl:w-[300px] lg:w-[280px] h-auto md:my-0 my-4'>
                                    <img
                                        src={post?.AnimeImg}
                                        alt='card-img'
                                        className={`object-cover w-[300px] ${height ? `h-[${height}]` : `: 2xl:h-[250px] lg:h-[180px]`} rounded-md`}
                                    />
                                    <div>
                                        <Link to={`/anime/1`} className='2xl:text-2xl lg:text-xl my-2 line-clamp-2 overflow-hidden max-w-[300px]'>{ post?.AnimeName }</Link>
                                        <div className='flex justify-between my-2 '>
                                            <h6 className='text-lg'>{ date.toLocaleString('en-EN',options) }</h6>
                                            <div className='flex gap-2 items-center'>
                                                {
                                                    navbar_list.map((data)=>(
                                                        <Link 
                                                            key={data.id}
                                                            className={`2xl:text-md lg:text-sm border-2 px-[3px] 
                                                                rounded-md border-black hover:text-white hover:bg-black
                                                                bg-${category_post?.CategoryTitle == data.name && `black text-white`}
                                                                `}
                                                            to={ `/${data.name}` }>{ data.name }</Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <p className=' line-clamp-3 overflow-hidden text-[#9D9D9D] 2xl:text-lg lg:text-md'>
                                            { post?.AnimeDesc }
                                        </p>
                                    </div>
                                </div>) 
                            : <></> 
                        }
                    </>
                )
            }
        </>
    )
}

export default Card