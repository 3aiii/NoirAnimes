import React from 'react'

const LeftInfo = () => {
  return (
    <div className='flex flex-col '>
       <div className='flex flex-col'>
            <h5 className='text-2xl border-b-2 tracking-wider border-black mb-2 '>Information</h5>
            {/* write new wtih loop if we have database */}
            <p><b>Type:</b> TV</p>
            <p><b>Episodes:</b> 12</p>
            <p><b>Status:</b> Currently Airing</p>
            <p><b>Aired:</b> Jan 6, 2024 to Mar 30, 2024</p>
            <p><b>Premiered:</b> Winter 2024</p>
            <p><b>Broadcast:</b> Saturdays at 23:30 (JST)</p>
            <p><b>Producers:</b> Aniplex, Shueisha, ADK, INSPION Edge</p>
            <p><b>Licensors:</b> None found, add some</p>
            <p><b>Studios:</b> A-1 Pictures</p>
            <p><b>Source:</b> Manga</p>
            <p><b>Genres:</b> Action, Comedy, Fantasy</p>
            <p><b>Themes:</b> Gag Humor, Parody, School</p>
            <p><b>Demographic:</b> Shounen</p>
            <p><b>Duration:</b> 23 min. per ep.</p>
            <p><b>Rating:</b> PG-13 - Teens 13 or older</p>
        </div>
        <div className='flex flex-col'>
            <h5 className='text-2xl border-b-2 border-black mb-2 tracking-wider '>Statistics</h5>
            <p><b>Score:</b> 8.461 (scored by 83,705 users) Ranked: #1482</p>
            <p><b>Popularity:</b> #503</p>
            <p><b>Members:</b> 440,804</p>
            <p><b>Favorites:</b> 7,613</p>
        </div>
    </div>
  )
}

export default LeftInfo