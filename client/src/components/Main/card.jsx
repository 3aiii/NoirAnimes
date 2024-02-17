import React from 'react'
import { navbar_list } from '../../utils/util.data'
import { Link } from "react-router-dom";

const Card = ({ height }) => {
  return (
    <div className='flex flex-col 2xl:w-[300px] lg:w-[280px] h-auto md:my-0 my-4'>
        <img
            src='https://sls-prod.api-onscene.com/partner_files/trueidintrend/364251/cover_image/pk_1600_800_px_5.png'
            alt='card-img'
            className={`object-cover w-[300px] ${height ? `h-[${height}]` : `: 2xl:h-[250px] lg:h-[180px]`} rounded-md`}
        />
        <div>
            <Link to={`/anime/1`} className='2xl:text-2xl lg:text-xl my-2 line-clamp-2 overflow-hidden max-w-[300px]'>Hello EveryOne today l'm gonna take bath oh my god go wild </Link>
            <div className='flex justify-between my-2 '>
                <h6 className='text-lg'>AUG 5.11.44</h6>
                <div className='flex gap-2 items-center'>
                    {
                        navbar_list.map((data)=>(
                            <Link 
                                key={data.id}
                                className='2xl:text-md lg:text-sm border-2 px-[3px] rounded-md border-black hover:text-white hover:bg-black'
                                to={ `/${data.name}` }>{ data.name }</Link>
                        ))
                    }
                </div>
            </div>
            <p className=' line-clamp-3 overflow-hidden text-[#9D9D9D] 2xl:text-lg lg:text-md'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </div>
  )
}

export default Card