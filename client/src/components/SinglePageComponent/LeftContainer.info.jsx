import React from 'react'

const LeftInfo = ({ singlePost }) => {
  const detail = singlePost?.Detail?.[0]
  return (
    <div>
      {
        detail && (
          <>
            <div className='flex flex-col'>
              <h5 className='text-2xl border-b-2 tracking-wider border-black mb-2 '>Information</h5>
              {/* write new wtih loop if we have database */}
              <p><b>Type:</b> {detail.AnimeType}</p>
              <p><b>Episodes:</b> {detail.AnimeEpisode}</p>
              <p><b>Status:</b> {detail.AnimeStatus}</p>
              <p><b>Aired:</b> {detail.AnimeAired}</p>
              <p><b>Premiered:</b> {detail.AnimePremiered}</p>
              <p><b>Producers:</b> {detail.AnimeProducers}</p>
              <p><b>Licensors:</b> {detail.AnimeLicensors}</p>
              <p><b>Studios:</b> {detail.AnimeStudios}</p>
              <p><b>Source:</b> {detail.AnimeSource}</p>
              <p><b>Genres:</b> {detail.AnimeGenres}</p>
              <p><b>Themes:</b> {detail.AnimeThemes}</p>
              <p><b>Demographic:</b> {detail.AnimeDemographic}</p>
              <p><b>Duration:</b> {detail.AnimeDuration}</p>
              <p><b>Rating:</b> {detail.AnimeRating}</p>
            </div>
            <div className='flex flex-col'>
              <h5 className='text-2xl border-b-2 border-black mb-2 tracking-wider '>Statistics</h5>
              <p><b>Score:</b> 8.461 (scored by 83,705 users) Ranked: #1482</p>
              <p><b>Popularity:</b> #503</p>
              <p><b>Members:</b> 440,804</p>
              <p><b>Favorites:</b> 7,613</p>
            </div>
          </>
        ) 
      } 
    </div>
  )
}

export default LeftInfo