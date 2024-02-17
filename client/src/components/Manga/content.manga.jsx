import React from 'react'
import Card from '../Main/card'

const ContentManga = () => {
  return (
    <div>
        <h1 className='text-3xl border-b-2 my-4 border-[#8BBCCC]'>All Manga news</h1>
        <div className='flex flex-wrap gap-[26.5px]'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}

export default ContentManga