import React from 'react'
import SideBar from '../Main/Sidebar.app'
import ReviewCompo from '../SinglePageComponent/Review.component'

const PageNews = () => {
  return (
    <div className='flex lg:flex-row flex-col my-[1rem] gap-4'>
      <div className=' flex-auto lg:w-[80%] w-full'>
        <h1 className='text-5xl border-b-2 border-black mb-4 p-2 '>Mashle: Shinkakusha Kouho Senbatsu Shiken-hen</h1>
        <div className='flex gap-4 bg-white p-2 rounded-md'>
          <div className='flex lg:flex-row flex-col gap-4'>
            <img
              src='https://assets.brandinside.asia/uploads/2016/11/fantastic-beasts-comp.jpg'
              className='lg:w-[250px] w-full lg:h-[300px] h-full object-cover'
            />
            <p>
              The official X (formerly Twitter) account of Reiji Miyajima's Shiunji-ke no Kodomotachi (The Shiunji Family Children) manga announced on Wednesday that the manga is getting a television anime adaptation.
              Miyajima (Kanojo, Okarishimasu) began drawing the romantic comedy manga in Young Animal magazine in February 2022. Hakusensha shipped the second volume in July 2023, and the third volume is scheduled to be released on February 16.
              Yen Press licensed the manga in English in April 2023 and released the first volume in November 2023.
              The love between brother and sister. The love between man and woman. That which is most forbidden is most unyielding. The two sons and five daughters of the Shiunji family shine like brilliant gems, each with intelligence and beauty in equal measure. And with the pedigree of their wealthy father behind them, how could they not be the talk of the town?
              Eldest son Arata has spent his life being tossed around by the whims of his colorful sisters, yet a little teasing won't stop him from valuing his family over anything and anyone else. But when his youngest sister turns fifteen, their father reveals a long-hidden secret of the Shiunji "siblings" and knocks Arata's world off its axis... (Source: Yen Press)
            </p>
          </div>
        </div>
        <h2 className='my-4 text-2xl border-b-2 border-black mb-2'>Review</h2>
        <div className='flex flex-wrap my-2 gap-4'>
          <ReviewCompo/>  
          <ReviewCompo/>  
          <ReviewCompo/>  
        </div>
      </div>
      <div className='flex-auto lg:w-[20%] w-full bg-white'>
        <SideBar/>
      </div>
    </div>
  )
}

export default PageNews