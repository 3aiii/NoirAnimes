import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Label from '../components/Label'
import WelcomeManga from '../components/Manga/welcome.manga'
import ContentManga from '../components/Manga/content.manga'

const MangaPage = () => {
  return (
    <>
      <Navbar/>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col 2xl:w-[1280px] lg:w-[900px] w-[300px] h-full mb-4'>
          <Label
            name = 'Manga News'
          />
          <div className='flex flex-col gap-4'>
            <WelcomeManga />
            <ContentManga />
          </div>
        </div>
      </div>
      <Footer />
    </> 
  )
}

export default MangaPage